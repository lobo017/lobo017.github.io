import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#070b14',
        foreground: '#e5e7eb',
        card: '#111827',
        accent: '#06b6d4',
        muted: '#94a3b8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(6,182,212,.4), 0 0 32px rgba(6,182,212,.2)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
