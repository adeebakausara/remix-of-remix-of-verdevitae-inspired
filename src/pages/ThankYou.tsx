import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Download, ArrowRight, CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary-foreground mb-6">
              Thank you for taking the first step towards your reset.
            </h1>

            <p className="text-lg text-secondary-foreground/80 mb-8">
              Your Burnout Reset Blueprint is ready for you, you can download it here.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="mb-12 border-accent text-accent hover:bg-accent hover:text-white"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Your Blueprint
            </Button>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-secondary-foreground/10">
              <p className="text-secondary-foreground/80 mb-6">
                If you haven't yet booked your FREE Discovery Call, now's the perfect time.
              </p>
              <p className="text-secondary-foreground mb-8">
                Let's personalise your next steps and identify the fastest way to rebuild your energy, clarity, and purpose.
              </p>

              <a
                href="https://calendly.com/apex-consultancy-and-coaching/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 font-medium px-8 py-6 text-lg group"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Your Free Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 text-secondary-foreground/70"
            >
              <p className="mb-2">See you on the other side.</p>
              <p className="font-serif text-xl text-secondary-foreground">Isabella</p>
              <p className="text-sm">The Wellness Leader</p>
              <p className="text-sm mt-4">
                Office: Isle of Man | Site:{" "}
                <a href="https://verdevitae.com" className="text-primary hover:underline">
                  verdevitae.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
