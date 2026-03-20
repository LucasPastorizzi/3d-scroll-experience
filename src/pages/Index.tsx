import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScrollSection from "@/components/ScrollSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import heroFishing from "@/assets/hero-fishing.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroEnoturismo from "@/assets/hero-enoturismo.jpg";
import heroGarden from "@/assets/hero-garden.jpg";
import heroEmporio from "@/assets/hero-emporio.jpg";
import heroLazer from "@/assets/hero-lazer.jpg";
import PesqueirasSection from "@/components/PesqueirasSection";

const pescaImages = [
  heroFishing,
  heroFishing,
  heroFishing,

  
];

const Index = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />

    
    <PesqueirasSection images={pescaImages} />
  
      <ScrollSection
        id="restaurante"
        title="Restaurante"
        subtitle="Gastronomia"
        description="Saboreie pratos típicos da culinária regional preparados com ingredientes frescos e receitas tradicionais. Nosso restaurante oferece um ambiente acolhedor com vista para a natureza."
        image={heroRestaurant}
        imageAlt="Restaurante Giaretta"
        reverse
      />

      <ScrollSection
        id="enoturismo"
        title="Enoturismo"
        subtitle="Vinhos & Degustação"
        description="Descubra os sabores dos vinhos artesanais da região. Faça um tour pela vinícola, conheça o processo de produção e desfrute de degustações exclusivas em meio às videiras."
        image={heroEnoturismo}
        imageAlt="Vinícola e enoturismo"
      />

      <ScrollSection
        id="jardim"
        title="Jardim Botânico"
        subtitle="Natureza"
        description="Passeie por trilhas cercadas de vegetação nativa, flores tropicais e espécies raras. Nosso jardim é um refúgio de paz e beleza, perfeito para momentos de contemplação."
        image={heroGarden}
        imageAlt="Jardim botânico do Giaretta"
        reverse
      />

      <ScrollSection
        id="emporio"
        title="Empório"
        subtitle="Produtos Artesanais"
        description="Leve um pedaço do Giaretta para casa. Nosso empório oferece queijos artesanais, geleias, vinhos, embutidos e outros produtos coloniais selecionados da região."
        image={heroEmporio}
        imageAlt="Empório com produtos artesanais"
      />

      <ScrollSection
        id="lazer"
        title="Área de Lazer"
        subtitle="Diversão para Todos"
        description="Piscinas, playground, campos de futebol e espaços para churrasco. Um ambiente completo para toda a família se divertir e criar memórias inesquecíveis."
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
