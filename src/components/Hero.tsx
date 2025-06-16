import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 stars-bg opacity-50"></div>

      {/* Floating planets */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-cosmic-amber/20 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-8 h-8 bg-white/30 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-12 h-12 bg-cosmic-blue/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-exo font-bold mb-6 text-white">
            Путешествуй по
            <span className="text-cosmic-amber block mt-2">галактике</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-roboto">
            Космическое такси нового поколения. Быстрые и безопасные полёты
            между планетами.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-cosmic-amber text-cosmic-dark hover:bg-cosmic-amber/90 font-medium text-lg px-8 py-6 animate-pulse-glow"
            >
              <Link to="/booking">
                <Icon name="Rocket" size={20} className="mr-2" />
                Заказать полёт
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cosmic-blue bg-transparent text-white hover:bg-cosmic-blue/20 font-medium text-lg px-8 py-6"
            >
              <Link to="/routes">
                <Icon name="MapPin" size={20} className="mr-2" />
                Маршруты
              </Link>
            </Button>
          </div>

          {/* Quick features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="glass-card rounded-lg p-4">
              <Icon
                name="Zap"
                size={24}
                className="text-cosmic-amber mx-auto mb-2"
              />
              <p className="text-sm font-medium">Сверхсветовая скорость</p>
            </div>
            <div className="glass-card rounded-lg p-4">
              <Icon
                name="Shield"
                size={24}
                className="text-cosmic-amber mx-auto mb-2"
              />
              <p className="text-sm font-medium">100% безопасность</p>
            </div>
            <div className="glass-card rounded-lg p-4">
              <Icon
                name="Star"
                size={24}
                className="text-cosmic-amber mx-auto mb-2"
              />
              <p className="text-sm font-medium">5-звёздочный сервис</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
