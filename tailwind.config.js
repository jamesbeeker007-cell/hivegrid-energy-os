/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hive-base': '#0F172A',
        'hive-panel': '#1E2937',
        'hive-cyan': '#22D3EE',
        'hive-teal': '#14B8A6',
        'hive-emerald': '#34D399',
        'hive-yellow': '#FACC15',
        'hive-amber': '#F59E0B',
        'hive-orange': '#FB923C',
        'hive-slate': '#94A3B8',
      },     fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
