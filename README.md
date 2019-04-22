# Support Class' stylelint-config

> Our re-usable config for the Stylelint CSS linter.

## Usage

1. Install this config as a devDependency:

    ```bash
    npm i -D @supportclass/stylelint-config
    ```

2. Extend our config in your own stylelint config:

	```json
	{
		"extends": [
			"@supportclass/stylelint-config"
		],
		"rules": {
			"indentation": "tab"
		}
	}
	```
