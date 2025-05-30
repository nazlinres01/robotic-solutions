import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

const projects: Project[] = [
  {
    id: "automotive-assembly",
    title: "Otomotiv Montaj Hattı",
    description: "6 DOF robot kolları ile tam otomatik otomobil montaj sistemi",
    category: "Otomotiv Sektörü",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
  },
  {
    id: "food-packaging",
    title: "Gıda Paketleme Sistemi",
    description: "AI destekli görüntü işleme ile otomatik gıda paketleme robotu",
    category: "Gıda Sektörü",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
  },
  {
    id: "pharmaceutical",
    title: "İlaç Üretim Robotu",
    description: "Yüksek hassasiyetli ilaç karıştırma ve paketleme otomasyonu",
    category: "Sağlık Sektörü",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
  {
    id: "warehouse-automation",
    title: "Depo Otomasyon Sistemi",
    description: "AGV ve robot kolları ile tam otomatik depo yönetim sistemi",
    category: "Lojistik Sektörü",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
  },
  {
    id: "cnc-automation",
    title: "CNC Tezgah Otomasyonu",
    description: "Hassas metal işleme için robot destekli CNC tezgah sistemi",
    category: "Metal Sektörü",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
  },
  {
    id: "quality-control",
    title: "Kalite Kontrol Sistemi",
    description: "AI tabanlı görüntü işleme ile otomatik kalite kontrol sistemi",
    category: "Üretim Sektörü",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
];

export default function Portfolio() {
  return (
    <section id="projeler" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projelerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gerçekleştirdiğimiz başarılı robotik otomasyon projeleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-semibold">{project.category}</span>
                  <a href={`/project/${project.id}`} className="text-primary hover:text-primary/80">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/projects">
            <Button className="bg-primary text-white hover:bg-primary/90 font-semibold">
              Tüm Projeleri Görüntüle
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
