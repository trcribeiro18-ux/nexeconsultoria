import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span className="font-serif text-xl font-bold text-foreground">NEXE</span>
            <div className="h-5 w-px bg-gold/30" />
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Hub Estratégico
            </span>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#eixos" className="hover:text-foreground transition-colors">Eixos</a>
            <a href="#evolution" className="hover:text-foreground transition-colors">Evolution</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NEXE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
