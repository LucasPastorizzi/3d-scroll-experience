import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="relative">

      {/* 🔥 MAPA FULL (BASE DA SEÇÃO) */}
      <div className="relative w-full h-[70vh] min-h-[400px] md:h-[80vh]">
        <iframe
          src="https://www.google.com/maps?q=Ivoti+RS&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
        />

        {/* 🔥 OVERLAY ESCURO (LEGIBILIDADE) */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* 🔥 CONTEÚDO SOBREPOSTO */}
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="container mx-auto px-4 md:px-6 pb-10 md:pb-0">
          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-6 items-center"
          >

            {/* 🔥 TEXTO PRINCIPAL */}
            <div className="text-white max-w-xl">
              <span className="text-xs md:text-sm uppercase tracking-widest text-primary">
                Localização
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
                Venha viver uma experiência única
              </h2>

              <p className="mt-4 text-sm md:text-base text-white/80">
                Natureza, pesca, gastronomia e momentos inesquecíveis em um só lugar.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">

                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  className="flex items-center justify-center gap-2 border border-white/40 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
                >
                  <Navigation size={18} />
                  Como chegar
                </a>

              </div>
            </div>

            {/* 🔥 CARD DE INFORMAÇÕES */}
            <div className="bg-background/95 backdrop-blur-xl rounded-2xl p-5 md:p-7 shadow-2xl space-y-5">

              {/* ENDEREÇO */}
              <div className="flex gap-4 items-start">
                <MapPin className="text-primary mt-1" />
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="text-sm text-muted-foreground">
                    Estrada Rural, Km 5<br />
                    Interior - RS
                  </p>
                </div>
              </div>

              {/* TELEFONE */}
              <div className="flex gap-4 items-start">
                <Phone className="text-primary mt-1" />
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-sm text-muted-foreground">
                    (54) 3000-0000
                  </p>
                </div>
              </div>

              {/* HORÁRIO MELHORADO */}
              <div className="flex gap-4 items-start">
                <Clock className="text-primary mt-1" />
                <div>
                  <p className="font-semibold">Funcionamento</p>

                  <div className="mt-2 text-sm text-muted-foreground space-y-1">
                    <div className="flex justify-between">
                      <span>Terça - Sexta</span>
                      <span>09h - 18h</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span>08h - 19h</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Domingo</span>
                      <span>08h - 19h</span>
                    </div>

                    <div className="flex justify-between text-red-500">
                      <span>Segunda</span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* INFO EXTRA */}
              <div className="text-xs text-muted-foreground border-t pt-3">
                📍 Fácil acesso • 🚗 Estacionamento • 🌿 Ambiente familiar
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔥 FOOTER */}
      <div className="py-6 text-center text-sm text-muted-foreground bg-background">
        © 2026 Pesque Pague Giaretta. Todos os direitos reservados.
      </div>
    </section>
  );
};

export default ContactSection;