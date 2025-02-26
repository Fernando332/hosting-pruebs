"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import Link from "next/link"

export default function CartDrawer({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const { cartItems, removeFromCart, getCartTotal } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tu Carrito</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-200px)] my-4">
          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Cantidad: {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </ScrollArea>
        <div className="space-y-4">
          <div className="flex justify-between items-center font-semibold">
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <Link href="/checkout" onClick={() => setIsOpen(false)}>
            <Button className="w-full">Proceder al Pago</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

