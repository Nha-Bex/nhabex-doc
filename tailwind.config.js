/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        xs: "450px",
        sm: "575px",
        md: "768px",
        lg: "1050px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1920px",
        "4k": "2160px"
      },
      extend: {
        colors: {
          current: "currentColor",
          transparent: "transparent",
          white: "#FFFFFF",
          black: "#000",
          dark: "#000",
          primary: "#3CBDA1",
          yellow: "#FBB040",
          "body-color": "#788293",
          "body-color-dark": "#959CB1",
          "gray-dark": "#1E232E",
          "gray-light": "#F0F2F9",
          stroke: "#E3E8EF",
          "stroke-dark": "#353943",
          "bg-color-dark": "#171C28",
          "body-text": "#FFFF",
          "light": "#FFDCDC"
        },
        fontSize: {
          'title-lg': ['39px', '49px'], 
          'title-md': ['30px', '36px'],
          'title-sm': ['24px', '30px'],
        },
        boxShadow: {
          signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
          one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
          two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
          three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
          sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
          "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
          "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
          submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
          "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
          btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
          "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
          "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
        },
        dropShadow: {
          three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
        }
      },
    },
    plugins: [require("tailwindcss-animate")],
  };