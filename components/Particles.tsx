'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  alpha: number
  vx: number
  vy: number
  phase: number
}

function makeParticle(w: number, h: number, fromBottom = false): Particle {
  return {
    x: Math.random() * w,
    y: fromBottom ? h + Math.random() * 80 : Math.random() * h,
    radius: 3 + Math.random() * 14,
    alpha: 0.06 + Math.random() * 0.28,
    vx: (Math.random() - 0.5) * 0.35,
    vy: -(0.25 + Math.random() * 0.55),
    phase: Math.random() * Math.PI * 2,
  }
}

export default function Particles({ count = 45 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frameId: number
    let particles: Particle[] = []

    function resize() {
      canvas!.width = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
    }

    function init() {
      resize()
      particles = Array.from({ length: count }, () =>
        makeParticle(canvas!.width, canvas!.height, false)
      )
    }

    function draw(ts: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      for (const p of particles) {
        p.x += p.vx + 0.25 * Math.sin(ts * 0.0004 + p.phase)
        p.y += p.vy

        if (p.y + p.radius < 0) {
          Object.assign(p, makeParticle(canvas!.width, canvas!.height, true))
        }

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255, 210, 60, ${p.alpha})`
        ctx!.fill()
      }

      frameId = requestAnimationFrame(draw)
    }

    init()
    frameId = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}
