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
        medium: 'MadeOuterMedium'
      },
      colors: {
        primary: '#FAFF00',
        222: '#222'
      },
      margin: {
        15: '3.75rem',
        65: '4.0625rem',
        120: '7.5rem',
        142: '8.875rem',
        179: '11.1875rem',
        228: '14.25rem',
        241: '15.0625rem',
        250: '15.625rem',
        259: '16.1875rem',
        262: '16.375rem',
        420: '26.25rem'
      },
      padding: {
        18: '18px',
        220: '13.75rem',
        320: '20rem'
      },
      width: {
        174: '174px',
        200: '12.5rem'
      },
      gap: {
        15: '3.75rem',
        68: '4.25rem',
        75: '4.6875rem',
        216: '13.5rem'
      },
      borderRadius: {
        20: '20px'
      }
    }
  },
  plugins: []
}
