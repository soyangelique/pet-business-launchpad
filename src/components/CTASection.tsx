import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const CTASection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Si estás empezando y quieres construir con sistema,
            <br />
            <span className="text-gradient">este es tu momento.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            No esperes a tener todo perfecto. Solo necesitas dar el primer paso con la dirección correcta.
          </p>
          <button
            onClick={scrollToForm}
            className="gradient-coral text-accent-foreground font-semibold px-10 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Agenda tu sesión estratégica
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-5xl mt-20 pt-10 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Pixel Pet Digital" className="h-10" />
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pixel Pet Digital. Marketing para negocios pet en Colombia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
