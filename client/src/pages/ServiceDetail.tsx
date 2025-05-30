import { useRoute, Link } from "wouter";
import { ArrowLeft, Bot, Cog, Eye, TrendingUp, Wrench, GraduationCap, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = {
  "robot-programming": {
    icon: Bot,
    title: "Robot Programlama",
    description: "Endüstriyel robotlar için özel programlama ve kontrol sistemleri geliştiriyoruz.",
    fullDescription: "Endüstriyel robotik sistemler için kapsamlı programlama çözümleri sunuyoruz. ABB, KUKA, Fanuc ve Universal Robots gibi önde gelen robot markalarında uzmanız.",
    features: [
      "6 eksenli robot kol programlama",
      "Pick & Place uygulamaları",
      "Welding robot programlama",
      "Painting robot sistemleri",
      "Assembly line entegrasyonu",
      "Safety sistem konfigürasyonu"
    ],
    technologies: ["RobotStudio", "KUKA WorkVisual", "Roboguide", "URSim"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  "automation": {
    icon: Cog,
    title: "Otomasyon Sistemleri",
    description: "PLC tabanlı otomasyon ve SCADA sistemleri ile üretim süreçlerinizi optimize ediyoruz.",
    fullDescription: "Siemens, Allen-Bradley, Schneider Electric PLC'leri ile kapsamlı otomasyon çözümleri. Üretim hattınızın verimliliğini maksimize ediyoruz.",
    features: [
      "PLC programlama ve konfigürasyon",
      "SCADA sistem geliştirme",
      "HMI tasarım ve uygulama",
      "Motor sürücü entegrasyonu",
      "Sensör ve aktüatör bağlantıları",
      "Alarm ve güvenlik sistemleri"
    ],
    technologies: ["TIA Portal", "RSLogix", "Unity Pro", "WinCC"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  "vision": {
    icon: Eye,
    title: "Görüntü İşleme",
    description: "AI destekli görüntü işleme teknolojileri ile kalite kontrol sistemleri geliştiriyoruz.",
    fullDescription: "Yapay zeka ve machine learning teknolojileri kullanarak endüstriyel görüntü işleme sistemleri geliştiriyoruz. %99.9 doğruluk oranı ile kalite kontrol sağlıyoruz.",
    features: [
      "Defekt tespiti ve sınıflandırma",
      "Boyut ve şekil kontrolü",
      "OCR/OCV okuma sistemleri",
      "Renk analizi ve eşleştirme",
      "3D görüntü işleme",
      "Real-time analiz sistemleri"
    ],
    technologies: ["OpenCV", "TensorFlow", "Cognex VisionPro", "Halcon"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  "data-analysis": {
    icon: TrendingUp,
    title: "Veri Analizi",
    description: "Üretim verilerinizi analiz ederek performans optimizasyonu sağlıyoruz.",
    fullDescription: "Big Data ve IoT teknolojileri ile üretim süreçlerinizden gelen verileri analiz ediyoruz. Predictive maintenance ve performance optimization sağlıyoruz.",
    features: [
      "Real-time veri toplama",
      "Predictive maintenance",
      "OEE hesaplama ve analizi",
      "Energy monitoring",
      "Trend analizi ve raporlama",
      "Dashboard ve visualization"
    ],
    technologies: ["Python", "Power BI", "InfluxDB", "Grafana"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  "maintenance": {
    icon: Wrench,
    title: "Bakım & Destek",
    description: "Sistemlerinizin sürekli çalışması için profesyonel bakım ve destek hizmeti veriyoruz.",
    fullDescription: "7/24 teknik destek ve önleyici bakım hizmetleri ile sistemlerinizin %99.5 uptime oranı ile çalışmasını sağlıyoruz.",
    features: [
      "7/24 teknik destek hattı",
      "Preventive maintenance programı",
      "Remote monitoring ve diagnostics",
      "Spare parts yönetimi",
      "Emergency response service",
      "Sistem upgrade hizmetleri"
    ],
    technologies: ["TeamViewer", "VPN", "Diagnostic Tools", "CMMS"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  "training": {
    icon: GraduationCap,
    title: "Eğitim & Danışmanlık",
    description: "Ekiplerinizi robotik teknolojiler konusunda eğitiyor ve danışmanlık veriyoruz.",
    fullDescription: "Uzman eğitmenlerimizle ekiplerinizi robotik teknolojiler, otomasyon sistemleri ve endüstri 4.0 konularında eğitiyoruz.",
    features: [
      "Robot operatörü eğitimi",
      "PLC programlama kursu",
      "Safety sistem eğitimi",
      "Troubleshooting teknikleri",
      "Endüstri 4.0 danışmanlığı",
      "Sertifikalı eğitim programları"
    ],
    technologies: ["Simulatörler", "VR Training", "Online Platform", "Hands-on Lab"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
};

export default function ServiceDetail() {
  const [match, params] = useRoute("/service/:id");
  const serviceId = params?.id;
  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  if (!service) {
    return <div>Hizmet bulunamadı</div>;
  }

  const IconComponent = service.icon;

  const scrollToContact = () => {
    window.location.href = "/#iletisim";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <IconComponent className="text-primary text-3xl" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-white hover:bg-primary/90 font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" />
                Teklif Al
              </Button>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Özellikler</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullandığımız Teknolojiler</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="font-semibold text-gray-800">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}