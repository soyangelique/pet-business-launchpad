import { motion } from "framer-motion";
import { TrendingDown, Eye, Users, Clock } from "lucide-react";

const problems = [
  {
    icon: Eye,
    text: "Publicas sin estrategia, solo por publicar.",
  },
  {
    icon: TrendingDown,
    text: "No tienes un sistema claro de ventas.",
  },
  {
    icon: Users,
    text: "Confundes seguidores con clientes reales.",
  },
  {
    icon: Clock,
    text: "Trabajas mucho pero no ves crecimiento.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            El marketing para negocios pet en Colombia no debería sentirse así.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-coral/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-coral-light flex items-center justify-center shrink-0">
                <problem.icon className="w-5 h-5 text-coral" />
              </div>
              <p className="text-foreground font-medium">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl mx-auto">
            "No necesitas más seguidores,
            <br />
            <span className="text-gradient">necesitas estrategia.</span>"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
