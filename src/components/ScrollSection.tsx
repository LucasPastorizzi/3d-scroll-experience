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
  children,
}: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const imageList = images && images.length > 0 ? images : [image!];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 MOBILE SAFE (menos agressivo)
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [reverse ? -8 : 8, 0, reverse ? 8 : -8]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  useEffect(() => {
    if (isInteracting || imageList.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imageList.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isInteracting, imageList.length]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex items-center py-12 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid gap-10 items-center ${
            reverse
              ? "lg:grid-cols-2 lg:flex-row-reverse"
              : "lg:grid-cols-2"
          }`}
        >
          {/* IMAGE */}
          <motion.div
            style={{ y: imgY, rotateY, scale }}
            className={`${reverse ? "lg:order-2" : ""}`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                key={imageList[activeIndex]}
                src={imageList[activeIndex]}
                alt={imageAlt}
                className="w-full h-[250px] md:h-[400px] object-cover"
                initial={{ opacity: 0.7, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* THUMBNAILS */}
            {imageList.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
                {imageList.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsInteracting(true);
                      setTimeout(() => setIsInteracting(false), 4000);
                    }}
                    className={`w-16 h-14 md:w-20 md:h-16 object-cover rounded-md cursor-pointer border transition ${
                      activeIndex === index
                        ? "border-primary scale-105"
                        : "border-transparent opacity-70"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* TEXT */}
          <motion.div
            style={{ y, opacity }}
            className={`max-w-xl ${reverse ? "lg:order-1" : ""}`}
          >
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              {subtitle}
            </span>

            <h2 className="mt-2 text-2xl md:text-4xl font-bold">
              {title}
            </h2>

            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              {description}
            </p>

            {children && (
              <div className="mt-5 space-y-2 text-sm md:text-base text-muted-foreground">
                {children}
              </div>
            )}

            <motion.div
              className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;