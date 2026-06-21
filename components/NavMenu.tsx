'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface NavLink {
  label: string
  href: string
}

interface NavMenuProps {
  links: NavLink[]
  hamburgerSrc?: string
  hamburgerDarkSrc?: string
}

export default function NavMenu({ links, hamburgerSrc = '/hamburger-menu.svg', hamburgerDarkSrc = '/hamburger-menu_dark.svg' }: NavMenuProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <button
        className="hamburger-btn"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <Image className="dark:invisible" src={hamburgerSrc} alt="" width={25} height={20} style={{ height: 'auto', width: 'auto' }} />
        <Image className="invisible dark:visible" src={hamburgerDarkSrc} alt="" width={25} height={20} style={{ height: 'auto', width: 'auto' }} />
      </button>

      {mounted && open && createPortal(
        <nav className="nav-menu" aria-label="Site navigation">
          <ul>
            {links.map((link) => (
              <li className="v-nav-menu-li" key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>,
        document.body
      )}
    </>
  )
}
