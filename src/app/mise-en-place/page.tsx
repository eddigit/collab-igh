"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import FooterSection from "@/components/FooterSection";
import {
  missionMeta,
  syntheseExecutive,
  copil,
  instances,
  canalWhatsApp,
  phases,
  livrables,
  planningPhases,
  risques,
  facteursSucces,
  engagements,
} from "@/data/mission";
import type { Phase, AuditSession } from "@/data/mission";
import {
  ChevronDown,
  Users,
  MessageSquare,
  FileText,
  Calendar,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Eye,
  RotateCcw,
  CheckCircle,
  Sparkles,
  Target,
  Rocket,
  Zap,
  ClipboardList,
  Bot,
} from "lucide-react";

// ─── Phase color helpers ───

function phaseColor(couleur: Phase["couleur"]) {
  const map = {
    blue: {
      bg: "bg-accent-blue/10",
      border: "border-accent-blue/20",
      text: "text-accent-blue",
      bar: "bg-accent-blue",
    },
    green: {
      bg: "bg-accent-green/10",
      border: "border-accent-green/20",
      text: "text-accent-green",
      bar: "bg-accent-green",
    },
    red: {
      bg: "bg-accent-red/10",
      border: "border-accent-red/20",
      text: "text-accent-red",
      bar: "bg-accent-red",
    },
    yellow: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      text: "text-amber-400",
      bar: "bg-amber-500",
    },
  };
  return map[couleur];
}

const phaseIcons: Record<string, React.ElementType> = {
  "phase-0": Sparkles,
  "phase-1": Target,
  "phase-1b": Bot,
  "phase-2": Zap,
  "phase-3": Rocket,
  "phase-4": CheckCircle2,
};

// ─── Audit detail accordion ───

function AuditAccordion({ audit }: { audit: AuditSession }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/5 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div>
          <h5 className="font-semibold text-sm">{audit.titre}</h5>
          <p className="text-xs text-foreground-muted mt-0.5">
            {audit.population} — {audit.lieu}
          </p>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-foreground-muted transition-transform flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4">
              {/* Questions table - desktop */}
              <div className="hidden md:block rounded-lg overflow-hidden border border-white/5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/[0.02]">
                      <th className="p-2.5 text-left text-xs font-semibold text-foreground-muted w-8">
                        N°
                      </th>
                      <th className="p-2.5 text-left text-xs font-semibold text-foreground-muted w-[18%]">
                        Thème
                      </th>
                      <th className="p-2.5 text-left text-xs font-semibold text-foreground-muted w-[42%]">
                        Questions clés
                      </th>
                      <th className="p-2.5 text-left text-xs font-semibold text-foreground-muted w-[34%]">
                        Données à capter
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {audit.questions.map((q) => (
                      <tr key={q.num} className="border-t border-white/5">
                        <td className="p-2.5 text-foreground-muted text-xs align-top">
                          {q.num}
                        </td>
                        <td className="p-2.5 font-medium text-accent-blue text-xs align-top">
                          {q.theme}
                        </td>
                        <td className="p-2.5 text-foreground/80 text-xs leading-relaxed align-top">
                          {q.questions}
                        </td>
                        <td className="p-2.5 text-foreground-muted text-xs leading-relaxed align-top">
                          {q.donnees}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Questions - mobile */}
              <div className="md:hidden space-y-3">
                {audit.questions.map((q) => (
                  <div
                    key={q.num}
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs text-foreground-muted">
                        {q.num}
                      </span>
                      <span className="text-xs font-semibold text-accent-blue">
                        {q.theme}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed mb-1">
                      {q.questions}
                    </p>
                    <p className="text-xs text-foreground-muted italic">
                      {q.donnees}
                    </p>
                  </div>
                ))}
              </div>

              {/* Livrables + Florence */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 p-3 rounded-lg bg-accent-green/5 border border-accent-green/10">
                  <p className="text-xs font-semibold text-accent-green mb-1">
                    Livrables
                  </p>
                  <ul className="space-y-1">
                    {audit.livrables.map((l, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-xs text-foreground/80"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-green mt-1.5 flex-shrink-0" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 p-3 rounded-lg bg-accent-blue/5 border border-accent-blue/10">
                  <p className="text-xs font-semibold text-accent-blue mb-1">
                    Florence
                  </p>
                  <p className="text-xs text-foreground/80 italic">
                    {audit.florence}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Phase card ───

function PhaseCard({
  phase,
  index,
}: {
  phase: Phase;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const colors = phaseColor(phase.couleur);
  const Icon = phaseIcons[phase.id] || FileText;

  const hasDetails =
    (phase.activites && phase.activites.length > 0) ||
    (phase.audits && phase.audits.length > 0);

  return (
    <AnimatedSection delay={index * 0.08}>
      <div
        className={`rounded-2xl border ${colors.border} overflow-hidden mb-4`}
      >
        {/* Header - always visible */}
        <button
          onClick={() => hasDetails && setOpen(!open)}
          className={`w-full p-5 md:p-6 text-left ${
            hasDetails ? "cursor-pointer hover:bg-white/[0.01]" : "cursor-default"
          } transition-colors`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`p-2.5 rounded-xl ${colors.bg} flex-shrink-0`}
            >
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}
                >
                  Phase {phase.id === "phase-1b" ? "1B" : phase.numero}
                </span>
                <span className="text-xs text-foreground-muted">
                  — {phase.duree}
                </span>
                {phase.cout && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-green/10 text-accent-green font-medium">
                    {phase.cout}
                  </span>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {phase.titre}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {phase.objectif}
              </p>
            </div>
            {hasDetails && (
              <ChevronDown
                className={`w-5 h-5 text-foreground-muted transition-transform flex-shrink-0 mt-1 ${
                  open ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {open && hasDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-5">
                {/* Activities table */}
                {phase.activites && phase.activites.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-foreground-muted" />
                      Activités
                    </h4>
                    {/* Desktop */}
                    <div className="hidden md:block rounded-xl overflow-hidden border border-white/5">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-white/[0.02]">
                            <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-12">
                              Réf.
                            </th>
                            <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                              Activité
                            </th>
                            <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-[18%]">
                              Responsable
                            </th>
                            <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-[30%]">
                              Livrable
                            </th>
                            {phase.activites.some((a) => a.prerequis) && (
                              <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-[18%]">
                                Prérequis
                              </th>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {phase.activites.map((a) => (
                            <tr
                              key={a.ref}
                              className="border-t border-white/5"
                            >
                              <td className="p-3 text-foreground-muted text-xs font-mono align-top">
                                {a.ref}
                              </td>
                              <td className="p-3 text-foreground/90 text-[13px] leading-relaxed align-top">
                                {a.activite}
                              </td>
                              <td className="p-3 text-foreground-muted text-xs align-top">
                                {a.responsable}
                              </td>
                              <td className="p-3 text-accent-green text-xs font-medium align-top">
                                {a.livrable}
                              </td>
                              {phase.activites!.some(
                                (act) => act.prerequis
                              ) && (
                                <td className="p-3 text-foreground-muted text-xs italic align-top">
                                  {a.prerequis || "—"}
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Mobile */}
                    <div className="md:hidden space-y-3">
                      {phase.activites.map((a) => (
                        <div
                          key={a.ref}
                          className="p-3 rounded-lg bg-white/[0.02] border border-white/5"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-xs font-mono text-foreground-muted">
                              {a.ref}
                            </span>
                            <span className="text-xs text-foreground-muted">
                              — {a.responsable}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/90 mb-1">
                            {a.activite}
                          </p>
                          <p className="text-xs text-accent-green font-medium">
                            → {a.livrable}
                          </p>
                          {a.prerequis && (
                            <p className="text-xs text-foreground-muted italic mt-1">
                              Prérequis\u00a0: {a.prerequis}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Audit sessions */}
                {phase.audits && phase.audits.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-foreground-muted" />
                      Sessions d&apos;audit
                    </h4>
                    <div className="space-y-3">
                      {phase.audits.map((audit) => (
                        <AuditAccordion key={audit.id} audit={audit} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Documents client */}
                {phase.documentsClient &&
                  phase.documentsClient.length > 0 && (
                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                        Documents à fournir par le client
                      </p>
                      <ul className="space-y-1.5">
                        {phase.documentsClient.map((doc, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span className="w-4 h-4 rounded border border-amber-500/30 flex-shrink-0 mt-0.5" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Interaction COPIL */}
                {phase.interactionCopil && (
                  <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10">
                    <p className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
                      Interaction COPIL
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed italic">
                      {phase.interactionCopil}
                    </p>
                  </div>
                )}

                {/* Synthèse */}
                {phase.synthese && (
                  <div className="p-4 rounded-xl bg-accent-green/5 border border-accent-green/10">
                    <p className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-2">
                      Synthèse fin de phase
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {phase.synthese}
                    </p>
                  </div>
                )}

                {/* Gate */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-0.5">
                      Gate {phase.id === "phase-1b" ? "1B" : phase.numero}
                    </p>
                    <p className="text-sm text-foreground/90">
                      {phase.gate}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gate line for non-expandable phases */}
        {!hasDetails && (
          <div className="px-5 md:px-6 pb-5 md:pb-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-0.5">
                  Gate {phase.numero}
                </p>
                <p className="text-sm text-foreground/90">
                  {phase.gate}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

// ─── Probability/impact badges ───

function ProbBadge({ level }: { level: string }) {
  const cls =
    level === "Forte"
      ? "bg-accent-red/10 text-accent-red"
      : level === "Moyenne"
      ? "bg-amber-500/10 text-amber-400"
      : "bg-accent-green/10 text-accent-green";
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cls}`}>
      {level}
    </span>
  );
}

function ImpactBadge({ level }: { level: string }) {
  const cls =
    level === "Fort"
      ? "bg-accent-red/10 text-accent-red"
      : "bg-amber-500/10 text-amber-400";
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cls}`}>
      {level}
    </span>
  );
}

// ─── Engagement icon map ───

const engagementIcons: Record<string, React.ElementType> = {
  Lock,
  Shield,
  CheckCircle,
  Eye,
  RotateCcw,
};

// ═══════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════

export default function MiseEnPlacePage() {
  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-mono text-foreground-muted uppercase tracking-widest mb-4">
              {missionMeta.reference} — {missionMeta.classification}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
              {missionMeta.titre}
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-8">
              {missionMeta.sousTitre}
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-foreground-muted">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {missionMeta.client}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {missionMeta.date}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Synthèse exécutive ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Synthèse exécutive
            </h2>
            <p className="text-foreground-muted text-[15px] leading-relaxed mb-6">
              {syntheseExecutive.intro}
            </p>
            <div className="p-5 rounded-2xl bg-background border border-white/5 mb-6">
              <p className="text-xs font-semibold text-accent-red uppercase tracking-wider mb-3">
                6 axes de dysfonctionnement identifiés
              </p>
              <ol className="space-y-2">
                {syntheseExecutive.dysfonctionnements.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px]"
                  >
                    <span className="w-6 h-6 rounded-full bg-accent-red/10 text-accent-red text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-foreground/90">{d}</span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="text-foreground text-[15px] leading-relaxed font-medium">
              {syntheseExecutive.conclusion}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Gouvernance ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Users className="w-7 h-7 text-accent-blue" />
              Gouvernance de la mission
            </h2>
          </AnimatedSection>

          {/* COPIL */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-4 mt-8">
              Comité de Pilotage (COPIL)
            </h3>
            {/* Desktop */}
            <div className="hidden md:block rounded-2xl overflow-hidden border border-white/5 mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/[0.02]">
                    <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                      Rôle
                    </th>
                    <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                      Nom
                    </th>
                    <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                      Fonction
                    </th>
                    <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                      Responsabilité
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {copil.map((m, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="p-3 font-semibold text-accent-blue text-sm">
                        {m.role}
                      </td>
                      <td className="p-3 text-foreground text-sm font-medium">
                        {m.nom}
                      </td>
                      <td className="p-3 text-foreground-muted text-sm">
                        {m.fonction}
                      </td>
                      <td className="p-3 text-foreground/80 text-sm">
                        {m.responsabilite}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile */}
            <div className="md:hidden space-y-3 mb-8">
              {copil.map((m, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-background-alt border border-white/5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-accent-blue uppercase">
                      {m.role}
                    </span>
                  </div>
                  <p className="font-semibold">{m.nom}</p>
                  <p className="text-sm text-foreground-muted">
                    {m.fonction}
                  </p>
                  <p className="text-sm text-foreground/80 mt-1">
                    {m.responsabilite}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Instances */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-4">
              Instances de gouvernance
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {instances.map((inst, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-background-alt border border-white/5"
                >
                  <p className="font-semibold text-sm mb-1">{inst.nom}</p>
                  <p className="text-xs text-accent-blue font-medium mb-2">
                    {inst.frequence}
                  </p>
                  <p className="text-xs text-foreground-muted mb-1">
                    {inst.participants}
                  </p>
                  <p className="text-xs text-foreground/80">{inst.objet}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* WhatsApp */}
          <AnimatedSection delay={0.3}>
            <div className="flex items-start gap-3 p-5 rounded-2xl bg-accent-green/5 border border-accent-green/10">
              <MessageSquare className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-1">
                  Canal de communication
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {canalWhatsApp}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Phases ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Calendar className="w-7 h-7 text-accent-blue" />
              Phases de la mission
            </h2>
            <p className="text-foreground-muted text-[15px] mb-8">
              Cliquez sur chaque phase pour voir le détail des activités, audits et livrables.
            </p>
          </AnimatedSection>

          {phases.map((phase, i) => (
            <PhaseCard key={phase.id} phase={phase} index={i} />
          ))}
        </div>
      </section>

      {/* ── Planning visuel ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-7 h-7 text-accent-blue" />
              Planning prévisionnel
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-3">
              {planningPhases.map((p, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-xs text-foreground-muted w-24 flex-shrink-0 text-right hidden sm:block">
                    {p.semaine}
                  </span>
                  <div className="flex-1">
                    <div
                      className="h-10 rounded-lg bg-accent-blue/20 border border-accent-blue/30 flex items-center px-4 text-sm font-medium transition-all hover:bg-accent-blue/30"
                      style={{ width: `${p.width}%`, minWidth: "200px" }}
                    >
                      <span className="truncate text-xs sm:text-sm">
                        {p.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green font-semibold text-sm">
                <Rocket className="w-4 h-4" />
                Durée totale\u00a0: 5 semaines
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Livrables ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <FileText className="w-7 h-7 text-accent-blue" />
              Livrables de la mission
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            {/* Desktop */}
            <div className="hidden md:block rounded-2xl overflow-hidden border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/[0.02]">
                    <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-20">
                      Phase
                    </th>
                    <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                      Livrable
                    </th>
                    <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-40">
                      Format
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {livrables.map((l, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="p-3 text-accent-blue text-xs font-semibold">
                        {l.phase}
                      </td>
                      <td className="p-3 text-foreground/90 text-sm">
                        {l.nom}
                      </td>
                      <td className="p-3 text-foreground-muted text-xs">
                        {l.format}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile */}
            <div className="md:hidden space-y-2">
              {livrables.map((l, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background border border-white/5"
                >
                  <span className="text-xs font-semibold text-accent-blue px-2 py-0.5 rounded bg-accent-blue/10 flex-shrink-0">
                    {l.phase}
                  </span>
                  <div>
                    <p className="text-sm text-foreground/90">{l.nom}</p>
                    <p className="text-xs text-foreground-muted">{l.format}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Facteurs clés de succès ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7 text-accent-green" />
              Facteurs clés de succès
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {facteursSucces.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="h-full p-5 rounded-2xl bg-background-alt border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-accent-green/10 text-accent-green text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold text-sm">{f.titre}</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Risques ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-amber-400" />
              Gestion des risques
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            {/* Desktop */}
            <div className="hidden md:block rounded-2xl overflow-hidden border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/[0.02]">
                    <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                      Risque
                    </th>
                    <th className="p-3 text-center text-xs font-semibold text-foreground-muted w-24">
                      Prob.
                    </th>
                    <th className="p-3 text-center text-xs font-semibold text-foreground-muted w-24">
                      Impact
                    </th>
                    <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-[40%]">
                      Mitigation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {risques.map((r, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="p-3 text-foreground/90 text-sm font-medium">
                        {r.risque}
                      </td>
                      <td className="p-3 text-center">
                        <ProbBadge level={r.probabilite} />
                      </td>
                      <td className="p-3 text-center">
                        <ImpactBadge level={r.impact} />
                      </td>
                      <td className="p-3 text-foreground-muted text-sm leading-relaxed">
                        {r.mitigation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile */}
            <div className="md:hidden space-y-3">
              {risques.map((r, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-background border border-white/5"
                >
                  <p className="font-semibold text-sm mb-2">{r.risque}</p>
                  <div className="flex gap-2 mb-2">
                    <ProbBadge level={r.probabilite} />
                    <ImpactBadge level={r.impact} />
                  </div>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {r.mitigation}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Engagements ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="w-7 h-7 text-accent-blue" />
              Engagements
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {engagements.map((e, i) => {
              const Icon = engagementIcons[e.icon] || Shield;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="h-full p-5 rounded-2xl bg-background-alt border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-accent-blue/10">
                        <Icon className="w-4 h-4 text-accent-blue" />
                      </div>
                      <h3 className="font-semibold text-sm">{e.titre}</h3>
                    </div>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
