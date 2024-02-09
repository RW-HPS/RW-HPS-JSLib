import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
})

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...compat.config({
    env: {
      es2021: true,
      node: true,
      browser: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {},
  }),
  {
    ignores: ['node_modules', 'lib', 'dist'],
  },
]
