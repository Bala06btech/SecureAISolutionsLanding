import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

interface HeaderProps {
  onBookConsultation?: () => void;
}

export default function Header({ onBookConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-semibold text-lg text-foreground">
              Secure AI Solutions
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={onBookConsultation}
              data-testid="button-header-consultation"
            >
              Book Free Consultation
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookConsultation?.();
              }}
              data-testid="button-mobile-consultation"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
