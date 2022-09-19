/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    screens:{
    'mobile':'370px',
    'Desktop':'1440px',

  },
  colors:{
    'white': 'hsl(0, 0%, 100%)',
     'light-gray': 'hsl(212, 45%, 89%)',
     'grayish-blue': 'hsl(220, 15%, 55%)',
     'dark-blue': 'hsl(218, 44%, 22%)',
     
   },
  
   
    extend: {
      images:{
        'card': "url('/images/bg-main-desktop.png')"
      },
     
    },
  
  },
  plugins: [],
}
