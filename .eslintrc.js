module.exports = {
	extends: "eslint:recommended",
	env: {
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 9,
		sourceType: "module",
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	plugins: [
		"promise",
		"node",
	],
	rules: {
		"no-extra-parens": ["warn", "all", { nestedBinaryExpressions: false	}],
		"accessor-pairs": "warn",
		"array-callback-return": "error",
		"curly": ["error", "multi-line", "consistent"],
		"dot-location": ["error", "property"],
		"dot-notation": "error",
		"eqeqeq": "error",
		"no-console": "error",
		"no-empty-function": "error",
		"no-floating-decimal": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-lone-blocks": "error",
		"no-multi-spaces": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-new": "error",
		"no-octal-escape": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": ["error", { "allowShortCircuit": true }],
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-void": "error",
		"no-warning-comments": "off",
		"wrap-iife": "error",
		"yoda": "error",
		"no-label-var": "error",
		"no-shadow": "error",
		"no-undef-init": "error",
		"callback-return": "error",
		"handle-callback-err": "error",
		"no-mixed-requires": "error",
		"no-new-require": "error",
		"no-path-concat": "error",
		"array-bracket-spacing": "error",
		"block-spacing": "error",
		"brace-style": ["error", "1tbs", { allowSingleLine: true }],
		"comma-dangle": ["error", "always-multiline"],
		"comma-spacing": "error",
		"comma-style": "error",
		"computed-property-spacing": "error",
		"consistent-this": "error",
		"eol-last": "error",
		"func-names": "error",
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
		indent: ["error", "tab", { SwitchCase: 1 }],
		"key-spacing": "error",
		"keyword-spacing": "error",
		"max-depth": ["error", 8],
		"max-len": ["error", 400, 2],
		"max-nested-callbacks": ["error", { max: 4 }],
		"max-statements-per-line": ["error", { max: 2 }],
		"new-cap": "off",
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 5 }],
		"no-array-constructor": "error",
		"no-bitwise": "warn",
		"no-inline-comments": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 0 }],
		"no-new-object": "error",
		"no-spaced-func": "error",
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"object-curly-newline": ["error", { "multiline": true, "consistent": true }],
		"object-curly-spacing": ["error", "always"],
		"operator-assignment": "error",
		"operator-linebreak": ["error", "after"],
		"padded-blocks": ["error", "never"],
		"quote-props": ["error", "as-needed"],
		"quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
		"semi-spacing": "error",
		"semi": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", "always"],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"unicode-bom": "error",
		"arrow-body-style": "error",
		"arrow-spacing": "error",
		"no-duplicate-imports": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": ["error", { destructuring: "all" }],
		"prefer-destructuring": ["error", {
			VariableDeclarator: {
				array: false,
				object: true,
			},
			AssignmentExpression: {
				array: true,
				object: true,
			},
		}, {
			enforceForRenamedProperties: false,
		}],
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"rest-spread-spacing": "error",
		"template-curly-spacing": "error",
		"yield-star-spacing": "error",
		"promise/no-return-wrap": "error",
		"promise/catch-or-return": "error",
		"promise/no-native": "off",
		"promise/no-nesting": "warn",
		"promise/no-promise-in-callback": "warn",
		"promise/no-callback-in-promise": "warn",
		"promise/no-return-in-finally": "warn",
		"node/no-missing-require": "off",
		"node/no-unpublished-bin": "error",
		"node/no-deprecated-api": "error",
		"node/exports-style": ["error", "module.exports"],
		"no-var": "error",
	},
};
