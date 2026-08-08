import React from "react";
import Image from "next/image";
import { portfolioData } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function SelectedWork() {
  return (
    <section id="projects" className="py-24 px-6 bg-primary-warm border-b border-divider">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <ScrollReveal delay={100}>
              <span className="font-mono text-[9px] uppercase tracking-widest text-forest-green font-semibold mb-2 block">
                02 // Portofolio
              </span>
              <h2 className="font-serif text-3xl font-light tracking-tight text-primary-dark">
                Proyek Pilihan
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <ScrollReveal delay={200}>
              <p className="font-sans text-sm text-secondary-gray max-w-md">
                Kombinasi antara sistem manajemen akademis dengan pembuktian pengujian terukur, solusi digital klien nyata, serta proyek agensi.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-12">
          {portfolioData.projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={100 * (index + 1)}>
              <div 
                className="group relative border border-divider rounded-xs bg-primary-warm transition-all duration-300 hover:scale-[1.01] hover:border-forest-green hover:shadow-xs flex flex-col overflow-hidden"
              >
                {/* 1. Minimal Browser Frame & Screenshot Mockup */}
                <div className="w-full flex flex-col border-b border-divider bg-primary-warm">
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 flex items-center justify-between border-b border-divider bg-primary-warm/50 backdrop-blur-xs select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-secondary-gray/20" />
                      <span className="w-2 h-2 rounded-full bg-secondary-gray/20" />
                      <span className="w-2 h-2 rounded-full bg-forest-green/30" />
                    </div>
                    {/* Fake URL Bar */}
                    <div className="hidden sm:block text-[8px] font-mono text-secondary-gray/50 bg-[#FAFAF9] border border-divider/60 px-6 py-0.5 rounded-xs w-48 text-center truncate">
                      {project.id}.penmot.dev
                    </div>
                    <div className="w-8" /> {/* Spacer */}
                  </div>
                  
                  {/* Image Container with presentation padding */}
                  <div className="relative w-full aspect-[2/1] sm:aspect-[2.2/1] overflow-hidden bg-[#E4E4E0]/15 flex items-center justify-center p-3 sm:p-6 md:p-8">
                    <div className="relative w-full h-full rounded-sm overflow-hidden shadow-xs border border-divider/60 bg-white">
                      <Image
                        src={project.image}
                        alt={`Mockup dari proyek ${project.title}`}
                        fill
                        sizes="(max-w-768px) 100vw, 1200px"
                        priority={index === 0}
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        loading={index === 0 ? undefined : "lazy"}
                      />
                    </div>
                    
                    {/* Hover Tech Overlay (bottom slide-up) */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-[#14171F]/90 backdrop-blur-xs px-6 py-4 flex flex-wrap gap-1.5 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10"
                      aria-label="Teknologi yang digunakan"
                    >
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="font-mono text-[9px] lowercase tracking-wider bg-white/10 text-white/90 px-2 py-0.5 rounded-xs border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Text Details & Metrics */}
                <div className="p-8 sm:p-10 flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8">
                  {/* Left Content Area */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Subtitle */}
                      <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray mb-3 block">
                        {project.subtitle}
                      </span>
                      {/* Title */}
                      <h3 className="font-serif text-2xl font-light text-primary-dark group-hover:text-forest-green transition-colors mb-4">
                        {project.title}
                      </h3>
                      {/* Description */}
                      <p className="font-sans text-sm text-secondary-gray leading-relaxed mb-6 max-w-2xl">
                        {project.description}
                      </p>
                      {/* Highlights */}
                      <ul className="space-y-2 mb-6" aria-label="Poin penting proyek">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-primary-dark">
                            <span className="text-forest-green font-mono mt-0.5" aria-hidden="true">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Right Content Area: Metrics */}
                  {project.metrics && (
                    <div className="flex md:flex-col justify-around md:justify-center md:items-end gap-6 border-t md:border-t-0 md:border-l border-divider pt-6 md:pt-0 md:pl-8 min-w-[150px] w-full md:w-auto">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center md:text-right">
                          <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray block mb-1">
                            {metric.label}
                          </span>
                          <span className="font-serif text-2xl font-semibold text-forest-green">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}

