import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        podbay: {
          bg: '#0F1117',
          sidebar: '#0B0D12',
          surface: '#1C1F26',
          border: '#2D313A',
          primary: '#3B82F6',
          text: '#E2E8F0',
          subtext: '#94A3B8',
        },
      },
    },
  },
  plugins: [],
};
export default config;
