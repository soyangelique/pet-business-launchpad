import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMethod = () => {
    document.getElementById("metodo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-accent/8 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-coral/6 blur-3xl" />

      <div className="container mx-auto max-w-5xl section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <img src={logo} alt="Pixel Pet Digital" className="h-16 md:h-20 mx-auto mb-10" />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
            Un negocio pet sin sistema
            <br />
            <span className="text-gradient">es solo un hobby.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Ayudo a negocios pet pequeños en Colombia a organizarse, estructurarse y vender mejor con estrategia e inteligencia artificial.
          </p>

          <p className="text-base text-primary-foreground/50 max-w-xl mx-auto mb-10">
            Soy Angélica, fundadora de Pixel Pet Digital. Construyo sistemas para que tu negocio pet deje de depender de la suerte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="gradient-coral text-accent-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg shadow-coral/25"
            >
              Agenda tu sesión estratégica
            </button>
            <button
              onClick={scrollToMethod}
              className="border-2 border-primary-foreground/20 text-primary-foreground font-medium px-8 py-4 rounded-lg text-lg hover:border-blue-accent/60 hover:text-blue-accent-light transition-colors"
            >
              Conoce el método
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
