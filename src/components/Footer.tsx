import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-cosmic-blue/20 bg-cosmic-dark/90 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🚀</div>
              <span className="text-xl font-exo font-bold text-cosmic-amber">
                Космо-Такси
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Межпланетные перевозки будущего. Быстро, безопасно, комфортно.
            </p>
          </div>

          <div>
            <h3 className="font-exo font-bold text-cosmic-amber mb-4">
              Контакты
            </h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={14} />
                <span>+7 (800) КОСМОС</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={14} />
                <span>info@cosmo-taxi.space</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={14} />
                <span>Орбитальная станция "Мир-2"</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-exo font-bold text-cosmic-amber mb-4">
              Соцсети
            </h3>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                size={20}
                className="text-slate-400 hover:text-cosmic-amber transition-colors cursor-pointer"
              />
              <Icon
                name="Twitter"
                size={20}
                className="text-slate-400 hover:text-cosmic-amber transition-colors cursor-pointer"
              />
              <Icon
                name="Instagram"
                size={20}
                className="text-slate-400 hover:text-cosmic-amber transition-colors cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-cosmic-blue/20 mt-8 pt-6 text-center text-sm text-slate-400">
          <p>&copy; 2024 Космо-Такси. Все права защищены во всех галактиках.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
