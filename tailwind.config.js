/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6F1E7',
        sand: '#EDE5D6',
        paper: '#FFFDF8',
        line: '#E3DACB',
        ink: '#1B1A17',
        body: '#4A463E',
        muted: '#5B564C',
        clay: { DEFAULT: '#B4471F', dark: '#8E3515', light: '#E08A62', tint: '#F4E1D6' },
        forest: { DEFAULT: '#1F3A2E', deep: '#152A21', mid: '#2B4B3C', soft: '#6E8B7C', mist: '#C8D4CC' },
        gold: { DEFAULT: '#D9A441', light: '#F0D08C' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1440px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      boxShadow: {
        card: '0 1px 0 rgba(27,26,23,0.04), 0 12px 32px -12px rgba(27,26,23,0.18)',
        lift: '0 24px 60px -20px rgba(27,26,23,0.35)',
      },
    },
  },
  plugins: [],
};
