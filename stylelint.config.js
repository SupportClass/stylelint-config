module.exports = {
	"extends": "stylelint-config-standard",
	"plugins": [
		"stylelint-selector-bem-pattern",
		"stylelint-order"
	],
	"rules": {
		"indentation": "tab",
		"selector-class-pattern": null,
		"plugin/selector-bem-pattern": {
			"preset": "bem"
		},
		"order/properties-alphabetical-order": true,
		"selector-type-no-unknown": [
			true,
			{
				"ignore": [
					"custom-elements"
				]
			}
		],
		"no-empty-source": null
	}
}
