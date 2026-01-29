import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background - solid navy on mobile, image on desktop */}
      <div className="absolute inset-0">
        {/* Dark navy base background - always visible */}
        <div className="absolute inset-0 bg-secondary" />
        {/* Image container - hidden on mobile, visible on md+ screens */}
        <div className="absolute right-0 top-0 h-full w-1/2 lg:w-[45%] hidden md:block">
          <img
            src={heroImage}
            alt="Professional woman executive"
            className="h-full w-full object-cover object-center"
          />
          {/* Soft fade from left edge of image */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 via-30% to-transparent" />
        </div>
        {/* Subtle top/bottom gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-secondary/20" />
      </div>

      {/* Content - positioned left */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
              The S.P.I.R.I.T Framework
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-white"
          >
            The problem isn't that you can't cope.{" "}
            <span className="text-primary">
              It's what coping is costing you.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl"
          >
            You're functioning, but decision quality is slipping, patience is thinner 
            than it used to be, and recovery no longer happens on its own. If nothing 
            changes, this becomes permanent rather than temporary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8 py-6 text-base group"
            >
              Book a Private Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector("#services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white font-medium px-8 py-6 text-base"
            >
              Learn About S.P.I.R.I.T
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-sm text-white/70 mb-4">Trusted by high-performing women worldwide</p>
            <div className="flex flex-wrap gap-6 items-center text-white/50">
              <span className="text-xs uppercase tracking-widest">Executives</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-xs uppercase tracking-widest">Entrepreneurs</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-xs uppercase tracking-widest">Professionals</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-xs uppercase tracking-widest">Leaders</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
