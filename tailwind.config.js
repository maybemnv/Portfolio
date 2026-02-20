/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        accent: '#3b82f6',
        'accent-dim': 'rgba(59,130,246,0.1)',
        border: '#333',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0a0',
        dither: '#222',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        pulse: 'pulse 2s infinite',
        scan: 'scan 3s linear infinite',
        float: 'float 3s ease-in-out infinite',
        'fill-bar': 'fillBar 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { top: '0', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fillBar: {
          from: { width: '0' },
        },
      },
    },
  },
  plugins: [],
};