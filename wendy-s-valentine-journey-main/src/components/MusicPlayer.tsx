import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlay = () => {
    setHasInteracted(true);
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      {/* Hidden YouTube iframe - plays audio in background */}
      {hasInteracted && (
        <iframe
          ref={iframeRef}
          className="hidden"
          width="0"
          height="0"
          src={`https://www.youtube.com/embed/w0dMz8RBG7g?autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=w0dMz8RBG7g&enablejsapi=1`}
          title="Background Music"
          allow="autoplay; encrypted-media"
          style={{ position: "absolute", top: -9999, left: -9999 }}
        />
      )}

      {/* Floating music button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-secondary border border-primary/30 flex items-center justify-center text-primary hover:bg-secondary/80 transition-colors shadow-lg shadow-accent/10"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div key="playing" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <Volume2 size={18} />
            </motion.div>
          ) : (
            <motion.div key="muted" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <Music size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Song label on first appearance */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="fixed bottom-6 right-20 z-50 bg-secondary border border-primary/20 rounded-full px-4 py-2 text-xs text-muted-foreground font-body"
          >
            Tap to play our song 🎵
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
