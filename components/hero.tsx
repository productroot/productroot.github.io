"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/hero-background.jpg')",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/20" />
      </div>
      <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: "url('/productroot-logo.jpg')",
              backgroundPosition: "center",
              backgroundSize: "120%",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <span className="text-[#0B4619] text-2xl font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
          ProductRoot
        </span>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">We Deliver Tailored AI Solutions</h1>
          <p className="text-lg text-gray-700 mb-8">
            Strategic AI consulting and implementation services<br />
            for Management Systems
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

