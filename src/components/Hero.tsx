import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/drilling-hero.png";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";

const Hero = () => {
  const programs = [
    { image: service1, category: "Géotechnique", title: "Sondages Géotechniques" },
    { image: service2, category: "Environnement", title: "Études Environnementales" },
    { image: service3, category: "Construction", title: "Travaux Spéciaux" },
    { image: service4, category: "Hydrogéologie", title: "Forages d'Eau" },
    { image: service5, category: "Conseil", title: "Expertise Technique" },
  ];

  const socialProofAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section id="accueil" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Geotechnical drilling site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 pt-32 pb-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl"
        >
          <span className="text-foreground">Entreprises </span>
          <span className="text-gradient">Géologiques</span>
          <br />
          <span className="text-foreground">& </span>
          <span className="text-gradient">Géotechniques</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          Spécialistes en sondages géotechniques, forages d'eau, études
          environnementales et travaux spéciaux. Votre partenaire de confiance en Tunisie.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-terracotta-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-xl shadow-primary/30"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir nos Services
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary/60 backdrop-blur-md border border-border/50 text-foreground px-8 py-4 rounded-full font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez-nous
          </motion.a>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-sm text-muted-foreground/60"
        >
          Experts en Géotechnique depuis 2011 • Plus de 700 projets réalisés
        </motion.p>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="flex -space-x-3">
            {socialProofAvatars.map((avatar, index) => (
              <motion.img
                key={index}
                src={avatar}
                alt={`Client ${index + 1}`}
                className="w-10 h-10 rounded-full border-2 border-background object-cover"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">100+</span> clients satisfaits
          </p>
        </motion.div>
      </div>

      {/* Program Cards Carousel */}
      <div className="relative z-10 pb-8">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate programs for seamless loop */}
          {[...programs, ...programs, ...programs, ...programs].map((program, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-72 h-44 rounded-2xl overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {program.category}
                </span>
                <h3 className="text-foreground font-bold text-lg mt-1 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;