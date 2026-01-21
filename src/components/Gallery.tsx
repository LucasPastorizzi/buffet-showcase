import heroImage from "@/assets/hero-buffet.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import dishFeijoada from "@/assets/dish-feijoada.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: heroImage, alt: "Buffet principal", span: "lg:col-span-2 lg:row-span-2" },
    { src: restaurantImage, alt: "Ambiente acolhedor", span: "" },
    { src: dishSteak, alt: "Carnes nobres", span: "" },
    { src: dishSalad, alt: "Saladas frescas", span: "" },
    { src: dishFeijoada, alt: "Feijoada tradicional", span: "" },
    { src: dishFish, alt: "Pescados frescos", span: "lg:col-span-2" },
    { src: dishDessert, alt: "Sobremesas artesanais", span: "" },
    { src: dishPasta, alt: "Massas caseiras", span: "" },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-terracotta bg-terracotta/10 rounded-full">
            Galeria
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6 font-['Playfair_Display']">
            Momentos <span className="text-wine">Deliciosos</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore nosso ambiente acolhedor e os pratos que fazem do Sabor &
            Tradição uma experiência inesquecível.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${image.span}`}
            >
              <div className="relative h-64 lg:h-full min-h-[200px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <p className="text-cream font-semibold text-lg font-['Playfair_Display']">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
