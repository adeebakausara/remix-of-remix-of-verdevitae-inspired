import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Zap, Moon, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const spiritPillars = [
  {
    icon: Brain,
    title: "Mind",
    description: "Mental overload, decision fatigue, constant background noise",
  },
  {
    icon: Heart,
    title: "Emotions",
    description: "Irritability, reactivity, emotional suppression, carrying too much for too long",
  },
  {
    icon: Zap,
    title: "Body",
    description: "Energy depletion, stress response overload, pain, weight resistance",
  },
  {
    icon: Moon,
    title: "Lifestyle",
    description: "Sleep erosion, poor recovery, constant urgency, no margin",
  },
  {
    icon: Star,
    title: "Identity & Standards",
    description: "The unspoken pressure to hold everything together without dropping the ball",
  },
];

const processSteps = [
  { step: "1", title: "Private Consultation", description: "We assess your current load, constraints, and points of failure." },
  { step: "2", title: "System Diagnosis", description: "We identify where pressure is accumulating and recovery has dropped out." },
  { step: "3", title: "Structured Intervention", description: "The S.P.I.R.I.T Framework is applied in a way that fits your real life." },
  { step: "4", title: "Ongoing Refinement", description: "We adjust based on response, not theory or fixed programmes." },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 lg:py-32 section-dark" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
            The Framework
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            Burnout is not an Emotional Problem.{" "}
            <span className="text-gradient italic">It's a Design Problem.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't motivate. We don't therapise. We don't ask you to step back from your life. 
            We help you rebuild how your mind, body, emotions, and daily habits work together—so 
            functioning well becomes easier again.
          </p>
        </motion.div>

        {/* S.P.I.R.I.T Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="font-serif text-2xl text-center mb-4">The S.P.I.R.I.T Framework</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A structured system designed to reduce internal friction and restore capacity, 
            focusing on five areas that quietly collapse under prolonged pressure:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {spiritPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:glow-green"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg font-medium text-foreground mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-foreground font-medium">
            We don't "fix" these individually. <span className="text-primary">We stabilise the system they sit inside.</span>
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-card rounded-2xl p-8 lg:p-12 border border-border"
        >
          <h3 className="font-serif text-2xl text-center mb-12">How the Work Unfolds</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-serif text-lg font-medium text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-px bg-border" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 group"
            >
              Book a Private Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        {/* What Improves */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="font-serif text-2xl mb-4">What tends to improve</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Clients don't arrive wanting transformation. They arrive wanting things to stop being so hard. 
            Over time, they often report:
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "More consistent energy across the week",
              "Better tolerance for pressure without snapping",
              "Fewer stress-related symptoms",
              "Improved physical resilience",
              "Less effort required to function normally",
              "Sustainable high performance",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground text-sm text-left">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground italic">
            Not because they tried harder, but because the system finally supported them.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
