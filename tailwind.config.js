/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Bruno Ace SC', 'cursive'],
        primary: 'MadeOuter',
        light: 'MadeOuterLight',
        medium: 'MadeOuterMedium',
        bold: 'MadeOuterBold'
      },
      colors: {
        primary: '#FAFF00',
        hover: '#FDFF8C',
        222: '#222',
        txtHover: '#111111'
      },
      margin: {
        15: '3.75rem',
        27: '1.6875rem',
        12: '.75rem',
        34: '2.125rem',
        23: '1.4375rem',
        30: '1.875rem',
        46: '2.875rem',
        47: '2.9375rem',
        65: '4.0625rem',
        70: '4.375rem',
        84: '5.25rem',
        90: '5.625rem',
        100: '6.25rem',
        110: '110px',
        120: '7.5rem',
        142: '8.875rem',
        179: '11.1875rem',
        180: '11.25rem',
        200: '12.5rem',
        220: '13.75rem',
        228: '14.25rem',
        241: '15.0625rem',
        250: '15.625rem',
        259: '16.1875rem',
        262: '16.375rem',
        420: '26.25rem'
      },
      padding: {
        18: '1.125rem',
        22: '1.375rem',
        29: '1.8125rem',
        38: '2.375rem',
        37: '2.3125rem',
        40: '2.5rem',
        50: '3.125rem',
        54: '3.375rem',
        60: '3.75rem',
        90: '5.625rem',
        120: '7.5rem',
        220: '13.75rem',
        320: '20rem'
      },
      width: {
        174: '10.875rem',
        200: '12.5rem',
        pass: '17.1875rem',
        room: '17.4375rem',
        staff: '17.1875rem',
        454: '28.375rem',
        570: '35.625rem'
      },
      height: {
        pass: '24.8125rem',
        167: '10.4375rem',
        220: '13.75rem'
      },
      gap: {
        4.5: '1.125rem',
        15: '3.75rem',
        30: '1.875rem',
        34: '2.125rem',
        58: '3.625rem',
        68: '4.25rem',
        75: '4.6875rem',
        82: '5.125rem',
        180: '11.25rem',
        216: '13.5rem'
      },
      borderRadius: {
        20: '20px',
        30: '30px'
      },
      fontSize: {
        28: '1.75rem',
        40: '2.5rem',
        64: '4rem'
      },
      borderWidth: {
        1: '.0625rem'
      },
      screens: {
        sm: '46.5rem'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
