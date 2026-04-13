import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 border-t border-border">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16"
    >
      <div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight sticky top-8">
          About me
        </h2>
      </div>
      <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
        <p>
          I'm a Registered Psychotherapist (Qualifying) offering online therapy across Canada.
        </p>
        <p>
          My approach is warm, collaborative, and grounded in helping you better understand yourself — not fix you.
        </p>
        <p>
          I aim to create a space where you can slow down, reflect, and reconnect with what matters to you.
        </p>
        <p>
          I bring an understanding of experiences such as anxiety, overwhelm, life transitions, and adapting to change.
        </p>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
