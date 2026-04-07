import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  images: string[];
};

const PesqueirasSection = ({ images }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const peixes = [
    { nome: "Tilápia", preco: "R$ 18/kg", img: images[0] },
    { nome: "Pacu", preco: "R$ 22/kg", img: images[1] },
    { nome: "Carpa", preco: "R$ 20/kg", img: images[2] },
    { nome: "Tambaqui", preco: "R$ 25/kg", img: images[0] },
  ];

  return (
    <section id="pesqueiras" className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Pesqueiras do Giaretta
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Um ambiente planejado para oferecer o melhor da pesca, com estrutura completa,
            variedade de peixes e uma conexão única com a natureza.
          </p>
        </motion.div>

        {/* 🐟 PESQUE & PAGUE */}
        <div id="pesque-pague" className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.img
              src={images[1]}
              alt="Pesque e pague"
              className="rounded-2xl w-full h-[400px] object-cover"
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            />

            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Pesque & Pague
              </h3>

              <p className="mt-6 text-lg text-muted-foreground">
                Ideal para quem busca lazer e praticidade, pesque e leve seu peixe na hora.
              </p>

              <button
                onClick={() => setOpenModal(true)}
                className="mt-6 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:scale-105 transition"
              >
                Ver valores dos peixes
              </button>
            </div>
          </motion.div>
        </div>

        {/* GALERIA */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="rounded-2xl h-64 w-full object-cover"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>

        {/* 🎣 PESCA ESPORTIVA */}
        <motion.div
          id="pesca-esportiva"
          className="mt-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Pesca Esportiva
            </h3>

            <p className="mt-6 text-lg text-muted-foreground">
              Experiência completa para pescadores, com estrutura e variedade de peixes.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <span className="text-sm text-primary">Valor por pessoa</span>
              <h4 className="text-3xl font-bold mt-2">R$ 50,00</h4>
            </div>
          </div>

          <motion.img
            src={images[0]}
            className="rounded-2xl h-[400px] object-cover"
          />
        </motion.div>

      </div>

      {/* 💥 MODAL */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background rounded-2xl max-w-4xl w-full p-6 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-4 right-4"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-6">
                Valores dos Peixes
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {peixes.map((p, i) => {
                  const isOpen = activeIndex === i;

                  return (
                    <motion.div
                      key={i}
                      layout
                      onClick={() => setActiveIndex(isOpen ? null : i)}
                      className="cursor-pointer bg-secondary p-4 rounded-xl overflow-hidden"
                    >
                      {/* HEADER */}
                      <div className="flex items-center gap-4">
                        <img src={p.img} className="w-16 h-16 rounded-lg object-cover" />

                        <div className="flex-1">
                          <h4 className="font-bold">{p.nome}</h4>
                          <p className="text-primary">{p.preco}</p>
                        </div>

                        <span>{isOpen ? "▲" : "▼"}</span>
                      </div>

                      {/* EXPANSÃO */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4"
                          >
                            <img
                              src={p.img}
                              className="w-full h-40 object-cover rounded-lg mb-3"
                            />

                            <p className="text-sm text-muted-foreground">
                              Peixe fresco de alta qualidade, capturado diretamente dos nossos lagos.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PesqueirasSection;