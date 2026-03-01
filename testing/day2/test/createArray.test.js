import { assert, expect } from "chai";
import { createArray } from "../index.js";

describe("createArray function", () => {
  let counter = 1;

  // increase counter before each test
  beforeEach(() => {
    counter++;
  });

  // return type array
  it("should return an array", () => {
    const result = createArray(counter);
    // console.log('array from first test', result)
    // expect(result).to.be.an("array");
    assert.isArray(result, "result should be an array");
  });

  // length and include number
  it("should have a length of array and include number when passed this number", () => {
    const result = createArray(counter);
    console.log("res", result);

    expect(result.length).to.equal(3);
    expect(result).to.include(1);

    // or
    expect(result).to.be.an("array").that.includes(1).and.have.lengthOf(3);
  });

  // pending test
  it.skip("should be pending", () => {});

  // delay
  it("create array after 5 seconds", function (done) {
    //  if the test not finished after 5s , it will throw error and fail the test
    // such the all time will take to decide if the test is passed or not
    this.timeout(5000);
    // the real test will take 3s
    setTimeout(done, 3000);
  });
});
