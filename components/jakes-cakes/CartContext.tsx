'use client'

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import type { ProductAccent } from '@/lib/jakes-cakes/products'

export interface CartItem {
  id: string
  name: string
  price: number
  image?: string
  imageAlt?: string
  accent?: ProductAccent
  quantity: number
}

type AddableItem = Omit<CartItem, 'quantity'>

interface CartContextValue {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addItem: (item: AddableItem, quantity: number) => void
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

const CART_STORAGE_KEY = 'jakes-cakes-cart'
export const CART_MAX_QUANTITY = 10

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const hydrated = useRef(false)

  // Session-only storage: survives refreshes/navigation within this tab,
  // clears when the tab/browser closes. Deliberately not cookies/localStorage.
  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(CART_STORAGE_KEY)
      if (stored) setItems(JSON.parse(stored))
    } catch {
      // ignore malformed storage
    }
    hydrated.current = true
  }, [])

  useEffect(() => {
    if (!hydrated.current) return
    window.sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem: CartContextValue['addItem'] = (item, quantity) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: Math.min(CART_MAX_QUANTITY, i.quantity + quantity) }
            : i
        )
      }
      return [...prev, { ...item, quantity: Math.min(CART_MAX_QUANTITY, quantity) }]
    })
  }

  const updateQuantity: CartContextValue['updateQuantity'] = (id, quantity) => {
    setItems(prev =>
      prev.map(i => (i.id === id ? { ...i, quantity: Math.max(1, Math.min(CART_MAX_QUANTITY, quantity)) } : i))
    )
  }

  const removeItem: CartContextValue['removeItem'] = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const clearCart = () => setItems([])

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.quantity * i.price, 0)

  return (
    <CartContext.Provider value={{ items, itemCount, subtotal, addItem, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
