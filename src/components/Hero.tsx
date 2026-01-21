import { ChevronDown, Play } from "lucide-react";
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-chocolate/95 via-wine/80 to-chocolate/90" />

      {/* Animated particles/dots decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-terracotta/20 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cream/20 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gold/10 rounded-full animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-sm font-medium text-gold bg-chocolate/50 rounded-full backdrop-blur-md border border-gold/20 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Buffet Premium desde 1985
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-8 font-['Playfair_Display'] leading-[1.1] animate-fade-up">
            Tradição e Sabor
            <span className="block text-gold mt-2 italic">Todos os Dias</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cream/85 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up font-light">
            Descubra uma experiência gastronômica única com nosso buffet variado,
            ingredientes frescos e receitas que passam de geração em geração.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-up">
            <Button
              size="lg"
              onClick={() => scrollToSection("#menu")}
              className="bg-terracotta hover:bg-terracotta-light text-cream text-lg px-10 py-7 rounded-full shadow-warm transition-all duration-300 hover:scale-105 group"
            >
              Ver Cardápio
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#gallery")}
              className="border-2 border-cream/40 text-cream hover:bg-cream/10 text-lg px-10 py-7 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Conhecer Ambiente
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up">
            {[
              { value: "40+", label: "Anos de história" },
              { value: "100+", label: "Pratos diários" },
              { value: "50k+", label: "Clientes felizes" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gold font-['Playfair_Display']">
                  {stat.value}
                </p>
                <p className="text-cream/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("#about")}
        >
          <span className="text-cream/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2 group-hover:border-cream/50 transition-colors">
            <div className="w-1.5 h-3 bg-cream/50 rounded-full animate-bounce group-hover:bg-cream transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
