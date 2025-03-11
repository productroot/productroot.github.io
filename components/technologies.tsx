"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

type TechItem = {
  name: string;
  logo: string;
  description: string;
}

type TechCategories = {
  ai: TechItem[];
  product: TechItem[];
  data: TechItem[];
  design: TechItem[];
}

export function Technologies() {
  const categories = [
    { id: "ai" as const, name: "Sztuczna inteligencja" },
    { id: "product" as const, name: "Zarządzanie produktem" },
    { id: "data" as const, name: "Analityka danych" },
    { id: "design" as const, name: "UX/UI Design" },
  ]

  const technologies: TechCategories = {
    ai: [
      { name: "OpenAI", logo: "/openai-logo.webp", description: "Wykorzystanie modeli GPT w celu tworzenia inteligentnych rozwiązań produktowych" },
      { name: "TensorFlow", logo: "/tensorflow-logo.webp", description: "Budowanie i trenowanie niestandardowych modeli uczenia maszynowego" },
      { name: "PyTorch", logo: "/pytorch-logo.webp", description: "Zaawansowane modelowanie danych i prognozowanie" },
      { name: "Hugging Face", logo: "/huggingface-logo.webp", description: "Wdrażanie modeli NLP dla analizy tekstu i automatyzacji" },
      { name: "Langchain", logo: "/langchain-logo.webp", description: "Tworzenie zaawansowanych aplikacji wykorzystujących LLM" },
      { name: "Azure AI", logo: "/azure-ai-logo.webp", description: "Wykorzystanie rozwiązań chmurowych do wdrażania AI w skalowanych aplikacjach" },
    ],
    product: [
      { name: "Jira", logo: "/jira-logo.webp", description: "Zarządzanie projektami i śledzenie postępów rozwoju produktu" },
      { name: "Figma", logo: "/figma-logo.webp", description: "Projektowanie i prototypowanie interfejsów użytkownika" },
      { name: "Notion", logo: "/notion-logo.webp", description: "Dokumentacja produktowa i zarządzanie wiedzą" },
      { name: "Miro", logo: "/miro-logo.webp", description: "Wizualne mapowanie procesów i współpraca" },
      { name: "Productboard", logo: "/productboard-logo.webp", description: "Zarządzanie roadmapą produktu i priorytetyzacja funkcji" },
      { name: "Amplitude", logo: "/amplitude-logo.webp", description: "Analiza zachowań użytkowników i optymalizacja produktu" },
    ],
    data: [
      { name: "Tableau", logo: "/tableau-logo.webp", description: "Tworzenie zaawansowanych dashboardów i analityka wizualna" },
      { name: "Looker", logo: "/looker-logo.webp", description: "Analiza danych biznesowych i tworzenie raportów" },
      { name: "Databricks", logo: "/databricks-logo.webp", description: "Przetwarzanie danych na dużą skalę i analityka" },
      { name: "BigQuery", logo: "/bigquery-logo.webp", description: "Przechowywanie i analiza danych" },
      { name: "Snowflake", logo: "/snowflake-logo.webp", description: "Hurtownia danych i analityka" },
      { name: "dbt", logo: "/dbt-logo.webp", description: "Transformacja danych i budowanie modeli" },
    ],
    design: [
      { name: "Figma", logo: "/figma-logo.webp", description: "Projektowanie i prototypowanie interfejsów" },
      { name: "Maze", logo: "/maze-logo.webp", description: "Testowanie użyteczności i gromadzenie opinii użytkowników" },
      { name: "Adobe XD", logo: "/adobexd-logo.webp", description: "Projektowanie doświadczeń użytkownika" },
      { name: "InVision", logo: "/invision-logo.webp", description: "Prototypowanie interaktywne i współpraca" },
      { name: "Zeplin", logo: "/zeplin-logo.webp", description: "Współpraca między projektantami a programistami" },
      { name: "Sketch", logo: "/sketch-logo.webp", description: "Projektowanie interfejsów i system designu" },
    ],
  }

  return (
    <section id="technologies" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nasze <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">technologie</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Wykorzystujemy najnowocześniejsze technologie i narzędzia, aby dostarczać innowacyjne i skuteczne rozwiązania produktowe.
          </p>
        </div>

        <Tabs defaultValue="ai" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies[category.id].map((tech, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                          <Image
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <h3 className="font-bold text-lg">{tech.name}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {tech.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
} 