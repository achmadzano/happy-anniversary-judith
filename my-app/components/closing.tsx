"use client"

import { useEffect, useRef } from "react"

export default function Closing() {
  const quoteRef = useRef<HTMLQuoteElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && quoteRef.current) {
            quoteRef.current.style.animation = "parallax-fade 1.2s ease-out"
          }
        })
      },
      { threshold: 0.5 },
    )

    if (quoteRef.current) {
      observer.observe(quoteRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-background via-background to-secondary text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <blockquote
          ref={quoteRef}
          className="font-accent text-3xl sm:text-4xl md:text-5xl font-light text-foreground leading-relaxed italic"
        >
          This first year with you, Judith, has been my greatest adventure. Here's to forever with you.
        </blockquote>

        <p className="font-sans text-sm text-muted-foreground tracking-widest font-light pt-6">UNTIL NEXT YEAR</p>
      </div>
    </section>
  )
}
