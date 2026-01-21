import { useState } from "react";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000 - São Paulo, SP",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg-Dom: 11h às 23h",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@saboretradicao.com.br",
    },
  ];

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma reserva.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-terracotta bg-terracotta/10 rounded-full">
              Entre em Contato
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6 font-['Playfair_Display']">
              Venha nos <span className="text-wine">Visitar</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Estamos prontos para recebê-lo com o melhor da nossa culinária.
              Entre em contato para reservas e informações.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background hover:shadow-card transition-shadow"
                >
                  <div className="p-3 rounded-lg bg-wine/10">
                    <item.icon className="w-5 h-5 text-wine" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-semibold text-chocolate">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Fale pelo WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-2xl shadow-warm">
            <h3 className="text-2xl font-bold text-chocolate mb-6 font-['Playfair_Display']">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-cream border-border focus:border-wine"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 bg-cream border-border focus:border-wine"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 bg-cream border-border focus:border-wine"
                />
              </div>

              <Textarea
                name="message"
                placeholder="Sua mensagem..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-cream border-border focus:border-wine resize-none"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-wine hover:bg-wine-light text-cream"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
