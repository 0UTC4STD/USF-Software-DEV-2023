const unroll = require('./unroll');

describe('unroll', () => {
  it('should return an empty array when given an empty array', () => {
    const square = [];
    expect(unroll(square)).toEqual([]);
  });

  it('should return the values in the square array in a spiral order', () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(square)).toEqual(expected);
  });

  it('should handle a square array with only one row', () => {
    const square = [[1, 2, 3]];
    const expected = [1, 2, 3];
    expect(unroll(square)).toEqual(expected);
  });

  it('should handle a square array with only one column', () => {
    const square = [[1], [2], [3]];
    const expected = [1, 2, 3];
    expect(unroll(square)).toEqual(expected);
  });
});