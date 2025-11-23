# @gushkin/example-lib

Example library demonstrating monorepo package structure with TypeScript, tests, and shared configurations.

## Installation

```bash
npm install @gushkin/example-lib
```

## Usage

```typescript
import { add, capitalize, unique } from '@gushkin/example-lib';

// Math utilities
const sum = add(5, 3); // 8
const product = multiply(4, 5); // 20

// String utilities
const title = capitalize('hello world'); // 'Hello world'
const reversed = reverse('hello'); // 'olleh'
const isPalin = isPalindrome('racecar'); // true

// Array utilities
const uniqueValues = unique([1, 2, 2, 3]); // [1, 2, 3]
const chunks = chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

## API

### Math Utilities

- `add(a: number, b: number): number` - Adds two numbers
- `subtract(a: number, b: number): number` - Subtracts b from a
- `multiply(a: number, b: number): number` - Multiplies two numbers
- `divide(a: number, b: number): number` - Divides a by b (throws on division by zero)

### String Utilities

- `capitalize(str: string): string` - Capitalizes first letter
- `reverse(str: string): string` - Reverses a string
- `isPalindrome(str: string): boolean` - Checks if string is a palindrome
- `truncate(str: string, maxLength: number, suffix?: string): string` - Truncates string

### Array Utilities

- `unique<T>(arr: T[]): T[]` - Removes duplicates
- `chunk<T>(arr: T[], size: number): T[][]` - Chunks array into groups
- `flatten<T>(arr: T[][]): T[]` - Flattens nested array one level
- `groupBy<T, K>(arr: T[], keyFn: (item: T) => K): Record<K, T[]>` - Groups by key

## Development

```bash
# Build
npm run build

# Test
npm run test

# Test with coverage
npm run test:coverage

# Lint
npm run lint

# Clean
npm run clean
```

## License

MIT
