import { Check } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "ISO 9001 Sertifikalı",
      description: "Kalite yönetim sistemimiz",
    },
    {
      title: "7/24 Destek",
      description: "Kesintisiz teknik hizmet",
    },
  ];

  return (
    <section id="hakkimizda" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Engineers working on advanced robotics in modern laboratory"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Robotik Teknolojide{" "}
              <span className="text-primary">Öncü</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              2015 yılından beri endüstriyel robotik ve otomasyon alanında faaliyet gösteren firmamız,
              en son teknolojiler kullanarak müşterilerimize özel yazılım çözümleri sunmaktadır.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Uzman ekibimizle birlikte, üretim verimliliğini artıran, maliyetleri düşüren ve
              iş güvenliğini maksimize eden robotik sistemler geliştiriyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
