const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      warna1: {
        // light: "#b3bcf5",
        DEFAULT: "#276678",
        // dark: "#202e78",
      },
      warna2: {
        // light: "#b3bcf5",
        DEFAULT: "#1687A7",
        // dark: "#202e78",
      },
      warna3: {
        // light: "#b3bcf5",
        DEFAULT: "#D3E0EA",
        // dark: "#202e78",
      },
      warna4: {
        // light: "#b3bcf5",
        DEFAULT: "#F6F5F5",
        // dark: "#202e78",
      },
    },
    fontFamily: {
      Allerta: ["Allerta", "system-ui"],
      BalooChettan2: ['"Baloo Chettan 2"', "system-ui"],
      DMSans: ['"DM Sans"', "ui-sans-serif", "system-ui"],
      Poppins: ["Poppins", "system-ui"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/images/header.png)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
