import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";

interface ImageItem {
  src: string;
}

interface GalleryProps {
  images: ImageItem[];
}

const GalleryMosaic = ({ images }: GalleryProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="fotos" className="py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Grandes Capturas & Momentos
          </h2>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Veja de perto os resultados reais dos nossos pescadores e a beleza do nosso espaço.
          </p>
        </div>

        {/* 🔥 MASONRY GRID (TOP) */}
        <div className="columns-2 md:columns-4 gap-2 md:gap-4 space-y-2 md:space-y-4">

          {images.map((img, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(img.src)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid"
            >
              <img
                src={img.src}
                className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
              />

              {/* OVERLAY PREMIUM */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Expand className="text-white opacity-80" size={28} />
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* 🔥 LIGHTBOX PREMIUM */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selected}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: "spring", stiffness: 120 }}
            />

            {/* BOTÃO FECHAR */}
            <button className="absolute top-6 right-6 text-white/80 hover:text-white transition">
              <X size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryMosaic;