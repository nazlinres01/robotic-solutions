import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<InsertContact>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Başarılı!",
        description: "İletişim formu başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setPrivacyAccepted(false);
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Hata!",
        description: "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      toast({
        title: "Uyarı!",
        description: "Kişisel verilerin korunması kapsamında onay vermeniz gerekmektedir.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertContact, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+90 212 555 0123", "+90 532 123 4567"],
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["info@robotech.com.tr", "destek@robotech.com.tr"],
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["Teknokent Mah. Robot Cad.", "No:15 34906 İstanbul"],
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cuma", "09:00 - 18:00"],
    },
  ];

  return (
    <section id="iletisim" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişime Geçin</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Robotik yazılım ihtiyaçlarınız için bizimle iletişime geçin, size en uygun çözümü birlikte bulalım
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hızlı İletişim</h3>
              <p className="text-gray-600 mb-4">
                Acil durumlarda 7/24 teknik destek hattımızı arayabilirsiniz.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90 font-semibold">
                <Headphones className="mr-2 h-4 w-4" />
                7/24 Destek Hattı
              </Button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proje Talebi Gönderin</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ad
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Soyad
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Firma
                </label>
                <Input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-posta
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Hizmet Türü
                </label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seçiniz..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="robot-programming">Robot Programlama</SelectItem>
                    <SelectItem value="automation">Otomasyon Sistemleri</SelectItem>
                    <SelectItem value="vision">Görüntü İşleme</SelectItem>
                    <SelectItem value="data-analysis">Veri Analizi</SelectItem>
                    <SelectItem value="maintenance">Bakım & Destek</SelectItem>
                    <SelectItem value="training">Eğitim & Danışmanlık</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Proje Detayları
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Projeniz hakkında detaylı bilgi verin..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  <span className="font-semibold">Kişisel Verilerin Korunması</span> kapsamında bilgilerimin işlenmesini kabul ediyorum.
                </label>
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-white hover:bg-primary/90 font-semibold text-lg py-4"
              >
                {contactMutation.isPending ? "Gönderiliyor..." : "Proje Talebini Gönder"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
