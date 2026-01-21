import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

import heroImage from "@/assets/hero-buffet.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import dishFeijoada from "@/assets/dish-feijoada.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    { src: heroImage, alt: "Buffet completo" },
    { src: restaurantImage, alt: "Ambiente do restaurante" },
    { src: dishSteak, alt: "Carnes grelhadas" },
    { src: dishSalad, alt: "Saladas frescas" },
    { src: dishFeijoada, alt: "Feijoada tradicional" },
    { src: dishDessert, alt: "Sobremesas" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-terracotta bg-terracotta/10 rounded-full">
            Momentos Especiais
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6 font-['Playfair_Display']">
            Nosso <span className="text-wine">Ambiente</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0"
                >
                  <div className="relative h-80 rounded-xl overflow-hidden mx-2">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-cream font-medium">
                      {image.alt}
                    </p>
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-cream/90 hover:bg-cream border-none shadow-warm z-10"
          >
            <ChevronLeft className="w-5 h-5 text-chocolate" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-cream/90 hover:bg-cream border-none shadow-warm z-10"
          >
            <ChevronRight className="w-5 h-5 text-chocolate" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
