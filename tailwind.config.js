/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-hero": "url('./images/desktop/image-header.jpg')",
        "mobile-hero": "url('./images/mobile/image-header.jpg')",
      },
      backgroundPosition: {
        adjust: "50% 100%",
      },
      objectPosition: {
        adjust: "50% 100%",
        cherry: "50% 0%",
        "cherry-md": "50% 30%",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
      colors: {
        "white-dark": "rgba(255,255,255,0.28)",
        "white-bg": "rgba(255,255,255,0.28)",
        "black-h1": "#24303E",
        "gray-text": "#808397",
        "green-bg": "#90D4C6",
        "green-dark": "#2C7566",
        pink: "#FE7766",
        "pink-light": "rgba(254, 119, 102, 0.35)",
        "yellow-light": "rgba(250, 212, 0, 0.35)",
        yellow: "rgba(250, 212, 0, 1)",
      },
    },
    screens: {
      sm: "480px",
      cherry: "518px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
}
