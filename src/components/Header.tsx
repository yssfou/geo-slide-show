import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Navigation Pill */}
        <motion.nav
          className="flex items-center justify-between bg-card/90 backdrop-blur-2xl rounded-2xl px-4 py-3 border border-border/20 shadow-2xl shadow-black/30"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <motion.a
            href="#accueil"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-10 h-10 bg-terracotta-gradient rounded-xl flex items-center justify-center shadow-lg shadow-primary/40">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-foreground font-bold text-lg tracking-tight block leading-none">
                EGG
              </span>
              <span className="text-muted-foreground text-[10px] uppercase tracking-widest">
                Géotechnique
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/40 rounded-xl px-2 py-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-primary/10 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-terracotta-gradient text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-primary/40 group"
            whileHover={{ scale: 1.03, boxShadow: "0 15px 35px -5px hsl(var(--primary) / 0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Contactez-nous</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-foreground p-2.5 rounded-xl bg-secondary/60 border border-border/30"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.nav>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 p-4 bg-card/95 backdrop-blur-2xl rounded-2xl border border-border/20 shadow-2xl"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between py-3 px-3 text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-all font-medium rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3 flex items-center justify-center gap-2 bg-terracotta-gradient text-primary-foreground px-4 py-3 rounded-xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <span>Contactez-nous</span>
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;