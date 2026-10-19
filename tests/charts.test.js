import test from "node:test";
import assert from "node:assert/strict";
import { barRects, formatNumber, linePath, niceMax } from "../charts.js";

test("niceMax rounds up to a magnitude", () => {
  assert.equal(niceMax([12]), 20);
  assert.equal(niceMax([1]), 1);
  assert.equal(niceMax([]), 1);
});

test("linePath starts with M and has one point per value", () => {
  const path = linePath([1, 2, 3], 100, 100);
  assert.ok(path.startsWith("M"));
  assert.equal(path.split(" ").length, 3);
});

test("linePath empty for no data", () => {
  assert.equal(linePath([], 100, 100), "");
});

test("barRects returns one rect per value", () => {
  const rects = barRects([10, 20], 200, 100);
  assert.equal(rects.length, 2);
  assert.ok(rects[0].height < rects[1].height);
});

test("barRects heights stay inside the chart", () => {
  const rects = barRects([100, 50], 200, 100);
  for (const rect of rects) {
    assert.ok(rect.y >= 0);
    assert.ok(rect.y + rect.height <= 100 + 0.001);
  }
});

test("formatNumber compacts large values", () => {
  assert.equal(formatNumber(1500), "1.5K");
});
