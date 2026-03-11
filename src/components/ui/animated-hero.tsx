"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Coffee, Wifi, Users } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function AnimatedHero() {
  const [titleIndex, setTitleIndex] = useState(0)

  const titles = useMemo(
    () => [
      "Away From Home",
      "Near You",
      "For Your Team",
      "For Your Startup",
      "Every Workday",
    ],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [titleIndex, titles.length])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-blue-950/40 to-transparent" />

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/70 border border-zinc-700 text-zinc-200 text-sm">
            <MapPin className="w-4 h-4" />
            Delhi & Gurgaon
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Your Home Office,
          <span className="block mt-2">
            <span className="relative inline-flex h-[1.1em] w-full justify-center overflow-hidden">
              {titles.map((title, index) => (
                <motion.span
                  key={title}
                  className="absolute left-1/2 -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={
                    titleIndex === index
                      ? { opacity: 1, y: "0%" }
                      : {
                          opacity: 0,
                          y: titleIndex > index ? "-100%" : "100%",
                        }
                  }
                  transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-10"
        >
          Fume Coworking offers inspiring workspaces where productivity meets comfort.
          Work productively in modern shared offices designed for professionals like you.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white border-0 text-lg px-8"
          >
            Book a Tour
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-600 text-black hover:bg-zinc-900 hover:text-white text-lg px-8"
          >
            View Workspaces
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 flex flex-wrap justify-center gap-8 text-zinc-400"
        >
          <div className="flex items-center gap-2">
            <Wifi className="w-5 h-5 text-blue-400" />
            <span>High-Speed WiFi</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-blue-400" />
            <span>Free Coffee & Pantry</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span>500+ Seats Available</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-zinc-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

