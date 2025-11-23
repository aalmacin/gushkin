import { expect } from '@jest/globals';

/**
 * Custom Jest matchers for enhanced testing
 */

/**
 * Checks if a value is within a range
 */
export function toBeWithinRange(
  received: number,
  floor: number,
  ceiling: number
) {
  const pass = received >= floor && received <= ceiling;
  return {
    pass,
    message: () =>
      pass
        ? `expected ${received} not to be within range ${floor} - ${ceiling}`
        : `expected ${received} to be within range ${floor} - ${ceiling}`,
  };
}

/**
 * Checks if an array contains items in order
 */
export function toContainInOrder<T>(received: T[], expected: T[]) {
  let lastIndex = -1;
  let pass = true;

  for (const item of expected) {
    const index = received.indexOf(item, lastIndex + 1);
    if (index === -1 || index <= lastIndex) {
      pass = false;
      break;
    }
    lastIndex = index;
  }

  return {
    pass,
    message: () =>
      pass
        ? `expected [${received}] not to contain [${expected}] in order`
        : `expected [${received}] to contain [${expected}] in order`,
  };
}

/**
 * Extends Jest matchers with custom matchers
 */
export function extendMatchers() {
  expect.extend({
    toBeWithinRange,
    toContainInOrder,
  });
}
