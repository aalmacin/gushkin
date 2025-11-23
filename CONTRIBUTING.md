# Contributing to Gushkin

Thank you for your interest in contributing to Gushkin! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions with the project and community.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/your-username/gushkin.git
cd gushkin
```

2. Install dependencies:
```bash
npm install
```

3. Bootstrap packages:
```bash
npm run bootstrap
```

4. Build all packages:
```bash
npm run build
```

## Development Workflow

### Creating a New Package

Use the interactive package creator:

```bash
npm run new-package
```

This will guide you through creating a new package with all necessary configuration files.

### Making Changes

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes in the appropriate package(s)

3. Add tests for new functionality

4. Run tests:
```bash
npm run test
```

5. Lint your code:
```bash
npm run lint
```

6. Format code:
```bash
npm run format
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for specific package
lerna run test --scope=@gushkin/package-name
```

### Building

```bash
# Build all packages
npm run build

# Build specific package
lerna run build --scope=@gushkin/package-name
```

## Commit Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/). All commits must follow this format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes

### Examples

```bash
feat(example-lib): add new array utility function

Add a new groupBy function to array utilities that groups
array elements by a key function.

Closes #123
```

```bash
fix(test-utils): fix memory leak in MockTimer

The MockTimer class was not properly cleaning up timers,
causing memory leaks in long-running tests.
```

## Pre-commit Hooks

This project uses Husky and lint-staged to run checks before commits:

- ESLint will check and fix code issues
- Prettier will format code
- Commitlint will validate commit messages

If any checks fail, the commit will be rejected. Fix the issues and try again.

## Pull Request Process

1. Update documentation for any changed functionality
2. Add tests for new features
3. Ensure all tests pass
4. Update CHANGELOG.md if applicable
5. Request review from maintainers

### PR Title Format

Use the same format as commit messages:

```
feat(package-name): add new feature
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe testing done

## Checklist
- [ ] Tests pass locally
- [ ] Code follows project style
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
```

## Package Structure

Each package should have:

```
packages/package-name/
├── src/              # Source code
├── __tests__/        # Tests
├── dist/             # Build output (gitignored)
├── package.json      # Package configuration
├── tsconfig.json     # TypeScript config
├── .eslintrc.js      # ESLint config
├── jest.config.js    # Jest config
└── README.md         # Package documentation
```

## Style Guide

### TypeScript

- Use TypeScript for all new code
- Provide type definitions for public APIs
- Avoid `any` type when possible
- Use interfaces for object shapes
- Use type aliases for unions and complex types

### Testing

- Write tests for all new functionality
- Aim for >80% code coverage
- Use descriptive test names
- Group related tests with `describe` blocks
- Use `it` for test cases

### Documentation

- Document all public APIs
- Include examples in documentation
- Keep README files up to date
- Add JSDoc comments for complex functions

## Release Process

Maintainers handle releases using Lerna:

```bash
# Version packages and create changelog
npm run version

# Publish to npm
npm run publish
```

## Questions?

If you have questions, please:
1. Check existing documentation
2. Search existing issues
3. Create a new issue if needed

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
