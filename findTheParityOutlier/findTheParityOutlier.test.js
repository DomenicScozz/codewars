const findOutlier = require('./findTheParityOutlier')

describe("Tests", () => {
  it("test", () => {
    expect(findOutlier([0, 1, 2])).toEqual(1);
    expect(findOutlier([1, 2, 3])).toEqual(2);
    expect(findOutlier([2, 6, 8, 10, 3])).toEqual(3);
    expect(findOutlier([0, 0, 3, 0, 0])).toEqual(3);
    expect(findOutlier([1, 1, 0, 1, 1])).toEqual(0);
  });
});

