"use client";

import AnimatedSection from "./AnimatedSection";
import { timeline } from "@/data/igh";
import { Users, Calendar, Wrench, Rocket } from "lucide-react";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Comment ça se <span className="text-accent-blue">passe</span>
          </h2>
          <p className="text-center text-foreground-muted text-lg mb-16">
            12 jours pour un collaborateur opérationnel.
          </p>
        </AnimatedSection>

        {/* Équipe */}
        <AnimatedSection>
          <div className="mb-16 p-6 md:p-8 rounded-2xl bg-background-alt border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-accent-blue" />
              <h3 className="text-xl font-bold">Jour 0 — L&apos;équipe de démarrage</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {timeline.equipe.map((membre, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-background/50"
                >
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm font-bold flex-shrink-0">
                    {membre.nom.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{membre.nom}</div>
                    <div className="text-foreground-muted text-xs">{membre.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-foreground-muted text-sm italic">
              Groupe WhatsApp créé. Le collaborateur se présente, fait connaissance. Il écoute, retient, commence à comprendre.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline verticale */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-blue/50 to-accent-green" />

          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8 pl-12 md:pl-20">
              <Calendar className="w-5 h-5 text-accent-blue" />
              <h3 className="text-xl font-bold">Jours 1–4 — Audit terrain</h3>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {timeline.jours.map((jour, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative flex items-start gap-4 md:gap-6 pl-0">
                  {/* Dot */}
                  <div className="relative z-10 w-8 md:w-16 flex justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-accent-blue ring-4 ring-background mt-1.5" />
                  </div>

                  <div className="flex-1 p-5 rounded-2xl bg-background-alt border border-white/5 -mt-1">
                    <div className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-1">
                      {jour.jour}
                    </div>
                    <h4 className="font-semibold mb-3">{jour.titre}</h4>
                    <ul className="space-y-2">
                      {jour.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2 text-foreground-muted text-sm">
                          <span className="text-accent-blue mt-1">→</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Atelier */}
            <AnimatedSection delay={0.4}>
              <div className="relative flex items-start gap-4 md:gap-6 pl-0">
                <div className="relative z-10 w-8 md:w-16 flex justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-accent-blue/60 ring-4 ring-background mt-1.5" />
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-background-alt border border-white/5 border-dashed -mt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench className="w-4 h-4 text-accent-blue" />
                    <span className="text-sm font-semibold">+{timeline.atelierJours} jours atelier</span>
                  </div>
                  <p className="text-foreground-muted text-sm">
                    Pour chaque jour terrain&nbsp;: 1 jour d&apos;analyse + 1 jour de construction. Structurer, alimenter le cerveau, créer la mémoire, configurer les connaissances.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Résultat */}
            <AnimatedSection delay={0.5}>
              <div className="relative flex items-start gap-4 md:gap-6 pl-0">
                <div className="relative z-10 w-8 md:w-16 flex justify-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-accent-green ring-4 ring-background mt-1" />
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-accent-green/5 border border-accent-green/20 -mt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="w-5 h-5 text-accent-green" />
                    <span className="text-lg font-bold text-accent-green">
                      Résultat&nbsp;: {timeline.totalJours} jours
                    </span>
                  </div>
                  <p className="text-foreground/90 text-[15px]">
                    Pas un prototype. Un collaborateur qui connaît votre groupe, qui a raisonné sur vos problèmes, prêt à travailler.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
