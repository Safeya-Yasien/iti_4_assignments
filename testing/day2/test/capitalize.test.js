import { assert, expect, should } from "chai";

import { capitalizeText } from "../index.js";
should();

describe("capitalizeText function", () => {
  //   return string
  it("return a string when passed a string", () => {
    expect(capitalizeText("iti")).to.be.a("string");
  });

  //   capitalize
  it("capitalize the input string", () => {
    capitalizeText("iti").should.equal("ITI");
  });

  //   error if user enter number
  it("should throw a TypeError if input is a number", () => {
    // throw function must take callback function
    expect(() => capitalizeText(1)).to.throw(
      TypeError,
      "parameter should be string",
    );
  });

  //  not hello
  it("should not return 'hello' if the input is 'iti'", () => {
    assert.notEqual(capitalizeText("iti"), "hello");
  });
});
