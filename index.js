module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'vue/require-v-for-key': 0,
    'import/no-webpack-loader-syntax': 0
  }
}
