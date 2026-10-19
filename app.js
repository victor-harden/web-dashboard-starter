import { barRects, formatNumber, linePath } from "./charts.js";

const traffic = [120, 180, 150, 220, 260, 240, 300];
const endpoints = [32, 55, 18, 41];

export function renderCharts(svgLine, svgBar, lineValues, barValues) {
  svgLine.innerHTML =
    `<path d="${linePath(lineValues, 600, 200)}" fill="none" ` +
    `stroke="#38bdf8" stroke-width="3"></path>`;
  svgBar.innerHTML = barRects(barValues, 600, 200)
    .map(
      (rect) =>
        `<rect x="${rect.x.toFixed(1)}" y="${rect.y.toFixed(1)}" ` +
        `width="${rect.width.toFixed(1)}" height="${rect.height.toFixed(1)}" ` +
        `fill="#38bdf8"></rect>`
    )
    .join("");
}

function main() {
  document.getElementById("kpi-requests").textContent = formatNumber(
    traffic.reduce((a, b) => a + b, 0)
  );
  document.getElementById("kpi-errors").textContent = "3";
  document.getElementById("kpi-latency").textContent = "180 ms";
  renderCharts(
    document.getElementById("line-chart"),
    document.getElementById("bar-chart"),
    traffic,
    endpoints
  );
}

if (typeof document !== "undefined") main();
