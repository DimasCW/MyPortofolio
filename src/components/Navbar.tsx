"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "skills", "certifications", "contact"];
      
      // Hero section is default active when at the top
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const scrollPosition = window.scrollY + 200; // Offset for better timing

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Tentang", href: "#about", id: "about" },
    { label: "Proyek", href: "#projects", id: "projects" },
    { label: "Pengalaman", href: "#experience", id: "experience" },
    { label: "Keahlian", href: "#skills", id: "skills" },
    { label: "Sertifikasi", href: "#certifications", id: "certifications" },
    { label: "Kontak", href: "#contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-divider bg-primary-warm/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a 
          href="#home" 
          className="font-serif text-lg font-medium tracking-tight text-primary-dark hover:text-forest-green transition-colors"
          aria-label="Dimas Chandra Winata Home"
        >
          Dimas C.W.
        </a>
        
        {/* Navigation list */}
        <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-200 py-1 border-b ${
                activeSection === item.id 
                  ? "text-forest-green border-forest-green" 
                  : "text-secondary-gray border-transparent hover:text-primary-dark"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Small business link badge */}
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-green"></span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-forest-green font-semibold">
            Penmot Dev
          </span>
        </div>
      </div>
    </header>
  );
}
