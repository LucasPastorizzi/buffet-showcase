import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

import heroImage from "@/assets/hero-buffet.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import restaurantTerrace from "@/assets/restaurant-terrace.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishFeijoada from "@/assets/dish-feijoada.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishRibs from "@/assets/dish-ribs.jpg";

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    { src: heroImage, alt: "Buffet Completo", subtitle: "Mais de 100 opções diárias" },
    { src: restaurantImage, alt: "Salão Principal", subtitle: "Ambiente sofisticado" },
    { src: restaurantTerrace, alt: "Área Externa", subtitle: "Noites especiais ao ar livre" },
    { src: dishSteak, alt: "Carnes Nobres", subtitle: "Cortes selecionados" },
    { src: dishFeijoada, alt: "Feijoada Tradicional", subtitle: "Receita de família" },
    { src: dishRibs, alt: "Costela BBQ", subtitle: "Defumada por 12 horas" },
    { src: dishDessert, alt: "Sobremesas", subtitle: "Doces artesanais" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-6 py-2.5 mb-6 text-sm font-semibold tracking-wider uppercase text-terracotta bg-terracotta/10 rounded-full border border-terracotta/20">
            🍽️ Momentos Especiais
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mb-6 font-['Playfair_Display']">
            Nosso <span className="text-wine italic">Ambiente</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-warm" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4"
                >
                  <div className="relative h-96 lg:h-[450px] rounded-2xl overflow-hidden group/card">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/30 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <p className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
                        {image.subtitle}
                      </p>
                      <h3 className="text-cream font-bold text-xl lg:text-2xl font-['Playfair_Display']">
                        {image.alt}
                      </h3>
                      <div className="w-12 h-1 bg-terracotta rounded-full mt-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream/95 hover:bg-cream border-none shadow-warm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-chocolate" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream/95 hover:bg-cream border-none shadow-warm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight className="w-6 h-6 text-chocolate" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
