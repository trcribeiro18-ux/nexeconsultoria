import { motion } from 'framer-motion';
import { Layers, Zap, Target } from 'lucide-react';
import logoNexe from '@/assets/logo-nexe.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gold) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-sm text-gold">
              <Zap size={14} />
              HUB Estratégico Multimercado
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-foreground">Conectamos</span>
            <br />
            <span className="text-gradient">Estratégia & Execução</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            A NEXE orquestra pessoas, processos, tecnologia e mercado em um único 
            ecossistema integrado. Estruturamos empresas para crescer de forma 
            sustentável, profissional e escalável.
          </motion.p>


          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: Layers, label: 'Eixos Integrados', value: '3' },
              { icon: Target, label: 'Foco Único', value: '100%' },
              { icon: Zap, label: 'Entrega Ágil', value: '∞' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
