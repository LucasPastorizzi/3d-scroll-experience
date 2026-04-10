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
    <section id="pesqueiras" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* HEADER ESTRUTURAL */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">
              Tabela de Valores
            </span>
            <h2 className="mt-4 text-5xl md:text-7xl font-black text-black leading-none">
              Pesque <br /> & Pague.
            </h2>
            <p className="mt-8 text-xl text-gray-500 max-w-md leading-relaxed">
              Trabalhamos com peixes frescos e ambiente controlado. Valores sujeitos a alteração conforme a temporada.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-2xl shadow-gray-200/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="flex justify-between items-end mb-10">
              <h3 className="text-2xl font-bold italic underline decoration-blue-500 underline-offset-8">Preços por KG</h3>
              <span className="text-[10px] text-gray-400 font-mono uppercase">Atualizado hoje</span>
            </div>

            <div className="space-y-6">
              {peixes.map((p, i) => (
                <div key={i} className="group flex justify-between items-center border-b border-gray-200 pb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {p.nome}
                    </h4>
                    <p className="text-sm text-gray-400">{p.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-black">R$ {p.preco}</span>
                    <span className="text-xs text-gray-400 block font-medium">/ kg</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-white rounded-xl border-l-4 border-blue-500 italic text-sm text-gray-600">
              * Limpeza e preparo para transporte inclusos em todos os tipos de peixe.
            </div>
          </motion.div>
        </div>

        {/* ÁREA DE PESCA ESPORTIVA (DIFERENCIADA) */}
        <div className="relative rounded-[3rem] overflow-hidden bg-black py-20 px-8 md:px-20 text-white">
          <div className="absolute inset-0 opacity-40">
            <img src={images[0]} className="w-full h-full object-cover grayscale" alt="Background" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
              <h3 className="text-4xl md:text-6xl font-black mb-6 italic leading-tight">
                Pesca <br/> Esportiva
              </h3>
              <p className="text-gray-300 text-lg">
                Para quem busca o desafio e a conexão com a água. Estrutura completa para pescadores amadores e profissionais.
              </p>
            </div>
            
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black p-10 rounded-3xl text-center min-w-[280px]"
            >
              <span className="text-xs uppercase font-bold tracking-widest text-gray-400 block mb-2">Acesso por pessoa</span>
              <div className="flex items-start justify-center">
                <span className="text-2xl font-bold mt-2">R$</span>
                <span className="text-7xl font-black tracking-tighter">50</span>
              </div>
              <p className="mt-4 font-bold text-blue-600 uppercase text-xs">Diária Completa</p>
            </motion.div>
          </div>
        </div>

        {/* GALERIA MINIMALISTA */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.slice(0, 4).map((img, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className={`h-64 rounded-2xl overflow-hidden ${i % 2 !== 0 ? 'mt-8' : ''}`}
                >
                    <img src={img} className="w-full h-full object-cover" />
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default PesqueirasSection;