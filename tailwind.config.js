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
        clay: { DEFAULT: '#B4471F', dark: '#8E3515', light: '#E08A62' },
        forest: { DEFAULT: '#1F3A2E', mid: '#2B4B3C', soft: '#6E8B7C', mist: '#C8D4CC' },
        gold: '#D9A441',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
