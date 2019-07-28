module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [ 'prettier', 'prettier/vue', 'plugin:prettier/recommended', '@nuxtjs', 'plugin:nuxt/recommended' ],
	plugins: [ 'vue', 'prettier' ],
	// add your custom rules here
	rules: {
		'nuxt/no-cjs-in-config': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'handle-callback-err': 'off',
		'no-template-curly-in-string': 'off',
		camelcase: 'off',
		'space-before-function-paren': 'off',
		curly: 'off',
		'arrow-parens': 'off'
	}
};
