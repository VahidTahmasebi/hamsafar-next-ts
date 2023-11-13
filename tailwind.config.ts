/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
const { createThemes } = require("tw-colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary colors
        "c-primary-50": "rgb(var(--primary-50) / <alpha-value>)",
        "c-primary-100": "rgb(var(--primary-100) / <alpha-value>)",
        "c-primary-200": "rgb(var(--primary-200) / <alpha-value>)",
        "c-primary-300": "rgb(var(--primary-300) / <alpha-value>)",
        "c-primary-400": "rgb(var(--primary-400) / <alpha-value>)",
        "c-primary-500": "rgb(var(--primary-500) / <alpha-value>)",
        "c-primary-600": "rgb(var(--primary-600) / <alpha-value>)",
        "c-primary-700": "rgb(var(--primary-700) / <alpha-value>)",
        "c-primary-800": "rgb(var(--primary-800) / <alpha-value>)",
        "c-primary-900": "rgb(var(--primary-900) / <alpha-value>)",
        "c-primary-950": "rgb(var(--primary-950) / <alpha-value>)",
        // orange colors
        "c-orange-50": "rgb(var(--orange-50) / <alpha-value>)",
        "c-orange-100": "rgb(var(--orange-100) / <alpha-value>)",
        "c-orange-200": "rgb(var(--orange-200) / <alpha-value>)",
        "c-orange-300": "rgb(var(--orange-300) / <alpha-value>)",
        "c-orange-400": "rgb(var(--orange-400) / <alpha-value>)",
        "c-orange-500": "rgb(var(--orange-500) / <alpha-value>)",
        "c-orange-600": "rgb(var(--orange-600) / <alpha-value>)",
        "c-orange-700": "rgb(var(--orange-700) / <alpha-value>)",
        "c-orange-800": "rgb(var(--orange-800) / <alpha-value>)",
        "c-orange-900": "rgb(var(--orange-900) / <alpha-value>)",
        "c-orange-950": "rgb(var(--orange-950) / <alpha-value>)",
        // surface colors
        "c-surface-50": "rgb(var(--surface-50) / <alpha-value>)",
        "c-surface-100": "rgb(var(--surface-100) / <alpha-value>)",
        "c-surface-200": "rgb(var(--surface-200) / <alpha-value>)",
        "c-surface-300": "rgb(var(--surface-300) / <alpha-value>)",
        "c-surface-400": "rgb(var(--surface-400) / <alpha-value>)",
        "c-surface-500": "rgb(var(--surface-500) / <alpha-value>)",
        "c-surface-600": "rgb(var(--surface-600) / <alpha-value>)",
        "c-surface-700": "rgb(var(--surface-700) / <alpha-value>)",
        "c-surface-800": "rgb(var(--surface-800) / <alpha-value>)",
        "c-surface-900": "rgb(var(--surface-900) / <alpha-value>)",
        "c-surface-950": "rgb(var(--surface-950) / <alpha-value>)",
        // main colors
        "c-main-50": "rgb(var(--main-50) / <alpha-value>)",
        "c-main-100": "rgb(var(--main-100) / <alpha-value>)",
        "c-main-200": "rgb(var(--main-200) / <alpha-value>)",
        "c-main-300": "rgb(var(--main-300) / <alpha-value>)",
        "c-main-400": "rgb(var(--main-400) / <alpha-value>)",
        "c-main-500": "rgb(var(--main-500) / <alpha-value>)",
        "c-main-600": "rgb(var(--main-600) / <alpha-value>)",
        "c-main-700": "rgb(var(--main-700) / <alpha-value>)",
        "c-main-800": "rgb(var(--main-800) / <alpha-value>)",
        "c-main-900": "rgb(var(--main-900) / <alpha-value>)",
        "c-main-950": "rgb(var(--main-950) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-vazir)", ...fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
