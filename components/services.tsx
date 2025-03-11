"use client"

import { 
  Brain, 
  LightbulbIcon, 
  Users, 
  LineChart, 
  TrendingUp, 
  Layers
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Services() {
  const services = [
    {
      title: "Strategia AI",
      description: "Opracowanie kompleksowych strategii wdrażania i wykorzystania sztucznej inteligencji w produktach i procesach biznesowych.",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Zarządzanie produktem",
      description: "Profesjonalne zarządzanie produktem na każdym etapie cyklu życia - od koncepcji po wzrost i optymalizację.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Leadership produktowy",
      description: "Doradztwo i wsparcie w budowaniu i rozwijaniu skutecznych zespołów produktowych oraz kultury produktowej w organizacji.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Innowacje produktowe",
      description: "Identyfikacja możliwości innowacji i opracowanie strategii rozwoju produktu wykorzystujących najnowsze technologie.",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    {
      title: "Optymalizacja produktu",
      description: "Analiza istniejących produktów i procesów w celu zwiększenia ich efektywności, wydajności i wartości dla użytkowników.",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: "Strategia wzrostu",
      description: "Opracowanie kompleksowych strategii wzrostu produktu, w tym monetyzacji, pozyskiwania użytkowników i ekspansji rynkowej.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nasze <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">usługi</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferujemy kompleksowe rozwiązania w zakresie zarządzania produktem, AI i oprogramowania, dostosowane do potrzeb nowoczesnych organizacji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border bg-background hover:shadow-md transition-all duration-300 hover:border-primary/40 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-5">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-muted/50 mb-4">
            <span>Dostosowane do Twoich potrzeb</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 max-w-xl mx-auto">
            Potrzebujesz spersonalizowanego rozwiązania?
          </h3>
          <Button asChild size="lg">
            <Link href="#contact">Skontaktuj się z nami</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

