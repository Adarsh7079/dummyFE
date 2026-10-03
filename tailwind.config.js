// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        headingfontsize: '28px', // Custom size
      },
      lineHeight: {
        headingheight: '34px', // Custom line-height
      },
      colors: {
        headingcolor: 'rgb(7, 7, 7)', // Custom color
        gold: '#E7D98E',
        darkgold:'#9B7132',
        white: '#ffffff',
        grey: '#222222',
        TNavGrey: '#bab8b1',
        'arrow-bg': '#fff',
        'arrow-hover': '#68edff',

      },
      fontWeight: {
        headingfontweight: 400, // Define custom weight
      },
      animation: {
        'bounce-fast': 'bounce 0.5s infinite',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #FFD700, #FFB14E)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      scale: {
        '120': '1',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '3xl-white': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
      },
      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.1em',
        '5': '0.3em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
