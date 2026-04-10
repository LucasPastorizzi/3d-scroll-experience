import { motion } from "framer-motion";

type Props = {
  images: string[];
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
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-24">
          
          {/* TEXTO */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-400 uppercase">
              Pesque & Pague
            </span>

            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Valores claros.
              <br />
              Experiência real.
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
              Trabalhamos com peixes frescos em ambiente controlado. 
              Transparência nos valores e qualidade garantida.
            </p>
          </motion.div>

          {/* TABELA */}
          <motion.div
            className="lg:col-span-7 border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {peixes.map((p, i) => (
              <div
                key={i}
                className="
                  flex flex-col sm:grid sm:grid-cols-3 
                  gap-2 sm:gap-4 
                  py-5 border-b border-gray-100
                "
              >
                <h4 className="text-base sm:text-lg font-medium text-gray-900">
                  {p.nome}
                </h4>

                <p className="text-sm text-gray-400">
                  {p.desc}
                </p>

                <div className="flex justify-between sm:block sm:text-right">
                  <span className="text-lg sm:text-xl font-semibold text-gray-900">
                    R$ {p.preco}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 ml-1">
                    /kg
                  </span>
                </div>
              </div>
            ))}

            <p className="text-[11px] sm:text-xs text-gray-400 mt-4 sm:mt-6">
              * Limpeza e preparo inclusos.
            </p>
          </motion.div>
        </div>

        {/* BLOCO DE DESTAQUE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* IMAGEM */}
          <motion.div
            className="lg:col-span-7 h-[260px] sm:h-[320px] md:h-[420px] rounded-xl md:rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <img
              src={images[0]}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* INFO */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
              Pesca Esportiva
            </span>

            <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Um espaço para quem leva a pesca a sério.
            </h3>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-500 leading-relaxed">
              Estrutura pensada para proporcionar uma experiência tranquila, 
              tanto para iniciantes quanto para pescadores experientes.
            </p>

            {/* PREÇO */}
            <div className="mt-6 sm:mt-10 flex items-end gap-2">
              <span className="text-base sm:text-lg text-gray-500">R$</span>
              <span className="text-3xl sm:text-5xl font-semibold text-gray-900">
                50
              </span>
              <span className="text-xs sm:text-sm text-gray-400 mb-1">
                / diária
              </span>
            </div>
          </motion.div>
        </div>

        {/* GALERIA */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.slice(0, 4).map((img, i) => (
            <motion.div
              key={i}
              className="h-36 sm:h-48 md:h-56 overflow-hidden rounded-lg sm:rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PesqueirasSection;