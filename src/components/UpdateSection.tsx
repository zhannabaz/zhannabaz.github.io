import { motion } from "framer-motion";

const UpdateSection = () => {
  const handleNotify = () => {
    const subject = encodeURIComponent("Please notify me when booking opens");
    const body = encodeURIComponent(
      "Hi Zhanna,\n\nPlease let me know when your booking opens.\n\nThank you!"
    );
    window.location.href = `mailto:zhanna@bazarova.online?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-primary/[0.06] border border-primary/10 rounded-2xl p-8 md:p-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive/60" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive" />
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Update — June 2026
          </span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
          Currently accepting new clients
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">
          I'm completing my training and will be available for new clients starting June. Reach out to be the first to know when booking opens.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button onClick={handleNotify} className="btn-primary">
            Notify me
          </button>
          <span className="text-sm text-muted-foreground">
            Opens your email app to contact{" "}
            <a href="mailto:zhanna@bazarova.online" className="font-semibold text-foreground hover:text-primary transition-colors">
              zhanna@bazarova.online
            </a>
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default UpdateSection;
