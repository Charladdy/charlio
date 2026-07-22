'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCart, CART_MAX_QUANTITY } from './CartContext'
import PlaceholderTile from './PlaceholderTile'
import type { ProductAccent } from '@/lib/jakes-cakes/products'

export interface ItemProps {
  id: string
  image?: string
  imageAlt?: string
  name: string
  description: string
  price: number
  accent?: ProductAccent
}

export default function Item({ id, image, imageAlt, name, description, price, accent = 'rose' }: ItemProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem({ id, name, price, image, imageAlt, accent }, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="cake-item bg-[var(--blush)] border-1 border-[var(--grey)] rounded-xl shadow-md overflow-hidden flex flex-col">
      {image ? (
        <Image className="h-fit max-h-60 object-cover bg-[var(--grey)]" src={image} alt={imageAlt ?? name} width={500} height={500} />
      ) : (
        <PlaceholderTile accent={accent} label={imageAlt ?? name} className="w-full h-48" />
      )}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-[fraunces-variable] font-semibold text-lg text-[var(--burgundy)]">{name}</h3>
        <p className="text-sm flex-1 mt-1 mb-3">{description}</p>
        <p className="font-semibold mb-3">${price.toFixed(2)}</p>
        <div className="flex items-center justify-between gap-2 mt-auto">
          <div className="flex items-center border-1 bg-[var(--cream)] border-[var(--grey)] rounded-full overflow-hidden">
            <button
              type="button"
              className="px-3 py-1 hover:cursor-pointer disabled:opacity-40 bg-[var(--blush)]"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              aria-label={`Decrease quantity of ${name}`}
            >
              −
            </button>
            <span className="px-3 min-w-[2ch] text-center" aria-live="polite">{quantity}</span>
            <button
              type="button"
              className="px-3 py-1 hover:cursor-pointer disabled:opacity-40 bg-[var(--blush)]"
              onClick={() => setQuantity(q => Math.min(CART_MAX_QUANTITY, q + 1))}
              disabled={quantity >= CART_MAX_QUANTITY}
              aria-label={`Increase quantity of ${name}`}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="bg-[var(--rose)] hover:cursor-pointer px-4 py-2 border-1 border-[var(--grey)] text-[var(--cream)] rounded-full text-sm"
            onClick={handleAdd}
          >
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
