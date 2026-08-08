import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#10120F] text-[#FAFAF9] py-16 border-t border-[#1C201A]">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <h2 className="font-serif text-2xl font-light mb-4">Dimas Chandra Winata</h2>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#FAFAF9]/60 max-w-md leading-relaxed">
            Membangun produk digital premium &amp; solusi operasional berorientasi hasil.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <p className="font-mono text-[9px] uppercase tracking-widest text-[#FAFAF9]/40">
            Hubungi Mandiri
          </p>
          <a 
            href={`mailto:${portfolioData.contact.email}`} 
            className="font-sans text-sm text-[#FAFAF9] hover:text-white/80 transition-colors border-b border-transparent hover:border-white/50 pb-0.5"
            aria-label="Kirim email ke Dimas"
          >
            {portfolioData.contact.email}
          </a>
          <div className="flex gap-4 mt-2">
            <a 
              href={`https://${portfolioData.contact.github}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-[10px] uppercase tracking-widest text-[#FAFAF9]/60 hover:text-[#FAFAF9] transition-colors"
              aria-label="Dimas di GitHub"
            >
              GitHub
            </a>
            <a 
              href={`https://${portfolioData.contact.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-[10px] uppercase tracking-widest text-[#FAFAF9]/60 hover:text-[#FAFAF9] transition-colors"
              aria-label="Dimas di LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start justify-between gap-4">
        <p className="font-sans text-xs text-[#FAFAF9]/40">
          &copy; {currentYear} {portfolioData.personal.name}. Hak Cipta Dilindungi.
        </p>
        <p className="font-sans text-xs text-[#FAFAF9]/40 flex items-center gap-1">
          <span>Didesain &amp; dibangun dengan</span>
          <span className="font-mono text-[9px] text-[#FAFAF9]/60">Next.js &amp; Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
