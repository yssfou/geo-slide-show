import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const EMAIL_LINK =
  "mailto:egg.brahim@gmail.com?subject=Demande%20d'information%20-%20EGG&body=Bonjour%20EGG%2C%0A%0AJe%20souhaite%20obtenir%20des%20informations%20concernant%20vos%20services.%0A%0ACordialement,";

const Contact = () => {
  const contactCards = [
    {
      icon: Phone,
      title: "Téléphone",
      items: [
        { label: "Mobile", value: "+216 97 446 899" },
        { label: "Tel/Fax", value: "+216 71 762 924" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      items: [{ label: "", value: "egg.brahim@gmail.com" }],
      href: EMAIL_LINK,
    },
    {
      icon: MapPin,
      title: "Adresse",
      items: [
        { label: "", value: "Local 1, Impasse Amine Rayhani" },
        { label: "", value: "Cité La Gazelle, Ariana 2083, Tunisie" },
      ],
      href: "https://maps.app.goo.gl/WvuFPMkWnt9SnV4s8",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
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
            Contactez-nous
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Prêt à <span className="text-gradient">Démarrer</span> Votre Projet?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos
            questions et vous accompagner dans vos projets.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group cursor-pointer"
              onClick={() => card.href && window.open(card.href, "_blank")}
            >
              <motion.div
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <card.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <div className="space-y-2">
                {card.items.map((item, i) => (
                  <div key={i}>
                    {item.label && (
                      <span className="text-primary text-sm">{item.label}</span>
                    )}
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Besoin d'une Étude Géotechnique?
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+21697446899"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:bg-background/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Appelez-nous
            </motion.a>

            <motion.a
              href={EMAIL_LINK}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Envoyez un Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

