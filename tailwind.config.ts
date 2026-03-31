import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(125, 211, 252, 0.25), 0 20px 50px rgba(56, 189, 248, 0.12)',
      },
      colors: {
        surface: '#0f172a',
        surface2: '#111827',
      },
    },
  },
  plugins: [],
};

export default config;
