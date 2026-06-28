"use client"

import { ArrowRight, Check, Clock, Maximize, Sparkles, Zap } from "lucide-react"
import { WordsPullUpMultiStyle } from "@/components/animated-text"
import * as React from "react"
import { motion, useInView } from "framer-motion"

const services = [
  {
    number: "01",
    title: "Workflow Automation with AI",
    icon: Zap,
    iconUrl:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "Streamline repetitive business processes",
      "Connect tools into intelligent operating flows",
      "Reduce manual handoffs with AI-driven decisions",
    ],
  },
  {
    number: "02",
    title: "Maximizing Product Value",
    icon: Maximize,
    iconUrl:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "Enhance products with AI capabilities",
      "Prioritize customer-facing value opportunities",
      "Turn product data into smarter experiences",
    ],
  },
  {
    number: "03",
    title: "Custom AI Model Training",
    icon: Clock,
    iconUrl:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "Develop bespoke models for specific business needs",
      "Tune behavior around real workflows and constraints",
      "Move from prototype to production implementation",
    ],
  },
]

export function Services() {
  const gridRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative min-h-screen overflow-hidden bg-black px-4 py-20 text-[#E1E0CC] md:px-6">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl">
        <WordsPullUpMultiStyle
          segments={[
            { text: "AI services for ambitious products.", className: "text-[#E1E0CC]" },
            { text: "Built for business motion. Powered by implementation.", className: "text-gray-500" },
          ]}
          className="mx-auto mb-12 max-w-4xl text-center text-xl font-normal leading-tight sm:text-2xl md:text-3xl lg:text-4xl"
        />
        <div ref={gridRef} className="grid gap-3 sm:gap-2 md:grid-cols-2 lg:h-[520px] lg:grid-cols-4 lg:gap-1">
          <motion.div
            className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[#101010] p-6 lg:min-h-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.75, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Sparkles className="mb-4 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold leading-none tracking-[-0.03em] text-[#E1E0CC]">
                Your AI implementation canvas.
              </p>
            </div>
          </motion.div>
          {services.map(({ number, title, icon: Icon, iconUrl, items }, index) => (
            <motion.article
              key={title}
              className="rounded-[1.75rem] bg-[#212121] p-6 text-[#E1E0CC]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.75, delay: (index + 1) * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-12 flex items-center gap-3">
                <img src={iconUrl} alt="" className="h-10 w-10 rounded-xl object-cover sm:h-12 sm:w-12" />
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="mb-8 flex items-start justify-between gap-4">
                <h3 className="max-w-[12rem] text-xl font-bold leading-none tracking-[-0.03em]">{title}</h3>
                <span className="text-xs text-primary/50">({number})</span>
              </div>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-tight text-gray-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 -rotate-45" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
