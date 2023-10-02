/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        muted: {
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
          blue: "rgb(var(--muted-blue) / <alpha-value>)",
          green: "rgb(var(--muted-green) / <alpha-value>)",
          red: "rgb(var(--muted-red) / <alpha-value>)",
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
        },
        accent: {
          blue: "rgb(var(--accent-blue) / <alpha-value>)",
          green: "rgb(var(--accent-green) / <alpha-value>)",
          red: "rgb(var(--accent-red) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
