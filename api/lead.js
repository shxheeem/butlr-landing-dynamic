// Vercel serverless function: POST /api/lead
//
// Accepts a JSON body from the pilot enquiry form, validates the minimum
// fields, and forwards the submission as an email via Resend. The function
// is defensive: if RESEND_API_KEY is not configured, it still logs the
// submission to the Vercel function logs and returns 200, so the form
// continues to work while the provider is being set up.
//
// Environment variables (configure in Vercel → Settings → Environment Variables):
//   RESEND_API_KEY   — required for email delivery. Without it, submissions
//                      are logged only.
//   LEAD_TO_EMAIL    — inbox that receives leads. Defaults to the founder's
//                      personal address.
//   LEAD_FROM_EMAIL  — sender address. Must be on a verified Resend domain,
//                      or use the onboarding default for immediate delivery.

const DEFAULT_TO = 'shaheem2602@gmail.com'
const DEFAULT_FROM = 'Butlr Leads <onboarding@resend.dev>'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const body = typeof req.body === 'string' ? safeJson(req.body) : (req.body || {})

  // Accept either `institution` (new form) or `uni` (legacy Modal) so the
  // endpoint is forgiving if both forms end up live.
  const name = (body.name || '').toString().trim()
  const email = (body.email || '').toString().trim()
  const institution = (body.institution || body.uni || '').toString().trim()
  const role = (body.role || '').toString().trim()
  const message = (body.message || body.notes || '').toString().trim()

  if (!name || !email) {
    return res.status(400).json({ error: 'missing_required_fields' })
  }

  if (!isEmailish(email)) {
    return res.status(400).json({ error: 'invalid_email' })
  }

  const submission = { name, email, institution, role, message, receivedAt: new Date().toISOString() }
  console.log('[lead]', JSON.stringify(submission))

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[lead] RESEND_API_KEY is not set. Submission logged only.')
    return res.status(200).json({ ok: true, delivered: false })
  }

  const toAddr = process.env.LEAD_TO_EMAIL || DEFAULT_TO
  const fromAddr = process.env.LEAD_FROM_EMAIL || DEFAULT_FROM

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddr,
        to: toAddr,
        reply_to: email,
        subject: buildSubject({ name, institution }),
        text: buildText(submission),
      }),
    })

    if (!emailRes.ok) {
      const detail = await emailRes.text()
      console.error('[lead] resend_failed', emailRes.status, detail)
      return res.status(502).json({ error: 'send_failed' })
    }

    return res.status(200).json({ ok: true, delivered: true })
  } catch (err) {
    console.error('[lead] resend_error', err)
    return res.status(502).json({ error: 'send_failed' })
  }
}

function buildSubject({ name, institution }) {
  const trailer = institution ? ` — ${institution}` : ''
  return `Pilot enquiry: ${name}${trailer}`
}

function buildText({ name, email, institution, role, message, receivedAt }) {
  const lines = [
    'New pilot enquiry from the Butlr website.',
    '',
    `Name:        ${name}`,
    `Email:       ${email}`,
    institution ? `Institution: ${institution}` : null,
    role ? `Role:        ${role}` : null,
    '',
    message ? `Message:\n${message}` : 'No message provided.',
    '',
    `Received:    ${receivedAt}`,
  ]
  return lines.filter((line) => line !== null).join('\n')
}

function isEmailish(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function safeJson(raw) {
  try {
    return JSON.parse(raw)
  } catch {
    return {}
  }
}
