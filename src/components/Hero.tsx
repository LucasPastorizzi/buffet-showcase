import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-buffet.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-gold bg-chocolate/40 rounded-full backdrop-blur-sm">
            ✨ Buffet Premium desde 1985
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 font-['Playfair_Display'] leading-tight">
            Tradição e Sabor
            <span className="block text-gold">Todos os Dias</span>
          </h1>

          <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra uma experiência gastronômica única com nosso buffet variado,
            ingredientes frescos e receitas que passam de geração em geração.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#menu")}
              className="bg-terracotta hover:bg-terracotta-light text-cream text-lg px-8 py-6 shadow-warm"
            >
              Ver Cardápio
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-cream/50 text-cream hover:bg-cream/10 text-lg px-8 py-6"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <ChevronDown className="w-8 h-8 text-cream/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
