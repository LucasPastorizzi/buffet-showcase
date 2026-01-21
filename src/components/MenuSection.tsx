import dishSteak from "@/assets/dish-steak.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import dishFeijoada from "@/assets/dish-feijoada.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishRibs from "@/assets/dish-ribs.jpg";

const MenuSection = () => {
  const dishes = [
    {
      image: dishSteak,
      name: "Picanha Premium",
      description: "Corte nobre grelhado no ponto perfeito com manteiga de ervas",
      category: "Carnes",
      highlight: true,
    },
    {
      image: dishSalad,
      name: "Salada Mediterrânea",
      description: "Mix de folhas frescas com queijo halloumi grelhado e romã",
      category: "Saladas",
      highlight: false,
    },
    {
      image: dishFeijoada,
      name: "Feijoada Completa",
      description: "Receita tradicional com cortes selecionados de porco",
      category: "Tradicionais",
      highlight: true,
    },
    {
      image: dishFish,
      name: "Salmão Grelhado",
      description: "Filé de salmão com aspargos frescos e molho de limão siciliano",
      category: "Pescados",
      highlight: false,
    },
    {
      image: dishRibs,
      name: "Costela BBQ",
      description: "Costela suína defumada com molho barbecue artesanal",
      category: "Especiais",
      highlight: true,
    },
    {
      image: dishDessert,
      name: "Petit Gâteau",
      description: "Bolo de chocolate com centro cremoso e folha de ouro",
      category: "Sobremesas",
      highlight: false,
    },
    {
      image: dishPasta,
      name: "Tagliatelle Bolonhesa",
      description: "Massa fresca artesanal com ragu de carne premium",
      category: "Massas",
      highlight: false,
    },
  ];

  return (
    <section id="menu" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-wine/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-6 py-2.5 mb-6 text-sm font-semibold tracking-wider uppercase text-terracotta bg-terracotta/10 rounded-full border border-terracotta/20">
            ✨ Nosso Cardápio
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mb-8 font-['Playfair_Display'] leading-tight">
            Buffet <span className="text-wine italic">Premium</span>
          </h2>

          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Mais de 100 opções diárias preparadas com ingredientes selecionados, 
            técnicas refinadas e o carinho de quem ama cozinhar.
          </p>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-3 ${
                dish.highlight ? 'ring-2 ring-gold/30' : ''
              }`}
            >
              {/* Highlight Badge */}
              {dish.highlight && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 text-xs font-bold text-chocolate bg-gold rounded-full shadow-lg">
                  ⭐ Destaque
                </div>
              )}

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cream bg-wine/90 rounded-full backdrop-blur-sm shadow-lg">
                  {dish.category}
                </span>

                {/* Hover overlay content */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-cream/90 text-sm">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-chocolate mb-3 font-['Playfair_Display'] group-hover:text-wine transition-colors">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Price Card */}
        <div className="mt-20 flex justify-center">
          <div className="relative inline-flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 bg-gradient-to-br from-wine via-wine to-chocolate rounded-3xl text-cream shadow-warm overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-terracotta/10 rounded-full blur-2xl" />
            
            <div className="text-center md:text-left relative z-10">
              <p className="text-cream/70 text-sm uppercase tracking-wider mb-2">Buffet Livre</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold font-['Playfair_Display']">
                  R$ 69
                </span>
                <span className="text-2xl text-cream/80">,90</span>
              </div>
              <p className="text-cream/70 text-sm mt-1">por pessoa</p>
            </div>

            <div className="hidden md:block w-px h-24 bg-cream/20" />

            <div className="text-center md:text-left relative z-10">
              <p className="text-cream/70 text-sm uppercase tracking-wider mb-3">Horário</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <p className="font-medium">Almoço: 11h às 15h</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-terracotta" />
                  <p className="font-medium">Jantar: 18h às 23h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
