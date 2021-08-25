import decrement from "../helpers/decrement";

test("should decrement given value", () => {
  const value = 1;
  expect(decrement(value)).toEqual(value - 1);
});
