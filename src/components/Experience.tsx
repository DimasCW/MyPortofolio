import React from "react";
import { portfolioData } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-primary-warm border-b border-divider">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Section Label */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <ScrollReveal delay={100}>
            <span className="font-mono text-[9px] uppercase tracking-widest text-forest-green font-semibold mb-2 block">
              03 // Riwayat
            </span>
            <h2 className="font-serif text-3xl font-light tracking-tight text-primary-dark">
              Pengalaman
            </h2>
          </ScrollReveal>
        </div>

        {/* Right Column - Compact Timeline */}
        <div className="lg:col-span-8 flex flex-col gap-12 relative pl-6 border-l border-divider ml-2">
          {portfolioData.experience.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={100 * (index + 1)} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[31px] top-1.5 h-2 w-2 rounded-full border border-forest-green bg-primary-warm" aria-hidden="true"></span>
              
              {/* Time period */}
              <span className="font-mono text-[8px] uppercase tracking-widest text-forest-green font-semibold mb-1 block">
                {exp.period}
              </span>
              
              {/* Job Title & Company */}
              <h3 className="font-serif text-xl font-normal text-primary-dark mb-3">
                {exp.role} <span className="font-sans text-sm font-light text-secondary-gray">di</span> <span className="font-sans text-sm font-medium text-primary-dark">{exp.company}</span>
              </h3>
              
              {/* Description */}
              <p className="font-sans text-sm text-secondary-gray leading-relaxed mb-4 max-w-xl">
                {exp.description}
              </p>

              {/* Bullet details */}
              {exp.bullets && (
                <ul className="space-y-2 list-none" aria-label={`Detail pencapaian di ${exp.company}`}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="font-sans text-xs text-secondary-gray flex items-start gap-2">
                      <span className="text-forest-green font-mono mt-0.5" aria-hidden="true">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
