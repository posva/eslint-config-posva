module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  rules: {
    // eslint
    'comma-dangle': ['error', 'always-multiline'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'quote-props': ['error', 'as-needed'],
    'no-return-assign': 0,

    // vue
    'vue/require-v-for-key': 0,

    // import
    'import/no-webpack-loader-syntax': 0,
    'import/default': 1,
    'import/namespace': ['error', {
      allowComputed: true,
    }],
    'import/no-anonymous-default-export': ['error', {
      allowArray: true,
      allowArrowFunction: true,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: true,
    }],
    'import/extensions': ['error', 'never', {
      js: 'never',
      jsx: 'never',
      json: 'never',
      vue: 'never',
    }],
  },
}
