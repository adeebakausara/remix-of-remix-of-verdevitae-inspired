import { ArrowUp } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
              >
                <path 
                  d="M12 4L4 8v8l8 4 8-4V8l-8-4z" 
                  className="fill-primary-foreground stroke-primary-foreground"
                  strokeWidth="1"
                />
                <path 
                  d="M12 8l-4 2v4l4 2 4-2v-4l-4-2z" 
                  className="fill-secondary stroke-secondary"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div>
              <p className="font-serif text-white">
                Verde Vitae <span className="text-primary">Woman</span>
              </p>
              <p className="text-sm text-white/60">
                {currentYear} All rights reserved.
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
                className="text-white/70 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            Website: <a href="https://verdevitae.com" className="text-primary hover:underline">verdevitae.com</a>
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
