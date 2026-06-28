"use client"

import { useState, FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Banner } from "@/components/ui/banner"
import { WordsPullUpMultiStyle } from "@/components/animated-text"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  })
  const [showBanner, setShowBanner] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xgvovbob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          message: formData.message
        })
      })

      if (response.ok) {
        setShowBanner(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: ""
        })
      }
    } catch (error) {
      console.error('Error sending form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-black px-4 py-20 text-[#E1E0CC] md:px-6">
      {showBanner && (
        <Banner
          message="Thank you for your message. We'll get back to you soon!"
          onClose={() => setShowBanner(false)}
        />
      )}
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-[#101010] p-5 sm:p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.28em] text-primary sm:text-xs">Inquiries</p>
            <WordsPullUpMultiStyle
              segments={[
                { text: "Tell us what should move faster.", className: "text-[#E1E0CC]" },
                { text: "We will shape the AI path.", className: "text-gray-500" },
              ]}
              className="text-3xl leading-[0.98] tracking-[-0.035em] sm:text-4xl md:text-5xl"
            />
          </div>
          <div className="space-y-3 text-sm text-gray-400">
            <p>ProductRoot</p>
            <p>VAT ID: PL6941663049</p>
            <a href="tel:+48888316747" className="inline-flex text-primary transition-colors hover:text-[#E1E0CC]">
              Mobile: +48 888 316 747
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder="First Name"
              className="h-12 rounded-full border-primary/15 bg-black/35 px-5 text-[#E1E0CC] placeholder:text-gray-500 focus-visible:ring-primary/40"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <Input
              placeholder="Last Name"
              className="h-12 rounded-full border-primary/15 bg-black/35 px-5 text-[#E1E0CC] placeholder:text-gray-500 focus-visible:ring-primary/40"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            className="h-12 rounded-full border-primary/15 bg-black/35 px-5 text-[#E1E0CC] placeholder:text-gray-500 focus-visible:ring-primary/40"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            placeholder="Company"
            className="h-12 rounded-full border-primary/15 bg-black/35 px-5 text-[#E1E0CC] placeholder:text-gray-500 focus-visible:ring-primary/40"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
          />
          <Textarea
            placeholder="Message"
            className="min-h-36 rounded-[1.5rem] border-primary/15 bg-black/35 px-5 py-4 text-[#E1E0CC] placeholder:text-gray-500 focus-visible:ring-primary/40"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <Button
            type="submit"
            className="group h-auto w-full gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-black transition-all hover:gap-3 hover:bg-primary sm:text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-primary transition-transform group-hover:scale-110">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </form>
      </div>
    </section>
  )
}
