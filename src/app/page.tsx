import { AnimatedHero } from "@/components/ui/animated-hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { CreativePricingDemo } from "@/components/ui/creative-pricing-demo";
import { locations, amenities } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedHero />

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-50 mb-4">Our Locations</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Premium coworking spaces in the heart of Delhi and Gurgaon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
                <div className="relative h-64">
                  <Image 
                    src={location.image} 
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{location.name}</h3>
                    <p className="text-zinc-200 flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {location.address}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-400">{location.seats}</p>
                      <p className="text-sm text-zinc-400">Seats</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-400">{location.connectivity}</p>
                      <p className="text-sm text-zinc-400">Connectivity</p>
                    </div>
                    <Link href="/locations">
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <CreativePricingDemo />
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-zinc-50 mb-4">Amenities</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Everything you need for a productive workday
            </p>
          </div>

          <FeaturesSectionWithHoverEffects />

          <div className="text-center mt-10">
            <Link href="/amenities">
              <Button variant="outline" size="lg">
                View All Amenities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black to-blue-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Fume?</h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
            Book a tour today and discover why professionals choose Fume Coworking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 border-0"
            >
              Book a Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-600 bg-white text-black hover:bg-zinc-100"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
