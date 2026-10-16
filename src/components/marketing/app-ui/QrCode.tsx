const SIZE = 21
const FINDER = 7

/** Small deterministic PRNG so the pattern is stable between server and client. */
function seeded(seed: string): () => number {
  let h = 2166136261
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619)
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    h ^= h >>> 16
    return (h >>> 0) / 4294967296
  }
}

function isFinderArea(x: number, y: number): boolean {
  const near = (v: number, origin: number) => v >= origin && v < origin + FINDER + 1
  return (near(x, 0) && near(y, 0)) || (near(x, SIZE - FINDER - 1) && near(y, 0)) || (near(x, 0) && near(y, SIZE - FINDER - 1))
}

function finder(ox: number, oy: number, key: string) {
  return (
    <g key={key}>
      <rect x={ox} y={oy} width={7} height={7} fill="currentColor" />
      <rect x={ox + 1} y={oy + 1} width={5} height={5} fill="#fff" />
      <rect x={ox + 2} y={oy + 2} width={3} height={3} fill="currentColor" />
    </g>
  )
}

interface QrCodeProps {
  /** Voucher code; the same code always draws the same pattern. */
  code: string
  size?: number
}

/**
 * A voucher's QR code as it appears on screen. Illustrative only: it draws a
 * stable QR-like pattern for the code and does not encode it.
 */
export function QrCode({ code, size = 96 }: QrCodeProps) {
  const rand = seeded(code)
  const cells: { x: number; y: number }[] = []
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (!isFinderArea(x, y) && rand() > 0.52) cells.push({ x, y })
    }
  }
  return (
    <svg width={size} height={size} viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`} shapeRendering="crispEdges" aria-hidden>
      <rect x={-1} y={-1} width={SIZE + 2} height={SIZE + 2} fill="#fff" />
      {cells.map((c) => (
        <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width={1} height={1} fill="currentColor" />
      ))}
      {finder(0, 0, 'a')}
      {finder(SIZE - FINDER, 0, 'b')}
      {finder(0, SIZE - FINDER, 'c')}
    </svg>
  )
}
