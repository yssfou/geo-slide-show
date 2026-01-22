import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "+216 71 000 000",
      href: "tel:+21671000000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@egg-tunisie.com",
      href: "mailto:contact@egg-tunisie.com",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Tunis, Tunisie",
      href: "#",
    },
    {
      icon: Clock,
      label: "Horaires",
      value: "Lun - Ven: 8h - 18h",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Contactez-nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Parlons de Votre Projet
            </h2>
            <p className="text-muted-foreground mb-8">
              Vous avez un projet de construction ou d'infrastructure ? Notre
              équipe d'experts est à votre disposition pour répondre à toutes vos
              questions.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">
                      {item.label}
                    </div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex items-center">
            <div className="w-full p-8 bg-terracotta-gradient rounded-2xl text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Besoin d'une Étude ?</h3>
              <p className="opacity-90 mb-6">
                Obtenez un devis personnalisé pour votre projet géotechnique.
                Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Devis gratuit et sans engagement</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Réponse sous 24 heures</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Accompagnement personnalisé</span>
                </li>
              </ul>
              <a
                href="tel:+21671000000"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Demander un Devis
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
