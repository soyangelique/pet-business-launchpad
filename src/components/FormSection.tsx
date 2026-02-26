import { motion } from "framer-motion";
import { useState } from "react";

const businessTypes = [
  "Veterinaria",
  "Pet Shop",
  "Groomer independiente",
  "Marca artesanal pet",
  "Paseador / Cuidador",
  "Otro",
];

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-secondary" id="formulario">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agenda tu sesión estratégica
          </h2>
          <p className="text-muted-foreground text-lg">
            Completa el formulario y te contactaré para agendar tu sesión de 15 minutos.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-2xl bg-card border border-border"
          >
            <div className="text-5xl mb-4">🐾</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">¡Recibido!</h3>
            <p className="text-muted-foreground">
              Revisaré tu información y te contactaré pronto para agendar tu sesión estratégica.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Tu nombre *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Angélica Pérez"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Nombre del negocio *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Mi Pet Shop"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Tipo de negocio pet *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition"
                >
                  <option value="">Selecciona...</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Tiempo operando *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition"
                >
                  <option value="">Selecciona...</option>
                  <option value="idea">Solo es una idea</option>
                  <option value="0-6">Menos de 6 meses</option>
                  <option value="6-12">6 meses a 1 año</option>
                  <option value="1-3">1 a 3 años</option>
                  <option value="3+">Más de 3 años</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                ¿Cuál es tu principal dificultad hoy? *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Ej: No sé cómo atraer clientes, no tengo tiempo para redes sociales..."
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                ¿Qué quieres lograr en los próximos 3 meses? *
              </label>
              <textarea
                required
                rows={2}
                placeholder="Ej: Tener mis primeros 10 clientes recurrentes..."
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+57 300 123 4567"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full gradient-coral text-accent-foreground font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg mt-2"
            >
              Quiero organizar mi negocio 🐾
            </button>

            <p className="text-center text-muted-foreground text-xs">
              Tu información es confidencial. Solo la usaré para contactarte.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default FormSection;
