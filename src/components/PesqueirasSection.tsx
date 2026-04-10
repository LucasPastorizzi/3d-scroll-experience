import { motion } from "framer-motion";

type Props = {
  images: string[];
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const PesqueirasSection = ({ images }: Props) => {
  const peixes = [
    { nome: "Tilápia", preco: 18, desc: "A favorita para o dia a dia" },
    { nome: "Traíra", preco: 20, desc: "Carne firme e sabor marcante" },
    { nome: "Jundiá", preco: 22, desc: "Peixe de couro nobre" },
    { nome: "Catfish", preco: 25, desc: "Suave e sem espinhos" },
    { nome: "Carpa Comum", preco: 18, desc: "Tradição em cada quilo" },
    { nome: "Carpa Cabeçuda", preco: 23, desc: "Ideal para cortes grandes" },
  ];

  return (
    <section
      id="pesqueiras"
      className="relative py-28 bg-gradient-to-b from-white to-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-28">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-xs">
              Tabela de Valores
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black text-black leading-none">
              Pesque <br /> & Pague.
            </h2>

            <p className="mt-8 text-lg text-gray-500 max-w-md leading-relaxed">
              Peixes frescos direto do tanque. Experiência única com qualidade e transparência nos valores.
            </p>
          </motion.div>

          {/* CARD PREÇOS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="backdrop-blur-xl bg-white/60 p-10 md:p-12 rounded-[2rem] border border-white/40 shadow-2xl"
          >
            <div className="flex justify-between items-end mb-10">
              <h3 className="text-2xl font-bold italic underline decoration-blue-500 underline-offset-8">
                Preços por KG
              </h3>
              <span className="text-[10px] text-gray-400 font-mono uppercase">
                Atualizado hoje
              </span>
            </div>

            <div className="space-y-6">
              {peixes.map((p, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative flex justify-between items-center pb-4"
                >
                  {/* linha animada */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500"></span>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {p.nome}
                    </h4>
                    <p className="text-sm text-gray-400">{p.desc}</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-right"
                  >
                    <span className="text-2xl font-black text-black">
                      R$ {p.preco}
                    </span>
                    <span className="text-xs text-gray-400 block font-medium">
                      / kg
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-white/70 backdrop-blur rounded-xl border-l-4 border-blue-500 italic text-sm text-gray-600">
              * Limpeza e preparo inclusos.
            </div>
          </motion.div>
        </div>

        {/* PESCA ESPORTIVA */}
        <div className="relative rounded-[3rem] overflow-hidden py-24 px-10 md:px-20 text-white bg-black">
          
          {/* background com overlay + zoom */}
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 opacity-40"
          >
            <img
              src={images[0]}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
              <h3 className="text-5xl md:text-6xl font-black mb-6 italic leading-tight">
                Pesca <br /> Esportiva
              </h3>

              <p className="text-gray-300 text-lg">
                Viva a experiência da pesca esportiva com estrutura completa e ambiente natural.
              </p>
            </div>

            {/* CARD PREÇO */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="bg-white text-black p-10 rounded-3xl text-center min-w-[280px] shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              <span className="text-xs uppercase font-bold tracking-widest text-gray-400 block mb-2">
                Acesso por pessoa
              </span>

              <div className="flex items-start justify-center">
                <span className="text-2xl font-bold mt-2">R$</span>
                <span className="text-7xl font-black tracking-tighter">
                  50
                </span>
              </div>

              <p className="mt-4 font-bold text-blue-600 uppercase text-xs">
                Diária Completa
              </p>
            </motion.div>
          </div>
        </div>

        {/* GALERIA */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.slice(0, 4).map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`relative h-64 rounded-2xl overflow-hidden group ${
                i % 2 !== 0 ? "mt-10" : ""
              }`}
            >
              <img
                src={img}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* overlay elegante */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PesqueirasSection;