// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";

export default tseslint.config(
  {
    ignores: ["**/*.js", "**/*.mjs"],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  perfectionist.configs["recommended-natural"],
  {
    rules: {
      "perfectionist/sort-objects": "off",
      "perfectionist/sort-named-imports": "off",
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-interfaces": "off",
      "perfectionist/sort-union-types": "off",
      "perfectionist/sort-enums": "off",
      "perfectionist/sort-exports": "off",
      "perfectionist/sort-classes": "off",
      "perfectionist/sort-named-exports": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-deprecated": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/prefer-optional-chain": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
    },
  }
);