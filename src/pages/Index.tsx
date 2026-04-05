import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScrollSection from "@/components/ScrollSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PesqueirasSection from "@/components/PesqueirasSection";

import heroFishing from "@/assets/hero-fishing.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroGarden from "@/assets/hero-garden.jpg";
import heroEmporio from "@/assets/hero-emporio.jpg";
import heroLazer from "@/assets/hero-lazer.jpg";

/* 🔥 MAIS IMAGENS */

// Pesca
const pescaImages = [
  heroFishing,
  heroGarden,
  heroFishing,
  heroGarden,
];

// Restaurante
const restauranteImages = [
  heroRestaurant,
  heroGarden,
  heroEmporio,
  heroRestaurant,
  heroGarden,
];

// Cabanas abertas
const cabanasAbertasImages = [
  heroFishing,
  heroGarden,
  heroFishing,
  heroGarden,
];

// Cabanas fechadas
const cabanasFechadasImages = [
  heroLazer,
  heroEmporio,
  heroLazer,
  heroEmporio,
];

// 🔥 NOVA SEÇÃO LAZER
const lazerImages = [
  heroLazer,
  heroGarden,
  heroEmporio,
  heroFishing,
  heroLazer,
];

const Index = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <PesqueirasSection images={pescaImages} />

      {/* RESTAURANTE */}
      <ScrollSection
        id="restaurante"
        title="Restaurante"
        subtitle="Gastronomia"
        description="Explore nosso buffet completo com pratos típicos, bebidas e um ambiente acolhedor em meio à natureza."
        images={restauranteImages}
        imageAlt="Restaurante"
      >
        <p>✔ Buffet variado</p>
        <p>✔ Comida típica</p>
        <p>✔ Ambiente familiar</p>
        <p>✔ Área coberta</p>
      </ScrollSection>

      {/* CABANAS ABERTAS */}
      <ScrollSection
        id="cabanas-abertas"
        title="Cabanas Abertas"
        subtitle="Pesca Esportiva"
        description="Espaços livres para quem deseja descansar durante a pesca."
        images={cabanasAbertasImages}
        imageAlt="Cabanas abertas"
      >
        <p>✔ Uso gratuito</p>
        <p>✔ Próximo aos lagos</p>
        <p>✔ Ideal para pausas</p>
      </ScrollSection>

      {/* CABANAS FECHADAS */}
      <ScrollSection
        id="cabanas-fechadas"
        title="Cabanas Fechadas"
        subtitle="Aluguel"
        description="Perfeitas para famílias, grupos e momentos especiais."
        images={cabanasFechadasImages}
        imageAlt="Cabanas fechadas"
        reverse
      >
        <p>✔ Espaço amplo</p>
        <p>✔ Área para churrasco</p>
        <p>✔ Mais privacidade</p>
        <p>✔ Ideal para eventos</p>
        <p>✔ Reserva antecipada</p>
      </ScrollSection>

      {/* 🔥 NOVA SEÇÃO LAZER */}
      <ScrollSection
        id="lazer"
        title="Área de Lazer"
        subtitle="Experiência Completa"
        description="Muito além da pesca: aproveite momentos únicos com família e amigos em um ambiente natural e relaxante."
        images={lazerImages}
        imageAlt="Área de lazer"
      >
        <p>✔ Espaços para descanso</p>
        <p>✔ Contato com a natureza</p>
        <p>✔ Ambiente tranquilo</p>
        <p>✔ Ideal para famílias</p>
        <p>✔ Experiência completa de lazer</p>
        <p>✔ Perfeito para finais de semana</p>
      </ScrollSection>

      <ContactSection />

      <WhatsAppButton />
    </div>
  );
};

export default Index;