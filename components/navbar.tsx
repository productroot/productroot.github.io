"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Strona główna", href: "#home" },
    { name: "O nas", href: "#about" },
    { name: "Usługi", href: "#services" },
    { name: "Doświadczenie", href: "#experience" },
    { name: "Technologie", href: "#technologies" },
    { name: "Kontakt", href: "#contact" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
    }`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            ProductRoot
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button>Skontaktuj się</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 md:hidden">
          <div className="container py-8">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button className="w-full">Skontaktuj się</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 