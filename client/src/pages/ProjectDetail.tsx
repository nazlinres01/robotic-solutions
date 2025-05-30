import { useRoute, Link } from "wouter";
import { ArrowLeft, Phone, Calendar, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = {
  "automotive-assembly": {
    title: "Otomotiv Montaj Hattı",
    description: "6 DOF robot kolları ile tam otomatik otomobil montaj sistemi",
    category: "Otomotiv Sektörü",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "OtoSan A.Ş.",
    duration: "8 ay",
    team: "12 uzman",
    completion: "2023",
    challenge: "Müşteri, mevcut manuel montaj hattının verimliliğini artırmak ve iş güvenliğini maksimize etmek istiyordu. Günlük 500 araç üretim kapasitesine çıkmak hedeflenmişti.",
    solution: "6 adet ABB IRB 6700 robot kolu kullanarak tam otomatik montaj hattı tasarladık. Vision sistemleri ile kalite kontrol, force feedback ile hassas montaj işlemleri gerçekleştirdik.",
    results: [
      "Üretim hızında %65 artış",
      "Hata oranında %89 azalma", 
      "İş kazalarında %100 azalma",
      "Enerji tüketiminde %25 tasarruf"
    ],
    technologies: ["ABB IRB 6700", "RobotStudio", "Cognex Vision", "Siemens PLC"]
  },
  "food-packaging": {
    title: "Gıda Paketleme Sistemi",
    description: "AI destekli görüntü işleme ile otomatik gıda paketleme robotu",
    category: "Gıda Sektörü",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "FoodTech Ltd.",
    duration: "6 ay",
    team: "8 uzman",
    completion: "2023",
    challenge: "Farklı boyut ve şekillerdeki gıda ürünlerinin hijyenik şartlarda hızlı paketlenmesi gerekiyordu. Manuel süreç hem yavaş hem de kontaminasyon riski taşıyordu.",
    solution: "AI tabanlı görüntü işleme sistemi ile ürün tanıma, Delta robot ile hızlı pick&place işlemi, vakum paketleme entegrasyonu gerçekleştirdik.",
    results: [
      "Paketleme hızında %180 artış",
      "Hijyen standartlarında %100 uyum",
      "Paket hatalarında %95 azalma",
      "İşçilik maliyetinde %45 tasarruf"
    ],
    technologies: ["Delta Robot", "OpenCV", "TensorFlow", "Vacuum System"]
  },
  "pharmaceutical": {
    title: "İlaç Üretim Robotu",
    description: "Yüksek hassasiyetli ilaç karıştırma ve paketleme otomasyonu",
    category: "Sağlık Sektörü", 
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "PharmaLife İlaç",
    duration: "10 ay",
    team: "15 uzman",
    completion: "2023",
    challenge: "İlaç üretiminde mikrogram hassasiyetinde dozaj kontrolü ve GMP standartlarına uygun steril ortam şartları sağlanması gerekiyordu.",
    solution: "Cleanroom uyumlu robotlar, hassas tartım sistemleri, barcode tracking ve tam izi takip sistemi kuruldu.",
    results: [
      "Dozaj hassasiyetinde %99.98 doğruluk",
      "GMP compliance %100",
      "Üretim kapasitesinde %120 artış",
      "Batch tracking %100 izi takip"
    ],
    technologies: ["Cleanroom Robot", "Precision Scale", "Barcode System", "SCADA"]
  },
  "warehouse-automation": {
    title: "Depo Otomasyon Sistemi",
    description: "AGV ve robot kolları ile tam otomatik depo yönetim sistemi",
    category: "Lojistik Sektörü",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "LogiFlow",
    duration: "12 ay",
    team: "18 uzman",
    completion: "2023",
    challenge: "50.000 m² depo alanında günlük 10.000 sipariş işleme kapasitesi ve %99.5 doğruluk oranı hedefleniyordu.",
    solution: "20 adet AGV, 8 robot kol, WMS entegrasyonu ve AI tabanlı rota optimizasyonu sistemi kuruldu.",
    results: [
      "Sipariş işleme hızında %200 artış",
      "Doğruluk oranı %99.8",
      "Operasyon maliyetinde %40 tasarruf",
      "Depo kapasitesinde %30 artış"
    ],
    technologies: ["AGV Fleet", "Robot Arms", "WMS Integration", "AI Route Optimization"]
  },
  "cnc-automation": {
    title: "CNC Tezgah Otomasyonu",
    description: "Hassas metal işleme için robot destekli CNC tezgah sistemi",
    category: "Metal Sektörü",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "MetalWorks Fabrika",
    duration: "7 ay", 
    team: "10 uzman",
    completion: "2023",
    challenge: "24/7 üretim kapasitesi, ±0.001mm hassasiyet ve tamamen ışık dışı operasyon gerekliydi.",
    solution: "Robot ile otomatik iş parçası değişimi, in-process measurement, adaptive machining sistemi geliştirildi.",
    results: [
      "Üretim sürekliliği %99.2",
      "Hassasiyet toleransı ±0.0008mm", 
      "İş parçası çevrim süresi %45 azaldı",
      "Takım ömrü %35 arttı"
    ],
    technologies: ["KUKA Robot", "Renishaw Probing", "Adaptive Control", "Tool Management"]
  },
  "quality-control": {
    title: "Kalite Kontrol Sistemi",
    description: "AI tabanlı görüntü işleme ile otomatik kalite kontrol sistemi",
    category: "Üretim Sektörü",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "QualityFirst Üretim",
    duration: "5 ay",
    team: "9 uzman", 
    completion: "2023",
    challenge: "Farklı ürün tiplerinde %99.9 doğrulukla defekt tespiti ve saniyede 50 parça kontrol hızı gerekiyordu.",
    solution: "Deep learning tabanlı görüntü işleme, multi-camera sistem ve real-time data analytics platformu kuruldu.",
    results: [
      "Defekt tespit doğruluğu %99.92",
      "Kontrol hızı 65 parça/saniye",
      "Kalite maliyetlerinde %60 azalma",
      "Müşteri şikayetlerinde %85 azalma"
    ],
    technologies: ["Deep Learning", "Multi-Camera", "Real-time Analytics", "Edge Computing"]
  }
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const projectId = params?.id;
  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  if (!project) {
    return <div>Proje bulunamadı</div>;
  }

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
              <span className="text-primary font-semibold text-sm">{project.category}</span>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-2">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Müşteri</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Süre</p>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Ekip</p>
                    <p className="font-semibold">{project.team}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Tamamlanma</p>
                    <p className="font-semibold">{project.completion}</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={scrollToContact}
                className="bg-primary text-white hover:bg-primary/90 font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" />
                Benzer Proje Talebi
              </Button>
            </div>
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Proje Zorluğu</h2>
              <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Çözümümüz</h2>
              <p className="text-gray-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sonuçlar</h2>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullanılan Teknolojiler</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
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