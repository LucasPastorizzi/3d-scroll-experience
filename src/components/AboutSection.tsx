import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 efeitos 3D refinados
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.85, 1],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0, 1], [140, -140]);

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative min-h-[90vh] bg-white overflow-hidden flex items-center section-3d"
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
        {/* TÍTULO */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-gray-900">
            Pesque Pague Wiest
          </h2>
        </div>

        {/* TEXTO */}
   {/* TEXTO */}
<div className="mt-16 max-w-5xl mx-auto text-center space-y-8">
  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
    Localizado no coração de Morro Reuter, o{" "}
    <strong>Pesque Pague Wiest</strong> é o lugar ideal para quem busca
    tranquilidade, contato com a natureza e a emoção de uma boa pescaria.
  </p>

  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
    Rodeado pela paisagem serrana gaúcha, nosso espaço oferece uma
    experiência completa para toda a família — desde o iniciante que quer
    sentir a primeira fisgada até o pescador experiente em busca de um
    belo exemplar.
  </p>

  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
    Venha passar um dia diferente, longe da correria do dia a dia, em um
    ambiente acolhedor que tem o jeito simples e genuíno da tradição do
    interior.
  </p>
</div>

        {/* LINHA DIVISÓRIA */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent origin-center"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;