import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "À Propos" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    "Sondages Géotechniques",
    "Études Environnementales",
    "Travaux Spéciaux",
    "Essais in-situ",
  ];

  const contactInfo = [
    {
      icon: Phone,
      content: (
        <div className="flex flex-col gap-1">
          <a href="tel:+21697446899" className="hover:text-primary transition-colors">+216 97 446 899</a>
          <a href="tel:+21671762924" className="hover:text-primary transition-colors">+216 71 762 924</a>
        </div>
      ),
    },
    {
      icon: Mail,
      content: (
        <a href="mailto:egg.brahim@gmail.com" className="hover:text-primary transition-colors">
          egg.brahim@gmail.com
        </a>
      ),
    },
    {
      icon: MapPin,
      content: (
        <a
          href="https://maps.app.goo.gl/WvuFPMkWnt9SnV4s8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Local 1, Impasse Amine Rayhani<br />Cité La Gazelle, Ariana 2083
        </a>
      ),
    },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-terracotta-gradient rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-foreground font-bold text-xl tracking-tight">EGG</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Entreprises Géologiques & Géotechniques - Votre partenaire de
              confiance en études de sol et travaux spéciaux depuis 2011.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-foreground font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-foreground font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <item.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {item.content}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EGG - Entreprises Géologiques & Géotechniques. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
