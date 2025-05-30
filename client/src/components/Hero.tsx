import { Play, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("iletisim");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="anasayfa" className="hero-gradient text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Geleceğin Robot{" "}
              <span className="text-blue-200">Yazılımları</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Endüstriyel otomasyon ve robotik sistemler için profesyonel yazılım çözümleri geliştiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold shadow-lg"
              >
                <Play className="mr-2 h-4 w-4" />
                Demo İzle
              </Button>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-green-600 text-white hover:bg-green-700 border-2 border-green-600 font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" />
                İletişime Geç
              </Button>
            </div>
          </div>

          <div className="animate-float">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Advanced industrial robotic arm in modern manufacturing facility"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
