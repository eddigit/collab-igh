"use client";

import AnimatedSection from "@/components/AnimatedSection";
import FooterSection from "@/components/FooterSection";
import { SitePreviewSection } from "@/components/SitePreviewBanner";
import { argumentaireIntro, soncasSections } from "@/data/igh";
import type { SoncasSection } from "@/data/igh";
import { ArrowRight } from "lucide-react";

function SoncasTable({ section, index }: { section: SoncasSection; index: number }) {
  // For section 5 (chiffres), use "L'impact financier" as last column header
  const isChiffres = section.id === 5;
  const lastColHeader = isChiffres ? "L'impact financier" : "La preuve";

  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="mb-16">
        {/* Section title */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{section.emoji}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-accent-blue">
            {section.titre}
          </h3>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block rounded-2xl overflow-hidden border border-white/5 mb-4">
          <table className="w-full">
            <thead>
              <tr className="bg-background-alt">
                <th className="p-4 text-left text-sm font-semibold text-accent-red w-[28%]">
                  Votre problème
                </th>
                <th className="p-4 text-left text-sm font-semibold text-accent-blue w-[38%]">
                  Ce que le collaborateur fait
                </th>
                <th className="p-4 text-left text-sm font-semibold text-accent-green w-[34%]">
                  {lastColHeader}
                </th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className="border-t border-white/5">
                  <td className="p-4 text-foreground-muted text-[15px] leading-relaxed align-top">
                    {row.probleme}
                  </td>
                  <td className="p-4 text-foreground/90 text-[15px] leading-relaxed align-top">
                    {row.caracteristique}
                  </td>
                  <td className="p-4 text-foreground text-[15px] leading-relaxed font-medium align-top">
                    {row.preuve}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-4 mb-4">
          {section.rows.map((row, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 overflow-hidden"
            >
              {row.probleme && (
                <div className="p-4 bg-accent-red/5 border-b border-white/5">
                  <p className="text-xs font-semibold text-accent-red uppercase tracking-wider mb-1">
                    Problème
                  </p>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {row.probleme}
                  </p>
                </div>
              )}
              {row.caracteristique && (
                <div className="p-4 bg-accent-blue/5 border-b border-white/5">
                  <p className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-1">
                    Ce que le collaborateur fait
                  </p>
                  <p className="text-foreground/90 text-sm leading-relaxed">
                    {row.caracteristique}
                  </p>
                </div>
              )}
              {row.preuve && (
                <div className="p-4 bg-accent-green/5">
                  <p className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-1">
                    {lastColHeader}
                  </p>
                  <p className="text-foreground text-sm leading-relaxed font-medium">
                    {row.preuve}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="flex items-center gap-2 text-accent-green">
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
          <p className="text-[15px] font-medium italic">{section.conclusion}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function ArgumentairePage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              {argumentaireIntro.titre}
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-4">
              {argumentaireIntro.description}
            </p>
            <p className="text-lg text-foreground/80">
              {argumentaireIntro.sousTitre}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SONCAS sections */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {soncasSections.map((section, i) => (
            <SoncasTable key={section.id} section={section} index={i} />
          ))}
        </div>
      </section>

      {/* Site preview banner */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SitePreviewSection variant="compact" />
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
