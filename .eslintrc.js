module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', /* typescript-eslint */
  plugins: [
    // 'react',           /* Do this when needed */
    '@typescript-eslint', /* typescript-eslint */
    'prettier',           /* eslint-plugin-prettier */
  ],
  extends: [
    'eslint:recommended',
    // 'pretteir'                            /* Not needed since `plugin:prettier/recommended` extends it */
    'plugin:prettier/recommended',           /* eslint-plugin-prettier */
    // 'plugin:react/recommended',           /* Do this when needed */
    // 'plugin:@typescript-eslint/eslint-recommended', /* !!! */
    'plugin:@typescript-eslint/recommended', /* typescript-eslint */
    'prettier',
    'prettier/@typescript-eslint',           /* As `typescript-eslint` recommends */
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,          /* Do this when needed */
      // arrowFunctions: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    // --------------------------------------------------------
    // 'prettier/prettier': 'error',     /* Not needed since `plugin:prettier/recommended` extends it */
    // 'arrow-body-style': 'off',        /* Not needed since `plugin:prettier/recommended` extends it */
    // 'prefer-arrow-callback': 'off',   /* Not needed since `plugin:prettier/recommended` extends it */
    // --------------------------------------------------------
    // 'comma-dangle': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  // Could be useful for React:
  // --------------------------------------------------------
  // settings: {
  //   react: {
  //     version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
  //   },
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //       paths: ['./src'],
  //     },
  //   },
  // },
  // --------------------------------------------------------
};
