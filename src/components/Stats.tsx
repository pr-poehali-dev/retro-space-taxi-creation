const Stats = () => {
  const stats = [
    { number: "10,000+", label: "Довольных пассажиров" },
    { number: "50+", label: "Планетных направлений" },
    { number: "99.9%", label: "Успешных полётов" },
    { number: "24/7", label: "Поддержка клиентов" },
  ];

  return (
    <section className="py-16 bg-cosmic-blue/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-exo font-bold text-cosmic-amber mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
