import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Startup Networking Event",
    description: "Connect with fellow entrepreneurs and startups in the ecosystem. Share ideas, find co-founders, and grow your network.",
    date: "Every Saturday",
    location: "Both Locations",
    attendees: "50-100",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Networking"
  },
  {
    id: 2,
    title: "Press Conferences",
    description: "Professional venue for your press conferences and media interactions. Full AV setup and press coordination available.",
    date: "On Request",
    location: "Both Locations",
    attendees: "Up to 50",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    category: "Corporate"
  },
  {
    id: 3,
    title: "Workshops & Training",
    description: "Host your workshops, training sessions, and skill-building events in our state-of-the-art conference rooms.",
    date: "On Request",
    location: "Both Locations",
    attendees: "10-50",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Education"
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black to-blue-950 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Events</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Host your events at Fume Coworking spaces - from networking sessions to corporate conferences
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden bg-zinc-950 border border-zinc-800 hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {event.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-zinc-50">{event.title}</CardTitle>
                </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-zinc-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {event.attendees} attendees
                    </div>
                  </div>
                  <Button className="w-full">Book Event Space</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-50 mb-4">Host Your Event at Fume</h2>
            <p className="text-zinc-400 mb-8">
              Looking for the perfect venue? Our spaces are equipped to handle events of all sizes. 
              Contact us to discuss your requirements.
            </p>
            <Button size="lg">Contact for Event Booking</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
