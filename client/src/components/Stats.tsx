const stats = [
  { value: "150+", label: "Tamamlanan Proje" },
  { value: "50+", label: "Mutlu Müşteri" },
  { value: "8+", label: "Yıllık Deneyim" },
  { value: "24/7", label: "Teknik Destek" },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
