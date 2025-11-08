"use client"

import { useEffect, useState } from "react"

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100 + "%",
      }
      setHearts((prev) => [...prev, newHeart])

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
      }, 4000)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-2xl sm:text-3xl md:text-4xl animate-float-hearts"
          style={{
            left: heart.left,
            animation: `float-hearts ${3 + Math.random()}s linear forwards`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  )
}
