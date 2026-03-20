import { AnimatedHero } from "@/components/ui/animated-hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { locations, testimonials, clientLogos, stats } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, MapPin, Check, Star, Building, Award, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      <AnimatedHero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience top-notch workspaces that have it all
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Fume, we offer more than just workspaces. We offer you an expansive ecosystem to move beyond limits and ideate, collaborate with professionals and succeed every day at work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Purpose-driven Workspaces</h3>
              <p className="text-gray-600">
                Spaces shape your thoughts and creativity. Equipped with latest technology and productivity boosting ambiance.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Facility Management</h3>
              <p className="text-gray-600">
                From routine administrative tasks to employee engagement activities, our team handles everything.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Community Perks</h3>
              <p className="text-gray-600">
                Access to multiple learning and networking opportunities. Get exclusive discounts on best services.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Impeccable Customer Experience</h3>
              <p className="text-gray-600">
                Experience top-tier support with personalized service, ensuring your workspace needs are seamlessly met.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find your happy workplace
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium coworking spaces in the heart of Delhi and Gurgaon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image 
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
                    <p className="text-sm text-gray-200 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {location.address}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">{location.seats}+</p>
                      <p className="text-sm text-gray-500">Seats</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">{location.connectivity}</p>
                      <p className="text-sm text-gray-500">Connectivity</p>
                    </div>
                    <Link href="/workspaces">
                      <Button className="bg-primary hover:bg-primary/90">View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Locations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proof of the pudding…
            </h2>
            <p className="text-lg text-gray-600">
              Here's what some of our delighted clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">You're amongst the best at Fume</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div key={logo} className="text-gray-400 font-semibold text-lg hover:text-primary transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Experience Fume?
              </h2>
              <p className="text-lg text-gray-300">
                Book a tour today and discover why professionals choose Fume Coworking
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Choose</option>
                      <option>Day Pass</option>
                      <option>Dedicated Desk</option>
                      <option>Private Cabin</option>
                      <option>Meeting Room</option>
                      <option>Virtual Office</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your workspace requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <Button type="button" className="w-full h-12 bg-primary hover:bg-primary/90 text-lg">
                  Book a Tour
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form you agree to receive communication from Fume via Phone call, SMS, Email and WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
