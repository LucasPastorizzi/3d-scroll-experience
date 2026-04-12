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
            Seja para levar o peixe para casa ou para viver a experiência da
            pesca esportiva, oferecemos ambientes tranquilos, bem cuidados e
            pensados para diferentes perfis de pescadores.
          </p>
        </motion.div>

        {/* ===================== PESQUE & PAGUE ===================== */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* IMAGEM 3D + HOVER */}
          <motion.div
            variants={imageLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.06,
              rotateY: -6,
              rotateX: 3,
              boxShadow: "0px 40px 80px rgba(0,0,0,0.6)",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{
              perspective: 1400,
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            {/* camada fake de profundidade */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl translate-x-6 translate-y-6" />

            <img
              src={images[0]}
              alt="Pesque e Pague"
              className="relative h-[520px] w-full object-cover rounded-3xl"
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
              No pesque e pague, a dinâmica é simples e acessível: você pesca
              livremente e paga apenas pelo peixe que decidir levar. Uma opção
              perfeita para quem quer peixe fresco e momentos tranquilos.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              O ambiente é familiar, organizado e ideal para quem está começando
              ou busca um lazer agradável ao ar livre.
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
              A experiência da pesca em sua forma mais pura
            </h3>

            <p className="text-gray-400 mt-6 leading-relaxed">
              A pesca esportiva é focada na técnica, paciência e respeito à
              natureza. O peixe é fisgado, apreciado e devolvido à água,
              preservando o ecossistema.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Os açudes são exclusivos para essa modalidade, garantindo silêncio,
              desafio e uma experiência mais intensa para o pescador.
            </p>

            <div className="mt-8">
              <span className="text-gray-400">Acesso diário</span>
              <div className="text-4xl font-semibold mt-2">R$ 50</div>
            </div>

            <ul className="mt-8 list-disc list-inside text-gray-400 space-y-2">
              <li>Pesque e solte</li>
              <li>Açudes preservados</li>
              <li>Ideal para pescadores experientes</li>
            </ul>
          </motion.div>

          {/* IMAGEM 3D + HOVER */}
          <motion.div
            variants={imageRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.06,
              rotateY: 6,
              rotateX: 3,
              boxShadow: "0px 40px 80px rgba(0,0,0,0.6)",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{
              perspective: 1400,
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            {/* camada fake de profundidade */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl -translate-x-6 translate-y-6" />

            <img
              src={images[1]}
              alt="Pesca esportiva"
              className="relative h-[520px] w-full object-cover rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}