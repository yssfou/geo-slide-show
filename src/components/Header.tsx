import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "À Propos" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="flex items-center justify-center py-6 px-4">
        {/* Centered Pill Navigation */}
        <nav className="flex items-center gap-2 bg-card/80 backdrop-blur-xl rounded-full px-3 py-2 border border-border/30 shadow-2xl shadow-black/20">
          {/* Logo */}
          <motion.a
            href="#accueil"
            className="flex items-center gap-2 px-3 py-1.5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-8 h-8 bg-terracotta-gradient rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <span className="text-foreground font-bold text-lg tracking-tight hidden sm:block">
              EGG
            </span>
          </motion.a>

          {/* Divider */}
          <div className="h-6 w-px bg-border/50 mx-1 hidden md:block" />

          {/* Nav Links */}
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="hidden md:flex px-4 py-2 text-muted-foreground hover:text-foreground transition-all text-sm font-medium rounded-full hover:bg-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}

          {/* Divider */}
          <div className="h-6 w-px bg-border/50 mx-1 hidden md:block" />

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="flex items-center gap-2 bg-terracotta-gradient text-primary-foreground px-4 py-2 rounded-full font-medium text-sm shadow-lg shadow-primary/30"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -5px hsl(var(--primary) / 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden sm:block">Nous Contacter</span>
            <span className="sm:hidden">Contact</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </nav>

        {/* Mobile Menu Button - positioned absolute */}
        <motion.button
          className="md:hidden fixed top-6 right-4 text-foreground p-2 rounded-lg bg-card/80 backdrop-blur-xl border border-border/30 z-50"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden fixed top-20 left-4 right-4 p-4 bg-card/95 backdrop-blur-xl rounded-2xl border border-border/30 shadow-2xl z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;