"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, BarChart3, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-muted/50">
            <span className="text-primary">Eksperci w zarządzaniu produktem</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-primary"></div>
            <span>AI & Software</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Budowanie <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">doskonałych produktów</span> z AI i Software
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl">
            Specjalizujemy się w zarządzaniu produktem, dostarczając strategie i przywództwo dla firm wykorzystujących sztuczną inteligencję i zaawansowane oprogramowanie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="#services">
                Poznaj nasze usługi <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Skontaktuj się</Link>
            </Button>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" />
              <span className="font-medium">Ekspertyza AI</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span className="font-medium">Strategia produktowa</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">Leadership</span>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-square lg:aspect-auto">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-blue-600/20 blur-3xl opacity-50"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-blue-600 opacity-10"></div>
              <div className="relative p-1 rounded-3xl overflow-hidden border border-primary/20 bg-background/80 backdrop-blur-sm">
                <Image 
                  src="/product-management.webp"
                  alt="Product Management"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

