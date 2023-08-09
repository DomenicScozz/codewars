const digitalRoot = require('./digitalRoot')


describe("Tests", () => {
  it("test", () => {
    expect(digitalRoot(16)).toEqual(7);
    expect(digitalRoot(456)).toEqual(6);
  });
});

