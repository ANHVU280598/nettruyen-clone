/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '430px',   // Small screens (mobile)
        'md': '768px',   // Medium screens (tablet)
        'lg': '1024px',  // Large screens (laptop/desktop)
        'xl': '1280px',  // Extra large screens (large desktop)
        '2xl': '1536px', // 2X large screens (very large desktop)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateRows: {
        '13': 'repeat(13, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
};