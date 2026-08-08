import React from "react";
import { portfolioData } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-primary-warm">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Section Info */}
          <div className="lg:col-span-4">
            <ScrollReveal delay={100}>
              <span className="font-mono text-[9px] uppercase tracking-widest text-forest-green font-semibold mb-2 block">
                06 // Kolaborasi
              </span>
              <h2 className="font-serif text-3xl font-light tracking-tight text-primary-dark">
                Kontak
              </h2>
            </ScrollReveal>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <ScrollReveal delay={200}>
              <p className="font-serif text-2xl sm:text-3xl font-light leading-snug text-primary-dark max-w-xl">
                Mari diskusikan ide produk digital Anda, peluang karir, atau kebutuhan proyek di <span className="italic text-forest-green font-normal">Penmot Dev</span>.
              </p>
            </ScrollReveal>

            {/* CTA and Links */}
            <ScrollReveal delay={300}>
              <div className="flex flex-col gap-6 items-start">
                <a 
                  href={`mailto:${portfolioData.contact.email}`}
                  className="group inline-flex items-center gap-4 border border-forest-green bg-forest-green text-primary-warm px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-forest-green/90 transition-all duration-200 rounded-xs shadow-xs active:translate-y-[1px]"
                  aria-label="Kirim email langsung ke Dimas"
                >
                  <span>Kirim Email</span>
                  <span className="font-sans group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </a>
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-lg border-t border-divider pt-8">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray block mb-2">
                      Surel Resmi
                    </span>
                    <a 
                      href={`mailto:${portfolioData.contact.email}`}
                      className="font-sans text-sm text-primary-dark hover:text-forest-green transition-colors font-medium border-b border-transparent hover:border-forest-green/50 pb-0.5"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray block mb-2">
                      Jejaring Sosial
                    </span>
                    <div className="flex flex-col gap-2">
                      <a 
                        href={`https://${portfolioData.contact.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-primary-dark hover:text-forest-green transition-colors font-medium border-b border-transparent hover:border-forest-green/50 pb-0.5 self-start"
                      >
                        GitHub
                      </a>
                      <a 
                        href={`https://${portfolioData.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-primary-dark hover:text-forest-green transition-colors font-medium border-b border-transparent hover:border-forest-green/50 pb-0.5 self-start"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
