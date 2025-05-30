import { Bot, Cog, Eye, TrendingUp, Wrench, GraduationCap, ArrowRight } from "lucide-react";
import type { Service } from "@shared/schema";

const services: Service[] = [
  {
    id: "robot-programming",
    icon: "Bot",
    title: "Robot Programlama",
    description: "Endüstriyel robotlar için özel programlama ve kontrol sistemleri geliştiriyoruz.",
  },
  {
    id: "automation",
    icon: "Cog",
    title: "Otomasyon Sistemleri",
    description: "PLC tabanlı otomasyon ve SCADA sistemleri ile üretim süreçlerinizi optimize ediyoruz.",
  },
  {
    id: "vision",
    icon: "Eye",
    title: "Görüntü İşleme",
    description: "AI destekli görüntü işleme teknolojileri ile kalite kontrol sistemleri geliştiriyoruz.",
  },
  {
    id: "data-analysis",
    icon: "TrendingUp",
    title: "Veri Analizi",
    description: "Üretim verilerinizi analiz ederek performans optimizasyonu sağlıyoruz.",
  },
  {
    id: "maintenance",
    icon: "Wrench",
    title: "Bakım & Destek",
    description: "Sistemlerinizin sürekli çalışması için profesyonel bakım ve destek hizmeti veriyoruz.",
  },
  {
    id: "training",
    icon: "GraduationCap",
    title: "Eğitim & Danışmanlık",
    description: "Ekiplerinizi robotik teknolojiler konusunda eğitiyor ve danışmanlık veriyoruz.",
  },
];

const getIcon = (iconName: string) => {
  const icons = {
    Bot: Bot,
    Cog: Cog,
    Eye: Eye,
    TrendingUp: TrendingUp,
    Wrench: Wrench,
    GraduationCap: GraduationCap,
  };
  const IconComponent = icons[iconName as keyof typeof icons] || Bot;
  return <IconComponent className="text-primary text-2xl" />;
};

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Endüstriyel otomasyon ve robotik sistemler için kapsamlı yazılım çözümleri sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <a 
                href={`/service/${service.id}`}
                className="text-primary font-semibold hover:text-primary/80 inline-flex items-center transition-colors"
              >
                Detayları Gör <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
