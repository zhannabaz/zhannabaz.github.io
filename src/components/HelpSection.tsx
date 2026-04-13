import { motion } from "framer-motion";

const areas = [
  { title: "Anxiety & overthinking", desc: "Support for spiraling thoughts, tension, and emotional overload." },
  { title: "Relationship challenges", desc: "Space to understand patterns, communication, and disconnection." },
  { title: "Life transitions", desc: "Support through change, uncertainty, and shifting identity." },
  { title: "Feeling overwhelmed", desc: "A calmer place to slow down and find your next step." },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HelpSection = () => (
  <section className="py-16 md:py-24 border-t border-border">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
        How I can help
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-lg">
        I work with individuals and couples experiencing:
      </p>
    </motion.div>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden"
    >
      {areas.map((a) => (
        <motion.div
          key={a.title}
          variants={item}
          className="bg-background p-8 md:p-10"
        >
          <h3 className="font-display text-xl font-semibold mb-2">{a.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default HelpSection;
