/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'IBM Plex Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'cyber-blue': '#00d4ff',
        'cyber-green': '#39ff14',
        'dark-bg': '#0a0a0b',
        'dark-card': '#1a1a1b',
        'dark-border': '#333335',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
        'text-accent': '#00d4ff',
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00d4ff' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 'text-shadow': '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' },
          '100%': { 'text-shadow': '0 0 20px #00d4ff, 0 0 30px #00d4ff, 0 0 40px #00d4ff' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};