import { Card } from "@/components/ui/card";
import {
  Cpu,
  Lock,
  FileText,
  Mic,
  Search,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "On-Device LLM",
    description: "AI runs entirely on your hardware, no internet required",
  },
  {
    icon: Lock,
    title: "Secure Data Processing",
    description: "All data stays encrypted and within your control",
  },
  {
    icon: FileText,
    title: "Custom Workflows",
    description: "Automated summaries, forms, notes tailored to your practice",
  },
  {
    icon: Mic,
    title: "Voice-to-Text",
    description: "Dictate notes and documents with private transcription",
  },
  {
    icon: Search,
    title: "Document Search",
    description: "Instantly search across all your files with AI understanding",
  },
  {
    icon: CreditCard,
    title: "One-Time Setup",
    description: "No recurring cloud fees, just a single investment",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Private AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features designed for privacy-conscious professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-shadow"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
