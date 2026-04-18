/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        paper: 'var(--paper)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        lilac: 'var(--lilac)',
        mute: 'var(--mute)',
        hair: 'var(--hair)',
        'on-ink': 'var(--on-ink)',
        'on-ink-mute': 'var(--on-ink-mute)',
        'on-ink-hair': 'var(--on-ink-hair)',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        display: '-0.035em',
        tag: '0.08em',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15,17,21,0.06), 0 2px 6px rgba(15,17,21,0.04)',
        card: '0 14px 40px rgba(15,17,21,0.08)',
        glow: '0 30px 80px -20px rgba(255,91,46,0.45)',
        hard: '0 24px 60px rgba(15,17,21,0.18)',
      },
      borderRadius: {
        '4xl': '2.25rem',
        '5xl': '2.75rem',
      },
      animation: {
        'marquee-x': 'marquee-x 40s linear infinite',
        'marquee-slow': 'marquee-x 80s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        spinSlow: 'spin 18s linear infinite',
        pulseDot: 'pulseDot 1.8s ease-in-out infinite',
      },
      keyframes: {
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(255,91,46,0.55)' },
          '50%': { boxShadow: '0 0 0 8px rgba(255,91,46,0)' },
        },
      },
    },
  },
  plugins: [],
}
