import { motion } from "framer-motion";
import { Music, Utensils, MapPin, Clock } from "lucide-react";

const events = [
  {
    time: "6:15 PM",
    title: "Meet at Raffles Place",
    description: "Let's start our evening together 💫",
    icon: MapPin,
  },
  {
    time: "7:00 PM",
    title: "Candlelight Concert",
    venue: "The Arts House",
    description: "An evening of beautiful music by candlelight 🕯️",
    icon: Music,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2098.9464860154208!2d103.84817750465616!3d1.2886833770703088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1936a0da775f%3A0x5306b224c3440f8b!2sThe%20Arts%20House%20Annex%20Building!5e1!3m2!1sen!2ssg!4v1771057269081!5m2!1sen!2ssg",
  },
  {
    time: "8:30 PM",
    title: "Dinner Reservation",
    venue: "The White Label",
    description: "A special dinner for a special person 🥂",
    icon: Utensils,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.244890157082!2d103.8610812!3d1.3032162000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c1425d4691%3A0x2fcd9a57817d5eef!2sThe%20White%20Label!5e1!3m2!1sen!2ssg!4v1771057186159!5m2!1sen!2ssg",
  },
];

const Timeline = () => {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

      <div className="space-y-12">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative pl-20"
          >
            {/* Icon circle */}
            <div className="absolute left-4 w-9 h-9 rounded-full bg-secondary border-2 border-primary/50 flex items-center justify-center">
              <event.icon size={16} className="text-primary" />
            </div>

            {/* Time badge */}
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-muted-foreground" />
              <span className="text-sm text-primary font-display font-semibold tracking-wide">
                {event.time}
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-foreground mb-1">
              {event.title}
            </h3>
            {event.venue && (
              <p className="text-sm text-primary/80 font-body mb-1">{event.venue}</p>
            )}
            <p className="text-muted-foreground font-body text-sm mb-4">
              {event.description}
            </p>

            {event.mapEmbed && (
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <iframe
                  src={event.mapEmbed}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={event.venue}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
