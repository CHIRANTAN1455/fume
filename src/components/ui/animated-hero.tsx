"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import Image from "next/image"

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
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = useMemo(
    () => [
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
        title: "Netaji Subhash Palace, Delhi",
        subtitle: "Premium coworking space in the heart of Delhi",
      },
      {
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80",
        title: "Udyog Vihar, Gurgaon",
        subtitle: "Modern workspace in Gurugram's business hub",
      },
    ],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [currentSlide, slides.length])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      <motion.div
        className="relative z-10 container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-3xl">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 text-white text-sm font-medium">
              <MapPin className="w-4 h-4" />
              {slides[currentSlide].title}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight"
          >
            Your Home Office,
            <span className="block text-primary">Away From Home</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
            >
              Book a Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="white"
              className="text-lg px-8"
            >
              View Workspaces
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex items-center gap-6"
          >
            <a href="tel:+919999999999" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
