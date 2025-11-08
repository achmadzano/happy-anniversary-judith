"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  date: string
  title: string
  description: string
  image: string
  objectPosition?: string
}

const timelineData: TimelineEntry[] = [
  {
    date: "Aug 29 2024",
    title: "day one",
    description: "jujur pertama kali chatan di dm ig degdegan HAHA",
    image: "/29-aug.jpeg",
  },
  {
    date: "Aug 31 2024",
    title: "tbtb move ke imessage bgt nih",
    description: "iseng iseng chatan di dm ig, eh malah lanjut ke imessage",
    image: "/31-aug.jpeg",
    objectPosition: "center 100%", // turunin dikit
  },
  {
    date: "Sep 1 2024",
    title: "pertama kali dikasih pap tbtb pas dia lg makan gelato",
    description: "HAHAH lgsg buru2 save, eh ternyata emang beneran niat ngasih",
    image: "/1-sept.jpeg",
    objectPosition: "center 50%", // naikin dikit
  },
  {
    date: "Sep 14 2024",
    title: "first date kita",
    description: "gada fotonya tapi cuma ada foto cafenya karena malu jir",
    image: "/14-sept.jpeg",
  },
  {
    date: "Sep 30 2024",
    title: "iseng nyetirin dia ke tgr",
    description: "seru juga pertama kali naik mobil dia, eh malah nyasar ke tgr",
    image: "/30-sept.jpeg",
    objectPosition: "center 75%", // turunin dikit
  },
  {
    date: "Oct 12 2024",
    title: "date kedua!!! dan foto!!!",
    description: "akhirnya punya foto dia yg difoto pake hp sendiri cihuyy",
    image: "/12-oct.jpeg",
  },
  {
    date: "Nov 9 2024",
    title: "JADIAN!!!",
    description: "degdegan nembak dia, kalo ditolak gajadi jalan ke pim itu lgsg pulang HAHAH",
    image: "/9-nov.jpeg",
  },
]

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemsRef.current.indexOf(entry.target as HTMLDivElement)
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort()
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="our-journey" className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-5xl font-light text-foreground mb-3 tracking-tight">
            Our Journey
          </h2>
          <p className="font-sans text-sm text-muted-foreground font-light tracking-wide">
            One year of unforgettable moments with Judith
          </p>
        </div>

        <div ref={containerRef} className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory scroll-smooth">
          {timelineData.map((entry, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el
              }}
              className={`flex-shrink-0 w-80 transition-all duration-500 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="h-full flex flex-col bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                {/* Photo */}
                <div className="h-40 overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={entry.image || "/placeholder.svg"}
                    alt={entry.title}
                    style={entry.objectPosition ? { objectPosition: entry.objectPosition } : undefined}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <p className="font-sans text-xs text-muted-foreground font-medium tracking-widest mb-2">
                      {entry.date}
                    </p>
                    <h3 className="font-heading text-lg text-foreground font-light mb-1">{entry.title}</h3>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground font-light">{entry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <p className="font-sans text-xs text-muted-foreground tracking-widest">SCROLL TO EXPLORE</p>
        </div>
      </div>
    </section>
  )
}
