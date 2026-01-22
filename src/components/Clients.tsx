import { motion } from "framer-motion";
import client1 from "@/assets/client-1.webp";
import steg from "@/assets/steg.png";
import client4 from "@/assets/client-4.gif";
import scet from "@/assets/scet.svg";
import avicenne from "@/assets/avicenne.jpg";
import client5 from "@/assets/client-5.png";
import habitat from "@/assets/habitat.png";

const Clients = () => {
  const clients = [
    { image: client1, alt: "Client 1" },
    { image: steg, alt: "STEG" },
    { image: client4, alt: "Client 4" },
    { image: scet, alt: "SCET" },
    { image: avicenne, alt: "Avicenne" },
    { image: client5, alt: "Client 5" },
    { image: habitat, alt: "Habitat" },
  ];

  return (
    <section id="clients" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Partenaires de confiance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nous sommes fiers de collaborer avec des entreprises et institutions
            de premier plan
          </p>
        </motion.div>

        {/* Client Logo Scroll */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1120] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-40 h-24 bg-card rounded-2xl flex items-center justify-center p-4 border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={client.image}
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;