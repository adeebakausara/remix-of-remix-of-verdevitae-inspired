import { ArrowUp } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3L4 9v12h16V9l-8-6z" className="fill-primary-foreground" />
                <path d="M12 7l4 3v6h-8v-6l4-3z" className="fill-background" />
              </svg>
            </div>
            <div>
              <p className="font-serif text-foreground">
                Verde Vitae <span className="text-primary">Woman</span>
              </p>
              <p className="text-sm text-muted-foreground">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Services", "Testimonials", "Blog", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(`#${link.toLowerCase()}`);
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            Website: <a href="https://verdevitae.com" className="text-primary hover:underline">verdevitae.com</a>
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
