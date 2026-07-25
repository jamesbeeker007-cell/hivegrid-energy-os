/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official HiveGrid Energy Brand Palette – Option 2 (July 2026)
        'hive-base': '#0A0F14',       // Deep Navy (primary background)
        'hive-panel': '#121A24',      // Slightly lighter navy for cards
        'hive-blue': '#0088CC',       // HiveGrid Blue (main accent / CTAs)
        'hive-cyan': '#00D6E3',       // Energy Cyan (secondary accent)
        'hive-green': '#34E07A',      // Electric Green (savings / success)
        'hive-gray': '#808080',       // Cool Gray
        'hive-slate': '#A0AEC0',      // Lighter secondary text
        'hive-white': '#FFFFFF',
        // Keep a couple of legacy aliases so existing code doesn't break
        'hive-teal': '#00D6E3',
        'hive-emerald': '#34E07A',
        'hive-amber': '#FFBB33',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
