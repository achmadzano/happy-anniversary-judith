"use client"
import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import LoveLetter from "@/components/love-letter"
import Closing from "@/components/closing"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <Timeline />
      <LoveLetter />
      <Closing />
    </main>
  )
}
