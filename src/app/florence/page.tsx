"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import FooterSection from "@/components/FooterSection";
import {
  florenceMeta,
  florenceIntro,
  missionsQuotidiennes,
  competencesConnectees,
  canaux,
  tonFlorence,
  securite,
  hebergementLocal,
  comparaison,
  planningFlorence,
} from "@/data/florence";
import type { MissionCategory, CompetenceCategory } from "@/data/florence";
import {
  ChevronDown,
  MessageCircle,
  Monitor,
  Mail,
  Shield,
  Lock,
  Trophy,
  Brain,
  Calendar,
  Sparkles,
  Quote,
  X,
  Check,
  Zap,
  Database,
  Globe,
  Server,
  Gift,
  MapPin,
} from "lucide-react";

// ─── Mission category accordion ───

function MissionAccordion({
  category,
  isOpen,
  onToggle,
}: {
  category: MissionCategory;
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
            {category.rows.length} missions
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
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              {/* Desktop */}
              <div className="hidden md:block rounded-xl overflow-hidden border border-white/5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/[0.02]">
                      <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-[20%]">
                        Mission
                      </th>
                      <th className="p-3 text-left text-xs font-semibold text-foreground-muted">
                        Ce que Florence fait
                      </th>
                      <th className="p-3 text-left text-xs font-semibold text-foreground-muted w-[16%]">
                        Fréquence
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.rows.map((row, i) => (
                      <tr key={i} className="border-t border-white/5">
                        <td className="p-3 font-medium text-accent-blue text-sm align-top">
                          {row.mission}
                        </td>
                        <td className="p-3 text-foreground/80 text-[13px] leading-relaxed align-top">
                          {row.action}
                        </td>
                        <td className="p-3 align-top">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-accent-green/10 text-accent-green font-medium whitespace-nowrap">
                            {row.frequence}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Mobile */}
              <div className="md:hidden space-y-3">
                {category.rows.map((row, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-background/50 border border-white/5"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-accent-blue">
                        {row.mission}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-green/10 text-accent-green font-medium">
                        {row.frequence}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      {row.action}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Competence category accordion ───

function CompetenceAccordion({
  category,
  isOpen,
  onToggle,
}: {
  category: CompetenceCategory;
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
            {category.sources.length} sources
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
              {/* Sources */}
              <div className="space-y-3">
                {category.sources.map((src, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-background/50 border border-white/5"
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Database className="w-4 h-4 text-accent-blue flex-shrink-0" />
                      <span className="font-semibold text-sm">
                        {src.source}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent-green/10 text-accent-green font-medium">
                        {src.api}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {src.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Exemple concret */}
              {category.exemple && (
                <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10">
                  <p className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
                    Exemple concret
                  </p>
                  <p className="text-sm text-foreground/90 leading-relaxed italic">
                    {category.exemple}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Icon map for canaux ───

const canalIcons: Record<string, React.ElementType> = {
  MessageCircle,
  Monitor,
  Mail,
  Globe,
};

// ═══════════════════════════════
// PAGE
// ═══════════════════════════════

export default function FlorencePage() {
  const [openMission, setOpenMission] = useState<string | null>("financier");
  const [openCompetence, setOpenCompetence] = useState<string | null>(
    "juridique"
  );

  return (
    <main className="pt-24">
      {/* ── Hero with photo ── */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-accent-blue/20 shadow-2xl shadow-accent-blue/10">
                  <Image
                    src={florenceMeta.photo}
                    alt="Florence — Collaboratrice IA IGH"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-accent-green text-white text-xs font-semibold shadow-lg">
                  En ligne 24/7
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-2">
                  Votre collaboratrice IA
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3">
                  Florence
                </h1>
                <p className="text-foreground-muted text-lg leading-relaxed max-w-xl">
                  Collaboratrice IA dédiée au Groupe IGH
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-foreground-muted">
                  <Sparkles className="w-4 h-4 text-accent-blue" />
                  En hommage à {florenceMeta.hommage} ({florenceMeta.hommageAnnees})
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Qui est Florence ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Qui est Florence&nbsp;?
            </h2>
            <p className="text-[15px] text-foreground/90 leading-relaxed mb-6">
              {florenceIntro.qui}
            </p>
            <p className="text-[15px] text-foreground-muted leading-relaxed mb-8">
              {florenceIntro.description}
            </p>
          </AnimatedSection>

          {/* Mission statement */}
          <AnimatedSection delay={0.1}>
            <blockquote className="relative pl-6 md:pl-8 border-l-4 border-accent-blue/50 py-2">
              <Quote className="absolute -left-3 -top-1 w-6 h-6 text-accent-blue/30" />
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 italic">
                {florenceIntro.mission}
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Missions quotidiennes ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ses missions au quotidien
            </h2>
            <p className="text-foreground-muted text-[15px] mb-8">
              5 domaines, des dizaines de tâches automatisées. Cliquez pour voir le détail.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {missionsQuotidiennes.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 0.06}>
                <MissionAccordion
                  category={cat}
                  isOpen={openMission === cat.id}
                  onToggle={() =>
                    setOpenMission(openMission === cat.id ? null : cat.id)
                  }
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compétences connectées ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Brain className="w-7 h-7 text-accent-blue" />
              Ses compétences connectées
            </h2>
            <p className="text-foreground-muted text-[15px] mb-2">
              Ce qui rend Florence unique&nbsp;: elle est connectée en temps réel aux sources officielles françaises.
            </p>
            <p className="text-foreground-muted text-sm mb-8">
              APIs & bases de données — cliquez pour voir les sources et exemples concrets.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {competencesConnectees.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 0.06}>
                <CompetenceAccordion
                  category={cat}
                  isOpen={openCompetence === cat.id}
                  onToggle={() =>
                    setOpenCompetence(
                      openCompetence === cat.id ? null : cat.id
                    )
                  }
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Communication ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-accent-green" />
              Comment communiquer avec Florence
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {canaux.map((c, i) => {
              const Icon = canalIcons[c.icon] || MessageCircle;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="h-full p-5 rounded-2xl bg-background-alt border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-accent-blue/10">
                        <Icon className="w-4 h-4 text-accent-blue" />
                      </div>
                      <h3 className="font-semibold text-sm">{c.canal}</h3>
                    </div>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {c.usage}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="p-5 rounded-2xl bg-accent-blue/5 border border-accent-blue/10">
              <p className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
                Ton de Florence
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed italic">
                {tonFlorence}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Sécurité RGPD ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="w-7 h-7 text-accent-blue" />
              Sécurité & RGPD
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {securite.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="h-full p-5 rounded-2xl bg-background border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="w-4 h-4 text-accent-green flex-shrink-0" />
                    <h3 className="font-semibold text-sm">{s.engagement}</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hébergement local — Serveur privé ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Server className="w-7 h-7 text-accent-green" />
              <h2 className="text-2xl md:text-3xl font-bold">
                {hebergementLocal.titre}
              </h2>
            </div>
            <p className="text-lg font-medium text-accent-green mb-4">
              {hebergementLocal.sousTitre}
            </p>
            <p className="text-foreground-muted text-[15px] leading-relaxed mb-10 max-w-3xl">
              {hebergementLocal.description}
            </p>
          </AnimatedSection>

          {/* Location highlight */}
          <AnimatedSection delay={0.1}>
            <div className="p-5 rounded-2xl bg-accent-blue/5 border border-accent-blue/10 mb-8 flex items-center gap-4">
              <MapPin className="w-6 h-6 text-accent-blue flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-accent-blue">Localisation du serveur</p>
                <p className="text-sm text-foreground/90">
                  Siège social IGH — 930 Route de Berre, 13090 Aix-en-Provence
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Avantages grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {hebergementLocal.avantages.map((a, i) => (
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

          {/* Ce qui est inclus */}
          <AnimatedSection delay={0.4}>
            <div className="p-6 rounded-2xl bg-background-alt border border-white/5 mb-6">
              <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-accent-green" />
                Ce qui est inclus dans l&apos;installation
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {hebergementLocal.inclus.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Condition prix — highlight */}
          <AnimatedSection delay={0.5}>
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent-green/10 to-accent-blue/5 border border-accent-green/20">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-accent-green" />
                <p className="text-xs font-semibold text-accent-green uppercase tracking-wider">
                  Installation offerte
                </p>
              </div>
              <p className="text-[15px] text-foreground/90 leading-relaxed">
                {hebergementLocal.conditionPrix}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Ce qui rend Florence différente ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-7 h-7 text-accent-green" />
              Ce qui rend Florence différente
            </h2>
          </AnimatedSection>

          {/* Desktop table */}
          <AnimatedSection delay={0.1}>
            <div className="hidden md:block rounded-2xl overflow-hidden border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-accent-red/10 text-accent-red font-semibold">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4" /> Un logiciel classique
                      </div>
                    </th>
                    <th className="p-4 text-left bg-accent-green/10 text-accent-green font-semibold">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" /> Florence
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparaison.map((row, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="p-4 text-foreground-muted text-[15px]">
                        {row.logiciel}
                      </td>
                      <td className="p-4 text-foreground text-[15px] font-medium">
                        {row.florence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {comparaison.map((row, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div className="rounded-xl overflow-hidden border border-white/5">
                  <div className="p-3 bg-accent-red/5 border-b border-white/5">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                      <p className="text-foreground-muted text-sm">
                        {row.logiciel}
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-accent-green/5">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <p className="text-foreground text-sm font-medium">
                        {row.florence}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planning déploiement ── */}
      <section className="py-16 px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-7 h-7 text-accent-blue" />
              Planning de déploiement
            </h2>
          </AnimatedSection>

          {/* Vertical timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-blue/50 to-accent-green" />

            {planningFlorence.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative flex items-start gap-4 md:gap-6 mb-6 last:mb-0">
                  <div className="relative z-10 w-8 md:w-12 flex justify-center flex-shrink-0">
                    <div
                      className={`w-3 h-3 rounded-full ring-4 ring-background mt-1.5 ${
                        i === planningFlorence.length - 1
                          ? "bg-accent-green"
                          : "bg-accent-blue"
                      }`}
                    />
                  </div>
                  <div className="flex-1 p-4 md:p-5 rounded-2xl bg-background border border-white/5 -mt-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">
                        {step.etape}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-foreground-muted">
                        {step.duree}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
