import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Cardápio", href: "#menu" },
    { label: "Galeria", href: "#gallery" },
    { label: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-warm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2"
          >
            <span
              className={`text-2xl md:text-3xl font-bold font-['Playfair_Display'] transition-colors duration-300 ${
                isScrolled ? "text-wine" : "text-cream"
              }`}
            >
              Sabor & Tradição
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-sm font-medium transition-colors duration-300 hover:text-terracotta ${
                  isScrolled ? "text-chocolate" : "text-cream"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="bg-terracotta hover:bg-terracotta-light text-cream"
            >
              Reservar Mesa
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-wine" : "text-cream"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-3 text-chocolate hover:text-terracotta transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="mt-4 w-full bg-terracotta hover:bg-terracotta-light text-cream"
            >
              Reservar Mesa
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
