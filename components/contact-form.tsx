"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Banner } from "@/components/ui/banner"

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'patryk@productroot.io',
          subject: `New contact form submission from ${formData.firstName} ${formData.lastName}`,
          ...formData
        }),
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
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#0B1120] text-white py-24 relative">
      {showBanner && (
        <Banner
          message="Thank you for your message. We'll get back to you soon!"
          onClose={() => setShowBanner(false)}
        />
      )}
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder="First Name"
              className="bg-transparent border-gray-700"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <Input
              placeholder="Last Name"
              className="bg-transparent border-gray-700"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            className="bg-transparent border-gray-700"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            placeholder="Company"
            className="bg-transparent border-gray-700"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
          />
          <Textarea
            placeholder="Message"
            className="bg-transparent border-gray-700"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  )
}

