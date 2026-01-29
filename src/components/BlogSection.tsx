import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Burnout", "Wellness", "Performance", "Leadership"];

const blogPosts = [
  {
    id: 1,
    title: "How High-Achieving Women Silently Lose Their Edge And the 10-Minute Daily Practice That Brings It Back",
    excerpt: "As high-achieving women, we know what it feels like to carry the weight of doing it all well. We show up strong, deliver results, guide teams, make tough calls, and still manage the quiet load at home. The truth is, this constant pushing leads to a slow, silent depletion that we often don't name until it's too late.",
    fullContent: "The science behind this is clear and consistent. When stress lingers without enough recovery, the body's fight-or-flight system stays engaged. Cortisol and adrenaline stay high, attention tightens to what's urgent, and flexible thinking gives way to automatic habits. The good news is that we can change this pattern. It starts with gentle, honest observation of ourselves. Take ten minutes in the morning and evening to check in: What's my pulse doing? How deep is my breath? Where is tension living in my body?",
    date: "January 15, 2026",
    readTime: "5 min read",
    category: "Burnout",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Why Most High-Performing Women Are Leading on Empty And the One Daily Habit That Changes Everything",
    excerpt: "We show up for excellence at work, leading teams, hitting targets, handling crises, while also holding the invisible responsibilities at home, caregiving, and the constant effort to appear completely together. This strain builds slowly. On the surface, everything looks solid. But inside, the space for real nuance starts to close.",
    fullContent: "Change starts with honest self-compassion. Spend ten minutes morning and evening noticing your state without fixing it: check your pulse, breath depth, tension spots, thought patterns. Note one moment where you felt yourself contract. These small acts reveal what's really happening. In 2026, we don't have to lead from exhaustion. Regulated capacity lets us meet demands while staying connected to ourselves.",
    date: "January 10, 2026",
    readTime: "7 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Why Always-On Is Stealing Your Sharpest Thinking And the 10-Minute Boundary That Gets It Back",
    excerpt: "We have allowed our phones to own us. We wake up to notifications, we fall asleep scrolling replies, and somewhere in between we convince ourselves that being instantly available is the same as being effective. In 2026, that lie is costing us more than we admit.",
    fullContent: "Our bodies are not servers. They are not designed for perpetual uptime. When the pings never stop, the nervous system never stands down. Start small and honest. Notice what happens in your body when the next notification lands. Feel the micro-jolt, the breath catch, the impulse to respond instantly. Do not judge it. Just notice it. Ten minutes twice a day is enough to begin rewiring the habit. Boundaries are not rude. They are the single most powerful leadership statement you can make.",
    date: "January 5, 2026",
    readTime: "6 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Everyone Calls You Strong Until the Moment You Can't Be Anymore. There's a Better Way.",
    excerpt: "You have heard it your whole career: you are so strong, so resilient, so unflappable. People admire it. They rely on it. You rely on it too. So when the body sends a signal, you push through. You tell yourself this is what strong looks like. Until one day the override stops working.",
    fullContent: "This is not weakness. This is what happens when strength is defined as never showing strain. The cultural script praises women for being unbreakable, then judges them the moment they break. The shift begins with honest attention, not more effort. Take ten minutes morning and evening. Sit quietly and ask your body these questions: How is my breathing right now? Where is tension living? What thoughts are looping without rest? Reframe strength as regulated endurance rather than override.",
    date: "December 28, 2025",
    readTime: "8 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "How to Say No Without the Guilt Tax That Follows",
    excerpt: "You already know how to say no. The real problem is what happens thirty seconds later. The wave of guilt arrives, fast and familiar. You second-guess yourself. You wonder if you sounded too harsh. That is the guilt tax. It is paid in energy, in peace, in time you can never get back.",
    fullContent: "This is not about lacking assertiveness. It is about the internal cost of using it. The good news is you can reduce the tax. Start with honest attention to the body. When a request lands and the yes reflex kicks in, pause for ten seconds. Notice what happens inside. Name it without judgement. In 2026, saying no is not selfish. It is strategic. It is the difference between leading from depletion and leading from regulated capacity.",
    date: "December 20, 2025",
    readTime: "4 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop",
  },
];

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Latest Articles
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Insights & Resources
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Evidence-based insights on performance, burnout prevention, and sustainable success 
            for high-performing professional women.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, 5).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 card-shadow ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index === 0 ? "h-64 lg:h-80" : "h-48"}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className={`font-serif font-medium text-foreground mb-3 group-hover:text-primary transition-colors ${
                  index === 0 ? "text-xl lg:text-2xl" : "text-lg"
                }`}>
                  {post.title}
                </h3>

                <p className={`text-muted-foreground leading-relaxed mb-4 ${
                  index === 0 ? "text-base" : "text-sm"
                }`}>
                  {expandedPost === post.id ? (
                    <>
                      {post.excerpt} {post.fullContent}
                    </>
                  ) : (
                    <>
                      {post.excerpt.slice(0, 150)}...
                    </>
                  )}
                </p>

                <button
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  className="inline-flex items-center text-primary font-medium text-sm group/btn"
                >
                  {expandedPost === post.id ? "Show Less" : "Read More"}
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
