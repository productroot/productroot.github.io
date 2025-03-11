"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Smartphone, Building, Heart, Plane, Car } from "lucide-react"

export function Experience() {
  const industries = [
    {
      name: "E-commerce",
      icon: <ShoppingCart className="h-5 w-5" />,
      description: "Doświadczenie w budowaniu strategii produktowych dla platform e-commerce, optymalizacji procesu zakupowego i wdrażaniu AI w rekomendacjach produktowych.",
      brands: ["Brand A", "Brand B", "Brand C"],
    },
    {
      name: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      description: "Zarządzanie produktem dla aplikacji mobilnych, od koncepcji po wdrożenie, z naciskiem na doskonałe doświadczenie użytkownika i wysoką retencję.",
      brands: ["Brand D", "Brand E", "Brand F"],
    },
    {
      name: "Hospitality",
      icon: <Building className="h-5 w-5" />,
      description: "Strategiczne doradztwo dla sektora hotelarskiego, obejmujące transformację cyfrową, optymalizację doświadczenia gości i zastosowanie AI.",
      brands: ["Brand G", "Brand H", "Brand I"],
    },
  ]

  const caseStudies = [
    {
      title: "Transformacja produktowa dla platformy e-commerce",
      description: "Opracowanie i wdrożenie strategii rozwoju produktu, która zwiększyła konwersję o 35% i zaangażowanie użytkowników o 42%.",
      icon: <ShoppingCart className="h-5 w-5" />,
      image: "/ecommerce-case.webp",
      tags: ["E-commerce", "AI", "UX Design"],
    },
    {
      title: "Strategia produktowa dla aplikacji zdrowotnej",
      description: "Stworzenie strategii rozwoju aplikacji mobilnej z wykorzystaniem AI, co przełożyło się na 65% wzrost retencji użytkowników.",
      icon: <Heart className="h-5 w-5" />,
      image: "/mobile-case.webp",
      tags: ["Mobile", "Healthcare", "AI"],
    },
    {
      title: "Optymalizacja doświadczenia gości w sieci hoteli",
      description: "Wdrożenie inteligentnych rozwiązań poprawiających doświadczenie gości, co zwiększyło współczynnik zadowolenia o 28%.",
      icon: <Building className="h-5 w-5" />,
      image: "/hospitality-case.webp",
      tags: ["Hospitality", "Customer Experience", "Digital Transformation"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nasze <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">doświadczenie</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Zdobyliśmy bogate doświadczenie w różnych branżach, co pozwala nam dostarczać kompleksowe i skuteczne rozwiązania produktowe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="border-none shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold">{industry.name}</h3>
                </div>
                <p className="text-muted-foreground mb-5">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.brands.map((brand, idx) => (
                    <Badge key={idx} variant="secondary">
                      {brand}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Case studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group">
                <div className="rounded-xl overflow-hidden mb-5 aspect-video relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white text-sm font-medium">Zobacz szczegóły</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {study.icon}
                  </div>
                  <h4 className="font-bold">{study.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 