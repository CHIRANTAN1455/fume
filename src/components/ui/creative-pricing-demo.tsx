import { CreativePricing } from "@/components/ui/creative-pricing"
import type { PricingTier } from "@/components/ui/creative-pricing"


const sampleTiers: PricingTier[] = [
    {
        name: "Day Pass",
        icon: <span className="text-3xl">☀️</span>,
        price: "₹499",
        description: "Try Fume for a day and see how it feels",
        color: "amber",
        features: [
            "Access to shared workspace",
            "High-speed WiFi",
            "Free coffee & pantry",
            "Meeting room access (pay extra)",
        ],
    },
    {
        name: "Open Dedicated",
        icon: <span className="text-3xl">🖥️</span>,
        price: "₹8,000",
        description: "Your go-to spot for your daily grind",
        color: "blue",
        features: [
            "Dedicated desk",
            "24/7 access",
            "Lockable storage",
            "Free meeting hours",
        ],
        popular: true,
    },
    {
        name: "Private Cabin",
        icon: <span className="text-3xl">🚪</span>,
        price: "₹35,000",
        description: "Give your team the privacy they deserve",
        color: "purple",
        features: [
            "Private office for 2-8 seats",
            "Custom branding",
            "Meeting room quota",
            "Private pantry",
        ],
    },
];


function CreativePricingDemo() {
    return <CreativePricing tiers={sampleTiers} />
}

export { CreativePricingDemo }
