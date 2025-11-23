/**
 * Capitalizes the first letter of a string
 * @param str - Input string
 * @returns String with first letter capitalized
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string
 * @param str - Input string
 * @returns Reversed string
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome
 * @param str - Input string
 * @returns True if string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Truncates a string to a specified length
 * @param str - Input string
 * @param maxLength - Maximum length
 * @param suffix - Suffix to append if truncated (default: '...')
 * @returns Truncated string
 */
export function truncate(
  str: string,
  maxLength: number,
  suffix = '...'
): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}
