import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { Technologies } from "@/components/technologies"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Technologies />
      <ContactForm />
      <Footer />
    </main>
  )
}

