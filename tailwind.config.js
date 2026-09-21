/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 21 Sep 2026 board + working hexes pending review
        'hive-indigo': '#110066',
        'hive-light': '#F7F8FC',
        'hive-blue': '#5B4EFF',
        'hive-cyan': '#00FFFF',
        'hive-yellow': '#FFFF00',
        'hive-copper': '#C45A24',
        'hive-white': '#FFFFFF',
        'hive-base': '#110066',
        'hive-panel': '#1A0A4A',
        'hive-green': '#00D4A4',
        'hive-gray': '#6B7280',
        'hive-slate': '#4B5568',
        'hive-teal': '#00FFFF',
        'hive-emerald': '#00D4A4',
        'hive-amber': '#FFFF00',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
