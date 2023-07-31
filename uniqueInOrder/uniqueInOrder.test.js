const uniqueInOrder = require('./uniqueInOrder')


describe("Tests", () => {
  it("test", () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A','B','C','D','A','B'])
  });
});
