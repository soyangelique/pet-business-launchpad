import { motion } from "framer-motion";
import horus from "@/assets/horus.jpg";
import lulu from "@/assets/lulu.jpg";
import angelica from "@/assets/angelica.png";

const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary" id="sobre-angelica">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Photo placeholder - professional photo goes here */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative">
                  <img
                    src={angelica}
                    alt="Angélica, fundadora de Pixel Pet Digital"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              {/* Decorative pet photos */}
              <img
                src={horus}
                alt="Horus, mascota de Angélica"
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl object-cover border-4 border-card shadow-lg"
              />
              <img
                src={lulu}
                alt="Lulu, mascota de Angélica"
                className="absolute -top-4 -right-4 w-24 h-24 rounded-xl object-cover border-4 border-card shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Quién está detrás de Pixel Pet Digital?
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy <strong className="text-foreground">Angélica</strong>, mamá pet y estratega de negocios. Empecé Pixel Pet Digital porque vi algo que se repetía en todos los emprendimientos pet que conocía: <strong className="text-foreground">mucha pasión, pero cero sistema</strong>.
              </p>
              <p>
                Estoy construyendo esta marca con el mismo método que enseño. Sin atajos, sin fórmulas mágicas. Con estrategia, estructura y herramientas de inteligencia artificial que realmente funcionan.
              </p>
              <p>
                Conecto especialmente con quienes están empezando desde cero, porque sé lo que se siente construir algo desde la nada, con recursos limitados pero con una visión clara.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-coral-light border border-coral/20">
              <p className="text-foreground font-medium text-sm">
                🐾 Mi misión: que los negocios pet pequeños tengan las mismas oportunidades de crecer que los grandes, solo que con mejor estrategia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
