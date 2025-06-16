import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Tariffs = () => {
  const tariffs = [
    {
      name: "Эконом",
      price: "50,000₽",
      emoji: "🚀",
      features: [
        "Стандартное место",
        "Базовое питание",
        "Развлекательная система",
        "Медицинская страховка",
        "Ручная кладь 10 кг",
      ],
      popular: false,
    },
    {
      name: "Комфорт",
      price: "120,000₽",
      emoji: "✨",
      features: [
        "Увеличенное пространство",
        "Премиум питание",
        "Персональный экран",
        "Расширенная страховка",
        "Ручная кладь 20 кг",
        "Приоритетная посадка",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "250,000₽",
      emoji: "👑",
      features: [
        "Приватная каюта",
        "Gourmet меню от шеф-повара",
        "VIP зона ожидания",
        "Полная страховка",
        "Багаж без ограничений",
        "Персональный стюард",
        "Космический спа-сервис",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-exo font-bold text-white mb-4">
            Тарифные планы
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Выберите класс обслуживания, который подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tariffs.map((tariff, index) => (
            <div
              key={index}
              className={`relative glass-card rounded-xl p-8 transition-all duration-300 ${
                tariff.popular
                  ? "ring-2 ring-cosmic-amber neon-glow scale-105"
                  : "hover:neon-glow hover:scale-105"
              }`}
            >
              {tariff.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cosmic-amber text-cosmic-dark px-4 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{tariff.emoji}</div>
                <h3 className="text-2xl font-exo font-bold text-white mb-2">
                  {tariff.name}
                </h3>
                <div className="text-3xl font-exo font-bold text-cosmic-amber">
                  {tariff.price}
                </div>
                <div className="text-slate-400 text-sm">за полёт</div>
              </div>

              <ul className="space-y-3 mb-8">
                {tariff.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-cosmic-amber mr-3 flex-shrink-0"
                    />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full font-medium ${
                  tariff.popular
                    ? "bg-cosmic-amber text-cosmic-dark hover:bg-cosmic-amber/90"
                    : "bg-cosmic-blue text-white hover:bg-cosmic-blue/90"
                }`}
              >
                <Link to="/booking" state={{ selectedTariff: tariff.name }}>
                  Выбрать тариф
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm">
            * Цены указаны для ближайших планетных маршрутов. Стоимость
            межгалактических полётов рассчитывается индивидуально.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
