import { Check, Award, Users, Target } from "lucide-react";

const About = () => {
  const features = [
    "Études géotechniques complètes",
    "Forages et sondages de reconnaissance",
    "Essais in-situ et en laboratoire",
    "Rapports techniques détaillés",
    "Conseil et assistance technique",
    "Respect des normes internationales",
  ];

  const highlights = [
    {
      icon: Award,
      title: "Expertise Reconnue",
      description: "Depuis 2011, nous accompagnons vos projets géotechniques en Tunisie.",
    },
    {
      icon: Users,
      title: "Équipe Qualifiée",
      description: "Ingénieurs et techniciens hautement qualifiés et certifiés.",
    },
    {
      icon: Target,
      title: "Précision Garantie",
      description: "Équipements de pointe pour des résultats fiables et précis.",
    },
  ];

  const stats = [
    { value: "2011", label: "Depuis" },
    { value: "150+", label: "Projets" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              À Propos de Nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Votre Partenaire en Géotechnique
            </h2>
            <p className="text-muted-foreground mb-8">
              <strong className="text-foreground">EGG</strong> - Entreprises
              Géologiques et Géotechniques est une société tunisienne spécialisée
              dans les études de sol, les forages et les travaux spéciaux. Depuis{" "}
              <strong className="text-foreground">2011</strong>, nous avons
              accompagné des centaines de projets de construction et
              d'infrastructure à travers le pays.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-terracotta-gradient text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Demander un Devis
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Highlights */}
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-card rounded-xl border border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
