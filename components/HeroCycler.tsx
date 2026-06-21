'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './HeroCycler.module.css'

interface Props {
  photos: string[]
  intervalSecs: number
  children?: React.ReactNode
}

export default function HeroCycler({ photos, intervalSecs, children }: Props) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const id = setInterval(() => {
      setIdx(i => (i + 1) % photos.length)
    }, intervalSecs * 1000)
    return () => clearInterval(id)
  }, [photos.length, intervalSecs])

  return (
    <div style={{
      position: 'relative',
      height: '60vh',
      width: '100vw',
      minHeight: '400px',
      maxHeight: '650px',
      marginTop: 'var(--navbar-height)',
      background: '#fff',
      borderBottom: '5px solid',
      overflow: 'hidden',
    }}>
      <Image
        key={idx}
        src={photos[idx]}
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        className={styles.photo}
      />
      {children}
    </div>
  )
}
