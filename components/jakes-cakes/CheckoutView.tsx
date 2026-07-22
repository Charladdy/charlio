'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useCart, type CartItem } from './CartContext'

type Status = 'form' | 'processing' | 'success'

export default function CheckoutView({ lang }: { lang: string }) {
  const { items, subtotal, clearCart } = useCart()
  const [status, setStatus] = useState<Status>('form')
  const [receipt, setReceipt] = useState<{ items: CartItem[]; total: number } | null>(null)

  const handlePay = (e: FormEvent) => {
    e.preventDefault()
    setStatus('processing')
    const paidItems = items
    const paidTotal = subtotal
    setTimeout(() => {
      setReceipt({ items: paidItems, total: paidTotal })
      clearCart()
      setStatus('success')
    }, 900)
  }

  if (status === 'success' && receipt) {
    return (
      <div className="checkout-success max-w-lg mx-auto text-center">
        <div className="checkout-success-badge">✓</div>
        <h2 className="font-[fraunces-variable] font-semibold text-2xl text-[var(--burgundy)] mb-2">Thanks for your order!</h2>
        <p className="mb-6">This is a demo, so no cake is actually on its way &mdash; but here's what your receipt would look like.</p>
        <div className="text-left bg-[var(--blush)] rounded-xl shadow-md p-6 border-1 border-[var(--grey)] mb-6">
          {receipt.items.map(item => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} &times; {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold border-t-1 border-[var(--grey)] pt-2 mt-2">
            <span>Total</span>
            <span>${receipt.total.toFixed(2)}</span>
          </div>
        </div>
        <Link className="bg-[var(--rose)] hover:cursor-pointer px-5 py-2 border-2 border-[var(--grey)] text-[var(--cream)] inline-block" href={`/${lang}/jakes-cakes/shop`}>
          Back to Shop
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <p className="mb-4">There's nothing in your cart to check out.</p>
        <Link className="bg-[var(--rose)] hover:cursor-pointer px-5 py-2 border-2 border-[var(--grey)] text-[var(--cream)] inline-block" href={`/${lang}/jakes-cakes/shop`}>
          Browse the Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="checkout-grid md:flex gap-10">
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="font-[fraunces-variable] font-semibold text-xl text-[var(--burgundy)] mb-4">Order Summary</h2>
        <div className="bg-[var(--blush)] rounded-xl shadow-md p-6 border-1 border-[var(--grey)]">
          {items.map(item => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} &times; {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold border-t-1 border-[var(--grey)] pt-2 mt-2">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="font-[fraunces-variable] font-semibold text-xl text-[var(--burgundy)] mb-4">Payment Details</h2>
        <form className="payment-form bg-[var(--blush)] rounded-xl shadow-md p-6 border-1 border-[var(--grey)]" onSubmit={handlePay}>
          <p className="text-xs mb-4">This is a demo checkout &mdash; card fields are disabled and no payment is actually processed.</p>
          <div className="payment-field mb-4">
            <label className="payment-label" htmlFor="cc-name">Name on card</label>
            <input className="payment-input" id="cc-name" type="text" defaultValue="Jake Baker" disabled />
          </div>
          <div className="payment-field mb-4">
            <label className="payment-label" htmlFor="cc-number">Card number</label>
            <input className="payment-input" id="cc-number" type="text" defaultValue="4242 4242 4242 4242" disabled />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="payment-field flex-1">
              <label className="payment-label" htmlFor="cc-exp">Expiration</label>
              <input className="payment-input" id="cc-exp" type="text" defaultValue="12/34" disabled />
            </div>
            <div className="payment-field flex-1">
              <label className="payment-label" htmlFor="cc-cvc">CVC</label>
              <input className="payment-input" id="cc-cvc" type="text" defaultValue="123" disabled />
            </div>
          </div>
          <div className="payment-field mb-6">
            <label className="payment-label" htmlFor="cc-zip">ZIP / Postal code</label>
            <input className="payment-input" id="cc-zip" type="text" defaultValue="90210" disabled />
          </div>
          <button className="pay-btn w-full" type="submit" disabled={status === 'processing'}>
            {status === 'processing' ? 'Processing…' : `Pay $${subtotal.toFixed(2)}`}
          </button>
        </form>
      </div>
    </div>
  )
}
