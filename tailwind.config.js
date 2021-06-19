const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 0px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 0px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 0px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 0px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 0px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '200%': '200%',
    },
    extend: {
      colors: {
        partner: "#F6F8FA",
        teal: colors.teal,
        orange: colors.orange,
        amber: colors.amber,
        cyan: colors.cyan,
        user: "#F7F8FC",
        "user-100": "#F2F3F7",
      },
      fontSize: {
        'xxs': '.75rem',
        'xs': '13px',
      },
      backgroundColor: {
        "user-sidebar": "#3E6EE1"
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        }
      }
    },
  },
  variants: {
    extend: {
      grayscale: ['hover', 'focus'],
      margin: ['last'],
      padding: ['last'],
      borderRadius: ['hover'],
      textColor: ['active'],
      backgroundColor: ['active', 'even'],
      animation: ['group-hover'],
      borderWidth: ['hover']
    },
  },
  plugins: [],
}
