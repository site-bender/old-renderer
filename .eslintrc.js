module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: './',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier', 'import'],
	rules: {
		'prettier/prettier': 'error',
		'no-unreachable': 'error',
		'no-console': 'warn',
		'import/first': 'error',
		'linebreak-style': ['error', 'unix'],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true,
			},
		],
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
}
