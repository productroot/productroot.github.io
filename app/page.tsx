import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { CodePreview } from "@/components/code-preview"
import { Services } from "@/components/services"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <CodePreview />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  )
}

