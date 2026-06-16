/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hive-green': '#1A3C34',     // Hive Forest Green
        'electric-amber': '#FFB020', // Electric Amber
        'circuit-white': '#FFFFFF',
        'silver-node': '#95A5A6',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
