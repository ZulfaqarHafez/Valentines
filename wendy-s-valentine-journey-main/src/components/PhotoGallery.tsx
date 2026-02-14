import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";
import photo7 from "@/assets/photo7.jpg";
import photo8 from "@/assets/photo8.jpg";
import photo9 from "@/assets/photo9.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];

const captions = [
  "Looking stunning together ✨",
  "Even through a screen, you're adorable 💕",
  "Adventures with you are the best 🦦",
  "You + me + a rose = perfection 🌹",
  "Elevator selfies are our thing 📸",
  "Your smile lights up my world 🧡",
  "Late night moments with you 🌙",
  "Close-ups because I can't get enough of you 💛",
  "By the sea, with my favourite person 🌊",
];

const PhotoGallery = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + photos.length) % photos.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-accent/20">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={current}
            src={photos[current]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`Memory ${current + 1}`}
          />
        </AnimatePresence>

        {/* Gradient overlay for caption */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-6 right-6 text-center text-foreground font-body text-sm italic"
          >
            {captions[current]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
