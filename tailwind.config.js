module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: [       {
      mytheme: {
      
"primary": "#729ea1",
      
"secondary": "#b5bd89",
      
"accent": "#AA78A6",
      
"neutral": "#DFBE99",
      
"base-100": "#0e0f19",
      
"info": "#73D0ED", 
      
"success": "#178255",
      
"warning": "#BA3F1d",
      
"error": "#EA3546",
      },
    },]
  }

}
