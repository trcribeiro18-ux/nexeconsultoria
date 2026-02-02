import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Pronto para<br />
            <span className="text-gradient">Evoluir seu Negócio?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            A NEXE não vende serviços isolados. Ela estrutura, evolui e constrói negócios. 
            Entre em contato e descubra como podemos transformar sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl">
              Agendar Conversa
              <ArrowRight size={18} />
            </Button>
            <Button variant="heroOutline" size="xl">
              Conhecer mais
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground"
          >
            <a href="mailto:contato@nexe.com.br" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={18} />
              contato@nexe.com.br
            </a>
            <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={18} />
              +55 (11) 99999-9999
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
