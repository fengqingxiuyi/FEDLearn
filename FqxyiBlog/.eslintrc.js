module.exports = {
  extends: ['taro'],
  rules: {
    'no-unused-vars': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', 'ts'] },
    ],
    'import/prefer-default-export': 0,
    // 强制两个空格缩进
    'indent': ['error', 2],
    'quotes': ['error', 'single', { "allowTemplateLiterals": true }],
    'react/no-string-refs': 0,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './tsconfig.json',
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
    node: true,
  },
}
