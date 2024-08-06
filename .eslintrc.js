module.exports = {
  // Define the environment settings
  env: {
    browser: true, // for browser globals like window and document
    es2021: true, // for ES2021 globals
  },
  // Specify the style guide or extend configurations
  extends: [
    "eslint:recommended", // Use ESLint's recommended rules
    "plugin:prettier/recommended", // Integrates Prettier with ESLint
    "airbnb-base",
  ],
  // Define parser options
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module", // Allow import/export syntax
  },
  // Define global variables
  // Custom rules
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    "no-unused-vars": "warn", // Warn about unused variables
    eqeqeq: ["error", "always"], // Enforce the use of === and !==
    curly: ["error", "all"], // Enforce consistent use of curly braces
    semi: ["error", "always"], // Require semicolons
    quotes: ["error", "single"], // Enforce single quotes for strings
    indent: ["error", 2], // Enforce 2-space indentation
  },
  plugins: ["prettier"],
};
