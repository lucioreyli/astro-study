/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        gray: "var(--gray)",
        border: "var(--border)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        muted: {
          foreground: "var(--muted-foreground)",
          DEFAULT: "var(--muted)",
        },
        accent: {
          blue: "var(--accent-blue)",
        },
      },
    },
  },
  plugins: [],
};
