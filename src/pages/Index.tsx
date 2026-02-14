import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import Timeline from "@/components/Timeline";
import MusicPlayer from "@/components/MusicPlayer";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <MusicPlayer />
      <HeroSection />

      {/* Photo Gallery Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">
            Our Moments
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            A little walk down memory lane
          </h2>
        </motion.div>

        <PhotoGallery />
      </section>

      {/* Song Lyrics Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto text-center"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">
            Our Song
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8 italic">
            你存在我深深的脑海里
          </h2>
          <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed italic">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              你存在 我深深的脑海里
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              我的梦里 我的心里 我的歌声里
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="text-foreground/60 text-sm mt-6">
              You exist in the depths of my mind
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="text-foreground/60 text-sm">
              In my dreams, in my heart, in my song
            </motion.p>
          </div>


          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-6 text-xs text-muted-foreground/60 font-body"
          >
            — 曲婉婷《我的歌声里》
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">
            Tonight's Plan
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Our Valentine's Evening
          </h2>
        </motion.div>

        <Timeline />
      </section>

      {/* Footer */}
      <footer className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Heart className="mx-auto text-accent" size={28} fill="currentColor" />
          <p className="font-display text-xl text-foreground italic">
            I love you, Wendy
          </p>
          <p className="text-muted-foreground text-sm font-body">
            Here's to us, always & forever
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
