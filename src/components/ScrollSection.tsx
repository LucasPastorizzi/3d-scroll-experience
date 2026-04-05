import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

interface ScrollSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  images?: string[];
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
}

const ScrollSection = ({
  id,
  title,
  subtitle,
  description,
  image,
  images,
  imageAlt,
  reverse = false,
}: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const imageList = images && images.length > 0 ? images : [image!];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [reverse ? -15 : 15, 0, reverse ? 15 : -15]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  /* =========================
     AUTOPLAY CARROSSEL
  ========================= */
  useEffect(() => {
    if (isInteracting || imageList.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imageList.length);
    }, 3000); // tempo de troca

    return () => clearInterval(interval);
  }, [isInteracting, imageList.length]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex items-center py-20 overflow-hidden section-3d"
    >
      <div className="container mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            reverse ? "lg:direction-rtl" : ""
          }`}
        >
          {/* IMAGE */}
          <motion.div
            style={{ y: imgY, rotateY, scale }}
            className={`relative ${reverse ? "lg:order-2" : ""}`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                key={imageList[activeIndex]}
                src={imageList[activeIndex]}
                alt={imageAlt}
                className="w-full aspect-[4/3] object-cover"
                initial={{ opacity: 0.7, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* THUMBNAILS */}
            {imageList.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {imageList.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsInteracting(true);
                      setTimeout(() => setIsInteracting(false), 5000);
                    }}
                    className={`w-24 h-20 object-cover rounded-lg cursor-pointer border-2 transition ${
                      activeIndex === index
                        ? "border-primary scale-105"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* DECORATION */}
            <motion.div
              style={{ opacity }}
              className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-primary/20"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            style={{ y, opacity }}
            className={reverse ? "lg:order-1" : ""}
          >
            <motion.span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
              {subtitle}
            </motion.span>

            <h2 className="mt-4 font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
              {description}
            </p>

            <motion.div
              className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;