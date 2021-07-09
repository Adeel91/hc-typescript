import { add } from ".";

describe("question 2", () => {
  test("get question right", () => {
    expect(add(3)).toEqual(3);
    expect(add(5)).toEqual(8);
    expect(add(4)).toEqual(12);
  });
});
