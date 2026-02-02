import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Crown, Shield, Clock, DollarSign, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const hubs = [
  {
    id: 'concept',
    icon: Home,
    title: 'HUB Concept',
    tagline: 'Smart Living Padronizado',
    description: 'Pacote padrão de smart living, ideal para projetos de escala. O imóvel já nasce inteligente, padronizado e diferenciado no ponto de venda.',
    features: [
      'Automação residencial completa',
      'Iluminação inteligente',
      'Climatização automatizada',
      'Segurança integrada',
      'Controle por app',
    ],
    ideal: 'Incorporadoras e projetos de escala',
    cta: 'Conheça o Concept',
  },
  {
    id: 'prime',
    icon: Crown,
    title: 'HUB Prime',
    tagline: 'Experiência Sob Medida',
    description: 'Solução premium para residências de alto padrão e projetos exclusivos. Automação personalizada, segurança avançada e experiências inteligentes únicas.',
    features: [
      'Projeto 100% personalizado',
      'Automação de alto padrão',
      'Sistema multimídia premium',
      'Segurança avançada',
      'Experiências exclusivas',
    ],
    ideal: 'Residências de alto padrão',
    cta: 'Explore o Prime',
    premium: true,
  },
];

const benefits = [
  { icon: Shield, label: 'Gestão Integral', desc: 'Um único ponto de contato' },
  { icon: Clock, label: 'Governança de Prazo', desc: 'Cronograma garantido' },
  { icon: DollarSign, label: 'Controle de Custo', desc: 'Orçamento transparente' },
];

const EvolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="evolution" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-sm text-gold mb-6">
            NEXE Evolution
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforme Imóveis em<br />
            <span className="text-gradient">Ativos Inteligentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Através de HUBs estruturados, a NEXE Evolution transforma imóveis em ativos 
            inteligentes, valorizados e prontos para uso, venda ou locação.
          </p>
        </motion.div>

        {/* HUBs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {hubs.map((hub, index) => (
            <motion.div
              key={hub.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 md:p-10 rounded-3xl bg-card-gradient border transition-all duration-500 ${
                hub.premium 
                  ? 'border-gold/50 shadow-gold' 
                  : 'border-border hover:border-gold/30'
              }`}
            >
              {hub.premium && (
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}

              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl ${hub.premium ? 'bg-gold/20' : 'bg-secondary'}`}>
                  <hub.icon className={`w-8 h-8 ${hub.premium ? 'text-gold' : 'text-muted-foreground'}`} />
                </div>
                {hub.premium && (
                  <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-medium">
                    Premium
                  </span>
                )}
              </div>

              <div className="mb-6">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  {hub.tagline}
                </span>
                <h3 className="font-serif text-3xl font-bold text-foreground mt-2">
                  {hub.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {hub.description}
              </p>

              <ul className="space-y-3 mb-8">
                {hub.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${hub.premium ? 'bg-gold/20' : 'bg-secondary'}`}>
                      <Check className={`w-3 h-3 ${hub.premium ? 'text-gold' : 'text-muted-foreground'}`} />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border">
                <span className="text-xs text-muted-foreground block mb-4">
                  Ideal para: <span className="text-foreground">{hub.ideal}</span>
                </span>
                <Button 
                  variant={hub.premium ? "gold" : "goldOutline"} 
                  className="w-full"
                >
                  {hub.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-8 rounded-2xl bg-background border border-gold/20"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Um único contrato. Um único ponto de contato.
            </h3>
            <p className="text-muted-foreground mt-2">Uma entrega sem fricção.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card/50">
                <div className="inline-flex p-3 rounded-xl bg-gold/10 mb-4">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{benefit.label}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EvolutionSection;
