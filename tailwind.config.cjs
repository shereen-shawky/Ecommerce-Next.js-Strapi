// tailwind.config.cjs
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        color:{
            primary: "#3674B5",
            
        }
    },
  },
  plugins: [],
}
