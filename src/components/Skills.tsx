import React from "react";
import { portfolioData } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-primary-warm border-b border-divider">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Section Label */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <ScrollReveal delay={100}>
            <span className="font-mono text-[9px] uppercase tracking-widest text-forest-green font-semibold mb-2 block">
              04 // Perkakas
            </span>
            <h2 className="font-serif text-3xl font-light tracking-tight text-primary-dark">
              Keahlian
            </h2>
          </ScrollReveal>
        </div>

        {/* Right Column - Grouped Skills */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {portfolioData.skills.map((skillGroup, index) => (
            <ScrollReveal key={skillGroup.category} delay={100 * (index + 1)}>
              <div>
                {/* Category Heading in technical, lowercase, tracked monospace format */}
                <h3 className="font-mono text-[9px] lowercase tracking-widest text-primary-dark font-medium mb-4 border-b border-divider pb-2">
                  {skillGroup.category.toLowerCase()}
                </h3>
                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2" aria-label={`Daftar keahlian ${skillGroup.category}`}>
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="font-mono text-[10px] lowercase tracking-wider border border-divider px-3 py-1.5 rounded-xs text-primary-dark hover:border-forest-green hover:text-forest-green transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
