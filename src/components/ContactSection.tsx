import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import logo from "@/assets/Flypi.png"; 

// IMPORTA SUA IMAGEM AQUI
import bgImage from "@/assets/hero-fishing.jpg"; // troca pelo caminho correto

const hours = [
  { label: "Quarta – Segunda", value: "07h – 18h" },
  { label: "Sábado", value: "07h – 18:30h" },
  { label: "Domingo", value: "07h – 18:30h" },
  { label: "Terça", value: "Fechado", closed: true },
];

const ContactSection = () => {
  return (
    <section id="contato" className="relative text-white overflow-hidden">
      
      {/* IMAGEM DE FUNDO */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* OVERLAY ESCURO (ESSENCIAL PRA LEITURA) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTEÚDO */}
      <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-300 font-medium">
              Contato
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Localização e horários
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-lg mx-auto">
             R. Arthur Alfredo Hoffmeister, 865, Morro Reuter - RS, 93990-000
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* MAPA */}
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3] md:aspect-[16/10] min-h-[220px] bg-white/5 backdrop-blur-md">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6942.67541067734!2d-51.075862032311335!3d-29.535658150320828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194896b8a469b7%3A0x13666183391aea96!2sPesqueiro%20Wiest!5e0!3m2!1spt-BR!2sbr!4v1776039332823!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* INFO */}
            <div className="space-y-8">
              <div className="flex gap-3">
                <MapPin size={20} className="text-white/70" />
                <div>
                  <p className="text-sm font-semibold">Endereço</p>
                  <p className="text-sm text-gray-300">
                    Rua Arthur Alfredo Hoffmeister, n° 865, <br />
                    Morro Reuter - RS, 93990-000
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={20} className="text-white/70" />
                <div>
                  <p className="text-sm font-semibold">Telefone</p>
                  <a
                    href="tel:+555430000000"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                     (51) 99764-4478
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock size={20} className="text-white/70" />
                <div className="w-full">
                  <p className="text-sm font-semibold">Funcionamento</p>
                  <ul className="mt-2 space-y-2 text-sm">
                    {hours.map((row) => (
                      <li
                        key={row.label}
                        className="flex justify-between border-b border-white/10 pb-2"
                      >
                        <span className={row.closed ? "text-red-400" : "text-gray-300"}>
                          {row.label}
                        </span>
                        <span className={row.closed ? "text-red-400" : "text-white"}>
                          {row.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* BOTÕES */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ivoti+RS"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition"
                >
                  <Navigation size={18} />
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

     {/* FOOTER */}
<div className="relative py-6 text-center text-sm text-gray-400 border-t border-white/10">
  <div className="flex items-center justify-center gap-2 flex-wrap">
    <span>© 2026 Pesque Pague Wiest -</span>

   <img
  src={logo}
  alt="Flypi"
  className="h-14 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition"
/>
  </div>
</div>
    </section>
  );
};

export default ContactSection;