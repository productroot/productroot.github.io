"use client"

import { Button } from "@/components/ui/button"
import { WordsPullUp } from "@/components/animated-text"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import * as React from "react"

export function Hero() {
  const taglines: string[] = ["Innovation in motion", "Driving your Product forward", "Where ideas take fly"]
  const [currentTaglineIndex, setCurrentTaglineIndex] = React.useState<number>(0)
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex: number) => (prevIndex + 1) % taglines.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section id="home" className="h-screen bg-black p-4 text-[#E1E0CC] md:p-6">
      <div className="relative h-full overflow-hidden rounded-2xl bg-black md:rounded-[2rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <header className="absolute left-1/2 top-0 z-20 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
          <nav className="mx-auto flex w-fit max-w-full items-center gap-3 rounded-b-2xl bg-black px-4 py-2 shadow-2xl shadow-black/40 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {[
              ["Story", "#about"],
              ["Agents", "#services"],
              ["Flow", "#services"],
              ["Models", "#services"],
              ["Ask", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[10px] uppercase tracking-[0.16em] transition-colors sm:text-xs sm:tracking-[0.2em] md:text-sm"
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-8 md:px-8 md:pb-10 lg:px-10">
          <div className="grid items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-5 min-h-[1.2em] text-sm font-light uppercase tracking-[0.24em] text-primary/70 md:text-base">
                {taglines[currentTaglineIndex]}
              </p>
              <WordsPullUp
                text="ProductRoot"
                showAsterisk
                className="text-[13.5vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC] sm:text-[12vw] md:text-[11vw] lg:text-[10.5vw] xl:text-[10vw] 2xl:text-[9.4vw]"
              />
            </div>
            <div className="max-w-md lg:col-span-4 lg:justify-self-end">
              <motion.p
                className="mb-5 text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                ProductRoot is a strategic AI studio delivering tailored AI solutions: workflow automation, intelligent
                agents, product value acceleration, and bespoke model training for teams ready to move faster.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Button
                  className="group h-auto gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-black transition-all hover:gap-3 hover:bg-primary sm:text-base"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Get Started
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-primary transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
