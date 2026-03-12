import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, X, Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappNumber = '5511965967121';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message || 'Olá, gostaria de saber mais sobre os serviços da NEXE.')}`;

  const handleSendWhatsApp = () => {
    if (message.trim().length > 0 && message.length <= 2000) {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        '_blank'
      );
    }
  };

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
            <Button variant="hero" size="xl" onClick={() => setIsFormOpen(true)}>
              Agendar Conversa
              <ArrowRight size={18} />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá, gostaria de saber mais sobre os serviços da NEXE.')}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                WhatsApp Business
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground flex-wrap"
          >
            <a href="mailto:negocios@nexeconsultoria.com.br" className="flex items-center gap-2 hover:text-gold transition-colors text-sm sm:text-base break-all sm:break-normal">
              <Mail size={18} className="shrink-0" />
              negocios@nexeconsultoria.com.br
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Av. Paulista, 1636, sala 1105
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setIsFormOpen(false); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-xl p-8 max-w-lg w-full shadow-2xl relative"
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Agendar Conversa
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Descreva sua necessidade e entraremos em contato ou envie diretamente pelo WhatsApp.
            </p>

            <Textarea
              placeholder="Descreva aqui sua necessidade..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[140px] mb-6 bg-background border-border focus:border-gold"
              maxLength={2000}
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="hero"
                size="lg"
                className="flex-1"
                onClick={handleSendWhatsApp}
                disabled={!message.trim()}
              >
                <MessageCircle size={18} />
                Enviar via WhatsApp
              </Button>
              <Button
                variant="goldOutline"
                size="lg"
                className="flex-1"
                asChild
              >
                <a href={`mailto:negocios@nexeconsultoria.com.br?subject=Contato NEXE&body=${encodeURIComponent(message)}`}>
                  <Mail size={18} />
                  Enviar por E-mail
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CTASection;
