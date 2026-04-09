import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

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

  {
    label: "Lazer",
    href: "#lazer",
    submenu: [
      { label: "Cabanas Abertas", href: "#cabanas-abertas" },
      { label: "Cabanas Fechadas", href: "#cabanas-fechadas" },
    ],
  },

  { label: "Fotos", href: "#fotos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const whatsappLink = "https://wa.me/5551999999999";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

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
        scrolled
          ? "bg-black/30 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        
        {/* LOGO */}
        <motion.a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="text-lg md:text-2xl font-bold tracking-wider text-gray-300"
        >
          <span className="text-gradient">Pesque Pague Wiest</span>
        </motion.a>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition rounded-lg hover:bg-white/10 flex items-center gap-1"
              >
                {item.label}
                {item.submenu && <span className="text-xs">▼</span>}
              </a>

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
                        className="block px-4 py-3 text-sm hover:bg-primary/10 rounded-lg"
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

        {/* BOTÃO WHATSAPP DESKTOP */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-2 rounded-xl font-medium transition"
        >
          <MessageCircle size={18} />
          Fale Conosco
        </motion.a>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden p-2 text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-background z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="w-full text-left px-4 py-4 rounded-xl text-base font-medium hover:bg-secondary transition"
                    >
                      {item.label}
                    </button>

                    {item.submenu && (
                      <div className="ml-3 border-l border-white/10 pl-3 space-y-1">
                        {item.submenu.map((sub) => (
                          <button
                            key={sub.href}
                            onClick={() => scrollTo(sub.href)}
                            className="w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-primary transition"
                          >
                            • {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-4 rounded-xl font-semibold transition"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    Fale Conosco
                  </div>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;