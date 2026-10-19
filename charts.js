export function niceMax(values) {
  const max = Math.max(1, ...values);
  const magnitude = 10 ** Math.floor(Math.log10(max));
  return Math.ceil(max / magnitude) * magnitude;
}

export function linePath(values, width, height, padding = 10) {
  if (values.length === 0) return "";
  const max = niceMax(values);
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;
  return values
    .map((value, index) => {
      const x = padding + (innerWidth * index) / Math.max(1, values.length - 1);
      const y = padding + innerHeight - (innerHeight * value) / max;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export function barRects(values, width, height, padding = 10) {
  const max = niceMax(values);
  const slot = (width - padding * 2) / Math.max(1, values.length);
  const barWidth = slot * 0.6;
  return values.map((value, index) => ({
    x: padding + slot * index + slot * 0.2,
    y: padding + (height - padding * 2) * (1 - value / max),
    width: barWidth,
    height: (height - padding * 2) * (value / max),
  }));
}

export function formatNumber(value) {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(value);
}
