import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/routes", label: "Маршруты", icon: "MapPin" },
    { path: "/tariffs", label: "Тарифы", icon: "CreditCard" },
    { path: "/ships", label: "Корабли", icon: "Rocket" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cosmic-blue/20 bg-cosmic-dark/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl">🚀</div>
          <span className="text-xl font-exo font-bold text-cosmic-amber">
            Космо-Такси
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-cosmic-amber ${
                location.pathname === item.path
                  ? "text-cosmic-amber"
                  : "text-slate-300"
              }`}
            >
              <Icon name={item.icon} size={16} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <Button
          asChild
          className="bg-cosmic-amber text-cosmic-dark hover:bg-cosmic-amber/90 font-medium"
        >
          <Link to="/booking">Заказать полёт</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
