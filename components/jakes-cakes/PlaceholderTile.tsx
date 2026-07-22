import type { ProductAccent } from '@/lib/jakes-cakes/products'

const ACCENT_VARS: Record<ProductAccent, string> = {
  rose: 'var(--rose)',
  plum: 'var(--plum)',
  green: 'var(--green)',
  burgundy: 'var(--burgundy)',
  blush: 'var(--blush)',
}

export default function PlaceholderTile({
  accent = 'rose',
  label,
  className = '',
}: {
  accent?: ProductAccent
  label?: string
  className?: string
}) {
  const color = ACCENT_VARS[accent] ?? ACCENT_VARS.rose

  return (
    <div
      className={`placeholder-tile flex items-center justify-center ${className}`}
      style={{
        background: `repeating-linear-gradient(135deg, ${color}, ${color} 14px, color-mix(in srgb, ${color} 75%, black) 14px, color-mix(in srgb, ${color} 75%, black) 28px)`,
      }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 11h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Z" stroke="white" strokeWidth="1.5" />
        <path d="M4 11c0-2 2-3 2-5s-1-2-1-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 11c0-2 2-3 2-5s-1-2-1-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 11c0-2-2-3-2-5s1-2 1-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="14.5" r="1" fill="white" />
        <circle cx="12" cy="16" r="1" fill="white" />
        <circle cx="17" cy="14.5" r="1" fill="white" />
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </div>
  )
}
