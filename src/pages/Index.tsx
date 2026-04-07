import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScrollSection from "@/components/ScrollSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PesqueirasSection from "@/components/PesqueirasSection";
import GalleryMosaic from "@/components/GalleryMosaic";

/* IMAGENS */
import heroFishing from "@/assets/hero-fishing.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroGarden from "@/assets/hero-garden.jpg";
import heroEmporio from "@/assets/hero-emporio.jpg";
import heroLazer from "@/assets/hero-lazer.jpg";

/* 🔥 SEÇÕES */

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

// Lazer
const lazerImages = [
  heroLazer,
  heroGarden,
  heroEmporio,
  heroFishing,
  heroLazer,
];

// 🔥 GALERIA MOSAICO (DESTAQUE)
const galleryImages = [
  { src: heroFishing, span: "col-span-2 row-span-2" },
  { src: heroGarden },
  { src: heroEmporio },
  { src: heroLazer, span: "row-span-2" },
  { src: heroFishing },
  { src: heroGarden, span: "col-span-2" },
  { src: heroEmporio },
  { src: heroLazer },
  { src: heroFishing, span: "col-span-2 row-span-2" },
  { src: heroGarden },
  { src: heroEmporio },
  { src: heroLazer },
];

const Index = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSection />

      {/* SOBRE */}
      <AboutSection />

      {/* PESQUEIRAS */}
      <PesqueirasSection images={pescaImages} />

      {/* RESTAURANTE */}
      <ScrollSection
        id="restaurante"
        title="Restaurante"
        subtitle=""
        description="Explore nosso buffet completo com pratos típicos, bebidas e um ambiente acolhedor em meio à natureza."
        images={restauranteImages}
        imageAlt="Restaurante"
      >
        <p>✔ Buffet variado com pratos típicos</p>
        <p>✔ Ambiente familiar e acolhedor</p>
        <p>✔ Espaço coberto e confortável</p>
        <p>✔ Ideal para almoço em família</p>
      </ScrollSection>

      {/* LAZER */}
      <ScrollSection
        id="lazer"
        title="Área de Lazer"
        subtitle=""
        description="Um espaço pensado para proporcionar descanso, lazer e conexão com a natureza em um ambiente acolhedor e familiar."
        images={lazerImages}
        imageAlt="Área de lazer"
      >
        <p>✔ Ampla área verde para descanso e convivência</p>
        <p>✔ Ambiente tranquilo em meio à natureza</p>
        <p>✔ Espaços ideais para famílias e grupos</p>
        <p>✔ Integração com lagos e áreas de pesca</p>
        <p>✔ Perfeito para finais de semana e momentos especiais</p>
        <p>✔ Local seguro e agradável para todas as idades</p>
      </ScrollSection>

      {/* CABANAS ABERTAS */}
      <ScrollSection
        id="cabanas-abertas"
        title="Cabanas Abertas"
        subtitle=""
        description="Espaços livres para descanso durante a pesca, oferecendo praticidade e conforto."
        images={cabanasAbertasImages}
        imageAlt="Cabanas abertas"
      >
        <p>✔ Uso gratuito durante a pesca</p>
        <p>✔ Próximas aos lagos</p>
        <p>✔ Ideais para pausas e descanso</p>
      </ScrollSection>

      {/* CABANAS FECHADAS */}
      <ScrollSection
        id="cabanas-fechadas"
        title="Cabanas Fechadas"
        subtitle=""
        description="Espaços reservados e completos para famílias e grupos que buscam conforto e privacidade."
        images={cabanasFechadasImages}
        imageAlt="Cabanas fechadas"
        reverse
      >
        <p>✔ Espaço amplo e confortável</p>
        <p>✔ Área ideal para churrasco</p>
        <p>✔ Mais privacidade e comodidade</p>
        <p>✔ Perfeito para eventos e encontros</p>
        <p>✔ Reserva antecipada recomendada</p>
      </ScrollSection>

      {/* GALERIA */}
      <GalleryMosaic images={galleryImages} />

      {/* CONTATO */}
      <ContactSection />

      {/* WHATS */}
      <WhatsAppButton />

    </div>
  );
};

export default Index;