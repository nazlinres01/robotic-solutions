import { Bot, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Bot className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold">RoboTech</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Endüstriyel robotik ve otomasyon alanında öncü çözümler sunarak,
              üretim süreçlerinizi geleceğe taşıyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Hizmetler</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection("hizmetler")} className="text-gray-300 hover:text-white transition-colors text-left">Robot Programlama</button></li>
              <li><button onClick={() => scrollToSection("hizmetler")} className="text-gray-300 hover:text-white transition-colors text-left">Otomasyon Sistemleri</button></li>
              <li><button onClick={() => scrollToSection("hizmetler")} className="text-gray-300 hover:text-white transition-colors text-left">Görüntü İşleme</button></li>
              <li><button onClick={() => scrollToSection("hizmetler")} className="text-gray-300 hover:text-white transition-colors text-left">Veri Analizi</button></li>
              <li><button onClick={() => scrollToSection("hizmetler")} className="text-gray-300 hover:text-white transition-colors text-left">Bakım & Destek</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Şirket</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection("hakkimizda")} className="text-gray-300 hover:text-white transition-colors text-left">Hakkımızda</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kariyer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Haberler</a></li>
              <li><button onClick={() => scrollToSection("iletisim")} className="text-gray-300 hover:text-white transition-colors text-left">İletişim</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gizlilik Politikası</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-primary"></i>
                <span className="text-gray-300">+90 212 555 0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <span className="text-gray-300">info@robotech.com.tr</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <span className="text-gray-300">Teknokent Mah. Robot Cad. No:15<br />34906 İstanbul</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 RoboTech Solutions. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
