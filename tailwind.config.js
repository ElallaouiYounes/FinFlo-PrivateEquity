/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF7F50',
        creamy: '#FFF5CF',
        orangy: '#FF671B',
        hardCreamy: '#f1e7c3'
      },
      fontFamily: {
        oswald: ['Oswald', 'system-ui'],
        anton: ['Anton', 'system-ui'],
        mogra: ['Mogra', 'system-ui'],
      },
    },
  },
  plugins: [],
}
