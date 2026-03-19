import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Endereço", value: "Estrada Rural, Km 5 - Interior, RS" },
  { icon: Phone, label: "Telefone", value: "(54) 3000-0000" },
  { icon: Clock, label: "Horário", value: "Ter a Dom — 9h às 18h" },
];

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="contato" ref={ref} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div style={{ y }} className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Fale Conosco
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-6xl font-bold text-foreground">
            Entre em Contato
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 text-center group hover:border-primary/40 transition-colors"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{item.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-heading text-lg font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:scale-105"
          >
            <MessageCircle size={22} />
            Fale pelo WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Pesque Pague Giaretta. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
