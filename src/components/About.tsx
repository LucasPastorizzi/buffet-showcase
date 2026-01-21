import { Award, Clock, Users, Utensils, Star, Heart } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "40+ Anos",
      description: "De tradição culinária",
    },
    {
      icon: Users,
      title: "50.000+",
      description: "Clientes satisfeitos",
    },
    {
      icon: Utensils,
      title: "100+",
      description: "Pratos no buffet",
    },
    {
      icon: Award,
      title: "5 Estrelas",
      description: "Avaliação média",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-36 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-wine/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-warm">
              <img
                src={restaurantImage}
                alt="Interior elegante do restaurante"
                className="w-full h-[450px] lg:h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card p-6 rounded-2xl shadow-warm max-w-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-gold/20">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                </div>
                <span className="text-2xl font-bold text-chocolate font-['Playfair_Display']">4.9</span>
              </div>
              <p className="text-sm text-muted-foreground">Avaliação no Google</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-wine/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-terracotta/20 rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-6 py-2.5 mb-6 text-sm font-semibold tracking-wider uppercase text-terracotta bg-terracotta/10 rounded-full border border-terracotta/20">
              Nossa História
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mb-8 font-['Playfair_Display'] leading-tight">
              Uma Tradição que
              <span className="text-wine italic block">Alimenta Gerações</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Desde 1985, o <strong className="text-chocolate">Sabor & Tradição</strong> é referência em 
              gastronomia de qualidade. Nascemos do sonho de uma família apaixonada pela 
              arte de cozinhar e por servir bem.
            </p>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Nosso buffet é preparado diariamente com ingredientes frescos e 
              selecionados, combinando <em>receitas tradicionais</em> com toques 
              contemporâneos que encantam todos os paladares.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-background hover:bg-wine hover:shadow-warm transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-wine/10 group-hover:bg-cream/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-wine group-hover:text-cream transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-chocolate group-hover:text-cream text-xl transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-cream/80 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-10 flex items-center gap-4 p-4 bg-background rounded-2xl">
              <div className="p-3 rounded-xl bg-terracotta/10">
                <Heart className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="font-semibold text-chocolate">Feito com amor</p>
                <p className="text-sm text-muted-foreground">Cada prato é preparado com dedicação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
