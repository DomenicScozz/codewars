const tribonacci = require('./tribonacciSequence')

describe("Example tests", () => {
  it("Test 1", () => {
    expect(tribonacci([1, 1, 1], 10)).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
  });

  it("Test 2", () => {
    expect(tribonacci([0, 0, 1], 10)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
  });

  it("Test 3", () => {
    expect(tribonacci([0, 1, 1], 10)).toEqual([0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
  });

  it("Test 4", () => {
    expect(tribonacci([1, 0, 0], 10)).toEqual([1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
  });

  it("Test 5", () => {
    expect(tribonacci([0, 0, 0], 10)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it("Test 6", () => {
    expect(tribonacci([1, 2, 3], 10)).toEqual([1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
  });

  it("Test 7", () => {
    expect(tribonacci([3, 2, 1], 10)).toEqual([3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
  });

  it("Test 8", () => {
    expect(tribonacci([1, 1, 1], 1)).toEqual([1]);
  });

  it("Test 9", () => {
    expect(tribonacci([300, 200, 100], 0)).toEqual([]);
  });
});