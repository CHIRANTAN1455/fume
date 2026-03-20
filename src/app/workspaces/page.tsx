"use client"

import React, { useState } from "react";
import { workspaceTypes } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Sun: <span className="text-4xl">☀️</span>,
  Desk: <span className="text-4xl">🖥️</span>,
  Box: <span className="text-4xl">📦</span>,
  DoorClosed: <span className="text-4xl">🚪</span>,
  Users: <span className="text-4xl">👥</span>,
  Presentation: <span className="text-4xl">📊</span>,
  Globe: <span className="text-4xl">🌐</span>,
};

const imageMap: Record<string, string> = {
  "day-pass": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  "dedicated": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80",
  "cubicle": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=80",
  "private-cabin": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
  "meeting-room": "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&q=80",
  "conference-room": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80",
  "virtual-office": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
};

function WorkspaceCard({ workspace, isPopular }: { workspace: typeof workspaceTypes[0]; isPopular: boolean }) {
  const icon = iconMap[workspace.icon] || <span className="text-4xl">📍</span>;
  const image = imageMap[workspace.id] || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80";

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={image}
          alt={workspace.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            {icon}
          </div>
        </div>
      </div>
      <CardHeader className="flex-grow text-center">
        {isPopular && (
          <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2 mx-auto">
            Popular
          </div>
        )}
        <CardTitle className="text-xl">{workspace.name}</CardTitle>
        <CardDescription>{workspace.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{workspace.price}</span>
          <span className="text-gray-500 ml-1">/{workspace.period}</span>
        </div>
        
        <ul className="space-y-2 mb-6 text-left">
          {workspace.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Link href="/contact" className="block">
          <Button className="w-full bg-primary hover:bg-primary/90 group">
            Book Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function TabButton({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode; 
}) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 font-medium text-sm transition-all rounded-none ${
        active 
          ? "bg-primary text-white" 
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

export default function WorkspacesPage() {
  const hourlySpaces = workspaceTypes.filter(w => w.period.includes("hour"));
  const monthlySpaces = workspaceTypes.filter(w => w.period.includes("month"));
  
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Workspaces</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Flexible workspace solutions for every need - from hourly meeting rooms to monthly private offices
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex border border-gray-300">
              <TabButton active={activeTab === "all"} onClick={() => setActiveTab("all")}>
                All
              </TabButton>
              <TabButton active={activeTab === "hourly"} onClick={() => setActiveTab("hourly")}>
                Hourly
              </TabButton>
              <TabButton active={activeTab === "monthly"} onClick={() => setActiveTab("monthly")}>
                Monthly
              </TabButton>
            </div>
          </div>

          {activeTab === "all" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workspaceTypes.map((workspace) => (
                <WorkspaceCard 
                  key={workspace.id} 
                  workspace={workspace} 
                  isPopular={workspace.popular || false}
                />
              ))}
            </div>
          )}

          {activeTab === "hourly" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hourlySpaces.map((workspace) => (
                <WorkspaceCard 
                  key={workspace.id} 
                  workspace={workspace} 
                  isPopular={false}
                />
              ))}
            </div>
          )}

          {activeTab === "monthly" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {monthlySpaces.map((workspace) => (
                <WorkspaceCard 
                  key={workspace.id} 
                  workspace={workspace} 
                  isPopular={workspace.popular || false}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
