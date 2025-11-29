import HeroSection from "../landing/HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection
      onBookConsultation={() => console.log("Book consultation clicked")}
      onLearnMore={() => console.log("Learn more clicked")}
    />
  );
}
