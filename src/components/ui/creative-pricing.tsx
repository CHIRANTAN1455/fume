import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

function CreativePricing({
    title = "Flexible Workspaces for Every Need",
    description = "Choose from hourly meeting rooms to monthly private offices",
    tiers,
}: {
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tiers.map((tier) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300",
                            tier.popular && "ring-2 ring-primary"
                        )}
                    >
                        {tier.popular && (
                            <div className="bg-primary text-white text-center py-2 font-semibold">
                                Most Popular
                            </div>
                        )}

                        <div className="p-8">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    {tier.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-gray-900">
                                    {tier.price}
                                </span>
                                {tier.price !== "Custom" && (
                                    <span className="text-gray-500 ml-1">
                                        /month
                                    </span>
                                )}
                            </div>

                            <div className="space-y-3 mb-6">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full",
                                    tier.popular
                                        ? "bg-primary hover:bg-primary/90 text-white"
                                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                                )}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export { CreativePricing };
export type { PricingTier };
