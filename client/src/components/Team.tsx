import { Linkedin, Twitter } from "lucide-react";
import type { TeamMember } from "@shared/schema";

const teamMembers: TeamMember[] = [
  {
    id: "ahmet-yilmaz",
    name: "Ahmet Yılmaz",
    position: "Kıdemli Robot Mühendisi",
    experience: "12 yıl deneyim",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "zeynep-kaya",
    name: "Zeynep Kaya",
    position: "Otomasyon Yazılım Uzmanı",
    experience: "9 yıl deneyim",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "mehmet-demir",
    name: "Mehmet Demir",
    position: "AI & Görüntü İşleme Uzmanı",
    experience: "8 yıl deneyim",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "fatma-ozturk",
    name: "Fatma Öztürk",
    position: "Proje Yöneticisi",
    experience: "10 yıl deneyim",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    linkedin: "#",
    twitter: "#",
  },
];

export default function Team() {
  return (
    <section id="ekip" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Uzman Ekibimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alanında uzman mühendisler ve teknik personelimizle birlikte çalışıyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="card-hover text-center">
              <img
                src={member.image}
                alt={`${member.name} - ${member.position}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-2">{member.position}</p>
              <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
              <div className="flex justify-center space-x-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
