/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      listStyleImage: {
        koompi: 'url("./public/images/KoompiBlackLogo.png")',
      },
    },
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        // "2xl": "1496px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        koompi: {
          primary: "#011228",
          secondary: "#38A7C8",
          accent: "#8d47ff",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#afcee4",
          success: "#30d5a3",
          warning: "#b57808",
          error: "#F16179",
        },
      },
    ],
  },
};
