import { Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-chocolate text-cream py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-4">
              Sabor & Tradição
            </h3>
            <p className="text-cream/80 leading-relaxed mb-6 max-w-md">
              Há mais de 40 anos servindo o melhor da culinária brasileira.
              Venha conhecer nossa tradição em forma de sabor.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-cream/10 hover:bg-terracotta transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-cream/10 hover:bg-terracotta transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-cream/10 hover:bg-terracotta transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#home" },
                { label: "Sobre Nós", href: "#about" },
                { label: "Cardápio", href: "#menu" },
                { label: "Galeria", href: "#gallery" },
                { label: "Contato", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-3 text-cream/70">
              <li className="flex justify-between">
                <span>Segunda - Sexta</span>
                <span>11h - 23h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>11h - 00h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>11h - 22h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/20 text-center text-cream/60 text-sm">
          <p>© {currentYear} Sabor & Tradição. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
