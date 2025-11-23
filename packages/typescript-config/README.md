# @gushkin/typescript-config

Shared TypeScript configuration for Gushkin monorepo packages.

## Installation

```bash
npm install --save-dev @gushkin/typescript-config typescript
```

## Usage

### For Node.js packages

Create a `tsconfig.json` in your package:

```json
{
  "extends": "@gushkin/typescript-config/node.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
```

### For React packages

```json
{
  "extends": "@gushkin/typescript-config/react.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
```

### For custom configurations

Extend the base configuration:

```json
{
  "extends": "@gushkin/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
```

## Configurations

### base.json
Base configuration with strict TypeScript settings:
- Target: ES2022
- Strict mode enabled
- Source maps and declarations generated
- No unused locals/parameters
- Resolve JSON modules

### node.json
Extends base with Node.js specific settings:
- CommonJS modules
- Node and Jest types

### react.json
Extends base with React specific settings:
- JSX support with react-jsx
- DOM types included
- ESNext modules

## Features

- **Strict Type Checking**: All strict flags enabled for maximum type safety
- **Modern JavaScript**: Targets ES2022 for modern features
- **Development Experience**: Source maps and declaration maps for better debugging
- **Code Quality**: Enforces no unused variables and consistent casing
- **Module Resolution**: Node-style resolution with JSON support

## License

MIT
