'use client'

interface NavLink {
  label: string
  href: string
}

interface NavMenuProps {
  links: NavLink[]
  bottomLoc?: number
  hamburgerSrc?: string
}

export default function HorizontalNavMenu({ links, bottomLoc, hamburgerSrc }: NavMenuProps) {

  if(!bottomLoc) bottomLoc = 10;

  return (
    <>
        <div className="absolute mx-auto w-full" aria-label="Site navigation"  style={{bottom: bottomLoc}}>
          <ul className="flex justify-center items-center mx-auto w-fit">
            {links.map((link) => (
              <li className ="display: inline mx-auto" key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}