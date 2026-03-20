import { locations } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium coworking spaces in the heart of Delhi and Gurgaon
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {locations.map((location) => (
              <div 
                key={location.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-96 lg:h-auto">
                    <Image 
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <MapPin className="w-5 h-5" />
                      <span className="text-sm font-medium">Coworking Space</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{location.name}</h2>
                    <p className="text-gray-600 mb-6">{location.address}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{location.seats}+</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Seats</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{location.connectivity}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">WiFi</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {location.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link href="/workspaces">
                      <Button className="w-full bg-primary hover:bg-primary/90 group">
                        View Workspaces at This Location
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us Today</h2>
          <p className="text-gray-600 mb-8">Book a tour and experience our spaces firsthand</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book a Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
