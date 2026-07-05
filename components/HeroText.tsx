'use client'

import { useEffect, useState } from 'react'
import type { HeroWord } from '@/lib/i18n/locales'

type Phase = 'idle' | 'exit' | 'enter'

const PHASE_DURATIONS: Record<Phase, number> = { idle: 2500, exit: 500, enter: 500 }

interface HeroTextDict {
  heroWords: readonly [HeroWord, HeroWord]
  connector: string
  cyclingWords: readonly string[]
}

interface HeroTextProps {
  dict: HeroTextDict
}

export default function HeroText({ dict }: HeroTextProps) {
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => {
    const t = setTimeout(() => {
      if (phase === 'idle') {
        setPhase('exit')
      } else if (phase === 'exit') {
        setWordIdx(i => (i + 1) % dict.cyclingWords.length)
        setPhase('enter')
      } else {
        setPhase('idle')
      }
    }, PHASE_DURATIONS[phase])
    return () => clearTimeout(t)
  }, [phase, dict.cyclingWords.length])

  return (
    <div className="hero-text-wrapper">
      <div className="hero-text-left">
        {dict.heroWords.map((word, i) => (
          <span key={i} className={word.emphasis === 'large' ? 'hero-web' : 'hero-presence'}>{word.text}</span>
        ))}
        <span className="hero-that">{dict.connector}</span>
      </div>
      <div className="hero-text-right">
        <span className={`hero-word hero-word--${phase}`}>
          {dict.cyclingWords[wordIdx]}
        </span>
      </div>
    </div>
  )
}
