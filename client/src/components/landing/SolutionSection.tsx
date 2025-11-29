import { Button } from "@/components/ui/button";
import { Server, Cloud, Check, X } from "lucide-react";

interface SolutionSectionProps {
  onGetSetup?: () => void;
}

export default function SolutionSection({ onGetSetup }: SolutionSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Your Own Local AI - Installed, Secured, and Customized
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We install a private AI model that runs on your computer or local
              server. No cloud. No third-party access. Fully compliant with
              medical, legal, and financial data requirements.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "100% offline operation",
                "Your data never leaves your premises",
                "PIPEDA and industry-compliant",
                "One-time setup, no recurring fees",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              onClick={onGetSetup}
              data-testid="button-solution-setup"
            >
              Get Your Local AI Setup
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-md p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mx-auto mb-3">
                    <Cloud className="h-6 w-6 text-red-500" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Cloud AI
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2 justify-center">
                      <X className="h-3 w-3 text-red-500" />
                      Data sent externally
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <X className="h-3 w-3 text-red-500" />
                      Privacy concerns
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <X className="h-3 w-3 text-red-500" />
                      Monthly fees
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-md p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mx-auto mb-3">
                    <Server className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Local AI
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      Data stays local
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      Full privacy
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      One-time cost
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
