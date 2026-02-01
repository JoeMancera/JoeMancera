/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#ccff00',
          pink: '#ff00ff',
          cyan: '#00ffff',
          orange: '#ff6b35',
          purple: '#9d4edd',
        },
        dark: {
          bg: '#050505',
          panel: '#0a0a0a',
        },
      },
      fontFamily: {
        display: ["'Syne'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 3s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 3s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'pulse-border': 'pulse-border 2s ease-in-out infinite',
        'border-rotate': 'border-rotate 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'neon-flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.8' },
        },
        'border-rotate': {
          from: { filter: 'hue-rotate(0deg)' },
          to: { filter: 'hue-rotate(360deg)' },
        },
        'pulse-border': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
