import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Rocket",
      title: "Межпланетные рейсы",
      description:
        "Полёты на Марс, Венеру, спутники Юпитера и другие планеты солнечной системы",
    },
    {
      icon: "Clock",
      title: "Быстрая доставка",
      description:
        "Благодаря квантовым двигателям время в пути сокращено в 100 раз",
    },
    {
      icon: "Users",
      title: "Комфорт премиум-класса",
      description: "Просторные каюты, изысканная кухня и развлечения на борту",
    },
    {
      icon: "Shield",
      title: "Максимальная безопасность",
      description: "Новейшие системы защиты и опытные пилоты-космонавты",
    },
    {
      icon: "Smartphone",
      title: "Простое бронирование",
      description:
        "Забронируйте полёт за несколько кликов через наше приложение",
    },
    {
      icon: "DollarSign",
      title: "Доступные цены",
      description: "Тарифы на любой бюджет - от эконом до премиум класса",
    },
  ];

  return (
    <section className="py-20 bg-cosmic-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-exo font-bold text-white mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Мы предоставляем лучший сервис космических перевозок в галактике
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:neon-glow transition-all duration-300 group"
            >
              <div className="text-cosmic-amber mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-xl font-exo font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
