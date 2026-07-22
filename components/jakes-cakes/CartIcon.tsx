'use client'

import Image from 'next/image'
import { useCart } from './CartContext'

export default function CartIcon({ href, alt }: { href: string; alt: string }) {
  const { itemCount } = useCart()

  return (
    <a className="relative float-right mr-15 mt-10 z-20 w-10" href={href}>
      <Image className="h-full" src="/jakes-cakes/cart.svg" alt={alt} height={200} width={200} loading="eager" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[var(--rose)] text-[var(--cream)] text-xs font-semibold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
          {itemCount}
        </span>
      )}
    </a>
  )
}
