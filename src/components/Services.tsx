import { motion } from "framer-motion";
import geoService1 from "@/assets/geo-service-1.png";
import geoService2 from "@/assets/geo-service-2.png";
import geoService3 from "@/assets/geo-service-3.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";

const Services = () => {
  const services = [
    {
      image: geoService1,
      category: "Géotechnique",
      title: "Sondages Géotechniques",
      description:
        "Études de sol approfondies pour vos projets de construction. Analyses précises et rapports détaillés.",
    },
    {
      image: geoService2,
      category: "Environnement",
      title: "Études Environnementales",
      description:
        "Évaluations d'impact environnemental. Protection des ressources naturelles et conformité réglementaire.",
    },
    {
      image: geoService3,
      category: "Construction",
      title: "Travaux Spéciaux",
      description:
        "Fondations profondes, consolidation des sols et travaux de génie civil spécialisés.",
    },
  ];

  const allImages = [
    { src: service1, title: "Sondages Géotechniques", category: "Géotechnique" },
    { src: project1, title: "Projet Infrastructure", category: "Projets" },
    { src: service2, title: "Études Environnementales", category: "Environnement" },
    { src: project2, title: "Fondations Profondes", category: "Projets" },
    { src: service3, title: "Travaux Spéciaux", category: "Construction" },
    { src: project3, title: "Forages d'Eau", category: "Projets" },
    { src: service4, title: "Expertise Technique", category: "Conseil" },
    { src: project4, title: "Étude Géologique", category: "Projets" },
    { src: service5, title: "Consolidation Sols", category: "Géotechnique" },
    { src: project5, title: "Aménagement Terrain", category: "Projets" },
  ];

  return (
    <section id="services" className="py-20 bg-background">
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
            Ce Que Nous Faisons
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services géotechniques et
            environnementaux, adaptés à vos besoins spécifiques.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Single Infinite Slideshow - Full Width */}
      <div className="relative overflow-hidden">
        {/* Fixed Viewport Edge Gradients */}
        <div className="fixed left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
        <div className="fixed right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />

        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate for seamless infinite loop */}
          {[...allImages, ...allImages].map((item, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-72 md:w-80 h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-foreground font-bold text-lg mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;