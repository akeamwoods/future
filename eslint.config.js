import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsEslintParser,
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsEslintPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
  },
  eslintConfigPrettier,
];
