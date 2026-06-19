/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hive-base': '#0A0F1C',
        'hive-panel': '#121A2E',
        'hive-cyan': '#22F0FF',
        'hive-teal': '#14E8C9',
        'hive-emerald': '#34F0A6',
        'hive-yellow': '#F4E05B',
        'hive-amber': '#FFBB33',
        'hive-orange': '#FF8A4D',
        'hive-slate': '#A3BFFA',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
