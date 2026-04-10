import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";

const hours = [
  { label: "Terça – sexta", value: "09h – 18h" },
  { label: "Sábado", value: "08h – 19h" },
  { label: "Domingo", value: "08h – 19h" },
  { label: "Segunda", value: "Fechado", closed: true },
];

const ContactSection = () => {
  return (
    <section id="contato" className="bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal-600 font-medium">
              Contato
            </p>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Localização e horários
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-lg mx-auto">
              Estrada Rural, Km 5 · Interior, RS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="rounded-xl overflow-hidden border border-gray-200 aspect-[4/3] md:aspect-[16/10] min-h-[220px] shadow-sm bg-gray-50">
              <iframe
                title="Mapa — Pesque Pague Giaretta"
                src="https://www.google.com/maps?q=Ivoti+RS&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="space-y-8">
              <div className="flex gap-3">
                <MapPin className="text-teal-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Endereço</p>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    Estrada Rural, Km 5
                    <br />
                    Interior — RS
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="text-teal-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Telefone</p>
                  <a
                    href="tel:+555430000000"
                    className="mt-1 text-sm text-gray-600 hover:text-teal-700 transition-colors"
                  >
                    (54) 3000-0000
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="text-teal-600 shrink-0 mt-0.5" size={20} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">Funcionamento</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {hours.map((row) => (
                      <li
                        key={row.label}
                        className="flex justify-between gap-4 border-b border-gray-200 pb-2 last:border-0 last:pb-0"
                      >
                        <span
                          className={
                            row.closed ? "text-red-600" : "text-gray-600"
                          }
                        >
                          {row.label}
                        </span>
                        <span
                          className={
                            row.closed
                              ? "text-red-600 font-medium"
                              : "text-gray-900 tabular-nums"
                          }
                        >
                          {row.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ivoti+RS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <Navigation size={18} />
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="py-6 text-center text-sm text-gray-500 bg-gray-100 border-t border-gray-200">
        © 2026 Pesque Pague Giaretta. Todos os direitos reservados.
      </div>
    </section>
  );
};

export default ContactSection;
