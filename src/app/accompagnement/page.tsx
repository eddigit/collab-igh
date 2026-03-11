"use client";

import AnimatedSection from "@/components/AnimatedSection";
import FooterSection from "@/components/FooterSection";
import {
  accompagnementIntro,
  formationIntro,
  formationFlorenceCapacites,
  formationPresentielle,
  assistanceHumaine,
  refonteSite,
  infogerance,
} from "@/data/accompagnement";
import { SitePreviewSection } from "@/components/SitePreviewBanner";
import {
  GraduationCap,
  Users,
  HeadphonesIcon,
  Globe,
  Server,
  Check,
  Gift,
  ArrowRight,
  Quote,
  ExternalLink,
} from "lucide-react";

// ═══════════════════════════════
// PAGE
// ═══════════════════════════════

export default function AccompagnementPage() {
  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              Accompagnement & Formation
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {accompagnementIntro.titre}
            </h1>
            <p className="text-foreground-muted text-lg leading-relaxed max-w-3xl mx-auto">
              {accompagnementIntro.sousTitre}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Formation par Florence ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-7 h-7 text-accent-blue" />
              <h2 className="text-2xl md:text-3xl font-bold">
                {formationIntro.titre}
              </h2>
            </div>
            <p className="text-foreground-muted text-[15px] leading-relaxed mb-10 max-w-3xl">
              {formationIntro.description}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formationFlorenceCapacites.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="h-full p-5 rounded-2xl bg-background border border-white/5">
                  <span className="text-2xl block mb-3">{item.emoji}</span>
                  <h3 className="font-semibold text-base mb-2">{item.titre}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Quote */}
          <AnimatedSection delay={0.4}>
            <div className="mt-10 relative pl-6 md:pl-8 border-l-4 border-accent-blue/50 py-2 max-w-3xl">
              <Quote className="absolute -left-3 -top-1 w-6 h-6 text-accent-blue/30" />
              <p className="text-base md:text-lg font-light leading-relaxed text-foreground/90 italic">
                Florence n&apos;est pas un logiciel qu&apos;il faut apprendre. C&apos;est une collègue qui vous apprend.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Formation présentielle ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-7 h-7 text-accent-green" />
              <h2 className="text-2xl md:text-3xl font-bold">
                {formationPresentielle.titre}
              </h2>
            </div>
            <p className="text-foreground-muted text-[15px] leading-relaxed mb-8 max-w-3xl">
              {formationPresentielle.description}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {formationPresentielle.sessions.map((session, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="h-full p-6 rounded-2xl bg-background-alt border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-accent-blue">
                      {session.groupe}
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue font-medium">
                      {session.participants}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {session.contenu.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <ArrowRight className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <p className="text-sm text-accent-green font-medium">
              {formationPresentielle.note}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Assistance humaine ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <HeadphonesIcon className="w-7 h-7 text-accent-blue" />
              <h2 className="text-2xl md:text-3xl font-bold">
                {assistanceHumaine.titre}
              </h2>
            </div>
            <p className="text-foreground-muted text-[15px] leading-relaxed mb-10 max-w-3xl">
              {assistanceHumaine.description}
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {assistanceHumaine.niveaux.map((n, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-background border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-3xl">{n.emoji}</span>
                      <div>
                        <h3 className="font-bold text-base">{n.niveau}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent-green/10 text-accent-green font-medium">
                          {n.disponibilite}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed sm:border-l sm:border-white/10 sm:pl-4">
                      {n.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Refonte site internet ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-7 h-7 text-accent-green" />
              <h2 className="text-2xl md:text-3xl font-bold">
                {refonteSite.titre}
              </h2>
            </div>
            <p className="text-lg font-medium text-accent-green mb-4">
              {refonteSite.sousTitre}
            </p>
            <p className="text-foreground-muted text-[15px] leading-relaxed mb-10 max-w-3xl">
              {refonteSite.description}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {refonteSite.avantages.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="h-full p-5 rounded-2xl bg-background-alt border border-white/5">
                  <span className="text-2xl block mb-3">{a.emoji}</span>
                  <h3 className="font-semibold text-base mb-2">{a.titre}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Condition importante — highlight */}
          <AnimatedSection delay={0.4}>
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent-green/5 to-accent-blue/5 border border-accent-green/20">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-accent-green" />
                <p className="text-xs font-semibold text-accent-green uppercase tracking-wider">
                  Tarif préférentiel projet Florence
                </p>
              </div>
              <p className="text-[15px] text-foreground/90 leading-relaxed mb-4">
                {refonteSite.conditionImportante}
              </p>
              <a
                href="https://igh-2026.preview.emergentagent.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-green text-white rounded-full text-sm font-semibold hover:bg-accent-green/90 transition-colors"
              >
                Voir l&apos;aperçu du nouveau site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Aperçu du nouveau site ── */}
      <SitePreviewSection />

      {/* ── Infogérance ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-7 h-7 text-accent-blue" />
              <h2 className="text-2xl md:text-3xl font-bold">
                {infogerance.titre}
              </h2>
            </div>
            <p className="text-foreground-muted text-[15px] leading-relaxed mb-8 max-w-3xl">
              {infogerance.description}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {infogerance.items.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="h-full p-5 rounded-2xl bg-background border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="font-semibold text-sm">{item.titre}</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Résumé engagement ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent-blue/10 to-accent-green/10 border border-white/10 text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                Tout est inclus dans votre abonnement
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-left max-w-3xl mx-auto">
                {[
                  "Florence 24/7 — IA dédiée",
                  "Formation continue des directeurs par Florence IA",
                  "Maintenance et cohérence fonctionnelle de l'ensemble de la solution",
                  "Assistance bureautique & outils",
                  "Assistance humaine (Léa + Gilles)",
                  "Infogérance & hébergement France",
                  "Mises à jour & évolutions",
                  "Support WhatsApp",
                  "Formation présentielle initiale",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tarif horaire complémentaire */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-foreground/80">
                  Besoin digital spécifique hors périmètre Florence ?{" "}
                  <span className="font-semibold text-accent-blue">90€ HT/h</span>{" "}
                  <span className="text-foreground-muted">(tarif préférentiel IGH)</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
