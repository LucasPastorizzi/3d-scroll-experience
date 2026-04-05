import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroFishing from "@/assets/SSS.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={heroFishing}
          alt="Pesque Pague Wiest - Vista aérea do lago"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-primary"
        >
          Bem-vindo ao
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 50, rotateX: 45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none"
        >
          <img src="LogoWiest.jpg"/>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 max-w-md text-lg text-muted-foreground"
        >
          Uma experiência única em meio à natureza
        </motion.p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-primary"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
