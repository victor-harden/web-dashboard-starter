# web-dashboard-starter

A starting point for small operational dashboards: a dark responsive layout, KPI
cards and two dependency-free SVG charts (line and bar). The chart math is pure
and covered by `node:test`.

## Features

- `linePath(values, width, height)` and `barRects(values, width, height)` produce
  SVG path/rect data with sensible padding.
- `formatNumber` and `niceMax` helpers with tests.
- `index.html` + `styles.css` show the components with sample data.
- No build step and no dependencies.

## Installation

```bash
git clone https://github.com/victor-harden/web-dashboard-starter.git
cd web-dashboard-starter
npm test
```

## Usage

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Edit `app.js` to load your own JSON and call `renderCharts(data)`.

## Tests

```bash
npm test
```

## License

MIT — see [LICENSE](LICENSE).
