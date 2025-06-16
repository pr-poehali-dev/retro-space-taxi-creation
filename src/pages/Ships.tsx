import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Ships = () => {
  const ships = [
    {
      name: "Стрела-X1",
      type: "Скоростной крейсер",
      emoji: "🚀",
      capacity: "12 пассажиров",
      speed: "Mach 25",
      range: "До 500 млн км",
      features: ["Квантовый двигатель", "Автопилот ИИ", "Силовые щиты"],
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400",
    },
    {
      name: "Комфорт-200",
      type: "Туристический лайнер",
      emoji: "✨",
      capacity: "50 пассажиров",
      speed: "Mach 15",
      range: "До 1 млрд км",
      features: ["Панорамные окна", "Ресторан на борту", "Спа-центр"],
      image:
        "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400",
    },
    {
      name: "Галактика-500",
      type: "Межгалактический",
      emoji: "🌌",
      capacity: "200 пассажиров",
      speed: "Световая скорость",
      range: "Неограниченный",
      features: ["Варп-двигатель", "Искусственная гравитация", "Голодеки"],
      image:
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
    },
    {
      name: "Шаттл-Mini",
      type: "Городской транспорт",
      emoji: "🛸",
      capacity: "6 пассажиров",
      speed: "Mach 5",
      range: "До 1 млн км",
      features: ["Экономичный", "Быстрая посадка", "Городские маршруты"],
      image:
        "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-exo font-bold text-white mb-4">
            Наш космический флот
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Современные космические корабли для любых целей и расстояний
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ships.map((ship, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden hover:neon-glow transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ship.image}
                  alt={ship.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-cosmic-dark/40"></div>
                <div className="absolute top-4 left-4 text-3xl">
                  {ship.emoji}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-exo font-bold text-white mb-1">
                    {ship.name}
                  </h3>
                  <p className="text-cosmic-amber font-medium">{ship.type}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-slate-400 text-sm">Вместимость</p>
                    <p className="text-white font-medium">{ship.capacity}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Скорость</p>
                    <p className="text-white font-medium">{ship.speed}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-400 text-sm">Дальность полёта</p>
                    <p className="text-white font-medium">{ship.range}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-slate-400 text-sm mb-2">Особенности:</p>
                  <div className="flex flex-wrap gap-2">
                    {ship.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-cosmic-blue/20 text-cosmic-amber px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-cosmic-amber text-cosmic-dark hover:bg-cosmic-amber/90"
                >
                  <Link to="/booking" state={{ selectedShip: ship.name }}>
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Забронировать
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ships;
