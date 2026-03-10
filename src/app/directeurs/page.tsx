"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import FooterSection from "@/components/FooterSection";
import {
  directeursIntro,
  scenarioAvant,
  scenarioApres,
  avantages,
  nepaspas,
  communication,
  promesse,
} from "@/data/directeurs";
import type { AvantageCategory } from "@/data/directeurs";
import {
  ChevronDown,
  X,
  Check,
  Clock,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Heart,
  Quote,
} from "lucide-react";

// ─── Avantage accordion ───

function AvantageAccordion({
  category,
  isOpen,
  onToggle,
}: {
  category: AvantageCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl bg-background-alt border border-white/5 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{category.emoji}</span>
          <h3 className="text-lg font-semibold">{category.titre}</h3>
          <span className="text-xs text-foreground-muted bg-white/5 px-2 py-0.5 rounded-full">
            {category.rows.length} situations
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-foreground-muted transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4">
              {category.rows.map((row, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 overflow-hidden"
                >
                  {/* Situation */}
                  <div className="p-4 bg-white/[0.02]">
                    <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-1">
                      Situation
                    </p>
                    <p className="text-sm text-foreground/90 font-medium">
                      {row.situation}
                    </p>
                  </div>
                  {/* Action Florence */}
                  <div className="p-4 border-t border-white/5 bg-accent-blue/[0.03]">
                    <p className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-1">
                      Ce que Florence fait
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {row.action}
                    </p>
                  </div>
                  {/* Bénéfice */}
                  <div className="p-4 border-t border-white/5 bg-accent-green/[0.03]">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-accent-green font-medium">
                        {row.benefice}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ═══════════════════════════════
// PAGE
// ═══════════════════════════════

export default function DirecteursPage() {
  const [openAvantage, setOpenAvantage] = useState<string | null>("admin");

  return (
    <main className="pt-16">
      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              Pour les directeurs d&apos;établissement
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {directeursIntro.titre}
            </h1>
            <p className="text-foreground-muted text-lg leading-relaxed max-w-3xl mx-auto">
              {directeursIntro.sousTitre}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Avant / Après ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Avant / Après Florence
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Avant */}
            <AnimatedSection delay={0.1}>
              <div className="h-full p-6 rounded-2xl bg-accent-red/5 border border-accent-red/10">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-accent-red" />
                  <h3 className="text-lg font-bold text-accent-red">
                    {scenarioAvant.titre}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {scenarioAvant.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-4 border-t border-accent-red/10 text-sm text-accent-red font-medium italic">
                  {scenarioAvant.conclusion}
                </p>
              </div>
            </AnimatedSection>

            {/* Après */}
            <AnimatedSection delay={0.2}>
              <div className="h-full p-6 rounded-2xl bg-accent-green/5 border border-accent-green/10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-accent-green" />
                  <h3 className="text-lg font-bold text-accent-green">
                    {scenarioApres.titre}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {scenarioApres.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-4 border-t border-accent-green/10 text-sm text-accent-green font-medium italic">
                  {scenarioApres.conclusion}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Avantages par domaine ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ce que Florence fait pour vous, concrètement
            </h2>
            <p className="text-foreground-muted text-[15px] mb-8">
              7 domaines, des dizaines de situations couvertes. Cliquez pour voir le détail.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {avantages.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 0.06}>
                <AvantageAccordion
                  category={cat}
                  isOpen={openAvantage === cat.id}
                  onToggle={() =>
                    setOpenAvantage(openAvantage === cat.id ? null : cat.id)
                  }
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment communiquer avec Florence ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-accent-blue" />
              Comment parler à Florence
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {communication.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="h-full p-5 rounded-2xl bg-background border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{c.emoji}</span>
                    <h3 className="font-semibold">{c.canal}</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ce que Florence ne fait PAS ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-accent-green" />
              Ce que Florence ne fait pas
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-3">
            {nepaspas.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="p-4 rounded-xl bg-background-alt border border-white/5 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {item}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promesse / engagement ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent-blue/5 to-accent-green/5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-accent-blue" />
                <h2 className="text-xl md:text-2xl font-bold">
                  {promesse.titre}
                </h2>
              </div>
              <p className="text-[15px] text-foreground/90 leading-relaxed mb-6">
                {promesse.description}
              </p>

              {/* Citation Florence */}
              <div className="relative pl-6 md:pl-8 border-l-4 border-accent-blue/50 py-2">
                <Quote className="absolute -left-3 -top-1 w-6 h-6 text-accent-blue/30" />
                <p className="text-sm md:text-base font-light leading-relaxed text-foreground/90 italic">
                  {promesse.citationFlorence}
                </p>
                <p className="mt-2 text-xs font-semibold text-accent-blue">
                  — Florence, votre collaboratrice IA
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
