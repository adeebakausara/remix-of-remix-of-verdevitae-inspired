import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Zap, Moon, Shield } from "lucide-react";

const symptoms = [
  { icon: Moon, text: "Sleep deteriorates" },
  { icon: Brain, text: "Focus slips" },
  { icon: Heart, text: "Patience thins" },
  { icon: Zap, text: "Energy depletes" },
  { icon: Shield, text: "Pain appears" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 section-light" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Why Capable Women Burn Out
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
              Most women who arrive here are{" "}
              <span className="italic text-primary">not fragile.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                They are competent, organised, relied upon, and very good at managing pressure. 
                They are running businesses, teams, households, relationships, and expectations often simultaneously.
              </p>
              <p>
                <strong className="text-foreground">The issue is not weakness. The issue is load.</strong>
              </p>
              <p>
                When demand keeps rising, and nothing adjusts underneath it, the system eventually 
                starts to misfire. That's when sleep worsens, focus slips, patience thins, and 
                everything feels harder than it should.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Symptoms */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 lg:p-10 card-shadow border border-border"
          >
            <h3 className="font-serif text-xl text-foreground mb-6">
              When nothing adjusts underneath the load, the system eventually starts to misfire:
            </h3>
            <div className="space-y-4">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={symptom.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <symptom.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{symptom.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* This is for you section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
            This work is for you if:
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              "You are outwardly high-functioning but privately depleted",
              "You carry responsibility at work and at home",
              "You don't want platitudes, affirmations, or vague advice",
              "You value intelligence, structure, and discretion",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border"
              >
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4 text-accent-foreground"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-primary font-medium italic">
            This is not for people looking for quick fixes, motivational highs, or surface-level solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
