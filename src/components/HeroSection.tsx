import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 20,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 6,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-float-heart text-accent/25"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            ["--duration" as string]: `${h.duration}s`,
            ["--delay" as string]: `${h.delay}s`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [showYes, setShowYes] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <FloatingHearts />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body"
        >
          February 14, 2026
        </motion.p>

        <h1 className="text-5xl sm:text-7xl font-display font-bold text-gradient-gold leading-tight mb-6">
          Happy Valentine's Day,
          <br />
          <span className="italic">Wendy</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-muted-foreground font-body text-lg max-w-md mx-auto mb-10 leading-relaxed"
        >
          Every moment with you is a memory I treasure.
          <br />
          Tonight is going to be magical.
        </motion.p>

        {!showYes ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowYes(true)}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-display text-lg tracking-wide hover:shadow-lg hover:shadow-accent/30 transition-shadow"
          >
            Ready for tonight?
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl heart-glow"
          >
            Let's make it unforgettable
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground text-xs tracking-widest uppercase font-body"
        >
          Scroll down ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
