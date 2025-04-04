/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:'#FF0052',
        secondary:"#333333",
        gray:"#CCCCCC"
      },
      fontFamily:{
        UbuntuRegular:['Ubuntu-Regular', 'sans-serif'],
        UbuntuBold:['Ubuntu-Bold', 'sans-serif'],
        UbuntuLight:['Ubuntu-Light', 'sans-serif'],
        UbuntuMedium:['Ubuntu-Medium', 'sans-serif'],
        UbuntuItalic:['Ubuntu-Italic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}