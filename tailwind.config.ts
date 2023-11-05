/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // #16a34a
        // #1f2937
        // #ecfeff
        // CSS LIGHT THEME PRIMARY COLORS
        "c-primary-100": "#16a34a",
        "c-primary-200": "#42ae5e",
        "c-primary-300": "#5fb871",
        "c-primary-400": "#78c385",
        "c-primary-500": "#8fcd98",
        "c-primary-600": "#a6d7ac",
        // CSS LIGHT THEME ORANGE COLORS
        "c-orange-100": "#c2410c",
        "c-orange-200": "#cd582a",
        "c-orange-300": "#d76e43",
        "c-orange-400": "#e0835c",
        "c-orange-500": "#e89776",
        "c-orange-600": "#efac90",
        // CSS LIGHT THEME SURFACE COLORS
        "c-surface-100": "#f0fdf4",
        "c-surface-200": "#f2fdf5",
        "c-surface-300": "#f3fdf6",
        "c-surface-400": "#f5fef8",
        "c-surface-500": "#f7fef9",
        "c-surface-600": "#f8fefa",
        // CSS LIGHT THEME MIXED SURFACE COLORS
        "c-surface-mixed-100": "#def4e2",
        "c-surface-mixed-200": "#e2f5e5",
        "c-surface-mixed-300": "#e5f6e8",
        "c-surface-mixed-400": "#e9f8ec",
        "c-surface-mixed-500": "#edf9ef",
        "c-surface-mixed-600": "#f0faf2",

        //  CSS DARK THEME PRIMARY COLORS
        "c-primary-dark-100": "#16a34a",
        "c-primary-dark-200": "#42ae5e",
        "c-primary-dark-300": "#5fb871",
        "c-primary-dark-400": "#78c385",
        "c-primary-dark-500": "#8fcd98",
        "c-primary-dark-600": "#a6d7ac",
        // CSS DARK THEME SURFACE COLORS
        "c-surface-dark-100": "#1f2937",
        "c-surface-dark-200": "#343d4a",
        "c-surface-dark-300": "#4b535f",
        "c-surface-dark-400": "#626974",
        "c-surface-dark-500": "#7b808a",
        "c-surface-dark-600": "#9498a0",
        // CSS DARK THEME MIXED SURFACE COLORS
        "c-surface-mixed-dark-100": "#22343a",
        "c-surface-mixed-dark-200": "#37484d",
        "c-surface-mixed-dark-300": "#4e5c61",
        "c-surface-mixed-dark-400": "#657176",
        "c-surface-mixed-dark-500": "#7d888b",
        "c-surface-mixed-dark-600": "#969ea1",
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
