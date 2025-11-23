# @gushkin/eslint-config

Shared ESLint configuration for Gushkin monorepo packages.

## Installation

```bash
npm install --save-dev @gushkin/eslint-config eslint
```

## Usage

Create an `.eslintrc.js` file in your package:

```javascript
module.exports = {
  extends: ['@gushkin/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

Or extend in your `.eslintrc.json`:

```json
{
  "extends": ["@gushkin/eslint-config"]
}
```

## Features

- TypeScript support with `@typescript-eslint`
- Import/export linting with `eslint-plugin-import`
- Promise best practices with `eslint-plugin-promise`
- Jest testing rules with `eslint-plugin-jest`
- Prettier integration (no conflicting rules)
- Sensible defaults for Node.js projects

## Included Plugins

- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-import`
- `eslint-plugin-promise`
- `eslint-plugin-jest`
- `eslint-config-prettier`

## Rules Highlights

### TypeScript
- Warns on `any` usage
- Removes unused variables (except those prefixed with `_`)
- Allows implicit return types for convenience

### Imports
- Enforces ordered imports (alphabetical)
- Groups imports by type (builtin, external, internal, etc.)
- Detects circular dependencies

### General
- Enforces `const` over `let` where possible
- Disallows `var`
- Warns on console usage (except `console.warn` and `console.error`)

## License

MIT
