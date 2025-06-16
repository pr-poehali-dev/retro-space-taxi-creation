import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RoutesPage from "./pages/Routes";
import Tariffs from "./pages/Tariffs";
import Ships from "./pages/Ships";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-cosmic-dark stars-bg">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/routes" element={<RoutesPage />} />
              <Route path="/tariffs" element={<Tariffs />} />
              <Route path="/ships" element={<Ships />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
