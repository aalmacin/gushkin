# @gushkin/test-utils

Shared testing utilities and Jest preset for Gushkin monorepo packages.

## Installation

```bash
npm install --save-dev @gushkin/test-utils jest
```

## Usage

### Jest Preset

Use the shared Jest preset in your `jest.config.js`:

```javascript
module.exports = {
  preset: '@gushkin/test-utils/jest-preset',
  // Your custom config...
};
```

### Test Helpers

```typescript
import {
  wait,
  retry,
  waitFor,
  createDeferred,
  withCleanup,
} from '@gushkin/test-utils';

// Wait for some time
await wait(1000);

// Retry flaky operations
const result = await retry(async () => {
  // operation that might fail
}, 3, 100);

// Wait for a condition
await waitFor(() => element.isVisible(), 5000);

// Create deferred promise
const { promise, resolve, reject } = createDeferred<string>();
resolve('done');

// Run test with cleanup
await withCleanup(
  async () => {
    // test code
  },
  async () => {
    // cleanup code
  }
);
```

### Custom Matchers

```typescript
import { extendMatchers } from '@gushkin/test-utils';

// Extend Jest matchers
extendMatchers();

// Use custom matchers
expect(5).toBeWithinRange(1, 10);
expect([1, 2, 3, 4]).toContainInOrder([2, 4]);
```

### Mock Utilities

```typescript
import {
  createMockFunction,
  MockTimer,
  createSpy,
} from '@gushkin/test-utils';

// Create mock function
const mockFn = createMockFunction<(x: number) => string>();
mockFn(5);
expect(mockFn.calls).toEqual([[5]]);

// Mock timer
const timer = new MockTimer();
timer.setTimeout(() => console.log('done'), 1000);
timer.tick(1000); // triggers callback

// Create spy
const original = (x: number) => x * 2;
const spy = createSpy(original);
spy(5); // returns 10
expect(spy.calls).toEqual([[5]]);
```

## Features

- **Jest Preset**: Pre-configured Jest setup with sensible defaults
- **Test Helpers**: Utilities for async testing, retries, and waiting
- **Custom Matchers**: Extended Jest matchers for common assertions
- **Mock Utilities**: Tools for creating mocks, spies, and controlling time

## API

### Helpers

- `wait(ms: number): Promise<void>` - Wait for specified time
- `retry<T>(fn: () => Promise<T>, maxAttempts?, delay?): Promise<T>` - Retry function
- `waitFor(condition: () => boolean, timeout?, interval?): Promise<void>` - Wait for condition
- `createDeferred<T>()` - Create externally controllable promise
- `withCleanup<T>(test: () => Promise<T>, cleanup: () => Promise<void>)` - Run test with cleanup

### Matchers

- `toBeWithinRange(floor: number, ceiling: number)` - Check if number is within range
- `toContainInOrder<T>(expected: T[])` - Check if array contains items in order

### Mocks

- `createMockFunction<T>()` - Create trackable mock function
- `MockTimer` - Control time in tests
- `createSpy<T>(original: T)` - Wrap function with call tracking

## License

MIT
