"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] flex flex-col justify-center py-16 lg:py-24 px-6 bg-primary-warm border-b border-divider"
    >
      {/* 12-column grid to position profile photo side-by-side on desktop */}
      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Area - Text content (Col 7) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          
          {/* Availability Status Bar */}
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-divider rounded-full bg-primary-warm/50 backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-forest-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-green"></span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary-dark font-medium">
                {portfolioData.personal.status}
              </span>
            </div>
          </ScrollReveal>

          {/* Headline Statement */}
          <ScrollReveal delay={200}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-primary-dark max-w-4xl leading-[1.1]">
              Membangun produk digital dari nol — <span className="italic font-normal text-forest-green">untuk bisnis</span> dan <span className="font-normal">untuk pengguna</span>.
            </h1>
          </ScrollReveal>

          {/* Intro Description */}
          <ScrollReveal delay={300}>
            <p className="font-sans text-base sm:text-lg text-secondary-gray max-w-2xl leading-relaxed">
              Halo, saya <span className="text-primary-dark font-medium">{portfolioData.personal.name}</span>. Seorang {portfolioData.personal.title} lulusan {portfolioData.personal.education}. Saya menggabungkan keahlian teknik full-stack dengan insting bisnis untuk membangun solusi web berdampak tinggi lewat <span className="text-primary-dark font-medium underline decoration-forest-green/30 hover:decoration-forest-green decoration-2 underline-offset-4 transition-all">Penmot Dev</span>.
            </p>
          </ScrollReveal>

          {/* CTA Links */}
          <ScrollReveal delay={400}>
            <div className="flex flex-wrap gap-6 items-center mt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3.5 bg-forest-green text-primary-warm font-mono text-[9px] uppercase tracking-widest rounded-xs hover:bg-forest-green/95 transition-all duration-200 active:translate-y-[1px]"
                aria-label="Lihat Proyek Pilihan Dimas"
              >
                Lihat Proyek Pilihan
              </a>
              <a 
                href="#contact" 
                className="font-mono text-[9px] uppercase tracking-widest text-secondary-gray hover:text-primary-dark transition-colors border-b border-divider hover:border-primary-dark pb-1"
                aria-label="Navigasi ke kontak"
              >
                Hubungi Saya
              </a>
            </div>
          </ScrollReveal>
          
        </div>

        {/* Right Area - Profile Photo with Blur & Fade (Col 5) */}
        <div className="lg:col-span-5 flex items-center justify-center w-full min-h-[300px] lg:min-h-[450px]">
          <ScrollReveal delay={350} className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-full">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xs border border-divider/60 bg-[#E4E4E0]/10 shadow-xs">
              {/* Blur & Color-Fade Overlay on the left side */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-28 bg-gradient-to-r from-primary-warm via-primary-warm/70 to-transparent backdrop-blur-[3px] pointer-events-none z-10" />
              
              <Image
                src="/dimas-profile.jpg"
                alt="Foto Profil Dimas Chandra Winata"
                fill
                priority
                sizes="(max-w-768px) 100vw, 450px"
                className="object-cover object-center"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 4%, rgba(0,0,0,0.9) 20%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 4%, rgba(0,0,0,0.9) 20%, black 100%)",
                }}
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
