import { ArrowUp, Mail, Globe, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const navLinks = ["Home", "About", "Services", "Testimonials", "Blog", "Contact"];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground relative">
      {/* Back to Top - floating */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Upper Footer */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Verde Vitae Woman"
                className="w-11 h-11 rounded-full object-cover"
              />
              <h3 className="font-serif text-xl text-white tracking-tight">
                Verde Vitae <span className="text-primary">Woman</span>
              </h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Verde Vitae Woman is part of the{" "}
              <a
                href="https://www.verdevitae.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Verde Vitae
              </a>{" "}
              family, the philosophy and system behind everything we do.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary/70" />
                <span>Isle of Man</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary/70" />
                <a
                  href="https://www.verdevitae.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  verdevitae.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-semibold mb-5">
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(`#${link.toLowerCase()}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-white/55 hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-semibold mb-5">
              Legal
            </p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-white/55 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/55 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            <a
              href="https://www.verdevitae.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary hover:underline transition-colors"
            >
              Verde Vitae
            </a>{" "}
            is an Isle of Man registered business. Company Number 137127C
          </p>
        </div>
      </div>
    </footer>
  );
};
