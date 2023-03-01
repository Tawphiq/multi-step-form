/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-sidebar':"url('/src/images/bg-sidebar-desktop.svg')",
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
