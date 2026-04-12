import { motion } from "framer-motion";

type Props = {
  images: string[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageLeft = {
  hidden: { opacity: 0, rotateY: -14, y: 40 },
  show: {
    opacity: 1,
    rotateY: 0,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageRight = {
  hidden: { opacity: 0, rotateY: 14, y: 40 },
  show: {
    opacity: 1,
    rotateY: 0,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function PesqueirasSection({ images }: Props) {
  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-48">

        {/* ===================== INTRO ===================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Nossas modalidades
          </span>
          <h2 className="text-5xl font-semibold mt-4">
            Aqui a pesca é vivida do seu jeito
          </h2>
          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Ambientes pensados para quem busca tranquilidade, técnica ou
            simplesmente bons momentos junto à natureza.
          </p>
        </motion.div>

        {/* ===================== PESQUE & PAGUE ===================== */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* IMAGEM ORGÂNICA */}
          <motion.div
            variants={imageLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateY: -6,
              rotateX: 3,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{
              perspective: 1400,
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            {/* moldura */}
            <div className="absolute inset-0 bg-white/5 
              rounded-[80px_20px_80px_20px] 
              translate-x-6 translate-y-6"
            />

            <img
              src={images[0]}
              alt="Pesque e Pague"
              className="
                relative 
                w-full 
                h-[520px] 
                object-cover
                rounded-[80px_20px_80px_20px]
                shadow-2xl
              "
            />
          </motion.div>

          {/* TEXTO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Pesque & Pague
            </span>
            <h3 className="text-4xl font-semibold mt-4">
              Pesque, escolha e leve o peixe para casa
            </h3>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Uma modalidade simples e acolhedora, onde você pesca no seu ritmo
              e paga apenas pelo peixe que levar.
            </p>

            <div className="mt-10 space-y-3 text-gray-300">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Tilápia</span>
                <span>R$ 18/kg</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Traíra</span>
                <span>R$ 20/kg</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Jundiá</span>
                <span>R$ 22/kg</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Catfish</span>
                <span>R$ 25/kg</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================== PESCA ESPORTIVA ===================== */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* TEXTO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Pesca Esportiva
            </span>
            <h3 className="text-4xl font-semibold mt-4">
              Técnica, desafio e respeito à natureza
            </h3>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Para quem busca uma experiência mais intensa, baseada em técnica,
              paciência e preservação ambiental.
            </p>

            <div className="mt-8">
              <span className="text-gray-400">Acesso diário</span>
              <div className="text-4xl font-semibold mt-2">R$ 50</div>
            </div>
          </motion.div>

          {/* IMAGEM RECORTE FORTE */}
          <motion.div
            variants={imageRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateY: 6,
              rotateX: 3,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{
              perspective: 1400,
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            {/* moldura */}
            <div className="absolute inset-0 bg-white/5 
              rounded-[20px_100px_20px_100px] 
              -translate-x-6 translate-y-6"
            />

            <img
              src={images[1]}
              alt="Pesca esportiva"
              className="
                relative 
                w-full 
                h-[520px] 
                object-cover
                rounded-[20px_100px_20px_100px]
                shadow-2xl
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}