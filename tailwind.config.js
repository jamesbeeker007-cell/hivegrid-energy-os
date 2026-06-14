js


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        hive: {
          base: '#0B0F19',
          panel: '#111726',
          border: '#1E293B',
          cyan: '#00F0FF',
          amber: '#FFB800',
          slate: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
