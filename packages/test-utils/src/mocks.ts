/**
 * Mock utilities for testing
 */

/**
 * Creates a mock function with call tracking
 */
export function createMockFunction<T extends (...args: any[]) => any>() {
  const calls: Parameters<T>[] = [];
  const results: ReturnType<T>[] = [];

  const mockFn = ((...args: Parameters<T>) => {
    calls.push(args);
    const result = undefined as ReturnType<T>;
    results.push(result);
    return result;
  }) as T & {
    calls: Parameters<T>[];
    results: ReturnType<T>[];
    reset: () => void;
  };

  mockFn.calls = calls;
  mockFn.results = results;
  mockFn.reset = () => {
    calls.length = 0;
    results.length = 0;
  };

  return mockFn;
}

/**
 * Creates a mock timer for controlling time in tests
 */
export class MockTimer {
  private time = 0;
  private timers: Array<{ callback: () => void; time: number }> = [];

  setTimeout(callback: () => void, delay: number): number {
    const id = this.timers.length;
    this.timers.push({ callback, time: this.time + delay });
    return id;
  }

  tick(ms: number): void {
    this.time += ms;
    const toExecute = this.timers.filter(t => t.time <= this.time);
    this.timers = this.timers.filter(t => t.time > this.time);
    toExecute.forEach(t => t.callback());
  }

  reset(): void {
    this.time = 0;
    this.timers = [];
  }

  getTime(): number {
    return this.time;
  }
}

/**
 * Creates a spy that wraps an existing function
 */
export function createSpy<T extends (...args: any[]) => any>(
  original: T
): T & { calls: Parameters<T>[] } {
  const calls: Parameters<T>[] = [];

  const spy = ((...args: Parameters<T>) => {
    calls.push(args);
    return original(...args);
  }) as T & { calls: Parameters<T>[] };

  spy.calls = calls;

  return spy;
}
