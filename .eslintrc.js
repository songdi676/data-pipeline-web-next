module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',


    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    'standard'
  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',
    'quasar'
    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    __QUASAR_SSR__: true,
    __QUASAR_SSR_SERVER__: true,
    __QUASAR_SSR_CLIENT__: true,
    __QUASAR_SSR_PWA__: true,
    Prism: true
  },

  // add your custom rules here
  rules: {
    'brace-style': [ 2, 'stroustrup', { 'allowSingleLine': true } ],
    'prefer-const': 2,
    'prefer-promise-reject-errors': 'off',
    'multiline-ternary': 'off',
    'array-bracket-spacing': [ 'error', 'always', { singleValue: false } ],
    'computed-property-spacing': [ 'error', 'always' ],
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'off',
    'generator-star-spacing': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'import/export': 'off',
    'import/first': 'off',
    'import/no-absolute-path': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-default': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',

    'quasar/check-valid-props': 'warn',

    'vue/no-mutating-props': 'off',
    'vue/no-v-model-argument': 'off'
  }
}
