const duplicateCount = require('./countingDuplicates')

describe("Tests", () => {
  it("test", () => {
    expect(duplicateCount("")).toEqual(0);
    expect(duplicateCount("abcde")).toEqual(0);
    expect(duplicateCount("aabbcde")).toEqual(2);
    expect(duplicateCount("aabBcde")).toEqual(2);
    expect(duplicateCount("Indivisibility")).toEqual(1);
    expect(duplicateCount("Indivisibilities")).toEqual(2);
  });
});