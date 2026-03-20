import { amenities } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Coffee, Video, Clock, Car, Printer, UserCheck, Shield, UtensilsCrossed, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const iconComponents: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="w-8 h-8 text-primary" />,
  Coffee: <Coffee className="w-8 h-8 text-primary" />,
  Video: <Video className="w-8 h-8 text-primary" />,
  Clock: <Clock className="w-8 h-8 text-primary" />,
  Car: <Car className="w-8 h-8 text-primary" />,
  Printer: <Printer className="w-8 h-8 text-primary" />,
  UserCheck: <UserCheck className="w-8 h-8 text-primary" />,
  Shield: <Shield className="w-8 h-8 text-primary" />,
  Utensils: <UtensilsCrossed className="w-8 h-8 text-primary" />,
  Lock: <Lock className="w-8 h-8 text-primary" />,
};

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Amenities</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need for a productive and comfortable workday
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {amenities.map((amenity) => {
              const IconComponent = iconComponents[amenity.icon] || <Wifi className="w-8 h-8 text-primary" />;
              
              return (
                <Card 
                  key={amenity.name} 
                  className="hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {IconComponent}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{amenity.name}</h3>
                    <p className="text-gray-600 text-sm">{amenity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Virtual Office Address",
                "Mail Handling & Forwarding",
                "Day Passes for Members",
                "Event Space Booking",
                "Catering Services",
                "Business Registration Support",
                "Legal & Compliance Assistance",
                "High-End Meeting Room Packages"
              ].map((service) => (
                <div key={service} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience our workspaces?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a tour today and discover why professionals choose Fume
          </p>
          <Link href="/contact">
            <Button size="lg" variant="white" className="text-primary">
              Book a Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
