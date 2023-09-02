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
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
}
