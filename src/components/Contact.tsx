import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Contactez-nous
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Prêt à <span className="text-gradient">Démarrer</span> Votre Projet?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos
            questions et vous accompagner dans vos projets.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Phone Card */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:scale-105 transition-all duration-300 group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Téléphone</h3>
            <div className="space-y-3">
              <div>
                <span className="text-primary text-sm">Mobile</span>
                <p className="text-muted-foreground">+216 97 446 899</p>
              </div>
              <div>
                <span className="text-primary text-sm">Tel/Fax</span>
                <p className="text-muted-foreground">+216 71 762 924</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:scale-105 transition-all duration-300 group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Email</h3>
            <a 
              href="mailto:egg.brahim@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              egg.brahim@gmail.com
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:scale-105 transition-all duration-300 group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Adresse</h3>
            <a 
              href="https://maps.app.goo.gl/WvuFPMkWnt9SnV4s8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Local 1, Impasse Amine Rayhani
              <br />
              Cité La Gazelle, Ariana 2083, Tunisie
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div className="rounded-xl overflow-hidden border border-border">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;