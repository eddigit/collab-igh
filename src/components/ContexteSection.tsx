"use client";

import AnimatedSection from "./AnimatedSection";
import CounterAnimation from "./CounterAnimation";
import { contexte } from "@/data/igh";
import { Building2, MapPin } from "lucide-react";

export default function ContexteSection() {
  return (
    <section id="contexte" className="py-24 px-6 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Le groupe <span className="text-accent-blue">IGH</span>
          </h2>
          <p className="text-center text-foreground-muted text-lg max-w-2xl mx-auto mb-4">
            {contexte.description}
          </p>
          <p className="text-center text-foreground-muted text-base flex items-center justify-center gap-2 mb-16">
            <MapPin className="w-4 h-4 text-accent-blue" />
            {contexte.siege}
          </p>
        </AnimatedSection>

        {/* Chiffres clés */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {contexte.chiffres.map((chiffre, i) => (
            <AnimatedSection key={chiffre.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-background border border-white/5 pulse-glow">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent-blue mb-2">
                  <CounterAnimation
                    value={chiffre.value}
                    prefix={chiffre.prefix || ""}
                  />
                </div>
                <div className="text-foreground-muted text-sm sm:text-base">
                  {chiffre.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Établissements breakdown */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3 bg-background px-6 py-4 rounded-xl border border-white/5">
              <Building2 className="w-8 h-8 text-accent-blue" />
              <div>
                <div className="text-2xl font-bold">{contexte.etablissements.ehpad}</div>
                <div className="text-foreground-muted text-sm">EHPAD</div>
              </div>
            </div>
            <div className="text-3xl font-light text-foreground-muted">+</div>
            <div className="flex items-center gap-3 bg-background px-6 py-4 rounded-xl border border-white/5">
              <Building2 className="w-8 h-8 text-accent-green" />
              <div>
                <div className="text-2xl font-bold">{contexte.etablissements.cliniques}</div>
                <div className="text-foreground-muted text-sm">Cliniques</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
