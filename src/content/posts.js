/**
 * Blog posts.
 * For now this is a plain JS array. When we're ready to ship properly
 * we'll swap this for MDX files in /content/posts/*.mdx (see README).
 *
 * Each post: { slug, kind, title, deck, date, excerpt, body, status }
 *   status: 'published' | 'upcoming'
 *
 * Honest stubs: unfinished posts are listed but not clickable and show a
 * "not published yet" state when accessed directly.
 */

export const posts = [
  {
    slug: 'what-we-mean-by-campus-life',
    kind: 'Founder',
    title: 'What we mean by "campus life".',
    deck: 'A note on why Butlr exists, why the fragmentation of campus software is a student problem rather than a university one, and why we started with student unions rather than institutions.',
    date: '2025-11-02',
    excerpt: 'Campus life is not a product category. It is the fifteen places that already exist, and none of them talking to each other.',
    status: 'published',
    body: [
      {
        type: 'p',
        text: 'The students I speak to are rarely short of digital tools for university life. If anything, they are buried in them. A timetable app. A separate learning platform. A student union site with its own login. A wellbeing portal sitting behind yet another. A WhatsApp for each society they belong to, an email inbox filling with newsletters they never quite remember subscribing to, and an Instagram that carries more of the week\'s plans than any official channel does.',
      },
      {
        type: 'p',
        text: 'That is the problem worth naming, and it is not really a software problem. It is a connective-tissue problem. Each of those tools solves its slice of campus life well enough on its own terms. The gap is that they do not know about each other, which means the student is left doing the integration work by hand, usually poorly, usually at the cost of something they would have wanted to show up to.',
      },
      {
        type: 'quote',
        text: 'Campus life is not a product category. It is the fifteen places that already exist, and none of them talking to each other.',
      },
      {
        type: 'p',
        text: 'Butlr is a narrow attempt to close that gap. Not to replace the tools that already work, and not to argue that campus needs yet another login, but to put a single surface in front of the things a student already does: see what their society is running, read and respond to what the union is putting out, find a wellbeing slot when the moment calls for one. The goal is not a more ambitious platform. The goal is fewer places to look.',
      },
      {
        type: 'h2',
        text: 'Why we started with student unions',
      },
      {
        type: 'p',
        text: 'The student union is where most campus energy already sits. Societies run through it, events and campaigns come out of it, and its elected officers are the closest thing the institution has to a democratic voice for students. Building alongside the SU first puts the product where the activity already happens, rather than trying to manufacture an audience from the university side and hope it catches on.',
      },
      {
        type: 'p',
        text: 'The order also matters for what follows. The SU layer gives students something worth opening in the first place. Once that is doing its job, the university layer of wellbeing signposting, engagement insight, and support services has somewhere real to live, rather than being a tab in a portal students visit twice a term because they have to. It is the difference between an app students keep and a link they click once.',
      },
      {
        type: 'p',
        text: 'If you help run a union and the above sounds like a conversation worth having, we are looking for a handful more pilots to start alongside the current one. A short introduction is more useful than a pitch deck, and we will come to you.',
      },
    ],
  },
  {
    slug: 'pilot-week-four',
    kind: 'Field notes',
    title: 'Four weeks into the pilot.',
    deck: 'What we got right, what surprised us, and the one thing we\'re rebuilding.',
    date: '2025-12-15',
    excerpt: 'Four weeks in. We got the feed right. We got the societies wrong. Here\'s what we learned.',
    status: 'upcoming',
  },
  {
    slug: 'handover-is-the-feature',
    kind: 'Field notes',
    title: 'Handover is the feature.',
    deck: 'Why the most important thing your SU software can do is survive August.',
    date: '2026-01-20',
    excerpt: 'The reason institutional knowledge evaporates every year isn\'t a people problem. It\'s a software problem.',
    status: 'upcoming',
  },
  {
    slug: 'product-update-q1',
    kind: 'Product update',
    title: 'What we shipped this quarter.',
    deck: 'Events v2, a real polls engine, and a first pass at society pages.',
    date: '2026-03-01',
    excerpt: 'A quick round-up of what landed this quarter, and what we\'re working on next.',
    status: 'upcoming',
  },
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)
