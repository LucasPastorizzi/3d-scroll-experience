import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 efeitos 3D
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-20 overflow-hidden section-3d"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
        }}
        className="container mx-auto px-6"
      >
        {/* apagar do código */}
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="mt-4 font-heading text-4xl md:text-6xl font-bold text-gray-900">
            Pesque Pague Giaretta
          </h2>
        </div>

        {/* TEXTO */}
        <div className="mt-16 max-w-5xl mx-auto text-center space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Muito mais do que um simples pesqueiro, o <strong>Giaretta</strong> é um
            verdadeiro refúgio para quem busca tranquilidade, lazer e contato com a natureza.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Nossas pesqueiras contam com grande variedade de peixes, proporcionando
            uma experiência completa tanto para iniciantes quanto para pescadores experientes.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Em meio a jardins exuberantes e um ambiente acolhedor, você também encontra
            gastronomia regional e experiências com vinhos selecionados.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Aqui, cada visita se transforma em um momento único de descanso,
            conexão e lazer em família.
          </p>
        </div>

        {/* LINHA */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent origin-left"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;