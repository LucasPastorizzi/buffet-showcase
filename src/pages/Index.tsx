import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import ImageCarousel from "@/components/ImageCarousel";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <ImageCarousel />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
