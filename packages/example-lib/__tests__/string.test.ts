import { capitalize, reverse, isPalindrome, truncate } from '../src/string';

describe('String utilities', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should not change already capitalized string', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });
  });

  describe('reverse', () => {
    it('should reverse a string', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    it('should handle empty string', () => {
      expect(reverse('')).toBe('');
    });
  });

  describe('isPalindrome', () => {
    it('should identify palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    it('should identify non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...');
    });

    it('should not truncate short strings', () => {
      expect(truncate('Hi', 10)).toBe('Hi');
    });

    it('should use custom suffix', () => {
      expect(truncate('Hello World', 8, '…')).toBe('Hello W…');
    });
  });
});
