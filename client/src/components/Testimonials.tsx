import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

const testimonials: Testimonial[] = [
  {
    id: "ali-ozkan",
    name: "Ali Özkan",
    position: "Genel Müdür",
    company: "OtoSan A.Ş.",
    content: "RoboTech ekibi ile çalışmak harika bir deneyimdi. Üretim hattımızı %40 daha verimli hale getirdiler ve proje zamanında teslim edildi.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
    rating: 5,
  },
  {
    id: "ayse-yildiz",
    name: "Ayşe Yıldız",
    position: "Kalite Müdürü",
    company: "FoodTech Ltd.",
    content: "Kalite kontrol sistemimizi tamamen yenilediler. Artık %99.9 doğrulukla ürün kontrolü yapabiliyoruz. Muhteşem bir çalışma!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
    rating: 5,
  },
  {
    id: "mustafa-kara",
    name: "Mustafa Kara",
    position: "Operasyon Müdürü",
    company: "LogiFlow",
    content: "Depo otomasyon sistemimiz sayesinde lojistik maliyetlerimizi %35 düşürdük. Teknik destek ekibi de çok başarılı.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşteri Görüşleri</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Çalıştığımız firmalardan gelen başarı hikayeleri ve değerlendirmeler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
