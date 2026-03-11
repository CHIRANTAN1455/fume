import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { locations } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black to-blue-950 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Phone</h3>
                    <p className="text-zinc-600">+91 98765 43210</p>
                    <p className="text-zinc-500 text-sm">Mon-Sat: 9AM - 7PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Email</h3>
                    <p className="text-zinc-600">hello@fumecoworking.in</p>
                    <p className="text-zinc-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Our Locations</h3>
                    <p className="text-zinc-600">Netaji Subhash Palace, Delhi</p>
                    <p className="text-zinc-600">Udyog Vihar Phase 4, Gurgaon</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-zinc-50 rounded-xl">
                <h3 className="font-semibold text-zinc-900 mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select Interest</option>
                    <option>Day Pass</option>
                    <option>Dedicated Desk</option>
                    <option>Private Cabin</option>
                    <option>Meeting Room</option>
                    <option>Virtual Office</option>
                    <option>Event Space</option>
                    <option>Other</option>
                  </select>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <Button className="w-full" type="button">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Visit Our Spaces</h2>
              <div className="space-y-6">
                {locations.map((location) => (
                  <Card key={location.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-500" />
                        {location.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-600 mb-4">{location.address}</p>
                      <div className="flex items-center gap-4 text-sm text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> 24/7 Access
                        </span>
                        <span>{location.seats}+ Seats</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Fume?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free tour today and discover why professionals choose Fume Coworking
          </p>
          <Button size="lg" variant="secondary" className="text-blue-100">
            Book a Free Tour
          </Button>
        </div>
      </section>
    </div>
  );
}
