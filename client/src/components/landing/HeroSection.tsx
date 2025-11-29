import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/modern_office_with_local_ai_server.png";

interface HeroSectionProps {
  onBookConsultation?: () => void;
  onLearnMore?: () => void;
}

export default function HeroSection({
  onBookConsultation,
  onLearnMore,
}: HeroSectionProps) {
  const handleScrollDown = () => {
    const element = document.querySelector("#pain-points");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Private AI Solutions for Canadian Small Businesses
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Deploy a secure, local LLM that runs 100% offline. Keep every
          document, note, and client file private and compliant.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onBookConsultation}
            className="w-full sm:w-auto text-base px-8"
            data-testid="button-hero-consultation"
          >
            Book Free Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onLearnMore}
            className="w-full sm:w-auto text-base px-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            data-testid="button-hero-learn-more"
          >
            How It Works
          </Button>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
