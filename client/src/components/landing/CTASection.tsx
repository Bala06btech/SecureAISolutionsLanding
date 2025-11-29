import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onBookCall?: () => void;
}

export default function CTASection({ onBookCall }: CTASectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Bring Private AI Into Your Business?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Schedule a free consultation and discover how local AI can transform
          your practice while keeping your data completely private.
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={onBookCall}
          className="bg-white text-primary hover:bg-white/90 px-8"
          data-testid="button-cta-book-call"
        >
          Book a Free Call
        </Button>
      </div>
    </section>
  );
}
