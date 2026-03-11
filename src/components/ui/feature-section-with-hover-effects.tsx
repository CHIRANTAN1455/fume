import * as React from "react"

import { cn } from "@/lib/utils"

type FeatureConfig = {
  title: string
  description: string
  icon: React.ReactNode
}

const baseFeatures: FeatureConfig[] = [
  {
    title: "High-speed WiFi",
    description: "Fiber-backed internet across all work areas and meeting rooms.",
    icon: <span className="text-2xl">📶</span>,
  },
  {
    title: "Coffee & Beverages",
    description: "Complimentary coffee, tea, and water available all day.",
    icon: <span className="text-2xl">☕</span>,
  },
  {
    title: "Flexible Workspaces",
    description: "Hot desks, dedicated desks, cabins, and meeting rooms on demand.",
    icon: <span className="text-2xl">🪑</span>,
  },
  {
    title: "Transparent Pricing",
    description: "Simple plans with no hidden fees or lock-ins.",
    icon: <span className="text-2xl">💳</span>,
  },
  {
    title: "Secure Access",
    description: "24/7 access with CCTV monitoring and secure entry.",
    icon: <span className="text-2xl">🔐</span>,
  },
  {
    title: "On-site Support",
    description: "Reception and community team to help you and your guests.",
    icon: <span className="text-2xl">❓</span>,
  },
  {
    title: "Amenities & Pantry",
    description: "Printer, lockers, pantry, and other essentials included.",
    icon: <span className="text-2xl">🏪</span>,
  },
  {
    title: "Built for Teams",
    description: "Scalable spaces designed for founders, freelancers, and teams.",
    icon: <span className="text-2xl">🤝</span>,
  },
]

type FeaturesSectionWithHoverEffectsProps = {
  features?: FeatureConfig[]
  className?: string
  /** 
   * Color scheme for text and borders.
   * "dark" = suited for dark backgrounds, "light" = suited for light backgrounds.
   */
  variant?: "dark" | "light"
}

export function FeaturesSectionWithHoverEffects({
  features = baseFeatures,
  className,
  variant = "dark",
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
        "flex flex-col lg:border-r py-10 relative group/feature",
        variant === "dark" && "border-neutral-800",
        variant === "light" && "border-neutral-200",
        (index === 0 || index === 4) &&
          (variant === "dark" ? "lg:border-l border-neutral-800" : "lg:border-l border-neutral-200"),
        index < 4 &&
          (variant === "dark" ? "lg:border-b border-neutral-800" : "lg:border-b border-neutral-200"),
      )}
    >
      {index < 4 && (
        <div
          className={cn(
            "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t to-transparent pointer-events-none",
            variant === "dark" ? "from-neutral-900/60" : "from-neutral-100",
          )}
        />
      )}
      {index >= 4 && (
        <div
          className={cn(
            "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b to-transparent pointer-events-none",
            variant === "dark" ? "from-neutral-900/60" : "from-neutral-100",
          )}
        />
      )}
      <div
        className={cn(
          "mb-4 relative z-10 px-10",
          variant === "dark" ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full group-hover/feature:bg-blue-500 transition-all duration-200 origin-center",
            variant === "dark" ? "bg-neutral-700" : "bg-neutral-300",
          )}
        />
        <span
          className={cn(
            "group-hover/feature:translate-x-2 transition duration-200 inline-block",
            variant === "dark" ? "text-neutral-100" : "text-neutral-900",
          )}
        >
          {title}
        </span>
      </div>
      <p
        className={cn(
          "text-sm max-w-xs relative z-10 px-10",
          variant === "dark" ? "text-neutral-400" : "text-neutral-600",
        )}
      >
        {description}
      </p>
    </div>
  )
}

