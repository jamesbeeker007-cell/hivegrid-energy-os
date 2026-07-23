/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official HiveGrid Energy Brand Palette (July 2026)
        'hive-base': '#0a0f14',      // Deep Navy
        'hive-panel': '#121a24',     // Slightly lighter navy for cards
        'hive-cyan': '#00FFFF',      // Electric Cyan (primary accent)
        'hive-teal': '#00E5E5',      // Soft teal variant
        'hive-emerald': '#34F0A6',
        'hive-yellow': '#F4E05B',
        'hive-amber': '#FFBB33',
        'hive-orange': '#FF8A4D',
        'hive-slate': '#A0AEC0',     // Cool gray-ish for secondary text
        'hive-gray': '#808080',      // Official Cool Gray
        'hive-white': '#FFFFFF',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
