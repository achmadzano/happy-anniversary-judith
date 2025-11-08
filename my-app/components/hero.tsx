"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.animation = "parallax-fade 1.5s ease-out"
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.animation = "parallax-fade 1.5s ease-out 0.2s both"
    }
  }, [])

  const scrollToStory = () => {
    const element = document.getElementById("our-journey")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-6 md:px-8 pt-20 pb-20">
      <div className="text-center max-w-3xl mx-auto space-y-8">
        <h1
          ref={headingRef}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-light text-foreground tracking-tight"
        >
          Our First Anniversary
        </h1>

        <div className="space-y-2">
          <p
            ref={subtitleRef}
            className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed font-light tracking-wide"
          >
            One Year with You, Judith
          </p>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light tracking-wide">
            Celebrating the most beautiful first year of my life
          </p>
        </div>

        <div className="pt-6">
          <button onClick={scrollToStory} className="transition-transform duration-300 hover:scale-105">
            <img src="/dudul-button.png" alt="View our journey" className="h-16 w-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
