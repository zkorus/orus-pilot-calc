import assert from "node:assert/strict";
import { test } from "node:test";

import { add, subtract } from "../src/index.ts";

test("add returns the sum", () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-2, 3), 1);
  assert.equal(add(0.5, 0.25), 0.75);
});

test("subtract returns the difference", () => {
  assert.equal(subtract(5, 3), 2);
  assert.equal(subtract(3, 5), -2);
  assert.equal(subtract(0.75, 0.25), 0.5);
});
