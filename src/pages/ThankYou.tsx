import { motion } from "framer-motion";
import { CheckCircle, Calendar, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-12 h-12 text-accent" />
        </motion.div>

        {/* Thank You Message */}
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your message has been received. We'll respond within 24 hours.
        </p>

        {/* Calendly CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-secondary rounded-2xl p-8 lg:p-12 mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Skip the wait and schedule your discovery call now. We'll discuss your situation 
            and explore how we can help you regain control and sustainable performance.
          </p>
          <a
            href="https://calendly.com/apex-consultancy-and-coaching/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-10 py-6 text-lg group"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>

        {/* Return Home */}
        <Link to="/">
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-muted"
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
