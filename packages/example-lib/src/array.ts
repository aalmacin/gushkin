/**
 * Removes duplicate values from an array
 * @param arr - Input array
 * @returns Array with unique values
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/**
 * Chunks an array into smaller arrays of specified size
 * @param arr - Input array
 * @param size - Size of each chunk
 * @returns Array of chunks
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Flattens a nested array by one level
 * @param arr - Nested array
 * @returns Flattened array
 */
export function flatten<T>(arr: T[][]): T[] {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

/**
 * Groups array elements by a key function
 * @param arr - Input array
 * @param keyFn - Function to extract key from element
 * @returns Object with grouped elements
 */
export function groupBy<T, K extends string | number>(
  arr: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return arr.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
}
