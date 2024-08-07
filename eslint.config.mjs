import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    "files": ["**/*.ts", "**/*.tsx"],
    "languageOptions":{
      "parser": tseslint.parser,
      "globals": globals.node,
      "parserOptions": {
        "project": "./tsconfig.json"
      }
    },
    "plugins": {
      "@typescript-eslint": tseslint
    },
    "ignores": [
      "node-modules/",
      "dist/**/*"
    ]
  }
];