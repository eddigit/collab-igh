"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import FooterSection from "@/components/FooterSection";
import {
  budgetMeta,
  phases,
  recapitulatif,
  totaux,
  conditionsReglement,
  abonnementTarif,
  abonnementOptions,
  abonnementInclus,
  comparaisonSalarie,
  reperes,
  roiCouts,
  roiCoutTotal,
  roiValeurs,
  roiValeurTotal,
  roiMultiplier,
} from "@/data/budget";
import type { Phase } from "@/data/budget";
import {
  ChevronDown,
  Handshake,
  Search,
  Cpu,
  Plug,
  Rocket,
  Check,
  CreditCard,
  TrendingUp,
  Scale,
  Zap,
  Star,
} from "lucide-react";

// ─── Phase icons ───

const phaseIcons: Record<string, React.ElementType> = {
  phase0: Handshake,
  phase1: Search,
  phase1b: Cpu,
  phase2: Plug,
  phase3: Rocket,
};

// ─── Phase accordion ───

function PhaseCard({
  phase,
  isOpen,
  onToggle,
}: {
  phase: Phase;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = phaseIcons[phase.id] || Rocket;

  return (
    <div className="rounded-2xl bg-background-alt border border-white/5 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="p-2 rounded-lg flex-shrink-0 bg-accent-blue/10">
            <Icon className="w-5 h-5 text-accent-blue" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">
                {phase.numero}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-foreground-muted">
                {phase.jours}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mt-0.5 truncate">
              {phase.titre}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-3">
          <span className="text-sm md:text-base font-bold text-foreground">
            {phase.total}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-foreground-muted transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
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
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              {/* Phase description */}
              {phase.description && (
                <p className="text-sm text-foreground-muted mb-4">
                  {phase.description}
                </p>
              )}

              {/* Audit rows (Phase 1 — half-days) */}
              {phase.auditRows && (
                <>
                  {/* Desktop */}
                  <div className="hidden md:block rounded-xl overflow-hidden border border-white/5">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white/[0.02]">
                          <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-[15%]">
                            Demi-journée
                          </th>
                          <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-[22%]">
                            Population
                          </th>
                          <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                            Activités
                          </th>
                          <th className="p-3 text-right text-xs font-semibold text-foreground-muted w-[10%]">
                            Tarif HT
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {phase.auditRows.map((row, i) => (
                          <tr key={i} className="border-t border-white/5">
                            <td className="p-3 font-medium text-accent-blue text-sm">
                              {row.demiJournee}
                            </td>
                            <td className="p-3 text-foreground text-sm font-medium">
                              {row.population}
                            </td>
                            <td className="p-3 text-foreground/80 text-[13px]">
                              {row.activites}
                            </td>
                            <td className="p-3 text-right font-semibold text-sm">
                              {row.tarif}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Mobile */}
                  <div className="md:hidden space-y-3">
                    {phase.auditRows.map((row, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-background/50 border border-white/5"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-accent-blue">
                            {row.demiJournee}
                          </span>
                          <span className="text-sm font-bold">
                            {row.tarif}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-foreground mb-1">
                          {row.population}
                        </p>
                        <p className="text-xs text-foreground/70 leading-relaxed">
                          {row.activites}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Jour rows (Phase 1B, 2, 3) */}
              {phase.jourRows && (
                <>
                  {/* Desktop */}
                  <div className="hidden md:block rounded-xl overflow-hidden border border-white/5">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white/[0.02]">
                          <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-[10%]">
                            Jour
                          </th>
                          <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                            Activités
                          </th>
                          <th className="p-3 text-right text-xs font-semibold text-foreground-muted w-[10%]">
                            Tarif HT
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {phase.jourRows.map((row, i) => (
                          <tr key={i} className="border-t border-white/5">
                            <td className="p-3 font-medium text-accent-blue text-sm">
                              {row.jour}
                            </td>
                            <td className="p-3 text-foreground/80 text-[13px]">
                              {row.activites}
                            </td>
                            <td className="p-3 text-right font-semibold text-sm">
                              {row.tarif}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Mobile */}
                  <div className="md:hidden space-y-3">
                    {phase.jourRows.map((row, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-background/50 border border-white/5"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-accent-blue">
                            {row.jour}
                          </span>
                          <span className="text-sm font-bold">
                            {row.tarif}
                          </span>
                        </div>
                        <p className="text-xs text-foreground/80 leading-relaxed">
                          {row.activites}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Phase note */}
              {phase.note && (
                <p className="mt-3 text-xs text-accent-green font-medium">
                  {phase.note}
                </p>
              )}
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

export default function BudgetPage() {
  const [openPhase, setOpenPhase] = useState<string | null>("phase1");

  return (
    <main className="pt-16">
      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-green/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-accent-green uppercase tracking-wider mb-3">
              Investissement & Tarification
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Budget
            </h1>
            <p className="text-foreground-muted text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Projet Florence — Groupe IGH
            </p>
            <div className="inline-flex items-center gap-4 flex-wrap justify-center">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-foreground-muted">
                Réf. {budgetMeta.reference}
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-foreground-muted">
                {budgetMeta.date}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Phases de mise en place ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Mise en place
            </h2>
            <p className="text-foreground-muted text-[15px] mb-2">
              {totaux.totalJours} jours de travail — de l&apos;audit terrain au déploiement pilote.
            </p>
            <p className="text-sm text-foreground-muted mb-8">
              Tarif journalier&nbsp;: {budgetMeta.tarifJournalier} — Frais de déplacement&nbsp;: {budgetMeta.fraisDeplacement.toLowerCase()}
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.id} delay={i * 0.06}>
                <PhaseCard
                  phase={phase}
                  isOpen={openPhase === phase.id}
                  onToggle={() =>
                    setOpenPhase(openPhase === phase.id ? null : phase.id)
                  }
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Récapitulatif ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <CreditCard className="w-7 h-7 text-accent-blue" />
              Récapitulatif mise en place
            </h2>
          </AnimatedSection>

          {/* Desktop table */}
          <AnimatedSection delay={0.1}>
            <div className="hidden md:block rounded-2xl overflow-hidden border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/[0.02]">
                    <th className="p-4 text-left text-xs font-semibold text-foreground-muted">
                      Phase
                    </th>
                    <th className="p-4 text-center text-xs font-semibold text-foreground-muted w-[15%]">
                      Jours
                    </th>
                    <th className="p-4 text-right text-xs font-semibold text-foreground-muted w-[15%]">
                      Total HT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recapitulatif.map((row, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="p-4 text-foreground/90 text-[15px]">
                        {row.phase}
                      </td>
                      <td className="p-4 text-center text-foreground-muted">
                        {row.jours}
                      </td>
                      <td className="p-4 text-right font-semibold text-foreground">
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-accent-blue/30 bg-accent-blue/5">
                    <td className="p-4 font-bold text-[15px]">
                      Total mise en place
                    </td>
                    <td className="p-4 text-center font-bold">
                      {totaux.totalJours}
                    </td>
                    <td className="p-4 text-right font-bold text-lg text-accent-blue">
                      {totaux.totalHT}
                    </td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-3 text-foreground-muted text-sm">TVA (20%)</td>
                    <td></td>
                    <td className="p-3 text-right text-foreground-muted text-sm">
                      {totaux.tva}
                    </td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="p-3 font-semibold text-sm">Total TTC</td>
                    <td></td>
                    <td className="p-3 text-right font-bold text-accent-blue">
                      {totaux.totalTTC}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </AnimatedSection>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {recapitulatif.map((row, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div className="p-4 rounded-xl bg-background-alt border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-foreground-muted">
                      {row.jours} {row.jours !== "—" ? "jours" : ""}
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {row.total}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/90">{row.phase}</p>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.3}>
              <div className="p-5 rounded-xl bg-accent-blue/5 border border-accent-blue/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">Total mise en place</span>
                  <span className="text-lg font-bold text-accent-blue">
                    {totaux.totalHT}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-foreground-muted">
                  <span>TVA (20%)</span>
                  <span>{totaux.tva}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-semibold mt-1 pt-1 border-t border-white/10">
                  <span>Total TTC</span>
                  <span className="text-accent-blue">{totaux.totalTTC}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Conditions de règlement */}
          <AnimatedSection delay={0.2}>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {conditionsReglement.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-background-alt border border-white/5"
                >
                  <p className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-1">
                    {c.echeance}
                  </p>
                  <p className="text-xl font-bold mb-1">{c.montant}</p>
                  <p className="text-sm text-foreground-muted">
                    {c.declencheur}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Abonnement mensuel ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              <Star className="w-7 h-7 text-accent-green" />
              Abonnement mensuel
            </h2>
            <p className="text-foreground-muted text-[15px] mb-2">
              Florence en production
            </p>
            <div className="inline-block px-5 py-2.5 rounded-full bg-accent-green/10 border border-accent-green/20 mb-8">
              <span className="text-xl md:text-2xl font-bold text-accent-green">
                {abonnementTarif}
              </span>
            </div>
          </AnimatedSection>

          {/* Options grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {abonnementOptions.map((opt, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`h-full p-6 rounded-2xl border transition-all ${
                    opt.highlight
                      ? "bg-accent-green/5 border-accent-green/20 ring-1 ring-accent-green/20"
                      : "bg-background border-white/5"
                  }`}
                >
                  {opt.highlight && (
                    <p className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-3">
                      Recommandé
                    </p>
                  )}
                  <p className="text-sm text-foreground-muted mb-2">
                    {opt.perimetre}
                  </p>
                  <p className="text-3xl font-bold mb-1">
                    {opt.etablissements}
                    <span className="text-base font-normal text-foreground-muted ml-1">
                      étab.
                    </span>
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground-muted">Par mois</span>
                      <span className="font-semibold">{opt.moisHT}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground-muted">Par an</span>
                      <span className="font-semibold">{opt.anHT}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Ce qui est inclus */}
          <AnimatedSection delay={0.3}>
            <div className="p-6 rounded-2xl bg-background border border-white/5">
              <h3 className="text-base font-semibold mb-4">
                Ce qui est inclus dans les 216€/mois/établissement
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {abonnementInclus.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Comparaison Florence vs salarié ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Scale className="w-7 h-7 text-accent-blue" />
              Avantage coût — Florence vs. un salarié
            </h2>
            <p className="text-foreground-muted text-[15px] mb-8">
              Comparaison avec une assistante de direction à temps plein.
            </p>
          </AnimatedSection>

          {/* Desktop table */}
          <AnimatedSection delay={0.1}>
            <div className="hidden md:block rounded-2xl overflow-hidden border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-white/[0.02] text-xs font-semibold text-foreground-muted w-[28%]">
                      Critère
                    </th>
                    <th className="p-4 text-left bg-accent-green/5 text-accent-green font-semibold">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4" /> Florence (IA)
                      </div>
                    </th>
                    <th className="p-4 text-left bg-white/[0.02] text-foreground-muted font-semibold">
                      Assistante de direction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparaisonSalarie.map((row, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="p-4 text-foreground-muted text-sm">
                        {row.critere}
                      </td>
                      <td className="p-4 text-foreground font-medium text-sm bg-accent-green/[0.02]">
                        {row.florence}
                      </td>
                      <td className="p-4 text-foreground-muted text-sm">
                        {row.humain}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {comparaisonSalarie.map((row, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="rounded-xl overflow-hidden border border-white/5">
                  <div className="p-3 bg-white/[0.02] border-b border-white/5">
                    <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider">
                      {row.critere}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-white/5">
                    <div className="p-3 bg-accent-green/5">
                      <p className="text-[10px] font-semibold text-accent-green uppercase mb-1">
                        Florence
                      </p>
                      <p className="text-xs text-foreground font-medium">
                        {row.florence}
                      </p>
                    </div>
                    <div className="p-3">
                      <p className="text-[10px] font-semibold text-foreground-muted uppercase mb-1">
                        Salarié
                      </p>
                      <p className="text-xs text-foreground-muted">
                        {row.humain}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ce que 180€ représente ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Ce que 216€/mois/EHPAD représente
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reperes.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="h-full p-5 rounded-2xl bg-background border border-white/5">
                  <p className="text-2xl md:text-3xl font-bold text-accent-green mb-2">
                    {r.value}
                  </p>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {r.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI global annuel ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-accent-green" />
              ROI global annuel
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Coûts */}
            <AnimatedSection delay={0.1}>
              <div className="h-full p-6 rounded-2xl bg-background-alt border border-white/5">
                <h3 className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                  Investissement
                </h3>
                <div className="space-y-3 mb-4">
                  {roiCouts.map((c, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-foreground/80">
                        {c.label}
                        {c.note && (
                          <span className="text-xs text-foreground-muted ml-1">
                            ({c.note})
                          </span>
                        )}
                      </span>
                      <span className="text-sm font-semibold">{c.montant}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-semibold text-sm">Coût total année 1</span>
                  <span className="text-lg font-bold">{roiCoutTotal}</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Valeur */}
            <AnimatedSection delay={0.2}>
              <div className="h-full p-6 rounded-2xl bg-accent-green/5 border border-accent-green/20">
                <h3 className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-4">
                  Valeur générée
                </h3>
                <div className="space-y-3 mb-4">
                  {roiValeurs.map((v, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-foreground/80">
                        {v.label}
                      </span>
                      <span className="text-sm font-semibold text-accent-green">
                        {v.montant}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-accent-green/20 flex items-center justify-between">
                  <span className="font-semibold text-sm">Valeur annuelle</span>
                  <span className="text-lg font-bold text-accent-green">
                    {roiValeurTotal}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* ROI multiplier highlight */}
          <AnimatedSection delay={0.3}>
            <div className="mt-8 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent-blue/10 to-accent-green/10 border border-white/10 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div>
                  <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                    ROI année 1
                  </p>
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                    {roiMultiplier.annee1}
                  </p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-white/10" />
                <div>
                  <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                    ROI année 2+
                  </p>
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
                    {roiMultiplier.annee2Plus}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
