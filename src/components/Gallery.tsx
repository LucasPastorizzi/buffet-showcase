import heroImage from "@/assets/hero-buffet.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import restaurantTerrace from "@/assets/restaurant-terrace.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import dishFeijoada from "@/assets/dish-feijoada.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishRibs from "@/assets/dish-ribs.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: heroImage, alt: "Buffet Completo", span: "col-span-2 row-span-2" },
    { src: restaurantImage, alt: "Salão Principal", span: "col-span-1 row-span-1" },
    { src: dishSteak, alt: "Picanha Premium", span: "col-span-1 row-span-1" },
    { src: restaurantTerrace, alt: "Área Externa", span: "col-span-2 row-span-1" },
    { src: dishFeijoada, alt: "Feijoada", span: "col-span-1 row-span-1" },
    { src: dishFish, alt: "Salmão Grelhado", span: "col-span-1 row-span-1" },
    { src: dishSalad, alt: "Saladas Frescas", span: "col-span-1 row-span-1" },
    { src: dishDessert, alt: "Sobremesas", span: "col-span-1 row-span-1" },
    { src: dishPasta, alt: "Massas Artesanais", span: "col-span-1 row-span-1" },
    { src: dishRibs, alt: "Costela BBQ", span: "col-span-1 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-36 bg-cream-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-wine/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-6 py-2.5 mb-6 text-sm font-semibold tracking-wider uppercase text-terracotta bg-terracotta/10 rounded-full border border-terracotta/20">
            📸 Galeria
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mb-8 font-['Playfair_Display'] leading-tight">
            Momentos <span className="text-wine italic">Deliciosos</span>
          </h2>

          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Explore nosso ambiente acolhedor e os pratos que fazem do 
            Sabor & Tradição uma experiência inesquecível.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[200px] lg:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cream font-bold text-lg lg:text-xl font-['Playfair_Display']">
                    {image.alt}
                  </p>
                  <div className="w-12 h-1 bg-gold rounded-full mt-2" />
                </div>
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
