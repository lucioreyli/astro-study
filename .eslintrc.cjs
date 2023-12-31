module.exports = {
  extends: [
    "plugin:astro/recommended",
  ],
  plugins: ["prettier"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "prettier/prettier": "error"
      },
    },
  ],
}
