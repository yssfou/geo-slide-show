import { motion } from "framer-motion";
import { Check, Award, Users, Target, ArrowRight } from "lucide-react";

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
    { value: "700+", label: "Projets" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              À Propos de Nous
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Votre Partenaire en <span className="text-gradient">Géotechnique</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-terracotta-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-xl shadow-primary/30"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un Devis
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Highlights */}
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 p-6 bg-card rounded-2xl border border-border/50"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;