"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BrainCircuit, LineChart, Building2, CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">ProductRoot</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Jesteśmy zespołem ekspertów z pasją do zarządzania produktem, innowacji technologicznych i rozwiązań opartych na sztucznej inteligencji.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 blur-3xl opacity-50"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/20 bg-background/60 backdrop-blur-sm p-1">
                <Image
                  src="/team-collaboration.webp"
                  alt="Zespół ProductRoot"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Nasza historia</h3>
              <p className="text-muted-foreground">
                ProductRoot powstał z przekonania, że doskonałe zarządzanie produktem jest kluczem do sukcesu w dzisiejszym cyfrowym świecie. Nasz zespół ekspertów łączy wieloletnie doświadczenie w różnych branżach, aby dostarczać kompleksowe rozwiązania z zakresu zarządzania produktem dla firm wykorzystujących zaawansowane technologie.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Doświadczenie w branży</h4>
                  <p className="text-sm text-muted-foreground">Wieloletnie doświadczenie w e-commerce, mobile i sektorze hotelarskim.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Ekspertyza AI</h4>
                  <p className="text-sm text-muted-foreground">Specjalistyczna wiedza w zakresie integracji i wykorzystania sztucznej inteligencji w produktach.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Zorientowanie na klienta</h4>
                  <p className="text-sm text-muted-foreground">Nasze rozwiązania są zawsze dostosowane do specyficznych potrzeb i celów naszych klientów.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <Card className="border-none shadow-md bg-gradient-to-b from-background to-muted/40">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Inteligencja i innowacja</h3>
              <p className="text-muted-foreground">
                Stosujemy najnowsze technologie i metodologie, aby tworzyć innowacyjne strategie produktowe.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md bg-gradient-to-b from-background to-muted/40">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Wymierne wyniki</h3>
              <p className="text-muted-foreground">
                Nasze strategie są zorientowane na wyniki, wspierając wzrost i sukces naszych klientów.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md bg-gradient-to-b from-background to-muted/40">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Solidne fundamenty</h3>
              <p className="text-muted-foreground">
                Budujemy trwałe strategie produktowe oparte na solidnych fundamentach biznesowych.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 