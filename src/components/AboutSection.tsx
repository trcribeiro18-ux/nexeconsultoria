import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, X, Check } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    { text: "Consultoria isolada não resolve", icon: X },
    { text: "Tecnologia sem gestão gera desperdício", icon: X },
    { text: "Execução sem estratégia gera retrabalho", icon: X },
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gold/10">
                <AlertTriangle className="w-5 h-5 text-gold" />
              </div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                O Problema
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-foreground">
              O mercado evoluiu. Os desafios também.
            </h2>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20"
                >
                  <div className="p-1.5 rounded-full bg-destructive/20">
                    <problem.icon className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{problem.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gold/10">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                A Solução
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Por isso a NEXE existe.
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Mais do que consultoria, a NEXE orquestra estratégia e execução. 
              Estruturamos empresas para crescer de forma sustentável, profissional e escalável.
            </p>

            <div className="p-6 rounded-2xl bg-card-gradient border border-gold/20 shadow-gold">
              <p className="text-foreground font-medium text-lg leading-relaxed">
                "A NEXE é um <span className="text-gold">HUB estratégico multimercado</span> que 
                conecta pessoas, processos, tecnologia e mercado em um único ecossistema integrado."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
