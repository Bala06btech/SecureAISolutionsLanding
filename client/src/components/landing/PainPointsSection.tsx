import { Card } from "@/components/ui/card";
import { ShieldAlert, FileWarning, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: ShieldAlert,
    title: "Privacy Risk",
    description:
      "Client data leaves your office and gets processed on external servers you don't control.",
  },
  {
    icon: FileWarning,
    title: "Compliance Issues",
    description:
      "PHI, legal files, and financial records require strict data handling that cloud AI can't guarantee.",
  },
  {
    icon: DollarSign,
    title: "Rising Costs",
    description:
      "AI usage becomes expensive as you scale, with unpredictable monthly bills eating into margins.",
  },
];

export default function PainPointsSection() {
  return (
    <section id="pain-points" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Cloud AI Doesn't Work for Sensitive Data
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The risks of processing confidential information on external servers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 hover-elevate transition-shadow"
              data-testid={`card-pain-point-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <point.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
