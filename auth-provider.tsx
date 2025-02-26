"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Simulación de login
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const newUser = { id: "1", name: "Usuario Ejemplo", email }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    router.push("/panel-usuario")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  const register = async (name: string, email: string, password: string) => {
    // Simulación de registro
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const newUser = { id: "1", name, email }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    router.push("/panel-usuario")
  }

  return <AuthContext.Provider value={{ user, login, logout, register }}>{children}</AuthContext.Provider>
}

