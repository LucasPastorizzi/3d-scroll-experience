import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScrollSection from "@/components/ScrollSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PesqueirasSection from "@/components/PesqueirasSection";

import heroFishing from "@/assets/hero-fishing.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroEnoturismo from "@/assets/hero-enoturismo.jpg";
import heroGarden from "@/assets/hero-garden.jpg";
import heroEmporio from "@/assets/hero-emporio.jpg";
import heroLazer from "@/assets/hero-lazer.jpg";

/* =========================
   ARRAYS DE IMAGENS
========================= */

// Pesca
const pescaImages = [
  heroFishing,
  heroFishing,
  heroFishing,
];

// Restaurante (simulação com imagens existentes)
const restauranteImages = [
  heroRestaurant, // buffet geral
  heroGarden,     // ambiente
  heroEmporio,    // produtos
  heroLazer,      // espaço
];

/* =========================
   COMPONENT
========================= */

const Index = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />

      <HeroSection />

      <AboutSection />

      {/* PESQUEIRAS */}
      <PesqueirasSection images={pescaImages} />

      {/* RESTAURANTE (AGORA COM GALERIA) */}
      <ScrollSection
        id="restaurante"
        title="Restaurante"
        subtitle="Gastronomia"
        description="Explore nosso buffet completo com uma variedade de pratos, sabores autênticos e um ambiente acolhedor em meio à natureza. Uma experiência gastronômica pensada para toda a família."
        images={restauranteImages}
        imageAlt="Restaurante Giaretta"
      />

      {/* ENOTURISMO */}
      <ScrollSection
        id="enoturismo"
        title="Enoturismo"
        subtitle="Vinhos & Degustação"
        description="Descubra os sabores dos vinhos artesanais da região. Faça um tour pela vinícola, conheça o processo de produção e desfrute de degustações exclusivas em meio às videiras."
        image={heroEnoturismo}
        imageAlt="Vinícola e enoturismo"
      />

      {/* JARDIM */}
      <ScrollSection
        id="jardim"
        title="Jardim Botânico"
        subtitle="Natureza"
        description="Passeie por trilhas cercadas de vegetação nativa, flores tropicais e espécies raras. Um refúgio de paz e contemplação."
        image={heroGarden}
        imageAlt="Jardim botânico do Giaretta"
        reverse
      />

      {/* EMPÓRIO */}
      <ScrollSection
        id="emporio"
        title="Empório"
        subtitle="Produtos Artesanais"
        description="Leve um pedaço do Giaretta para casa com nossos produtos coloniais selecionados: queijos, vinhos, geleias e muito mais."
        image={heroEmporio}
        imageAlt="Empório com produtos artesanais"
      />

      {/* LAZER */}
      <ScrollSection
        id="lazer"
        title="Área de Lazer"
        subtitle="Diversão para Todos"
        description="Piscinas, playground, campos e espaços para churrasco. Um ambiente completo para toda a família relaxar e se divertir."
        image={heroLazer}
        imageAlt="Área de lazer com piscina"
        reverse
      />

      <ContactSection />

      <WhatsAppButton />
    </div>
  );
};

export default Index;