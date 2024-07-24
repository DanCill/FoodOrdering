/** @type {import('tailwindcss').Config} */

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: '#000',
        background: '#fff',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
      },
    },
  },
  plugins: [],
}

