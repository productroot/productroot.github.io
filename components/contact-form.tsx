"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Imię musi zawierać co najmniej 2 znaki.",
  }),
  email: z.string().email({
    message: "Proszę podać prawidłowy adres email.",
  }),
  subject: z.string().min(5, {
    message: "Temat musi zawierać co najmniej 5 znaków.",
  }),
  message: z.string().min(10, {
    message: "Wiadomość musi zawierać co najmniej 10 znaków.",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // Symulacja wysłania formularza
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success("Wiadomość została wysłana pomyślnie!")
      form.reset()
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skontaktuj się <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">z nami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Chcesz dowiedzieć się więcej o naszych usługach lub omówić potencjalną współpracę? Skontaktuj się z nami!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-card rounded-xl border shadow-sm p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">Informacje kontaktowe</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">contact@productroot.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Telefon</h4>
                    <p className="text-muted-foreground">+48 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Lokalizacja</h4>
                    <p className="text-muted-foreground">Warszawa, Polska</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35409416074!2d20.8502896722433!3d52.23303857772456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1668561609671!5m2!1spl!2spl" 
                className="w-full h-72 border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-card rounded-xl border shadow-sm p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Dziękujemy za wiadomość!</h3>
                <p className="text-muted-foreground mb-6">
                  Twoja wiadomość została wysłana. Odpowiemy na nią najszybciej jak to możliwe.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Wyślij kolejną wiadomość
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Imię i nazwisko</FormLabel>
                          <FormControl>
                            <Input placeholder="Jan Kowalski" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jan.kowalski@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Temat</FormLabel>
                        <FormControl>
                          <Input placeholder="W czym możemy pomóc?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Wiadomość</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Opisz swoje potrzeby..." 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Wysyłanie...
                      </>
                    ) : (
                      "Wyślij wiadomość"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

