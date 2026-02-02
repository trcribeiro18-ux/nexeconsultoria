import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Cpu, Briefcase, ArrowRight } from 'lucide-react';

const eixos = [
  {
    id: 'consultoria',
    icon: Compass,
    title: 'NEXE Consultoria',
    subtitle: 'Eixo Estratégico',
    description: 'Diagnostica, organiza, profissionaliza e cria governança. É onde nasce a base que sustenta todo o ecossistema NEXE.',
    features: ['Crescimento acelerado e desorganizado', 'Dependência excessiva do fundador', 'Falta de governança e estrutura', 'Momentos críticos de transformação'],
    featuresTitle: 'Quando a NEXE Consultoria Atua',
    color: 'from-blue-500/20 to-blue-600/5',
    showLink: true,
  },
  {
    id: 'evolution',
    icon: Cpu,
    title: 'NEXE Evolution',
    subtitle: 'Eixo de Execução Tecnológica',
    description: 'Soluções completas de smart living e tecnologia embarcada para residências, incorporadoras, investidores e imobiliárias.',
    features: ['Smart Living', 'Automação Residencial', 'Tecnologia Embarcada', 'HUBs Estruturados'],
    color: 'from-gold/20 to-gold/5',
    highlight: true,
    showLink: true,
  },
  {
    id: 'negocios',
    icon: Briefcase,
    title: 'NEXE Negócios',
    subtitle: 'Eixo de Projetos Multimercado',
    description: 'Estruturamos novos negócios, projetos estratégicos e iniciativas especiais, conectando estratégia, execução e mercado.',
    features: ['Novos Negócios', 'Projetos Estratégicos', 'Iniciativas Especiais', 'Conexão de Mercado'],
    color: 'from-emerald-500/20 to-emerald-600/5',
    showLink: false,
  },
];

const EixosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="eixos" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-sm text-gold mb-6">
            Estrutura Integrada
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Três Eixos. Um Ecossistema.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O cliente pode entrar por qualquer eixo, mas sempre acessa o HUB completo da NEXE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {eixos.map((eixo, index) => (
            <motion.div
              key={eixo.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-8 rounded-2xl bg-card-gradient border transition-all duration-500 hover:shadow-gold ${
                eixo.highlight 
                  ? 'border-gold/40 shadow-gold' 
                  : 'border-border hover:border-gold/30'
              }`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${eixo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {eixo.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-gold text-background text-xs font-semibold">
                    Destaque
                  </span>
                </div>
              )}

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  eixo.highlight ? 'bg-gold/20' : 'bg-secondary'
                }`}>
                  <eixo.icon className={`w-6 h-6 ${eixo.highlight ? 'text-gold' : 'text-muted-foreground'}`} />
                </div>

                <div className="mb-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    {eixo.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-foreground mt-1">
                    {eixo.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {eixo.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {eixo.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1 h-1 rounded-full ${eixo.highlight ? 'bg-gold' : 'bg-muted-foreground'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`#${eixo.id}`}
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    eixo.highlight 
                      ? 'text-gold hover:text-gold-light' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Saiba mais
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-gold/30" />
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Integração Total
          </span>
          <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-gold/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default EixosSection;
