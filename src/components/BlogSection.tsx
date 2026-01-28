import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Burnout", "Wellness", "Performance", "Leadership"];

const blogPosts = [
  {
    id: 1,
    title: "Why High-Performers Burn Out Faster Than Everyone Else",
    excerpt: "The traits that make you successful, ambition, drive, perfectionism, are often the same traits that lead to burnout. Understanding this paradox is the first step to sustainable performance.",
    date: "January 15, 2026",
    readTime: "5 min read",
    category: "Burnout",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "The Hidden Cost of Always Being Fine",
    excerpt: "When you've built your identity around being capable and reliable, admitting you're struggling feels impossible. But the mask of competence has a price.",
    date: "January 10, 2026",
    readTime: "7 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Decision Fatigue: Why Your Best Thinking Happens Before Noon",
    excerpt: "Research shows executives make their best decisions in the morning. Learn how to restructure your day to protect your cognitive resources.",
    date: "January 5, 2026",
    readTime: "6 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "The S.P.I.R.I.T Framework: A New Approach to Sustainable Success",
    excerpt: "Traditional wellness advice doesn't work for high-achievers. Here's why a systems-based approach delivers better results than willpower alone.",
    date: "December 28, 2025",
    readTime: "8 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Sleep Isn't a Reward It's Infrastructure",
    excerpt: "Most high-performers treat sleep as optional. But sleep is the foundation that everything else, focus, mood, resilience, is built upon.",
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
            for high-performing professionals.
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
                  index === 0 ? "text-base" : "text-sm line-clamp-3"
                }`}>
                  {expandedPost === post.id ? post.excerpt : post.excerpt.slice(0, 120) + "..."}
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
