import { motion } from "framer-motion";
import { Clock, Target, Zap } from "lucide-react";

const SessionSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-accent/8 blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-coral font-semibold uppercase tracking-wider text-sm mb-3">
            Sesión Estratégica Gratuita
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            15 minutos que pueden cambiar la dirección de tu negocio pet
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            No es una clase. No es un webinar. Es una conversación directa y estratégica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: Target,
              title: "Diagnóstico rápido",
              desc: "Analizamos dónde estás y qué te frena.",
            },
            {
              icon: Zap,
              title: "Orientación puntual",
              desc: "Una recomendación clara y accionable.",
            },
            {
              icon: Clock,
              title: "Sin compromiso",
              desc: "15 minutos. Si te sirve, seguimos.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <item.icon className="w-8 h-8 text-blue-accent mx-auto mb-3" />
              <h3 className="font-bold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-primary-foreground/50 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-primary-foreground/50 text-sm mb-4">
            Para emprendimientos pet Colombia que están listos para dejar de improvisar.
          </p>
          <button
            onClick={scrollToForm}
            className="gradient-coral text-accent-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg shadow-coral/25"
          >
            Quiero mi sesión estratégica
          </button>
        </div>
      </div>
    </section>
  );
};

export default SessionSection;
