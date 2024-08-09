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

    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '576px'},
      // => @media (max-width: 639px) { ... }

      'vs': {'max': '400px'},


      'min-2xl': {'min': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'min-xl': {'min': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'min-lg': {'min': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'min-md': {'min': '767px'},
      // => @media (max-width: 767px) { ... }

      'min-sm': {'min': '576px'},
      // => @media (max-width: 639px) { ... }

      'min-vs': {'min': '400px'},

    }

  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
  darkMode: 'selector',
}

