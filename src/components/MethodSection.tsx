import { motion } from "framer-motion";
import { FolderOpen, LayoutGrid, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FolderOpen,
    title: "Organiza",
    description:
      "Auditoría de tu situación actual. Revisamos qué funciona, qué no, y qué necesitas cambiar para dejar de improvisar.",
  },
  {
    number: "02",
    icon: LayoutGrid,
    title: "Estructura",
    description:
      "Creamos un sistema claro: tu oferta, tus procesos, tu comunicación. Todo en orden para que puedas ejecutar con foco.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Escala",
    description:
      "Con las bases listas, implementamos estrategias de crecimiento con IA y marketing inteligente para vender más sin trabajar más.",
  },
];

const MethodSection = () => {
  return (
    <section className="section-padding bg-background" id="metodo">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-coral font-semibold uppercase tracking-wider text-sm mb-3">
            El Método
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SmartPet: 3 pasos para un negocio pet real
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Simple, accionable y diseñado para emprendimientos pet que quieren crecer con orden.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow group"
            >
              <span className="text-6xl font-extrabold text-muted/60 absolute top-4 right-6 group-hover:text-coral/20 transition-colors">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-xl gradient-coral flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
