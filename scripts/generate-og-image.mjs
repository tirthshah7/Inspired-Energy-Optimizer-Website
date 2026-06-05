import sharp from 'sharp';

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#0f172a"/>
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#bg)"/>
  <circle cx="1060" cy="90" r="260" fill="#38bdf8" opacity="0.16"/>
  <circle cx="90" cy="560" r="280" fill="#22c55e" opacity="0.16"/>
  <circle cx="930" cy="560" r="220" fill="#a855f7" opacity="0.12"/>

  <g transform="translate(82 72)">
    <rect x="0" y="0" width="72" height="72" rx="18" fill="url(#mark)"/>
    <path d="M39.6 11L19 41.2H34.3L30.5 61L53 28.2H37.5L39.6 11Z" fill="white"/>
    <text x="94" y="46" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="40" font-weight="700" fill="#f8fafc">Enerwyse</text>
    <text x="96" y="74" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="18" fill="#94a3b8">Intelligent Energy</text>
  </g>

  <g transform="translate(82 230)">
    <text font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="66" font-weight="760" fill="#f8fafc">
      <tspan x="0" y="0">Cut Global Adjustment</tspan>
      <tspan x="0" y="78">exposure before peaks hit.</tspan>
    </text>
    <text x="0" y="186" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="30" fill="#cbd5e1">
      <tspan x="0" dy="0">GA-aware energy intelligence for Ontario</tspan>
      <tspan x="0" dy="42">commercial, industrial, and greenhouse operators.</tspan>
    </text>
  </g>

  <g transform="translate(82 522)">
    <rect x="0" y="0" width="258" height="48" rx="24" fill="#22c55e" opacity="0.16" stroke="#22c55e" stroke-opacity="0.42"/>
    <text x="24" y="31" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="20" font-weight="650" fill="#86efac">IESO peak forecasting</text>
    <rect x="282" y="0" width="228" height="48" rx="24" fill="#38bdf8" opacity="0.14" stroke="#38bdf8" stroke-opacity="0.38"/>
    <text x="306" y="31" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="20" font-weight="650" fill="#7dd3fc">No new hardware</text>
  </g>

  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0f172a"/>
      <stop offset="0.48" stop-color="#111827"/>
      <stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
      <stop stop-color="#22c55e"/>
      <stop offset="1" stop-color="#38bdf8"/>
    </linearGradient>
  </defs>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
