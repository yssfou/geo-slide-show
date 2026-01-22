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

  const projects = [project1, project2, project3, project4, project5];
  const slideshowImages = [service1, service2, service3, service4, service5];

  return (
    <section id="services" className="py-20 bg-background overflow-hidden">
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

        {/* Slideshow - Right to Left (top row) */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -1440] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {[...slideshowImages, ...slideshowImages, ...slideshowImages].map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 h-56 rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={image}
                  alt={`Service ${(index % 5) + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Project Scroll - Left to Right (bottom row) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-4"
            animate={{ x: [-1200, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {[...projects, ...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={project}
                  alt={`Projet ${(index % 5) + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;