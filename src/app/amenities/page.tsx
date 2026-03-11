import { amenities } from "@/lib/data";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black to-blue-950 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Amenities</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Everything you need for a productive and comfortable workday
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <FeaturesSectionWithHoverEffects variant="light" />
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-50 mb-6">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
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
                <div key={service} className="flex items-center gap-3 p-4 bg-zinc-950 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-zinc-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
