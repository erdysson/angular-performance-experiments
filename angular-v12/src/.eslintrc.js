const path = require('path');

module.exports = {
    extends: ['../../.eslintrc.js'],
    ignorePatterns: ['!**/*'],
    overrides: [
        {
            files: ['*.ts'],
            extends: ['plugin:@angular-eslint/recommended', 'plugin:@angular-eslint/template/process-inline-templates'],
            parserOptions: {
                project: [path.join(__dirname, 'tsconfig.app.json'), path.join(__dirname, 'tsconfig.spec.json')],
                sourceType: 'module',
            },
            rules: {
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        prefix: 'app',
                        style: 'kebab-case',
                    },
                ],
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: 'app',
                        style: 'camelCase',
                    },
                ],
                '@angular-eslint/no-empty-lifecycle-method': 'error',
            },
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
            parser: '@angular-eslint/template-parser',
            rules: {
                '@angular-eslint/template/eqeqeq': 'error',
            },
        },
    ],
};
