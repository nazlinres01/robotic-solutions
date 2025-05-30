import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const allProjects = [
  {
    id: "automotive-assembly",
    title: "Otomotiv Montaj Hattı",
    description: "6 DOF robot kolları ile tam otomatik otomobil montaj sistemi",
    category: "Otomotiv Sektörü",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "OtoSan A.Ş.",
    year: "2023"
  },
  {
    id: "food-packaging",
    title: "Gıda Paketleme Sistemi",
    description: "AI destekli görüntü işleme ile otomatik gıda paketleme robotu",
    category: "Gıda Sektörü",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "FoodTech Ltd.",
    year: "2023"
  },
  {
    id: "pharmaceutical",
    title: "İlaç Üretim Robotu",
    description: "Yüksek hassasiyetli ilaç karıştırma ve paketleme otomasyonu",
    category: "Sağlık Sektörü",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "PharmaLife İlaç",
    year: "2023"
  },
  {
    id: "warehouse-automation",
    title: "Depo Otomasyon Sistemi",
    description: "AGV ve robot kolları ile tam otomatik depo yönetim sistemi",
    category: "Lojistik Sektörü",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "LogiFlow",
    year: "2023"
  },
  {
    id: "cnc-automation",
    title: "CNC Tezgah Otomasyonu",
    description: "Hassas metal işleme için robot destekli CNC tezgah sistemi",
    category: "Metal Sektörü",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "MetalWorks Fabrika",
    year: "2023"
  },
  {
    id: "quality-control",
    title: "Kalite Kontrol Sistemi",
    description: "AI tabanlı görüntü işleme ile otomatik kalite kontrol sistemi",
    category: "Üretim Sektörü",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "QualityFirst Üretim",
    year: "2023"
  },
  {
    id: "solar-panel",
    title: "Solar Panel Montaj Robotu",
    description: "Yenilenebilir enerji için otomatik solar panel montaj sistemi",
    category: "Yenilenebilir Enerji",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "SolarTech Energy",
    year: "2022"
  },
  {
    id: "textile-weaving",
    title: "Tekstil Dokuma Otomasyonu",
    description: "AI destekli kalite kontrol ile tekstil dokuma robot sistemi",
    category: "Tekstil Sektörü",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "TextilePro A.Ş.",
    year: "2022"
  },
  {
    id: "3d-printer",
    title: "3D Yazıcı Kontrol Sistemi",
    description: "Endüstriyel 3D yazıcılar için akıllı kontrol ve monitoring sistemi",
    category: "Teknoloji",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "TechPrint Ltd.",
    year: "2022"
  },
  {
    id: "agriculture-irrigation",
    title: "Tarım Robot Sulama Sistemi",
    description: "IoT sensörler ile akıllı tarım robot sulama otomasyonu",
    category: "Tarım Sektörü",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "AgroTech Çiftlik",
    year: "2022"
  },
  {
    id: "electronics-testing",
    title: "Elektronik Kart Test Robotu",
    description: "Yüksek hassasiyetli elektronik kart test ve kalite kontrol sistemi",
    category: "Elektronik",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "ElectroTest Inc.",
    year: "2022"
  },
  {
    id: "glass-processing",
    title: "Cam İşleme Otomasyonu",
    description: "Hassas cam kesme ve işleme için robot destekli otomasyon sistemi",
    category: "Cam Sektörü",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "GlassTech Fabrika",
    year: "2021"
  },
  {
    id: "plastic-injection",
    title: "Plastik Enjeksiyon Robotu",
    description: "Yüksek hızlı plastik enjeksiyon kalıplama robot otomasyonu",
    category: "Plastik Sektörü",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "PlasticWorks Ltd.",
    year: "2021"
  },
  {
    id: "medical-assembly",
    title: "Medikal Cihaz Montajı",
    description: "Steril ortamda medikal cihaz montajı için özel robot sistemi",
    category: "Sağlık Sektörü",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    client: "MedicalTech Corp.",
    year: "2021"
  }
];

export default function AllProjects() {
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

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tüm Projelerimiz</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2021 yılından bu yana gerçekleştirdiğimiz başarılı robotik otomasyon projeleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div key={project.id} className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-semibold">{project.category}</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Müşteri: {project.client}</p>
                  <div className="flex items-center justify-between">
                    <Link href={`/project/${project.id}`}>
                      <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                        Detayları Görüntüle
                      </Button>
                    </Link>
                    <Link href={`/project/${project.id}`}>
                      <ExternalLink className="h-4 w-4 text-gray-400 hover:text-primary cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Daha fazla proje detayı için bizimle iletişime geçin
            </p>
            <Button 
              onClick={() => window.location.href = "/#iletisim"}
              className="bg-primary text-white hover:bg-primary/90 font-semibold"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}