module.exports = {
    root: true,
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    ignorePatterns: ['dist', '.eslintrc.cjs', 'lugo4node', 'README.md'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts'],
            },
        },
    },
};
