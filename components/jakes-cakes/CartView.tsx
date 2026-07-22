'use client'

import Image from 'next/image'
import { useCart, CART_MAX_QUANTITY } from './CartContext'
import PlaceholderTile from './PlaceholderTile'

export interface CartViewDict {
  empty: string
  browseShop: string
  each: string
  decreaseQuantityAria: string
  increaseQuantityAria: string
  remove: string
  subtotal: string
  proceedToCheckout: string
}

export default function CartView({ lang, dict }: { lang: string; dict: CartViewDict }) {
  const { items, subtotal, updateQuantity, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <p className="mb-4">{dict.empty}</p>
        <a
          className="bg-[var(--rose)] hover:cursor-pointer px-5 py-2 border-2 border-[var(--grey)] text-[var(--cream)] inline-block"
          href={`/${lang}/jakes-cakes/shop`}
        >
          {dict.browseShop}
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className="cart-rows mb-8">
        {items.map(item => (
          <div key={item.id} className="cart-row flex items-center gap-4 py-4 border-b-1 border-[var(--grey)]">
            {item.image ? (
              <Image className="w-16 h-16 object-cover rounded-md flex-shrink-0" src={item.image} alt={item.imageAlt ?? item.name} width={100} height={100} />
            ) : (
              <PlaceholderTile accent={item.accent} label={item.imageAlt ?? item.name} className="w-16 h-16 rounded-md flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className="font-[fraunces-variable] font-semibold text-[var(--burgundy)]">{item.name}</p>
              <p className="text-sm">${item.price.toFixed(2)} {dict.each}</p>
            </div>
            <div className="flex items-center border-1 border-[var(--grey)] rounded-full overflow-hidden">
              <button
                type="button"
                className="px-3 py-1 hover:cursor-pointer disabled:opacity-40"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                aria-label={dict.decreaseQuantityAria.replace('{name}', item.name)}
              >
                −
              </button>
              <span className="px-3 min-w-[2ch] text-center" aria-live="polite">{item.quantity}</span>
              <button
                type="button"
                className="px-3 py-1 hover:cursor-pointer disabled:opacity-40"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                disabled={item.quantity >= CART_MAX_QUANTITY}
                aria-label={dict.increaseQuantityAria.replace('{name}', item.name)}
              >
                +
              </button>
            </div>
            <p className="w-20 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            <button
              type="button"
              className="text-sm underline hover:cursor-pointer hover:font-semibold"
              onClick={() => removeItem(item.id)}
            >
              {dict.remove}
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary flex justify-end">
        <div className="w-full max-w-sm bg-[var(--blush)] rounded-xl shadow-md p-6 border-1 border-[var(--grey)]">
          <div className="flex justify-between mb-4 text-lg font-semibold">
            <span>{dict.subtotal}</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <a
            className="bg-[var(--rose)] hover:cursor-pointer px-5 py-2 border-2 border-[var(--grey)] text-[var(--cream)] block text-center"
            href={`/${lang}/jakes-cakes/checkout`}
          >
            {dict.proceedToCheckout}
          </a>
        </div>
      </div>
    </div>
  )
}
