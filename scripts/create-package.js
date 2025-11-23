#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('🚀 Create a new package in the Gushkin monorepo\n');

  const packageName = await question('Package name (without @gushkin/ prefix): ');
  const description = await question('Package description: ');
  const packageType = await question(
    'Package type (node/react/library) [node]: '
  );

  const type = packageType.trim() || 'node';
  const fullName = `@gushkin/${packageName}`;
  const packageDir = path.join(__dirname, '..', 'packages', packageName);

  if (fs.existsSync(packageDir)) {
    console.error(`❌ Package ${packageName} already exists!`);
    process.exit(1);
  }

  console.log(`\n📦 Creating package: ${fullName}`);

  // Create directories
  fs.mkdirSync(packageDir, { recursive: true });
  fs.mkdirSync(path.join(packageDir, 'src'), { recursive: true });
  fs.mkdirSync(path.join(packageDir, '__tests__'), { recursive: true });

  // Create package.json
  const packageJson = {
    name: fullName,
    version: '1.0.0',
    description: description || `${packageName} package`,
    main: 'dist/index.js',
    types: 'dist/index.d.ts',
    files: ['dist'],
    scripts: {
      build: 'tsc',
      test: 'jest',
      'test:watch': 'jest --watch',
      'test:coverage': 'jest --coverage',
      lint: 'eslint src/**/*.ts',
      clean: 'rm -rf dist',
    },
    keywords: [packageName, 'gushkin'],
    author: '',
    license: 'MIT',
    devDependencies: {
      '@gushkin/eslint-config': '^1.0.0',
      '@gushkin/typescript-config': '^1.0.0',
      '@gushkin/test-utils': '^1.0.0',
      '@types/jest': '^29.5.0',
      '@types/node': '^18.15.0',
      eslint: '^8.0.0',
      jest: '^29.5.0',
      'ts-jest': '^29.1.0',
      typescript: '^5.0.0',
    },
  };

  fs.writeFileSync(
    path.join(packageDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // Create tsconfig.json
  const tsconfigConfig = type === 'react' ? 'react.json' : 'node.json';
  const tsconfig = {
    extends: `@gushkin/typescript-config/${tsconfigConfig}`,
    compilerOptions: {
      outDir: 'dist',
      rootDir: 'src',
    },
    include: ['src'],
    exclude: ['node_modules', 'dist', '__tests__'],
  };

  fs.writeFileSync(
    path.join(packageDir, 'tsconfig.json'),
    JSON.stringify(tsconfig, null, 2)
  );

  // Create .eslintrc.js
  const eslintrc = `module.exports = {
  extends: ['@gushkin/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
`;

  fs.writeFileSync(path.join(packageDir, '.eslintrc.js'), eslintrc);

  // Create jest.config.js
  const jestConfig = `module.exports = {
  preset: '@gushkin/test-utils/jest-preset',
};
`;

  fs.writeFileSync(path.join(packageDir, 'jest.config.js'), jestConfig);

  // Create src/index.ts
  const indexContent = `export function hello(name: string): string {
  return \`Hello, \${name}!\`;
}
`;

  fs.writeFileSync(path.join(packageDir, 'src', 'index.ts'), indexContent);

  // Create __tests__/index.test.ts
  const testContent = `import { hello } from '../src';

describe('${packageName}', () => {
  it('should work', () => {
    expect(hello('World')).toBe('Hello, World!');
  });
});
`;

  fs.writeFileSync(
    path.join(packageDir, '__tests__', 'index.test.ts'),
    testContent
  );

  // Create README.md
  const readme = `# ${fullName}

${description || `${packageName} package for Gushkin monorepo`}

## Installation

\`\`\`bash
npm install ${fullName}
\`\`\`

## Usage

\`\`\`typescript
import { hello } from '${fullName}';

console.log(hello('World')); // Hello, World!
\`\`\`

## Development

\`\`\`bash
# Build
npm run build

# Test
npm run test

# Lint
npm run lint
\`\`\`

## License

MIT
`;

  fs.writeFileSync(path.join(packageDir, 'README.md'), readme);

  console.log(`\n✅ Package ${fullName} created successfully!`);
  console.log(`\n📁 Location: packages/${packageName}`);
  console.log('\n📝 Next steps:');
  console.log('   1. cd packages/' + packageName);
  console.log('   2. npm install (or run `lerna bootstrap` from root)');
  console.log('   3. npm run build');
  console.log('   4. npm test\n');

  rl.close();
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
