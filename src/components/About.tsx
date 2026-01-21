import { Award, Clock, Users, Utensils } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "40+ Anos",
      description: "De tradição e excelência",
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
      description: "Avaliação dos clientes",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img
                src={restaurantImage}
                alt="Interior do restaurante"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terracotta/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-wine/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-terracotta bg-terracotta/10 rounded-full">
              Nossa História
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6 font-['Playfair_Display'] leading-tight">
              Uma Tradição que
              <span className="text-wine"> Alimenta Gerações</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Desde 1985, o Sabor & Tradição é referência em gastronomia de
              qualidade. Nascemos do sonho de uma família apaixonada pela arte de
              cozinhar e por servir bem.
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nosso buffet é preparado diariamente com ingredientes frescos e
              selecionados, combinando receitas tradicionais com toques
              contemporâneos que encantam todos os paladares.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background hover:shadow-card transition-shadow"
                >
                  <div className="p-3 rounded-lg bg-wine/10">
                    <feature.icon className="w-6 h-6 text-wine" />
                  </div>
                  <div>
                    <h4 className="font-bold text-chocolate text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
