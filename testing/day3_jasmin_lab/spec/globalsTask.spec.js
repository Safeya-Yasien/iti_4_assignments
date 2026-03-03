import { sum, positive } from "../index.js";

describe("testing math utilities", () => {
  // sum function
  it("sum function should equal to sum of the values", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it("sum function with negative values", () => {
    expect(sum([1, -2, 3])).toBe(2);
  });

  it("sum function with float values", () => {
    expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
  });

  it("sum function with empty array", () => {
    expect(sum([])).toBe(0);
  });

  it("sum function with one element array", () => {
    expect(sum([5])).toBe(5);
  });

  it("sum function with not to be a number", () => {
    expect(sum(["1", 5])).not.toBe(6);
  });

  // positive function
  it("positive function should equal to positive values", () => {
    expect(positive([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("positive function return empty array if there is no positive values", () => {
    expect(positive([-2, -5, -1])).toEqual([]);
  });

  it("positive function should return positive values", () => {
    expect(positive([0, 0, -1, 2, 3])).toEqual([2, 3]);
  });

  it("positive function should return positive values with float values", () => {
    expect(positive([0.1, 0.2, -1.2, 2.3, 3.4])).toEqual([0.1, 0.2, 2.3, 3.4]);
  });

  it("positive function should return positive values with empty array", () => {
    expect(positive([])).toEqual([]);
  });

  it("positive function should return positive values with one element array", () => {
    expect(positive([5])).toEqual([5]);
  });

  it("positive function should return positive values with not to be a number", () => {
    expect(positive(["1", 5])).not.toBe([1, 5]);
  });

  // it('positive function ')
});
