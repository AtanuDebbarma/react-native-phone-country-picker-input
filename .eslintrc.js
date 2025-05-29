module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  plugins: ['import', 'node', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.jpg'],
      },
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
    'import/no-unresolved': 'error',
    'node/no-missing-require': 'off',
    'prettier/prettier': 'error',
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'no-warning-comments': 'error',
      },
    },
  ],
};
