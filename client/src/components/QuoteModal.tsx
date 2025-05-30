import { useState, useEffect } from "react";
import { X, Phone, Mail, Building, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { type InsertContact } from "@shared/schema";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<InsertContact>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: preselectedService || "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Sayfayı en üste scroll et
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Teklifiniz gönderilmiştir!",
        description: "Talebiniz başarıyla alındı. En kısa sürede size dönüş yapacağız.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
      onClose();
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Hata!",
        description: "Teklif talebiniz gönderilemedi. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertContact, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[999] bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl max-h-[calc(100vh-2rem)] overflow-y-auto">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white rounded-t-2xl">
            <h2 className="text-2xl font-bold text-gray-900">Hızlı Teklif Talebi</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-1" />
                  Ad
                </label>
                <Input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Adınız"
                  className="w-full text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-1" />
                  Soyad
                </label>
                <Input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Soyadınız"
                  className="w-full text-gray-900"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building className="h-4 w-4 inline mr-1" />
                Şirket
              </label>
              <Input
                type="text"
                required
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Şirket adı"
                className="w-full text-gray-900"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-1" />
                  E-posta
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="email@example.com"
                  className="w-full text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-1" />
                  Telefon
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+90 555 123 45 67"
                  className="w-full text-gray-900"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hizmet Türü
              </label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Hizmet seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="endüstriyel-otomasyon">Endüstriyel Otomasyon</SelectItem>
                  <SelectItem value="robot-yazılımı">Robot Yazılımı</SelectItem>
                  <SelectItem value="ai-görüntü-işleme">AI & Görüntü İşleme</SelectItem>
                  <SelectItem value="özel-robot-tasarımı">Özel Robot Tasarımı</SelectItem>
                  <SelectItem value="iot-entegrasyon">IoT Entegrasyon</SelectItem>
                  <SelectItem value="kalite-kontrol">Kalite Kontrol Sistemleri</SelectItem>
                  <SelectItem value="diğer">Diğer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Proje Detayları
              </label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Projenizin detaylarını, ihtiyaçlarınızı ve beklentilerinizi açıklayın..."
                className="w-full h-24 resize-none text-gray-900"
              />
            </div>

            <div className="flex gap-3 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6"
              >
                İptal
              </Button>
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="flex-1 bg-green-600 text-white hover:bg-green-700 font-semibold"
              >
                {contactMutation.isPending ? "Gönderiliyor..." : "Teklif Al"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}