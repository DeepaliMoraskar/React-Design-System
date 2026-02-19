import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: true
});

export default [
  // Ignore cache/build folders
  {
  // --------------------------------------------------
  // Global ignores (monorepo-safe)
  // --------------------------------------------------
    ignores: [
      // Nx
      '.nx/**',
      'nx-report/**',

      // Build outputs
      'dist/**',
      'build/**',
      'lib/**',
      'coverage/**',

      // Node
      'node_modules/**',
      'packages/*/node_modules/**',
      'playgrounds/*/node_modules/**',

      // Package-specific outputs
      'packages/**/dist/**',
      'packages/**/build/**',
      'packages/**/lib/**',
      'packages/**/scripts/**',


      // Playground / dev server
      'playgrounds/**/.cache/**',
      'playgrounds/**/dist/**',
      'playgrounds/**/build/**',

      // Scripts & tooling
      'scripts/**',
      '**/*.config.js',
      '**/.storybook/main.ts',
      '**/*.config.cjs',
      '**/*.config.mjs',

      // Generated files
      '**/*.d.ts',
      '**/*.map',

      // Logs
      '*.log',
      '**/*.log',

      // OS / Editor junk
      '.DS_Store',
      'Thumbs.db',
      '.vscode/**',
      '.idea/**',

      // Git / Husky
      '.husky/**',

      // Temporary files
      '*.tmp',
      '*.swp',
      '*.swo'
    ]
  },


  // Recommended configs
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:react-hooks/recommended'),

  // Project-specific rules
  {
    files: ['packages/**/src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    "settings": {
      "react": {
        "createClass": "createReactClass",
        "pragma": "React",
        "fragment": "Fragment",
        "version": "detect",          // ← IMPORTANT
        "defaultVersion": "",
        "flowVersion": "0.53"
      }
    },
    rules: {
      'react/display-name': 'off',
      'react/no-unknown-property': 'off',
      'react/no-direct-mutation-state': 'off',
      'react/no-render-return-value': 'off',
      'react/no-string-refs': 'off',
      'react/prop-types': 'off',
      'react/require-render-return': 'off',
      'react/react-in-jsx-scope': 'off'
    },
  },
];