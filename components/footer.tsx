"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github, Send } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted/50 pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                ProductRoot
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Specjalizujemy się w zarządzaniu produktem w obszarach oprogramowania i sztucznej inteligencji.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Nawigacja</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Doświadczenie
                </Link>
              </li>
              <li>
                <Link href="#technologies" className="text-muted-foreground hover:text-primary transition-colors">
                  Technologie
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Usługi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Strategia AI
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Zarządzanie produktem
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Leadership produktowy
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Innowacje produktowe
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Optymalizacja produktu
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Zapisz się, aby otrzymywać najnowsze informacje i aktualizacje.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Twój email" className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subskrybuj</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            &copy; {currentYear} ProductRoot. Wszelkie prawa zastrzeżone.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Polityka prywatności
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Warunki korzystania
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

