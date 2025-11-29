import { useState } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import ConsultationDialog from "@/components/landing/ConsultationDialog";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const openConsultation = () => setConsultationOpen(true);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onBookConsultation={openConsultation} />
      
      <main>
        <HeroSection
          onBookConsultation={openConsultation}
          onLearnMore={() => scrollToSection("#pain-points")}
        />
        <PainPointsSection />
        <SolutionSection onGetSetup={openConsultation} />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection onSelectPlan={openConsultation} />
        <CTASection onBookCall={openConsultation} />
      </main>
      
      <Footer />
      
      <ConsultationDialog
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
      />
    </div>
  );
}
