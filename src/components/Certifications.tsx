"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { portfolioData, Certification } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard accessibility and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-24 px-6 bg-primary-warm border-b border-divider">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Section Label */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <ScrollReveal delay={100}>
            <span className="font-mono text-[9px] uppercase tracking-widest text-forest-green font-semibold mb-2 block">
              05 // Pengakuan
            </span>
            <h2 className="font-serif text-3xl font-light tracking-tight text-primary-dark">
              Sertifikasi
            </h2>
          </ScrollReveal>
        </div>

        {/* Right Column - Visual Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <ScrollReveal key={cert.id} delay={100 * (index + 1)}>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="group flex flex-col w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-4"
                  aria-haspopup="dialog"
                  aria-label={`Lihat detail sertifikat ${cert.title}`}
                >
                  {/* Thumbnail Container */}
                  <div className="relative w-full aspect-[4/3] border border-divider rounded-xs bg-[#E4E4E0]/20 overflow-hidden mb-3 transition-colors group-hover:border-forest-green">
                    <Image
                      src={cert.image}
                      alt={`Sertifikat ${cert.title}`}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1024px) 33vw, 250px"
                      className="object-contain p-3 bg-white transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#14171F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white bg-forest-green px-3 py-1.5 rounded-xs shadow-xs">
                        Tampilkan
                      </span>
                    </div>
                  </div>
                  
                  {/* Caption details */}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-sm font-medium text-primary-dark group-hover:text-forest-green transition-colors leading-tight line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-[9px] lowercase tracking-wider text-secondary-gray">
                      {cert.issuer.toLowerCase()} • {cert.year}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
      </div>

      {/* Lightbox Dialog Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10120F]/80 backdrop-blur-xs transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[85vh] flex flex-col items-center gap-4 bg-primary-warm p-5 sm:p-6 rounded-xs border border-divider shadow-lg animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full border border-divider bg-primary-warm flex items-center justify-center text-secondary-gray hover:text-primary-dark hover:border-primary-dark transition-all duration-200"
              aria-label="Tutup sertifikat"
            >
              <span className="font-sans text-lg leading-none" aria-hidden="true">&times;</span>
            </button>

            {/* Modal Image Box (4:3 aspect is standard for credentials certificates) */}
            <div className="relative w-full flex-1 min-h-[40vh] max-h-[60vh] aspect-[4/3] bg-[#E4E4E0]/10 rounded-xs overflow-hidden">
              <Image
                src={selectedCert.image}
                alt={`Tampilan penuh sertifikat ${selectedCert.title}`}
                fill
                sizes="(max-w-768px) 100vw, 600px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Caption Info */}
            <div className="text-center w-full px-4 mt-2">
              <h3 id="modal-title" className="font-serif text-base sm:text-lg text-primary-dark leading-snug">
                {selectedCert.title}
              </h3>
              <p className="font-mono text-[9px] lowercase tracking-widest text-secondary-gray mt-1">
                {selectedCert.issuer.toLowerCase()} • {selectedCert.year}
              </p>
              {selectedCert.highlight && (
                <p className="font-sans text-xs text-forest-green mt-2 font-medium">
                  {selectedCert.highlight}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

