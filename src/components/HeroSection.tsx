import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const animationProps = shouldReduceMotion 
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background - same layout for mobile and desktop */}
      <div className="absolute inset-0 -z-10">
        {/* Dark navy base background */}
        <div className="absolute inset-0 bg-secondary" />
        
        {/* Image positioned on right side for all screen sizes */}
        <div className="absolute right-0 top-0 h-full w-1/2 lg:w-[45%]">
          <img
            src={heroImage}
            alt="Professional woman executive"
            className="h-full w-full object-cover object-[75%_20%] lg:object-center"
          />
          {/* Soft fade from left edge of image */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 via-30% to-transparent" />
        </div>
        
        {/* Subtle top/bottom gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-secondary/20" />
      </div>

      {/* Content - positioned left with proper header offset */}
      <div 
        className="container mx-auto px-4 lg:px-8 relative z-10 pb-16"
        style={{ 
          paddingTop: 'calc(var(--header-height) + env(safe-area-inset-top, 0px) + 2rem)',
        }}
      >
        <div className="max-w-2xl pt-8 lg:pt-12">
          {/* S.P.I.R.I.T label - smaller, more letter spacing, breathing room */}
          <motion.div
            {...animationProps}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 lg:mb-4"
          >
            <span className="inline-block text-primary font-medium tracking-[0.2em] uppercase text-[10px] lg:text-xs">
              The S.P.I.R.I.T Framework
            </span>
          </motion.div>

          {/* Headline with responsive clamp typography and max-width constraint */}
          <motion.h1
            {...animationProps}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif font-medium leading-[1.15] mb-6 text-white"
            style={{ 
              fontSize: 'clamp(2.125rem, 5vw + 1rem, 3.75rem)',
              maxWidth: '28ch',
            }}
          >
            The problem is not that you cannot cope.{" "}
            <span className="text-primary">
              It is what coping is costing you.
            </span>
          </motion.h1>

          {/* Body text with proper line height and max-width */}
          <motion.p
            {...animationProps}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 mb-8"
            style={{
              fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)',
              lineHeight: '1.6',
              maxWidth: '45ch',
            }}
          >
            You are functioning, but decision quality is slipping, patience is thinner 
            than it used to be, and recovery no longer happens on its own. If nothing 
            changes, this becomes permanent rather than temporary.
          </motion.p>

          {/* Buttons - full width on mobile, cleaner layout */}
          <motion.div
            {...animationProps}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            {/* Primary CTA - full width on mobile */}
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-6 lg:px-8 py-5 lg:py-6 text-sm lg:text-base group"
            >
              Book a Private Consultation
              <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {/* Secondary CTA - text link style on mobile, outline on desktop */}
            <button
              onClick={() => {
                const element = document.querySelector("#services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto text-white/90 hover:text-white font-medium text-sm lg:text-base py-3 sm:py-0 sm:px-6 lg:px-8 sm:border sm:border-white/30 sm:rounded-md sm:hover:bg-white/10 transition-colors underline sm:no-underline underline-offset-4"
            >
              Learn About S.P.I.R.I.T
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 lg:mt-12 pt-6 lg:pt-8 border-t border-white/20"
          >
            <p className="text-xs lg:text-sm text-white/70 mb-3 lg:mb-4">Trusted by high-performing women worldwide</p>
            <div className="flex flex-wrap gap-4 lg:gap-6 items-center text-white/50">
              <span className="text-[10px] lg:text-xs uppercase tracking-widest">Executives</span>
              <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:block" />
              <span className="text-[10px] lg:text-xs uppercase tracking-widest">Entrepreneurs</span>
              <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:block" />
              <span className="text-[10px] lg:text-xs uppercase tracking-widest">Professionals</span>
              <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:block" />
              <span className="text-[10px] lg:text-xs uppercase tracking-widest">Leaders</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - behind content, respects reduced motion */}
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 -z-0 pointer-events-none"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
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
