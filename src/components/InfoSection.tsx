import { motion } from "framer-motion";

const details = [
  {
    label: "Fees",
    items: ["Individual session: $100", "Couples session: $100", "Sessions are 50 minutes", "Sliding scale may be available"],
  },
  {
    label: "Insurance",
    items: ["Psychotherapy services may be covered by extended health benefits", "Please check with your provider regarding your specific coverage"],
  },
  {
    label: "Credentials",
    items: ["Registered Psychotherapist (Qualifying)", "Working under the supervision of an experienced licensed therapist", "Currently completing requirements for full licensure"],
  },
  {
    label: "Booking",
    items: ["Online booking will be available soon", "In the meantime, reach out directly via email or Instagram"],
  },
];

const InfoSection = () => (
  <section className="py-16 md:py-24 border-t border-border">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
        Practical details
      </h2>
    </motion.div>
    <div className="space-y-0 divide-y divide-border">
      {details.map((d) => (
        <motion.div
          key={d.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 first:pt-0"
        >
          <h3 className="font-semibold text-sm tracking-wider uppercase text-muted-foreground pt-0.5">
            {d.label}
          </h3>
          <ul className="space-y-2">
            {d.items.map((item) => (
              <li key={item} className="text-foreground/80 leading-relaxed">{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default InfoSection;
