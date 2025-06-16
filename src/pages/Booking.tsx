import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    route: "",
    tariff: "",
    ship: "",
    passengers: "1",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  const routes = ["Марс", "Венера", "Европа", "Титан", "Луна", "МКС"];
  const tariffs = ["Эконом", "Комфорт", "Премиум"];
  const ships = ["Стрела-X1", "Комфорт-200", "Галактика-500", "Шаттл-Mini"];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-exo font-bold text-white mb-4">
            Забронировать полёт
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Заполните форму и отправляйтесь в незабываемое космическое
            путешествие
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">
                  Полное имя *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-cosmic-dark/50 border-cosmic-blue/30 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-cosmic-dark/50 border-cosmic-blue/30 text-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-300">
                Телефон *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="bg-cosmic-dark/50 border-cosmic-blue/30 text-white"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-slate-300">Маршрут *</Label>
                <Select
                  value={formData.route}
                  onValueChange={(value) =>
                    setFormData({ ...formData, route: value })
                  }
                >
                  <SelectTrigger className="bg-cosmic-dark/50 border-cosmic-blue/30 text-white">
                    <SelectValue placeholder="Выберите планету" />
                  </SelectTrigger>
                  <SelectContent>
                    {routes.map((route) => (
                      <SelectItem key={route} value={route}>
                        {route}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">Тариф *</Label>
                <Select
                  value={formData.tariff}
                  onValueChange={(value) =>
                    setFormData({ ...formData, tariff: value })
                  }
                >
                  <SelectTrigger className="bg-cosmic-dark/50 border-cosmic-blue/30 text-white">
                    <SelectValue placeholder="Выберите класс" />
                  </SelectTrigger>
                  <SelectContent>
                    {tariffs.map((tariff) => (
                      <SelectItem key={tariff} value={tariff}>
                        {tariff}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-slate-300">Корабль</Label>
                <Select
                  value={formData.ship}
                  onValueChange={(value) =>
                    setFormData({ ...formData, ship: value })
                  }
                >
                  <SelectTrigger className="bg-cosmic-dark/50 border-cosmic-blue/30 text-white">
                    <SelectValue placeholder="Любой подходящий" />
                  </SelectTrigger>
                  <SelectContent>
                    {ships.map((ship) => (
                      <SelectItem key={ship} value={ship}>
                        {ship}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="passengers" className="text-slate-300">
                  Количество пассажиров
                </Label>
                <Input
                  id="passengers"
                  type="number"
                  min="1"
                  max="10"
                  value={formData.passengers}
                  onChange={(e) =>
                    setFormData({ ...formData, passengers: e.target.value })
                  }
                  className="bg-cosmic-dark/50 border-cosmic-blue/30 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-slate-300">
                Предпочтительная дата вылета
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="bg-cosmic-dark/50 border-cosmic-blue/30 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-300">
                Дополнительные пожелания
              </Label>
              <Textarea
                id="message"
                placeholder="Расскажите о ваших особых требованиях или пожеланиях..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-cosmic-dark/50 border-cosmic-blue/30 text-white min-h-[100px]"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-cosmic-amber text-cosmic-dark hover:bg-cosmic-amber/90 font-medium text-lg py-6"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </div>

            <div className="text-center text-sm text-slate-400">
              * Обязательные поля для заполнения
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
