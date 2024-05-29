/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        rotate: {
          '270': '270deg',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
  darkMode: 'selector',
}

