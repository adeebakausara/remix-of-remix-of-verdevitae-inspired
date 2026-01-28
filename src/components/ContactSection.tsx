import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight, Linkedin, Instagram, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    navigate("/thank-you");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 section-light" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Get Started
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
              If this sounds familiar
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              You don't need to decide anything today. If you want to talk it through quietly 
              and see whether this approach fits, we can start there.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Call Us</p>
                  <div className="flex items-center gap-2">
                    <a href="tel:+447624457139" className="text-primary hover:underline">
                      +44 7624 457139
                    </a>
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Email Us</p>
                  <div className="flex items-center gap-2">
                    <a href="mailto:enquiries@verdevitae.com" className="text-primary hover:underline">
                      enquiries@verdevitae.com
                    </a>
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Isle of Man</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-background rounded-2xl p-8 lg:p-10 card-shadow border border-border">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Book a Private Consultation
              </h3>
              <p className="text-muted-foreground mb-8">
                Share your situation and we'll arrange a confidential conversation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="bg-muted border-border focus:border-primary"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="bg-muted border-border focus:border-primary"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-muted border-border focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-muted border-border focus:border-primary"
                    placeholder="+44 7xxx xxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    How can we help?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="bg-muted border-border focus:border-primary resize-none"
                    placeholder="Tell us briefly about your situation..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium py-6"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20"
            >
              <h4 className="font-serif text-lg text-foreground mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Receive insights on sustainable performance, burnout prevention, and leadership.
              </p>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background border-border"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
