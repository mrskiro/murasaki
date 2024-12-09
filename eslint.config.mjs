import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import pluginNext from "@next/eslint-plugin-next";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginStorybook from "eslint-plugin-storybook";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { ignores: ["*.config.{js,ts}"] },
  // eslint
  {
    rules: {
      ...eslint.configs.recommended.rules,
      "no-constant-binary-expression": "error",
      "no-constructor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      complexity: [
        "error",
        {
          max: 16,
        },
      ],
      "default-case": "error",
      "default-case-last": "error",
      eqeqeq: "error",
      "func-style": [
        "error",
        "declaration",
        {
          allowArrowFunctions: true,
        },
      ],
      "max-classes-per-file": ["error", 1],
      "max-lines": [
        "error",
        {
          max: 1000,
          skipComments: true,
          skipBlankLines: true,
        },
      ],
      "max-lines-per-function": [
        "error",
        {
          max: 300,
          skipComments: true,
          skipBlankLines: true,
        },
      ],
      "max-params": ["error", 3],
      "no-alert": "error",
      "no-else-return": [
        "error",
        {
          allowElseIf: false,
        },
      ],
      "no-eval": "error",
      "no-floating-decimal": "error",
      "no-inline-comments": "error",
      "no-multi-assign": "error",
      "no-nested-ternary": "error",
      "no-plusplus": [
        "error",
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      "no-unneeded-ternary": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-destructuring": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      yoda: "error",
    },
  },
  // typescript-eslint
  {
    name: tseslint.configs.base.name,
    languageOptions: tseslint.configs.base.languageOptions,
    plugins: tseslint.configs.base.plugins,
    rules: {
      ...tseslint.configs.eslintRecommended.rules,
      // https://github.com/typescript-eslint/typescript-eslint/blob/cb0ef9ceb73057bc90fa54229e2d4828432530b5/packages/eslint-plugin/src/configs/recommended.ts
      ...tseslint.configs.recommended.at(-1).rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/default-param-last": "warn",
    },
  },
  // eslint-plugin-react
  {
    files: ["**/*.tsx"],
    plugins: pluginReact.configs.flat.recommended.plugins,
    languageOptions: pluginReact.configs.flat.recommended.languageOptions,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/boolean-prop-naming": [
        "warn",
        {
          rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
        },
      ],
      "react/button-has-type": ["warn"],
      "react/destructuring-assignment": ["error", "never"],
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/hook-use-state": "warn",
      "react/no-unstable-nested-components": [
        "warn",
        {
          allowAsProps: true,
        },
      ],
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "react/void-dom-elements-no-children": "error",
      "react/jsx-boolean-value": ["warn", "never"],
      "react/jsx-curly-brace-presence": [
        "warn",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],
      "react/jsx-fragments": ["error"],
      "react/jsx-handler-names": ["error"],
      "react/jsx-max-depth": [
        "error",
        {
          max: 20,
        },
      ],
      "react/jsx-no-constructed-context-values": "warn",
      "react/jsx-no-useless-fragment": [
        "error",
        {
          allowExpressions: true,
        },
      ],
      "react/jsx-pascal-case": [
        "error",
        {
          allowNamespace: true,
          allowLeadingUnderscore: true,
        },
      ],
      "react/jsx-props-no-spreading": [
        "error",
        {
          html: "ignore",
          custom: "enforce",
        },
      ],
      // https://github.com/vercel/next.js/blob/f348241e25767e1e08909de19cdab032d63e369b/packages/eslint-config-next/index.js#L62-L79
      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // eslint-plugin-react-hooks
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  // eslint-plugin-next
  {
    // include js because of reporting `Key "rules": Key "@next/next/no-html-link-for-pages": Could not find plugin "@next/next".`
    // include mjs because of https://github.com/vercel/next.js/issues/73655
    files: ["**/*.{js,mjs,ts,tsx}"],
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  // eslint-plugin-jsx-a11y
  {
    files: ["**/*.{ts,tsx}"],
    plugins: pluginJsxA11y.flatConfigs.recommended.plugins,
    rules: {
      ...pluginJsxA11y.flatConfigs.recommended.rules,
      // https://github.com/vercel/next.js/blob/f348241e25767e1e08909de19cdab032d63e369b/packages/eslint-config-next/index.js#L67-L78
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
    },
  },
  // eslint-plugin-import
  {
    files: ["**/*.{ts,tsx}"],
    plugins: pluginImport.flatConfigs.recommended.plugins,
    rules: {
      ...pluginImport.flatConfigs.recommended.rules,
      // https://github.com/vercel/next.js/blob/f348241e25767e1e08909de19cdab032d63e369b/packages/eslint-config-next/index.js#L63
      "import/no-anonymous-default-export": "warn",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          pathGroupsExcludedImportTypes: ["next", "react"],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "next",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@/shared/lib/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "@/shared/components/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
  // eslint-plugin-storybook
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/6202eb23901fc249758cd225f8a10b3032d6a9b8/lib/configs/flat/recommended.ts
  ...pluginStorybook.configs["flat/recommended"],
];
