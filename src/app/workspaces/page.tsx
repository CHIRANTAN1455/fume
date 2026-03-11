"use client"

import { workspaceTypes } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Sun: <span className="text-3xl">☀️</span>,
  Desk: <span className="text-3xl">🖥️</span>,
  Box: <span className="text-3xl">📦</span>,
  DoorClosed: <span className="text-3xl">🚪</span>,
  Users: <span className="text-3xl">👥</span>,
  Presentation: <span className="text-3xl">📊</span>,
  Globe: <span className="text-3xl">🌐</span>,
};

function WorkspaceCard({ workspace, index, isPopular }: { workspace: typeof workspaceTypes[0]; index: number; isPopular: boolean }) {
  const icon = iconMap[workspace.icon] || <span className="text-3xl">📍</span>;
  const rotationClass = index % 3 === 0 ? "rotate-[-1deg]" : index % 3 === 1 ? "rotate-[1deg]" : "rotate-[-2deg]";

  return (
    <div
      className={cn(
        "relative group",
        "transition-all duration-300",
        rotationClass
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-white dark:bg-zinc-900",
          "border-2 border-zinc-900 dark:border-white",
          "rounded-lg shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white",
          "transition-all duration-300",
          "group-hover:shadow-[8px_8px_0px_0px]",
          "group-hover:translate-x-[-4px]",
          "group-hover:translate-y-[-4px]"
        )}
      />

      <div className="relative p-6">
        {isPopular && (
          <div
            className="absolute -top-2 -right-2 bg-amber-400 text-zinc-900 
            font-bold px-3 py-1 rounded-full rotate-12 text-sm border-2 border-zinc-900"
          >
            Popular!
          </div>
        )}

        <div className="mb-6">
          <div
            className={cn(
              "w-12 h-12 rounded-full mb-4",
              "flex items-center justify-center",
              "border-2 border-zinc-900 dark:border-white"
            )}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {workspace.name}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            {workspace.description}
          </p>
        </div>

        <div className="mb-6">
          <span className="text-4xl font-bold text-zinc-900 dark:text-white">
            {workspace.price}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400 ml-1">
            /{workspace.period}
          </span>
        </div>

        <div className="space-y-3 mb-6">
          {workspace.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <div
                className="w-5 h-5 rounded-full border-2 border-zinc-900 
                dark:border-white flex items-center justify-center flex-shrink-0"
              >
                <Check className="w-3 h-3" />
              </div>
              <span className="text-lg text-zinc-900 dark:text-white">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Link href="/contact">
          <Button
            className={cn(
              "w-full h-12 text-lg relative",
              "border-2 border-zinc-900 dark:border-white",
              "transition-all duration-300",
              "shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white",
              "hover:shadow-[6px_6px_0px_0px]",
              "hover:translate-x-[-2px] hover:translate-y-[-2px]",
              isPopular
                ? "bg-amber-400 text-zinc-900 hover:bg-amber-300"
                : "bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-zinc-700"
            )}
          >
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function WorkspacesPage() {
  const hourlySpaces = workspaceTypes.filter(w => w.period.includes("hour"));
  const monthlySpaces = workspaceTypes.filter(w => w.period.includes("month"));

  const allPopularId = "dedicated";
  const hourlyPopularId = "meeting-room";
  const monthlyPopularId = "private-cabin";

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black to-blue-950 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Workspaces</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Flexible workspace solutions for every need - from hourly meeting rooms to monthly private offices
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-zinc-900">
                <TabsTrigger value="all" className="text-white data-[state=active]:bg-amber-400 data-[state=active]:text-zinc-900">All</TabsTrigger>
                <TabsTrigger value="hourly" className="text-white data-[state=active]:bg-amber-400 data-[state=active]:text-zinc-900">Hourly</TabsTrigger>
                <TabsTrigger value="monthly" className="text-white data-[state=active]:bg-amber-400 data-[state=active]:text-zinc-900">Monthly</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workspaceTypes.map((workspace, index) => (
                  <WorkspaceCard 
                    key={workspace.id} 
                    workspace={workspace} 
                    index={index}
                    isPopular={workspace.id === allPopularId}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hourly" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hourlySpaces.map((workspace, index) => (
                  <WorkspaceCard 
                    key={workspace.id} 
                    workspace={workspace} 
                    index={index}
                    isPopular={workspace.id === hourlyPopularId}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {monthlySpaces.map((workspace, index) => (
                  <WorkspaceCard 
                    key={workspace.id} 
                    workspace={workspace} 
                    index={index}
                    isPopular={workspace.id === monthlyPopularId}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
