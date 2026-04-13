import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";

const FooterSection = () => (
  <footer className="py-16 md:py-24 border-t border-border" id="contact">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto"
    >
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight italic mb-8">
        You don't have to figure everything out on your own.
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <a href="mailto:zhanna@bazarova.online" className="btn-primary gap-2">
          <Mail size={18} />
          zhanna@bazarova.online
        </a>
        <a
          href="https://www.instagram.com/bazarova.therapy/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary gap-2"
        >
          <Instagram size={18} />
          @bazarova.therapy
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Zhanna Bazarova · Ottawa, Canada
      </p>
    </motion.div>
  </footer>
);

export default FooterSection;
