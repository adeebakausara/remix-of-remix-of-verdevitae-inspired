import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = ["Home", "About", "Services", "Testimonials", "Blog", "Contact"];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Verde Vitae Woman"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
              />
              <p className="font-serif text-lg text-white">
                Verde Vitae <span className="text-primary">Woman</span>
              </p>
            </div>
            <p className="text-sm text-white/50 text-center md:text-left max-w-xs">
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
          </div>

          {/* Quick Links */}
          <nav className="flex flex-col items-center gap-3">
            <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-1">Navigate</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          {/* Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <span className="text-xs text-white/40">Back to top</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {currentYear}{" "}
            <a
              href="https://www.verdevitae.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Verde Vitae
            </a>{" "}
            is an Isle of Man registered business. Company Number 137127C
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
