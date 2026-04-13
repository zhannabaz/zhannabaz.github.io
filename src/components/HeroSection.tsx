import { motion } from "framer-motion";
import zhannaPhoto from "@/assets/zhanna.jpg";

const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center py-20 md:py-32">
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <span className="tag-pill mb-6">Online therapy · Canada</span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-8">
          Zhanna
          <br />
          Bazarova
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl mb-10">
          A calm, supportive space to better understand yourself and feel less overwhelmed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
          <a href="#about" className="btn-outline">
            Learn more
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-64 md:w-80 lg:w-96 shrink-0"
      >
        <img
          src={zhannaPhoto}
          alt="Zhanna Bazarova — psychotherapist"
          className="w-full rounded-2xl object-cover shadow-lg"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
