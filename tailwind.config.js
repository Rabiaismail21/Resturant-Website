/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-img\(ella-olsson\).jpg')"
    },
    colors :{
      'lightGreen' : '#6EC440',
    },
    fontFamily: {
        headingText: ['Belanosima', 'sans-serif'],
        bodyText: ['Nunito', 'sans-serif'],
    },
    fontWeight:{
      Nunito200: 200,
      Nunito300: 300,
    },
    height:{
      '70vh': '70vh',
      '80vh': '80vh',
      '50vh': '50vh',
    }
  },
  plugins: [],
}

}