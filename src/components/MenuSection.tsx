import dishSteak from "@/assets/dish-steak.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import dishFeijoada from "@/assets/dish-feijoada.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";

const MenuSection = () => {
  const dishes = [
    {
      image: dishSteak,
      name: "Carnes Nobres",
      description: "Cortes selecionados preparados na brasa com temperos especiais",
      category: "Grelhados",
    },
    {
      image: dishSalad,
      name: "Saladas Frescas",
      description: "Variedade de saladas com vegetais orgânicos e molhos artesanais",
      category: "Saladas",
    },
    {
      image: dishFeijoada,
      name: "Feijoada Completa",
      description: "Receita tradicional servida aos sábados com acompanhamentos",
      category: "Tradicionais",
    },
    {
      image: dishFish,
      name: "Peixes & Frutos do Mar",
      description: "Pescados frescos preparados com técnicas refinadas",
      category: "Pescados",
    },
    {
      image: dishDessert,
      name: "Sobremesas Artesanais",
      description: "Doces feitos em casa com receitas da família",
      category: "Sobremesas",
    },
    {
      image: dishPasta,
      name: "Massas Caseiras",
      description: "Massas frescas com molhos elaborados diariamente",
      category: "Massas",
    },
  ];

  return (
    <section id="menu" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-terracotta bg-terracotta/10 rounded-full">
            Nosso Cardápio
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6 font-['Playfair_Display']">
            Buffet <span className="text-wine">Completo</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Mais de 100 opções diárias preparadas com ingredientes frescos e muito
            carinho. Conheça algumas das nossas especialidades.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-cream bg-wine/90 rounded-full">
                  {dish.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-chocolate mb-2 font-['Playfair_Display']">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Price Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 sm:p-8 bg-wine rounded-2xl text-cream">
            <div className="text-center sm:text-left">
              <p className="text-sm text-cream/80 mb-1">Buffet Completo</p>
              <p className="text-3xl font-bold font-['Playfair_Display']">
                R$ 69,90
              </p>
              <p className="text-sm text-cream/80">por pessoa</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-cream/30" />
            <div className="text-center sm:text-left">
              <p className="text-sm text-cream/80 mb-1">Horário de Funcionamento</p>
              <p className="font-semibold">Almoço: 11h às 15h</p>
              <p className="font-semibold">Jantar: 18h às 23h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
