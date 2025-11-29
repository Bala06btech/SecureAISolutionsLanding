import { Card } from "@/components/ui/card";
import { Stethoscope, Scale, Calculator, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Stethoscope,
    title: "Healthcare Providers",
    items: [
      "Charting assistance & summaries",
      "Patient note dictation",
      "PIPEDA-compliant processing",
    ],
  },
  {
    icon: Scale,
    title: "Lawyers",
    items: [
      "Document drafting & review",
      "Case summary generation",
      "Confidential client file search",
    ],
  },
  {
    icon: Calculator,
    title: "Accountants",
    items: [
      "Client notes automation",
      "Reconciliation assistance",
      "Financial document analysis",
    ],
  },
  {
    icon: Briefcase,
    title: "Consultants",
    items: [
      "Research & report generation",
      "Meeting notes synthesis",
      "Proposal drafting",
    ],
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for Privacy-First Professionals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored solutions for industries that handle sensitive data
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate hover:border-primary/50 transition-all"
              data-testid={`card-use-case-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <useCase.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {useCase.title}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
