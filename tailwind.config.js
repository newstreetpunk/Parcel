const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
			center: true,
			padding: '1.25rem',
		},
    extend: {},
  },
  plugins: [],
}

