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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Ce Que Nous Faisons
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Nos Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services géotechniques et
            environnementaux, adaptés à vos besoins spécifiques.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden hover:ring-2 hover:ring-primary transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slideshow - Left to Right */}
        <div className="slideshow-container mb-8">
          <div className="flex animate-slideshow" style={{ width: "fit-content" }}>
            {[...slideshowImages, ...slideshowImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-56 mx-3 rounded-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Service ${(index % 5) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Scroll */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll" style={{ width: "fit-content" }}>
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 h-48 mx-3 rounded-xl overflow-hidden"
              >
                <img
                  src={project}
                  alt={`Projet ${(index % 5) + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
