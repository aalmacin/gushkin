import { unique, chunk, flatten, groupBy } from '../src/array';

describe('Array utilities', () => {
  describe('unique', () => {
    it('should remove duplicates', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it('should handle empty array', () => {
      expect(unique([])).toEqual([]);
    });
  });

  describe('chunk', () => {
    it('should chunk array into groups', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should handle exact divisions', () => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });
  });

  describe('flatten', () => {
    it('should flatten nested arrays', () => {
      expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle empty arrays', () => {
      expect(flatten([])).toEqual([]);
    });
  });

  describe('groupBy', () => {
    it('should group items by key', () => {
      const items = [
        { type: 'fruit', name: 'apple' },
        { type: 'fruit', name: 'banana' },
        { type: 'vegetable', name: 'carrot' },
      ];
      const grouped = groupBy(items, item => item.type);
      expect(grouped.fruit).toHaveLength(2);
      expect(grouped.vegetable).toHaveLength(1);
    });

    it('should handle empty array', () => {
      expect(groupBy([], x => x)).toEqual({});
    });
  });
});
