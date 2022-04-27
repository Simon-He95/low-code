const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  env: {
    es6: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest"
  },
  overrides: [
    {
      file: ["*.vue", "*.ts", "*.tsx"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      extends: ['plugin:vue/vue3-recommended'],
    }
  ]
})