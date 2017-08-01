module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    'vue/require-v-for-key': 0,
    'import/no-webpack-loader-syntax': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'no-return-await': 2,
    'quote-props': ['error', 'as-needed'],
    'no-var': 2,
  },
}
