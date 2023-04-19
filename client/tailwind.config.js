module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "mobile-S": "320px",
      "mobile-M": "375px",
      "mobile-L": "425px",
      'tablet': "768px",
      'desktop': "1024px",
      "desktop-L": "1440px",
    },
    extend: {
      colors: {
        "black-primary": "#252a2b",
        "hover-a": "#e00000",
        'borderColor': "#5c5c5",
      },
      keyframes: {
        arrowRotate: {
          "0%": { transform: "rotate(-48deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation:{
        arrowRotate: 'arrowRotate 0.3s ease-in-out 1'
      },
      transitionTimingFunction:{
        'easy_': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    },
    fontFamily: {
      primary: ["Be Vietnam Pro", "sans-serif"],
    },
  },
  plugins: [],
};