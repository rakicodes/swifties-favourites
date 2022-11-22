/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/partials/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ {
      mytheme: {
          
        "primary": "#59698e",
                 
        "secondary": "#6d89a4",
                 
        "accent": "#594856",
                 
        "neutral": "#9a847b",
                 
        "base-100": "#ebe7e4",
                 
        "info": "#8CCAC1",
                 
        "success": "#9CB686",
                 
        "warning": "#be816b",
                 
        "error": "#9d353d",
      },
    } ],
  },
}
