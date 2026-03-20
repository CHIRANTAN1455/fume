import * as React from "react"

import { cn } from "@/lib/utils"
import { Wifi, Coffee, Building, Shield, Clock, Users, Printer, Lock, Car, Zap, Gamepad2, CheckCircle } from "lucide-react"

type FeatureConfig = {
  title: string
  description: string
  icon: React.ReactNode
}

const iconComponents = {
  Wifi: <Wifi className="w-8 h-8 text-primary" />,
  Coffee: <Coffee className="w-8 h-8 text-primary" />,
  Building: <Building className="w-8 h-8 text-primary" />,
  Shield: <Shield className="w-8 h-8 text-primary" />,
  Clock: <Clock className="w-8 h-8 text-primary" />,
  Users: <Users className="w-8 h-8 text-primary" />,
  Printer: <Printer className="w-8 h-8 text-primary" />,
  Lock: <Lock className="w-8 h-8 text-primary" />,
  Car: <Car className="w-8 h-8 text-primary" />,
  Zap: <Zap className="w-8 h-8 text-primary" />,
  Gamepad: <Gamepad2 className="w-8 h-8 text-primary" />,
  Check: <CheckCircle className="w-8 h-8 text-primary" />,
}

const baseFeatures: FeatureConfig[] = [
  {
    title: "High-speed WiFi",
    description: "Fiber-backed internet across all work areas and meeting rooms.",
    icon: iconComponents.Wifi,
  },
  {
    title: "Coffee & Beverages",
    description: "Complimentary coffee, tea, and water available all day.",
    icon: iconComponents.Coffee,
  },
  {
    title: "Flexible Workspaces",
    description: "Hot desks, dedicated desks, cabins, and meeting rooms on demand.",
    icon: iconComponents.Building,
  },
  {
    title: "Transparent Pricing",
    description: "Simple plans with no hidden fees or lock-ins.",
    icon: iconComponents.Check,
  },
  {
    title: "Secure Access",
    description: "24/7 access with CCTV monitoring and secure entry.",
    icon: iconComponents.Shield,
  },
  {
    title: "On-site Support",
    description: "Reception and community team to help you and your guests.",
    icon: iconComponents.Users,
  },
  {
    title: "Printer & Scanner",
    description: "Printer, scanner, and other essentials included.",
    icon: iconComponents.Printer,
  },
  {
    title: "Built for Teams",
    description: "Scalable spaces designed for founders, freelancers, and teams.",
    icon: iconComponents.Building,
  },
]

type FeaturesSectionWithHoverEffectsProps = {
  features?: FeatureConfig[]
  className?: string
  variant?: "dark" | "light"
}

export function FeaturesSectionWithHoverEffects({
  features = baseFeatures,
  className,
  variant = "light",
}: FeaturesSectionWithHoverEffectsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto",
        className,
      )}
    >
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} variant={variant} />
      ))}
    </div>
  )
}

type FeatureProps = FeatureConfig & {
  index: number
  variant: "dark" | "light"
}

const Feature = ({ title, description, icon, index, variant }: FeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 relative group",
        variant === "dark" && "border-r border-gray-700 last:border-r-0",
        variant === "light" && "border-r border-gray-200 last:border-r-0",
        "hover:bg-primary/5 transition-colors duration-300"
      )}
    >
      <div className="mb-4">{icon}</div>
      <div className="mb-2">
        <span className="text-lg font-semibold text-gray-900">{title}</span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
