"use client";

import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";

export default function LanyardStatic() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-6 w-full max-w-sm mx-auto select-none">
      {/* Lanyard Cord Visual */}
      <div className="relative w-full flex flex-col items-center">
        {/* Metal ring/clip */}
        <div className="w-5 h-5 rounded-full border border-divider bg-primary-warm shadow-inner z-10" />
        {/* String/strap hanging down */}
        <div className="w-1.5 h-20 bg-forest-green -mt-1 rounded-b-md shadow-xs z-0" />
        {/* Clip connector */}
        <div className="w-4 h-6 bg-secondary-gray/30 border border-divider -mt-0.5 rounded-sm z-10" />
      </div>

      {/* Card Container with Perspective */}
      <div 
        className="w-56 h-[340px] -mt-1 cursor-pointer perspective-1000 relative group"
        onClick={() => setIsFlipped(!isFlipped)}
        aria-label="Kartu Nama ID. Klik untuk membalik."
      >
        {/* Inner Card Flipper */}
        <div 
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d shadow-md hover:shadow-lg rounded-xl border border-divider bg-primary-warm ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Card Slot hole at top */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-primary-dark rounded-full z-20" />

          {/* FRONT SIDE */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden p-6 flex flex-col justify-between rounded-xl bg-primary-warm overflow-hidden"
          >
            {/* Top Logo / Identifier */}
            <div className="flex items-center justify-between mt-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-forest-green font-bold">
                Penmot Dev
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-green"></span>
              </span>
            </div>

            {/* Profile Avatar / Info */}
            <div className="flex flex-col items-center gap-3 my-auto">
              {/* Monogram Avatar */}
              <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center text-[#FAFAF9] text-xl font-serif font-semibold shadow-xs">
                D
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-base font-normal text-primary-dark tracking-tight leading-snug">
                  {portfolioData.personal.name}
                </h3>
                <p className="font-mono text-[9px] uppercase tracking-wider text-secondary-gray mt-1">
                  Fullstack Developer
                </p>
              </div>
            </div>

            {/* Bottom Footer & Easter Egg QR Code */}
            <div className="flex items-end justify-between pt-3 border-t border-divider">
              <div className="flex flex-col">
                <span className="font-mono text-[7px] lowercase text-secondary-gray">id.no</span>
                <span className="font-mono text-[9px] font-medium text-primary-dark">292-dcw-2026</span>
              </div>
              
              {/* Stylized QR Code (Easter egg) */}
              <div 
                className="w-10 h-10 border border-divider p-0.5 bg-white flex items-center justify-center rounded-xs" 
                title="Sistem Kartu Nama Digital QR Code UMY (Magang)"
              >
                <svg className="w-full h-full text-primary-dark" viewBox="0 0 100 100" aria-hidden="true">
                  <path fill="currentColor" d="M10,10h30v30h-30z M20,20h10v10h-10z M60,10h30v30h-30z M70,20h10v10h-10z M10,60h30v30h-30z M20,70h10v10h-10z M60,60h10v10h-10z M80,60h10v10h-10z M70,70h10v10h-10z M60,80h20v10h-20z M80,80h10v10h-10z" />
                </svg>
              </div>
            </div>
          </div>

          {/* BACK SIDE */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] p-6 flex flex-col justify-between rounded-xl bg-primary-warm overflow-hidden"
          >
            <div className="flex items-center justify-center mt-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-secondary-gray font-semibold">
                Hubungi Pengembang
              </span>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4 my-auto font-sans text-xs">
              <div className="border-b border-divider pb-2.5">
                <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray block mb-1">email</span>
                <a 
                  href={`mailto:${portfolioData.contact.email}`} 
                  className="text-primary-dark hover:text-forest-green transition-colors font-medium break-all" 
                  onClick={(e) => e.stopPropagation()}
                >
                  {portfolioData.contact.email}
                </a>
              </div>
              <div className="border-b border-divider pb-2.5">
                <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray block mb-1">github</span>
                <a 
                  href={`https://${portfolioData.contact.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-dark hover:text-forest-green transition-colors font-medium" 
                  onClick={(e) => e.stopPropagation()}
                >
                  {portfolioData.contact.github}
                </a>
              </div>
              <div>
                <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray block mb-1">linkedin</span>
                <a 
                  href={`https://${portfolioData.contact.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-dark hover:text-forest-green transition-colors font-medium leading-relaxed" 
                  onClick={(e) => e.stopPropagation()}
                >
                  dimas-chandra-winata-softwaredev
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-3 border-t border-divider">
              <span className="font-mono text-[8px] lowercase tracking-wider text-secondary-gray">
                penmot.dev • yogyakarta
              </span>
            </div>
          </div>

        </div>
      </div>
      
      {/* Tap Instruction */}
      <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray mt-4 opacity-50 select-none pointer-events-none">
        Klik kartu untuk membalik
      </span>
    </div>
  );
}
