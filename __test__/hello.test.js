const { greet } = require("../hello");

test("greet function", () => {
  expect(greet("Github Actions!")).toBe("Hello, Github Actions!");
});
