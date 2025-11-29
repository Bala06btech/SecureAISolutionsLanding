import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan?: (plan: string) => void;
}

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for solo practitioners",
    features: [
      "Local model installation",
      "Basic workflows",
      "1 device setup",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$699",
    description: "For growing practices",
    features: [
      "Full configuration",
      "File search setup",
      "Industry-specific workflows",
      "Multi-device support",
      "Priority support",
      "Ongoing updates",
    ],
    popular: true,
  },
];

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One-time payment. No hidden fees. No monthly subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 relative ${
                plan.popular
                  ? "border-primary border-2 shadow-lg"
                  : ""
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">one-time</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
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
                data-testid={`button-select-${plan.name.toLowerCase()}`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
