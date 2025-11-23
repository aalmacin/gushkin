/**
 * Test helper utilities
 */

/**
 * Waits for a specified amount of time
 * @param ms - Milliseconds to wait
 */
export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retries a function until it succeeds or max attempts reached
 * @param fn - Function to retry
 * @param maxAttempts - Maximum number of attempts
 * @param delay - Delay between attempts in ms
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts = 3,
  delay = 100
): Promise<T> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxAttempts) {
        await wait(delay);
      }
    }
  }

  throw lastError!;
}

/**
 * Waits for a condition to be true
 * @param condition - Function that returns boolean
 * @param timeout - Maximum time to wait in ms
 * @param interval - Check interval in ms
 */
export async function waitFor(
  condition: () => boolean | Promise<boolean>,
  timeout = 5000,
  interval = 100
): Promise<void> {
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    if (await condition()) {
      return;
    }
    await wait(interval);
  }

  throw new Error(`Timeout waiting for condition after ${timeout}ms`);
}

/**
 * Creates a deferred promise that can be resolved/rejected externally
 */
export function createDeferred<T>() {
  let resolve: (value: T) => void;
  let reject: (reason?: unknown) => void;

  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve: resolve!, reject: reject! };
}

/**
 * Runs a test in isolation with cleanup
 */
export async function withCleanup<T>(
  test: () => Promise<T>,
  cleanup: () => Promise<void>
): Promise<T> {
  try {
    return await test();
  } finally {
    await cleanup();
  }
}
