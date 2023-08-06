const solution = require('./splitStrings')

describe("Split Strings", () => {
  it("Basic tests", () => {
    expect(solution("abcdef")).toEqual(["ab", "cd", "ef"]);
    expect(solution("abcdefg")).toEqual(["ab", "cd", "ef", "g_"]);
    expect(solution("")).toEqual([]);
  });
});