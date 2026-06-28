import { AnimatedLetters, WordsPullUpMultiStyle } from "@/components/animated-text"

export function Stats() {
  return (
    <section id="about" className="bg-black px-4 py-20 text-[#E1E0CC] sm:py-24 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#101010] px-5 py-16 text-center shadow-2xl shadow-black/40 sm:px-10 md:py-24">
        <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-primary sm:text-xs">Strategic AI consulting</p>
        <WordsPullUpMultiStyle
          segments={[
            { text: "ProductRoot transforms businesses through", className: "font-normal" },
            { text: "strategic AI consulting.", className: "font-serif italic" },
            { text: "We design, build, and implement systems that deliver measurable ROI.", className: "font-normal" },
          ]}
          className="mx-auto max-w-4xl text-3xl leading-[1.04] tracking-[-0.035em] sm:text-4xl sm:leading-[1] md:text-5xl lg:text-6xl xl:text-7xl"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <AnimatedLetters
            text="Our AI consulting services help organizations leverage cutting-edge technology to drive innovation and growth. We analyze your business needs, develop custom AI strategies, and implement solutions that deliver measurable ROI."
            className="text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base"
          />
        </div>
      </div>
    </section>
  )
}
