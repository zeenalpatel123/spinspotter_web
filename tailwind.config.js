/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '450px',
      // => @media (min-width: 450px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        '12' : ['12px','20px'],
        '14' : ['14px','22px'], 
        '16' : ['16px','22px'], 
        '18' : ['18px','26px'], 
        '20' : ['20px','28px'],
        '22' : ['22px','30px'],
        '24' : ['24px','30px'], 
        '26' : ['26px','34px'],
        '28' : ['28px','36px'], 
        '30' : ['30px','48px'],
        '34' : ['34px','42px'],
        '32' : ['32px','40px'],
        '36' : ['36px','44px'],
        '38' : ['38px','46px'],
        '40' : ['40px','58px'],
        '42' : ['42px','50px'],
        '48' : ['48px','56px'],
        '52' : ['52px','60px'],
        '64' : ['64px','72px'],
        '68' : ['68px','100px'],
        '80' : ['80px','110px'],
        '128' : ['128px','100px']
      },
      colors:{
        'primary':'#00CF77',
        'secondary':'#D72028',
        'dark' : '#141414',
        'dark2' :'#242424',
        'g1' :'#717171',
        'g2' : '#BEBEBE',
        'g3' : '#282828',
        'g4' : '#484848',
        'g5' : '#353535',
        'g6' : '#D9D9D9'
      },
      fontFamily: {
        'oswald' : ['Oswald','serif'],
      },
     
    },
  },
  plugins: [],
}

