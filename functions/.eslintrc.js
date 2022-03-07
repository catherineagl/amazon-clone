module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'google'],
	rules: {
		quotes: ['error', 'double'],
		'max-len': ['error', { code: 120 }],
		indent: [2, 'tab'],
		'no-tabs': 0,
		ignoreStrings: true,
	},
};
