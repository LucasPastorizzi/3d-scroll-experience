import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  {
    label: "Pesqueiras",
    href: "#pesqueiras",
    submenu: [
      { label: "Pesque & Pague", href: "#pesque-pague" },
      { label: "Pesca Esportiva", href: "#pesca-esportiva" },
    ],
  },
  { label: "Restaurante", href: "#restaurante" },
  { label: "Enoturismo", href: "#enoturismo" },
  { label: "Jardim", href: "#jardim" },
  { label: "Empório", href: "#emporio" },
  { label: "Lazer", href: "#lazer" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* LOGO */}
        <motion.a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="font-heading text-2xl font-bold tracking-wider text-foreground"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gradient">Pesque Pague Wiest</span>
        </motion.a>

        {/* DESKTOP */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              
              {/* ITEM PRINCIPAL */}
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary flex items-center gap-1"
              >
                {item.label}
                {item.submenu && <span className="text-xs">▼</span>}
              </a>

              {/* DROPDOWN FIX (SEM GAP) */}
              {item.submenu && (
                <div className="absolute left-0 top-full w-52 pt-2">
                  <div className="rounded-xl bg-background/95 backdrop-blur-md border border-white/10 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(sub.href);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-primary/10 transition rounded-lg"
                      >
                        {sub.label}
                      </a>
                    ))}

                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  
                  {/* ITEM PRINCIPAL */}
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                  >
                    {item.label}
                  </a>

                  {/* SUBMENU MOBILE */}
                  {item.submenu && (
                    <div className="ml-4 flex flex-col">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollTo(sub.href);
                          }}
                          className="px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          • {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;