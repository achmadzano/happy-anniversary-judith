"use client"

import { useState, useEffect } from "react"

const letterText = `My Dearest Judith,

One year ago, I couldn't have imagined how much love was waiting for me.

Thank you for being so patient with me, for staying by my side since the beginning when I had nothing. You saw potential in me when I couldn't see it in myself. You've been my rock, my inspiration, and my greatest blessing.

This first year with you has been the most beautiful chapter of my life. Your smile is my comfort, your laugh is my joy, your presence is my home.

From my lowest moments to where I am now, you've been there, believing in me when I needed it most. Every achievement, every smile, every happy moment—they all mean so much more because you're here with me.

You've changed me in ways I never thought possible, and I fall deeper in love with you every single day.

Thank you for choosing to build this journey with me. Here's to a lifetime of more beautiful moments, more adventures, and more love.

Forever yours,
With all my heart`

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    if (!isOpen) {
      setDisplayedText("")
      return
    }

    let index = 0
    const interval = setInterval(() => {
      if (index < letterText.length) {
        setDisplayedText(letterText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 25)

    return () => clearInterval(interval)
  }, [isOpen])

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-secondary">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="font-heading text-4xl sm:text-5xl md:text-5xl font-light text-foreground tracking-tight">
          A Letter for You
        </h2>

        {!isOpen ? (
          <button onClick={() => setIsOpen(true)} className="transition-transform duration-300 hover:scale-105">
            <img src="/dudul-button.png" alt="Read letter" className="h-16 w-auto mx-auto" />
          </button>
        ) : (
          <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-border p-10 sm:p-14 animate-fade-in shadow-sm">
            <div className="font-accent text-foreground whitespace-pre-line leading-relaxed text-base md:text-lg min-h-64 italic font-light">
              {displayedText}
              {displayedText.length < letterText.length && (
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
