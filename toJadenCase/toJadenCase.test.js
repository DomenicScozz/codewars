// const toJadenCase = require('./toJadenCase')


// describe("Tests", () => {
//   it("test", () => {
// var str = "How can mirrors be real if our eyes aren't real";
// expect(toJadenCase(str)).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real");
//   });
// });

const jadenStringCasing = require('./toJadenCase');

describe("Tests", () => {
  it("test", () => {
    var str = "How can mirrors be real if our eyes aren't real";
    expect(jadenStringCasing(str)).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real");
  });
});
