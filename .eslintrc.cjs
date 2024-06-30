module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        /* common */
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-unused-vars': 'warn',
        'comma-dangle': ['error', 'never'],
        'arrow-body-style': 'error',
        'global-require': 'off',
        'max-len': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-new': 'off',
        'object-curly-newline': 'off',
        'no-restricted-globals': 'off',
        'no-underscore-dangle': ['off', {
            allowAfterThis: true
        }],
        camelcase: 'off',
        'prefer-arrow-callback': 'off',
        'func-names': 'off',

        /* import */
        'import/newline-after-import': 'error',
        'import/prefer-default-export': 'warn',
        'import/extensions': ['error', 'ignorePackages', {
            js: 'always',
            vue: 'always',
            ts: 'never'
        }],
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js']
        }],

        /* vue plugin */
        'vue/no-parsing-error': 'off',
        'vue/no-v-html': 'off',
        'vue/attributes-order': 'off',
        'vue/html-indent': ['warn', 4],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/max-attributes-per-line': ['warn', {
            singleline: 1,
            multiline: 1
        }],
        'vue/html-self-closing': ['error', {
            html: { void: 'always' }
        }],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'off',
        'vuejs-accessibility/click-events-have-key-events': 'off',
        'vuejs-accessibility/mouse-events-have-key-events': 'off',
        'vuejs-accessibility/alt-text': 'off',
        'vuejs-accessibility/media-has-caption': 'off',
        'vue/v-on-event-hyphenation': ['error', 'never'],
        'prefer-regex-literals': 'off',
        'no-mixed-operators': 'off',
        'no-continue': 'off',
        'linebreak-style': 'off',
        'object-shorthand': 'off',
        'no-nested-ternary': 'off',

        // typescript
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'warn'
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src']
                ],
                extensions: ['.js', '.ts', '.vue']
            }
        }
    }
};
