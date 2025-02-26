"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import CartDrawer from "@/components/cart-drawer"
import { useAuth } from "@/components/auth-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems } = useCart()
  const { user, logout } = useAuth()

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            HostPro
          </Link>

          <div className="hidden md:flex space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Servicios</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/productos/web">Hosting Web</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/productos/minecraft">Hosting Minecraft</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/productos/discord">Bots de Discord</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/soporte">
              <Button variant="ghost">Soporte</Button>
            </Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">{user.name}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/panel-usuario">Panel de Usuario</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={logout}>Cerrar Sesión</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Iniciar Sesión</Button>
                </Link>
                <Link href="/registro">
                  <Button>Crear Cuenta</Button>
                </Link>
              </>
            )}
            <Button variant="outline" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span className="sr-only">Carrito</span>
              <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {cartItems.length}
              </span>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="outline" onClick={() => setIsCartOpen(true)} className="mr-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Carrito</span>
              <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {cartItems.length}
              </span>
            </Button>
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/productos/web">
              <Button variant="ghost" className="w-full justify-start">
                Hosting Web
              </Button>
            </Link>
            <Link href="/productos/minecraft">
              <Button variant="ghost" className="w-full justify-start">
                Hosting Minecraft
              </Button>
            </Link>
            <Link href="/productos/discord">
              <Button variant="ghost" className="w-full justify-start">
                Bots de Discord
              </Button>
            </Link>
            <Link href="/soporte">
              <Button variant="ghost" className="w-full justify-start">
                Soporte
              </Button>
            </Link>
            {user ? (
              <>
                <Link href="/panel-usuario">
                  <Button variant="ghost" className="w-full justify-start">
                    Panel de Usuario
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start" onClick={logout}>
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="w-full justify-start">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link href="/registro">
                  <Button className="w-full justify-start">Crear Cuenta</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </nav>
  )
}

