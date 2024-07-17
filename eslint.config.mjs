import { fixupConfigRules } from "@eslint/compat";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended";
// bu g`irt xato gptdan olingan.
export default {
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: globals.browser,
  extends: [
    pluginJs.configs.recommended,
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: fixupConfigRules(pluginReactConfig),
};
