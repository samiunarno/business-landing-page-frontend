import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutMeV2: React.FC = () => {
  const cards = [
    {
      title: "My Journey",
      text: "From Afghanistan to East Germany — a life shaped by transition, resilience, and cultural depth.",
    },
    {
      title: "My Mission",
      text: "To bridge human development with AI, empowering people to grow with clarity and purpose.",
    },
    {
      title: "My Work",
      text: "MBA, language mediator in 6 languages, author, and developer of Ramno AI Coaching.",
    },
    {
      title: "My Philosophy",
      text: "Education and self-leadership are the ultimate tools for transformation.",
    },
    {
      title: "The Vision",
      text: "Human empathy + AI intelligence to create accessible, real-life integrated coaching for everyone.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE — Profile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-left"
          >
            <div className="w-52 h-52 rounded-full overflow-hidden shadow-xl mb-6">
              <img
                src="https://picsum.photos/seed/profile/600/600"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              About Me
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              I am a coach, mentor, and bridge builder — connecting people, cultures,
              language, and technology. Through Ramno AI Coaching, I combine human
              development with artificial intelligence to redefine communication,
              learning, and personal growth.
            </p>
          </motion.div>

          {/* RIGHT SIDE — Cards */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-card p-6 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{card.title}</h3>
                    <p className="text-muted-foreground text-base">{card.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeV2;
