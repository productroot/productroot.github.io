import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Stats />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  )
}
