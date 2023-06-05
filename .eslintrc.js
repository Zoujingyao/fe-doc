module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  settings: {
    react: {
      version: '17.0.0',
    },
  },
  rules: {
    semi: [2, 'always'],
    quotes: [1, 'single'],
    'object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/no-unused-vars': [0],
    '@typescript-eslint/consistent-type-imports': [0],
    'no-param-reassign': 0,
  },
};
