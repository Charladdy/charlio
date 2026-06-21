'use client'

import { useEffect, useState } from 'react'

const WORDS = ['INSPIRES', 'TRANSFORMS', 'CAPTIVATES'] as const
type Phase = 'idle' | 'exit' | 'enter'

const PHASE_DURATIONS: Record<Phase, number> = { idle: 2500, exit: 500, enter: 500 }

export default function HeroText() {
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => {
    const t = setTimeout(() => {
      if (phase === 'idle') {
        setPhase('exit')
      } else if (phase === 'exit') {
        setWordIdx(i => (i + 1) % WORDS.length)
        setPhase('enter')
      } else {
        setPhase('idle')
      }
    }, PHASE_DURATIONS[phase])
    return () => clearTimeout(t)
  }, [phase])

  return (
    <div className="hero-text-wrapper">
      <div className="hero-text-left">
        <span className="hero-web">WEB</span>
        <span className="hero-presence">PRESENCE</span>
        <span className="hero-that">that...</span>
      </div>
      <div className="hero-text-right">
        <span className={`hero-word hero-word--${phase}`}>
          {WORDS[wordIdx]}
        </span>
      </div>
    </div>
  )
}
