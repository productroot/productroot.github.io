"use client"

import * as React from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const

type StyledSegment = {
  text: string
  className?: string
}

export function WordsPullUp({
  text,
  className,
  showAsterisk = false,
}: {
  text: string
  className?: string
  showAsterisk?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const words = text.split(" ")

  return (
    <div ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1

        return (
          <span key={`${word}-${index}`} className="inline-flex overflow-hidden py-[0.04em] align-baseline">
            <motion.span
              className="relative inline-block"
              aria-hidden="true"
              initial={{ y: 24 }}
              animate={isInView ? { y: 0 } : { y: 24 }}
              transition={{ duration: 0.9, delay: index * 0.08, ease }}
            >
              {word}
              {showAsterisk && isLastWord ? (
                <span className="absolute -right-[0.3em] top-[0.65em] text-[0.31em]">*</span>
              ) : null}
              {index < words.length - 1 ? "\u00a0" : null}
            </motion.span>
          </span>
        )
      })}
    </div>
  )
}

export function WordsPullUpMultiStyle({
  segments,
  className,
}: {
  segments: StyledSegment[]
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const words = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      className: segment.className,
    })),
  )

  return (
    <div ref={ref} className={className} aria-label={segments.map((segment) => segment.text).join(" ")}>
      {words.map(({ word, className: wordClassName }, index) => (
        <span key={`${word}-${index}`} className="inline-flex overflow-hidden py-[0.04em] align-baseline">
          <motion.span
            className={wordClassName}
            aria-hidden="true"
            initial={{ y: 24 }}
            animate={isInView ? { y: 0 } : { y: 24 }}
            transition={{ duration: 0.9, delay: index * 0.08, ease }}
          >
            {word}
            {index < words.length - 1 ? "\u00a0" : null}
          </motion.span>
        </span>
      ))}
    </div>
  )
}

export function AnimatedLetters({ text, className }: { text: string; className?: string }) {
  const ref = React.useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] })
  const letters = Array.from(text)

  return (
    <p ref={ref} className={className} aria-label={text}>
      {letters.map((letter, index) => (
        <AnimatedLetter
          key={`${letter}-${index}`}
          letter={letter}
          index={index}
          total={letters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}

function AnimatedLetter({
  letter,
  index,
  total,
  progress,
}: {
  letter: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const charProgress = index / total
  const opacity = useTransform(progress, [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)], [0.22, 1])

  return (
    <motion.span style={{ opacity }} aria-hidden="true">
      {letter}
    </motion.span>
  )
}
