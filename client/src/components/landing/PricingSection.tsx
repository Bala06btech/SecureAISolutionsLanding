import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Package, Settings, Wrench } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan?: (plan: string) => void;
}

const plans = [
  {
    name: "One-Time Setup",
    price: "$2,000",
    priceLabel: "one-time",
    icon: Package,
    description: "Perfect for companies wanting long-term AI independence.",
    features: [
      "No subscriptions",
      "Pre-installed with the tools you need",
      "Mac mini or similar device included (based on requirements)",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Managed Local AI Environment",
    price: "$299",
    priceLabel: "/month",
    icon: Settings,
    description:
      "Ideal for businesses wanting a fully maintained, optimized local AI environment.",
    features: [
      "On-site setup and training",
      "Ability to change or upgrade AI tools on demand",
      "Continuous optimization and maintenance",
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    name: "Custom Solutions",
    price: "Custom",
    priceLabel: "pricing",
    icon: Wrench,
    description:
      "Flexibility to build according to your needs.",
    features: [
      "Automation workflows",
      "Custom UIs",
      "Private server setup",
      "Custom agents",
    ],
    buttonText: "Get Quote",
    popular: false,
  },
];

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 relative flex flex-col ${
                plan.popular ? "border-primary border-2 shadow-lg" : ""
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl lg:text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.priceLabel}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => onSelectPlan?.(plan.name)}
                data-testid={`button-select-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
