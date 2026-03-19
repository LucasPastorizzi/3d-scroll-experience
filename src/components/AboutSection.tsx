import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Fish, Utensils, Wine, TreePine } from "lucide-react";

const features = [
  { icon: Fish, label: "Pesqueiras", desc: "Lagos repletos de peixes" },
  { icon: Utensils, label: "Restaurante", desc: "Gastronomia regional" },
  { icon: Wine, label: "Enoturismo", desc: "Vinhos artesanais" },
  { icon: TreePine, label: "Natureza", desc: "Jardins exuberantes" },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="sobre" ref={ref} className="relative py-32 overflow-hidden section-3d">
      <div className="container mx-auto px-6">
        <motion.div style={{ y, opacity }} className="max-w-3xl mx-auto text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Conheça
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-6xl font-bold text-foreground">
            Sobre o Giaretta
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            O Pesque Pague Giaretta é um refúgio em meio à natureza, onde tradição e 
            modernidade se encontram. Oferecemos pesqueiras, restaurante com culinária 
            regional, enoturismo, jardins exuberantes e muito mais para toda a família.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 60, rotateY: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ y: -8, rotateY: -5 }}
              className="glass-card rounded-2xl p-6 text-center cursor-default"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon size={24} />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground">{f.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
