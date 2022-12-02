/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "blue":{
        DEFAULT:"#304ffe",
        dark:"#22222f",
      },
      "yellow":{
        DEFAULT:"#ffd740",
      },
      "red":{
        DEFAULT:"#e91e63",
      },
      "gray":{
        DEFAULT:"#000a4a6b",
      },
    }
  },
  plugins: [],
}