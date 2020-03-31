# eslint-config-posva

[![CircleCI](https://img.shields.io/circleci/project/github/posva/eslint-config-posva.svg)](https://circleci.com/gh/posva/eslint-config-posva) [![npm](https://img.shields.io/npm/v/eslint-config-posva.svg)](https://www.npmjs.com/package/eslint-config-posva)

> my reasonable approach to javascript

## Usage

```bash
npm i -D eslint-config-posva
```

Add it to your `.eslintrc.js` file:

```json
{
  "extends": ["posva"]
}
```

Of course, feel free to fork and change 🙂

## Features

- Based on [eslint-config-standard](https://github.com/standard/eslint-config-standard) and `eslint:recommended`
- [babel-eslint](https://github.com/babel/babel-eslint) for parsing
- Plugins
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/) to better control `import`/`export` statements
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/) for Vue

## License

[MIT](http://opensource.org/licenses/MIT)
