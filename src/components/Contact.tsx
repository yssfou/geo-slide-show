import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

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
      href: "mailto:egg.brahim@gmail.com",
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

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5!2d10.1833!3d36.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c8e7a5b8e7%3A0x5c6e7e8f9a0b1c2d!2sCit%C3%A9%20La%20Gazelle%2C%20Ariana%202083%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1704067200000!5m2!1sen!2stn"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EGG Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;