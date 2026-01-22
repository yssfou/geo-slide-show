import client1 from "@/assets/client-1.webp";
import steg from "@/assets/steg.png";
import client4 from "@/assets/client-4.gif";
import scet from "@/assets/scet.svg";
import avicenne from "@/assets/avicenne.jpg";
import client5 from "@/assets/client-5.png";
import habitat from "@/assets/habitat.png";

const Clients = () => {
  const clients = [
    { image: client1, alt: "Client 1" },
    { image: steg, alt: "STEG" },
    { image: client4, alt: "Client 4" },
    { image: scet, alt: "SCET" },
    { image: avicenne, alt: "Avicenne" },
    { image: client5, alt: "Client 5" },
    { image: habitat, alt: "Habitat" },
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Partenaires de confiance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Nos Clients
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nous sommes fiers de collaborer avec des entreprises et institutions
            de premier plan
          </p>
        </div>

        {/* Client Logo Scroll */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-clients" style={{ width: "fit-content" }}>
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 mx-6 bg-card rounded-xl flex items-center justify-center p-4"
              >
                <img
                  src={client.image}
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
