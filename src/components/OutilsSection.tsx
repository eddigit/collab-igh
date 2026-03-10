"use client";

import AnimatedSection from "./AnimatedSection";
import { outils } from "@/data/igh";
import { Database, Mail, Route, FileText } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Database,
  Mail,
  Route,
  FileText,
};

export default function OutilsSection() {
  return (
    <section id="outils" className="py-24 px-6 bg-background-alt">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Connexion aux <span className="text-accent-blue">outils</span>
          </h2>
          <p className="text-center text-foreground-muted text-lg mb-4">
            Phase 2 — Le collaborateur se connecte à vos systèmes
          </p>
          <p className="text-center text-foreground-muted text-sm max-w-2xl mx-auto mb-16">
            Chaque connexion est un pont automatique entre le collaborateur et un logiciel existant. Aucune saisie manuelle.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {outils.map((outil, i) => {
            const Icon = iconMap[outil.icon] || Database;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-white/5 hover:border-accent-blue/20 transition-colors">
                  <div className="p-3 rounded-xl bg-accent-blue/10">
                    <Icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{outil.nom}</h3>
                    <p className="text-foreground-muted text-sm">{outil.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
