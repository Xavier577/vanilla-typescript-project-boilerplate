import increment from "../helpers/increment";

test("should increment given value", () => {
  const value = 1;
  expect(increment(value)).toEqual(value + 1);
});
