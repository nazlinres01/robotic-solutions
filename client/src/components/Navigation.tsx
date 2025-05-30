import { useState, useEffect } from "react";
import { Bot, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Bot className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-gray-900">RoboTech</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("anasayfa")}
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection("hakkimizda")}
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection("hizmetler")}
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Hizmetler
            </button>
            <button
              onClick={() => scrollToSection("projeler")}
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Projeler
            </button>
            <button
              onClick={() => scrollToSection("ekip")}
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Ekip
            </button>
            <button
              onClick={() => scrollToSection("iletisim")}
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              İletişim
            </button>
            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-primary text-white hover:bg-primary/90 font-medium"
            >
              Teklif Al
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("anasayfa")}
                className="text-left text-gray-700 hover:text-primary font-medium py-2"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection("hakkimizda")}
                className="text-left text-gray-700 hover:text-primary font-medium py-2"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection("hizmetler")}
                className="text-left text-gray-700 hover:text-primary font-medium py-2"
              >
                Hizmetler
              </button>
              <button
                onClick={() => scrollToSection("projeler")}
                className="text-left text-gray-700 hover:text-primary font-medium py-2"
              >
                Projeler
              </button>
              <button
                onClick={() => scrollToSection("ekip")}
                className="text-left text-gray-700 hover:text-primary font-medium py-2"
              >
                Ekip
              </button>
              <button
                onClick={() => scrollToSection("iletisim")}
                className="text-left text-gray-700 hover:text-primary font-medium py-2"
              >
                İletişim
              </button>
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-primary text-white hover:bg-primary/90 font-medium w-full mt-2"
              >
                Teklif Al
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </nav>
  );
}
