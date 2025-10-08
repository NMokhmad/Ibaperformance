import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  { 
    ignores: [
      'dist', 
      'build', 
      'node_modules', 
      '*.config.js',
      'scripts/**/*.js' // Ignore les scripts
    ] 
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // Ajoute les globals Node.js
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { 
      react: { version: '18.3' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Imports
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // React
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/no-unescaped-entities': 'off', // Désactive l'erreur des apostrophes
      'react/no-unknown-property': 'off', // Pour les data-* attributes custom
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true, allowExportNames: ['buttonVariants', 'badgeVariants', 'navigationMenuTriggerStyle', 'toggleVariants'] },
      ],

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Best Practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'warn',
      'no-duplicate-imports': 'error',

      // Code Quality
      'no-empty': 'warn',
      'no-empty-function': 'warn',
      'no-unused-expressions': 'warn',
      'no-useless-return': 'warn',
      'no-unreachable': 'error',
      
      // Accessibilité (plus permissif pour shadcn/ui)
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'off', // Désactive pour les composants Link
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/iframe-has-title': 'warn',
      'jsx-a11y/heading-has-content': 'off', // Pour les composants UI
      'jsx-a11y/anchor-has-content': 'off', // Pour les composants UI

      // Style
      'quotes': ['warn', 'double', { avoidEscape: true }],
      'semi': ['warn', 'always'],
      'comma-dangle': ['warn', 'always-multiline'],
      'object-curly-spacing': ['warn', 'always'],
      'array-bracket-spacing': ['warn', 'never'],
    },
  },
]