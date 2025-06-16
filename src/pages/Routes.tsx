import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Routes = () => {
  const routes = [
    {
      planet: "Марс",
      emoji: "🔴",
      duration: "3 дня",
      distance: "225 млн км",
      price: "от 150,000₽",
      description:
        "Красная планета с марсианскими каньонами и полярными шапками",
    },
    {
      planet: "Венера",
      emoji: "🌕",
      duration: "2 дня",
      distance: "108 млн км",
      price: "от 120,000₽",
      description:
        "Утренняя звезда с плотной атмосферой и венерианскими вулканами",
    },
    {
      planet: "Европа",
      emoji: "🧊",
      duration: "7 дней",
      distance: "628 млн км",
      price: "от 350,000₽",
      description: "Ледяной спутник Юпитера с подповерхностным океаном",
    },
    {
      planet: "Титан",
      emoji: "🌫️",
      duration: "10 дней",
      distance: "1.4 млрд км",
      price: "от 500,000₽",
      description: "Крупнейший спутник Сатурна с метановыми озёрами",
    },
    {
      planet: "Луна",
      emoji: "🌙",
      duration: "8 часов",
      distance: "384,400 км",
      price: "от 50,000₽",
      description: "Ближайший естественный спутник Земли",
    },
    {
      planet: "Международная космическая станция",
      emoji: "🛰️",
      duration: "2 часа",
      distance: "408 км",
      price: "от 25,000₽",
      description: "Орбитальная исследовательская станция",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-exo font-bold text-white mb-4">
            Космические маршруты
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Выбирайте направление для незабываемого космического путешествия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:neon-glow transition-all duration-300 group"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{route.emoji}</div>
                <h3 className="text-xl font-exo font-bold text-white">
                  {route.planet}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Время в пути:</span>
                  <span className="text-white font-medium">
                    {route.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Расстояние:</span>
                  <span className="text-white font-medium">
                    {route.distance}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Стоимость:</span>
                  <span className="text-cosmic-amber font-bold">
                    {route.price}
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {route.description}
              </p>

              <Button
                asChild
                className="w-full bg-cosmic-amber text-cosmic-dark hover:bg-cosmic-amber/90"
              >
                <Link to="/booking" state={{ selectedRoute: route.planet }}>
                  <Icon name="Rocket" size={16} className="mr-2" />
                  Выбрать маршрут
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Routes;
