import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImageItem {
  src: string;
  span?: string;
}

interface GalleryProps {
  images: ImageItem[];
}

const GalleryMosaic = ({ images }: GalleryProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="fotos" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* tirar do codigo */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Grandes Capturas & Momentos
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Veja de perto os resultados reais dos nossos pescadores e a beleza do nosso espaço.
          </p>
        </div>

        {/* 🔥 MOSAICO DIFERENCIADO */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[180px] gap-3">

          {images.map((img, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(img.src)}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.span}`}
            >
              <img
                src={img.src}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}

        </div>
      </div>

      {/* 🔥 LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selected}
              className="max-w-full max-h-[90vh] rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />

            <button className="absolute top-6 right-6 text-white">
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryMosaic;