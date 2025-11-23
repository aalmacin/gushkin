# Gushkin Monorepo

A modern, production-ready monorepo template using Lerna, TypeScript, and best practices for managing multiple packages.

## Features

✨ **Lerna Monorepo** - Efficient multi-package repository management
🔧 **Shared Configurations** - Centralized ESLint, TypeScript, and Prettier configs
📦 **Example Packages** - Ready-to-use library and utilities examples
🧪 **Testing Setup** - Pre-configured Jest with shared testing utilities
🚀 **CI/CD Pipeline** - GitHub Actions workflow for automated testing and building
📝 **Commit Standards** - Conventional commits with Husky and Commitlint
📋 **Changelog** - Automatic changelog generation
🎨 **Code Formatting** - Prettier integration for consistent code style

## Project Structure

```
gushkin/
├── packages/
│   ├── eslint-config/       # Shared ESLint configuration
│   ├── typescript-config/   # Shared TypeScript configuration
│   ├── example-lib/         # Example library package
│   └── test-utils/          # Shared testing utilities
├── .github/
│   └── workflows/           # CI/CD workflows
├── lerna.json              # Lerna configuration
└── package.json            # Root package configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Bootstrap packages (link local dependencies)
npm run bootstrap

# Build all packages
npm run build
```

## Available Scripts

```bash
# Bootstrap all packages
npm run bootstrap

# Build all packages
npm run build

# Run tests across all packages
npm run test

# Lint all packages
npm run lint

# Format code with Prettier
npm run format

# Clean node_modules and build artifacts
npm run clean

# Run tests in watch mode
npm run test:watch

# Generate changelog
npm run changelog
```

## Package Management

### Creating a New Package

```bash
# Create a new package directory
mkdir -p packages/my-package

# Initialize package.json
cd packages/my-package
npm init -y
```

### Adding Dependencies

```bash
# Add dependency to specific package
lerna add <dependency> --scope=<package-name>

# Add dependency to all packages
lerna add <dependency>

# Add dev dependency to root
npm install -D <dependency>
```

### Publishing Packages

```bash
# Version and publish
lerna publish

# Publish from specific package
lerna publish from-package
```

## Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes to packages**
   - Modify code in `packages/`
   - Add tests

3. **Run tests and lint**
   ```bash
   npm run test
   npm run lint
   ```

4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add new feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/my-feature
   ```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc)
- `refactor:` - Code refactoring
- `test:` - Test additions or changes
- `chore:` - Build process or auxiliary tool changes

## Testing

```bash
# Run all tests
npm run test

# Run tests for specific package
npm run test -- --scope=<package-name>

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## CI/CD

GitHub Actions automatically:
- Runs tests on all PRs
- Lints code for style issues
- Builds all packages
- Runs on Node.js LTS versions

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes using conventional commits
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Maintainers

- Your Name (@yourusername)

## Support

For issues and questions, please open a GitHub issue.
