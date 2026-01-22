import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/drilling-hero.png";

const Hero = () => {
  const stats = [
    { value: "15+", label: "Années d'Expérience" },
    { value: "700+", label: "Projets Réalisés" },
    { value: "100%", label: "Clients Satisfaits" },
    { value: "24/7", label: "Support Disponible" },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Geotechnical drilling site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground text-sm">
              Experts en Géotechnique depuis 2011
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Entreprises{" "}
            <span className="text-gradient">Géologiques &</span>
            <br />
            <span className="text-gradient">Géotechniques</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Spécialistes en sondages géotechniques, forages d'eau, études
            environnementales et travaux spéciaux. Votre partenaire de confiance
            en Tunisie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-terracotta-gradient text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Découvrir nos Services
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary hover:border-primary transition-all duration-300"
            >
              Contactez-nous
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-5xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
