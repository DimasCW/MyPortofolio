import React from "react";
import { portfolioData } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-primary-warm border-b border-divider">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Section Label & Photo */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6">
          <ScrollReveal delay={100}>
            <span className="font-mono text-[9px] uppercase tracking-widest text-forest-green font-semibold mb-2 block">
              01 // Profil
            </span>
            <h2 className="font-serif text-3xl font-light tracking-tight text-primary-dark mb-6">
              Tentang Dimas
            </h2>
            
            {/* Profile Photo Frame */}
            <div className="relative w-full max-w-[280px] aspect-[2/3] border border-divider/60 rounded-xs bg-[#E4E4E0]/20 overflow-hidden shadow-xs">
              <img
                src="/dimas-profile-v3.jpg"
                alt="Foto Profil Dimas Chandra Winata"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column - Text Content */}
        <div className="lg:col-span-8 flex flex-col gap-6 text-secondary-gray leading-relaxed text-base sm:text-[17px]">
          <ScrollReveal delay={200}>
            <p>
              Perjalanan saya di dunia teknologi informasi berpusat pada satu keyakinan: perangkat lunak terbaik tidak hanya dibangun dengan kode yang bersih, melainkan dengan pemahaman mendalam tentang kebutuhan bisnis pengguna. Sebagai lulusan baru Teknologi Informasi dari <span className="text-primary-dark font-medium">Universitas Muhammadiyah Yogyakarta (UMY)</span>, saya telah membekali diri dengan dasar-dasar rekayasa perangkat lunak terstruktur.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p>
              Dengan bekal tersebut, saya mendirikan <span className="text-primary-dark font-medium">Penmot Dev</span>. Menjalankan agensi pengembangan web independen mengajarkan saya sisi non-teknis yang krusial—mulai dari akuisisi klien, menyusun kesepakatan nilai (negotiation), hingga mendeploy sistem operasional yang langsung digunakan oleh pelaku UMKM dan korporat. Dari 15 proyek klien yang selesai dibangun, saya mengasah insting bisnis sekaligus menyempurnakan alur full-stack engineering saya.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-divider mt-4">
              <div>
                <h3 className="font-mono text-[9px] uppercase tracking-widest text-primary-dark font-semibold mb-2">
                  Teknikal &amp; Presisi
                </h3>
                <p className="font-sans text-sm text-secondary-gray leading-relaxed">
                  Spesialisasi di ekosistem modern JavaScript/TypeScript (Next.js, React.js) dan PHP (Laravel). Menggunakan Prisma ORM &amp; database relasional untuk menjaga integritas data yang kokoh.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[9px] uppercase tracking-widest text-primary-dark font-semibold mb-2">
                  Komunikasi &amp; Bisnis
                </h3>
                <p className="font-sans text-sm text-secondary-gray leading-relaxed">
                  Menjembatani kode dengan realitas operasional bisnis. Terbiasa memimpin presentasi teknis, mendefinisikan lingkup pengerjaan proyek (scope definition), serta mengelola alur rilis aplikasi.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
      </div>
    </section>
  );
}
