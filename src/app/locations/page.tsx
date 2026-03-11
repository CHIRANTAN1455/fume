import { locations } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Wifi, Clock, Shield, Coffee, Car, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black to-blue-950 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Locations</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Premium coworking spaces strategically located in the heart of Delhi and Gurgaon
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {locations.map((location, index) => (
              <Card key={location.id} className="overflow-hidden bg-zinc-950 border border-zinc-800">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-96 lg:h-auto">
                    <Image 
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <MapPin className="w-5 h-5" />
                      <span className="text-sm font-medium">Coworking Space</span>
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-50 mb-2">{location.name}</h2>
                    <p className="text-zinc-400 mb-6">{location.address}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg">
                        <Users className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="font-semibold">{location.seats}+</p>
                          <p className="text-xs text-zinc-400">Seats</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg">
                        <Wifi className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="font-semibold">{location.connectivity}</p>
                          <p className="text-xs text-zinc-400">WiFi</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold text-zinc-50 mb-3">Features</h3>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {location.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-zinc-400">
                          <Check className="w-4 h-4 text-blue-400" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link href="/workspaces">
                      <Button className="w-full">View Workspaces at This Location</Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-zinc-50 mb-4">Visit Us Today</h2>
          <p className="text-zinc-400 mb-8">Book a tour and experience our spaces firsthand</p>
          <Link href="/contact">
            <Button size="lg">Book a Tour</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
