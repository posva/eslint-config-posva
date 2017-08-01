module.exports = {
  extends: [
    'eslint:recommended',
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
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
  },
}
