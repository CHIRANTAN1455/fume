import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Startup Networking Event",
    description: "Connect with fellow entrepreneurs and startups in the ecosystem. Share ideas, find co-founders, and grow your network.",
    date: "Every Saturday",
    location: "All Locations",
    attendees: "50-100",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Networking"
  },
  {
    id: 2,
    title: "Press Conferences & Media Events",
    description: "Professional venue for your press conferences and media interactions. Full AV setup and press coordination available.",
    date: "On Request",
    location: "All Locations",
    attendees: "Up to 100",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    category: "Corporate"
  },
  {
    id: 3,
    title: "Workshops & Training Sessions",
    description: "Host your workshops, training sessions, and skill-building events in our state-of-the-art conference rooms.",
    date: "On Request",
    location: "All Locations",
    attendees: "10-50",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Education"
  },
  {
    id: 4,
    title: "Product Launches",
    description: "Make your product launch memorable with our premium event spaces equipped with latest technology.",
    date: "On Request",
    location: "Select Locations",
    attendees: "50-200",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    category: "Corporate"
  },
  {
    id: 5,
    title: "Community Meetups",
    description: "Regular community gatherings to network, learn, and grow together. Features guest speakers and interactive sessions.",
    date: "Monthly",
    location: "All Locations",
    attendees: "30-80",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    category: "Community"
  },
  {
    id: 6,
    title: "Board Meetings & AGMs",
    description: "Professional and private spaces for your important board meetings, AGMs, and executive meetings.",
    date: "On Request",
    location: "All Locations",
    attendees: "10-30",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    category: "Corporate"
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events at Fume</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Host your events in our professional spaces - from networking sessions to corporate conferences
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    {event.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
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
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 group">
                      Book Event Space
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Host Your Event at Fume</h2>
            <p className="text-gray-600 mb-8">
              Looking for the perfect venue? Our spaces are equipped to handle events of all sizes. Contact us to discuss your requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact for Event Booking
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
