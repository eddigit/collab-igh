"use client";

import AnimatedSection from "./AnimatedSection";
import { deploiement } from "@/data/igh";
import { CheckCircle2 } from "lucide-react";

export default function DeploiementSection() {
  return (
    <section id="deploiement" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-accent-green">Déploiement</span> — Phase 3
          </h2>
          <p className="text-center text-foreground-muted text-lg mb-16">
            Du pilote au groupe entier
          </p>
        </AnimatedSection>

        <div className="max-w-lg mx-auto space-y-6">
          {deploiement.map((etape, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-background-alt border border-white/5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-green/10 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accent-green" />
                </div>
                <p className="text-lg">{etape}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
