module.exports = {
    root: true,
    ignorePatterns: ['**/*'],
    overrides: [
        {
            files: ['*.ts', '*.js'],
            env: {
                es6: true,
            },
            plugins: ['prettier', 'eslint-comments', 'eslint-plugin-prefer-arrow', 'eslint-plugin-sonarjs'],
            extends: [
                'eslint:recommended',
                'plugin:eslint-comments/recommended',
                'plugin:prettier/recommended',
                'plugin:sonarjs/recommended',
            ],
            rules: {
                'no-console': 'error',
                'no-var': 'error',
                'no-unused-vars': 'error',
                'no-unused-expressions': 'error',
                'prefer-const': 'error',
                'prefer-arrow/prefer-arrow-functions': 'error',
                'arrow-body-style': 'error',
                'prettier/prettier': [
                    'error',
                    {
                        endOfLine: 'auto',
                    },
                ],
                'padding-line-between-statements': [
                    'error',
                    {
                        blankLine: 'always',
                        prev: '*',
                        next: 'return',
                    },
                ],
                'sonarjs/cognitive-complexity': ['error', 8],
            },
        },
        {
            files: ['*.ts'],
            env: {
                browser: true,
            },
            plugins: ['@typescript-eslint', 'eslint-plugin-import', 'eslint-plugin-unicorn'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:import/recommended',
                'plugin:import/typescript',
                'plugin:unicorn/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
            ],
            rules: {
                'import/default': ['error'],
                'import/no-absolute-path': ['error'],
                'import/no-dynamic-require': ['error'],
                // 'import/no-internal-modules': ['error'],
                'import/no-webpack-loader-syntax': ['error'],
                'import/no-self-import': ['error'],
                'import/no-cycle': ['error', { maxDepth: Infinity }],
                'import/no-useless-path-segments': ['error'],
                'import/no-relative-parent-imports': ['off'],
                'import/no-relative-packages': ['warn'],
                'import/export': ['error'],
                'import/no-named-as-default': ['error'],
                'import/no-named-as-default-member': ['error'],
                'import/no-deprecated': ['warn'],
                'import/no-unresolved': ['error'],
                'import/no-extraneous-dependencies': ['error'],
                'import/no-mutable-exports': ['error'],
                'import/no-unused-modules': ['error'],
                'import/unambiguous': ['error'],
                'import/no-commonjs': ['error'],
                'import/no-amd': ['error'],
                'import/no-nodejs-modules': ['error'],
                'import/no-import-module-exports': ['error'],
                'import/first': ['error'],
                'import/exports-last': ['error'],
                'import/no-duplicates': ['error'],
                'import/no-namespace': ['error'],
                'import/extensions': [
                    'error',
                    {
                        ts: 'never',
                        js: 'never',
                        json: 'always',
                    },
                ],
                'import/order': [
                    'error',
                    {
                        'newlines-between': 'always',
                        alphabetize: {
                            order: 'asc',
                        },
                    },
                ],
                'import/max-dependencies': [
                    'off',
                    {
                        max: 20,
                        ignoreTypeImports: true,
                    },
                ],
                'import/no-unassigned-import': ['error'],
                'import/no-named-default': ['error'],
                'import/no-default-export': ['error'],
                'sort-imports': [
                    'error',
                    {
                        ignoreDeclarationSort: true,
                        ignoreCase: true,
                    },
                ],
                'no-restricted-imports': [
                    'error',
                    {
                        patterns: ['rxjs/internal/*'],
                    },
                ],
                '@typescript-eslint/require-await': 'error',
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/no-duplicate-imports': 'error',
                '@typescript-eslint/no-array-constructor': 'error',
                '@typescript-eslint/lines-between-class-members': 'error',
                '@typescript-eslint/dot-notation': 'error',
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/switch-exhaustiveness-check': 'error',
                '@typescript-eslint/sort-type-union-intersection-members': 'error',
                '@typescript-eslint/restrict-plus-operands': 'error',
                '@typescript-eslint/promise-function-async': 'error',
                '@typescript-eslint/prefer-readonly': 'error',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/prefer-literal-enum-member': 'error',
                '@typescript-eslint/prefer-includes': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/no-unnecessary-condition': 'error',
                '@typescript-eslint/no-require-imports': 'error',
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/no-misused-promises': 'error',
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-for-in-array': 'error',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/no-floating-promises': 'warn',
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-dynamic-delete': 'error',
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'no-public',
                    },
                ],
                '@typescript-eslint/explicit-function-return-type': 'error',
                '@typescript-eslint/await-thenable': 'error',
                '@typescript-eslint/explicit-module-boundary-types': 'error',
                '@typescript-eslint/class-literal-property-style': 'error',
                '@typescript-eslint/member-delimiter-style': [
                    'error',
                    {
                        multiline: {
                            delimiter: 'semi',
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: 'semi',
                            requireLast: false,
                        },
                        multilineDetection: 'brackets',
                    },
                ],
                '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    {
                        assertionStyle: 'as',
                        objectLiteralTypeAssertions: 'allow',
                    },
                ],
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/array-type': [
                    'error',
                    {
                        default: 'array-simple',
                    },
                ],
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: [
                            'static-field',
                            'public-static-field',
                            'protected-static-field',
                            'private-static-field',

                            'static-method',
                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',

                            'abstract-field',
                            'public-abstract-field',
                            'protected-abstract-field',

                            'instance-field',
                            'public-field',
                            'public-instance-field',
                            'public-decorated-field',

                            'protected-field',
                            'protected-instance-field',
                            'protected-decorated-field',

                            'private-field',
                            'private-instance-field',
                            'private-decorated-field',

                            'constructor',

                            'public-method',
                            'protected-method',
                            'private-method',
                        ],
                    },
                ],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'default',
                        format: ['camelCase'],
                        leadingUnderscore: 'forbid',
                        trailingUnderscore: 'forbid',
                    },
                    {
                        selector: 'variableLike',
                        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                    },
                    {
                        selector: 'parameter',
                        format: ['camelCase'],
                    },
                    {
                        selector: 'memberLike',
                        format: ['camelCase'],
                    },
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                    },
                    {
                        selector: 'property',
                        modifiers: ['static'],
                        format: ['UPPER_CASE'],
                    },
                    {
                        selector: 'property',
                        modifiers: ['private'],
                        format: ['camelCase'],
                        prefix: ['#'],
                    },
                    {
                        selector: 'enumMember',
                        format: ['UPPER_CASE'],
                    },
                ],
                // causes angular DI system to fail
                '@typescript-eslint/consistent-type-exports': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/indent': 'off',
                '@typescript-eslint/no-extra-parens': 'off',
                'unicorn/no-null': 'off',
                'unicorn/prefer-node-protocol': 'off',
                'unicorn/consistent-function-scoping': 'off',
                'unicorn/prevent-abbreviations': 'off',
            },
            settings: {
                'import/resolver': {
                    typescript: {},
                },
            },
        },
        {
            files: ['*.js'],
            env: {
                node: true,
            },
            parserOptions: {
                ecmaVersion: 2020,
            },
        },
    ],
};
