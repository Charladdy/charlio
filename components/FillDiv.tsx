'use client'

import { useEffect, useRef, useState } from 'react'
import Particles from './Particles'

function FallbackFillDiv() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const DURATION = 3000
    let startTime: number | null = null
    let frameId: number

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const t = ((timestamp - startTime) % DURATION) / DURATION
      el!.style.opacity = String(0.175 * (1 - Math.cos(2 * Math.PI * t)))
      frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div
      ref={ref}
      className="fill-div"
      style={{ backgroundImage: 'url("/hero-fg.png")' }}
    />
  )
}

export default function FillDiv() {
  const [videoFailed, setVideoFailed] = useState(false)

  if (videoFailed) {
    return <FallbackFillDiv />
  }

  return (
    <>
      <video
        className="fill-div"
        width={1920}
        height={1080}
        autoPlay
        loop
        muted
        playsInline
        onError={() => setVideoFailed(true)}
      >
        <source src="/video/GradientBackground.mp4" type="video/mp4" />
      </video>
      <Particles />
    </>
  )
}
