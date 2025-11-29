import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 bg-gray-900 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg text-white">
              Secure AI Solutions
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Private AI for Canadian Businesses
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="#home"
              className="hover:text-gray-300 transition-colors"
              data-testid="link-footer-home"
            >
              Home
            </a>
            <a
              href="#features"
              className="hover:text-gray-300 transition-colors"
              data-testid="link-footer-features"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-gray-300 transition-colors"
              data-testid="link-footer-pricing"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
              data-testid="link-footer-contact"
            >
              Contact
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 w-full text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Secure AI Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
