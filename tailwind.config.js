/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      maxWidth:{
        custom:'60rem',
      },
      spacing:{
          76: '19rem',
      },
    },
  },
  plugins: [],
}

