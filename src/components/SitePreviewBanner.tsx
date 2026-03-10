"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, Gift, Globe, Sparkles } from "lucide-react";

const PREVIEW_URL = "https://igh-2026.preview.emergentagent.com/";

/**
 * Full section version — used on home page & accompagnement.
 * Shows a large CTA with iframe preview of the new site.
 */
export function SitePreviewSection({ variant = "default" }: { variant?: "default" | "compact" }) {
  if (variant === "compact") {
    return <SitePreviewCompact />;
  }

  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-green/5 via-transparent to-accent-blue/5" />

      <div className="relative max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/20 mb-6">
              <Gift className="w-4 h-4 text-accent-green" />
              <span className="text-sm font-semibold text-accent-green">
                Offert avec le projet Florence
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Votre nouveau site internet
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed max-w-3xl mx-auto">
              La refonte complète du site du Groupe IGH est{" "}
              <span className="text-accent-green font-semibold">offerte</span>{" "}
              dans le cadre de l&apos;engagement global de la solution Florence.
              Moderne, rapide, avec Florence intégrée en chatbot sur les 20 établissements.
            </p>
          </div>
        </AnimatedSection>

        {/* Site preview */}
        <AnimatedSection delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-background-alt shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-foreground-muted max-w-md mx-auto">
                  <Globe className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{PREVIEW_URL}</span>
                </div>
              </div>
            </div>

            {/* Iframe preview */}
            <div className="relative aspect-[16/9] md:aspect-[16/8]">
              <iframe
                src={PREVIEW_URL}
                title="Aperçu du nouveau site IGH"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
              {/* Overlay to prevent interaction & encourage click */}
              <a
                href={PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-transparent hover:bg-black/20 transition-colors group"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="px-6 py-3 rounded-full bg-accent-green text-white font-semibold text-base shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  Voir le site en live
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="mt-8 text-center">
            <a
              href={PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-green text-white rounded-full text-lg font-semibold hover:bg-accent-green/90 transition-colors shadow-lg shadow-accent-green/20"
            >
              <Sparkles className="w-5 h-5" />
              Découvrir le nouveau site IGH
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="mt-4 text-sm text-foreground-muted">
              Site en construction — aperçu de la version 2026
            </p>
          </div>
        </AnimatedSection>

        {/* Key points */}
        <AnimatedSection delay={0.5}>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Refonte offerte",
                desc: "Intégralement prise en charge si engagement global sur la solution Florence",
                icon: Gift,
              },
              {
                title: "Florence en chatbot",
                desc: "Intégrée nativement sur le site du groupe et les 20 établissements",
                icon: Sparkles,
              },
              {
                title: "20 pages établissements",
                desc: "Chaque EHPAD et clinique avec sa page dédiée, ses infos et son chatbot",
                icon: Globe,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-background-alt border border-white/5 text-center"
              >
                <item.icon className="w-6 h-6 text-accent-green mx-auto mb-3" />
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/**
 * Compact banner version — used on argumentaire, budget, etc.
 */
function SitePreviewCompact() {
  return (
    <AnimatedSection>
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent-green/10 to-accent-blue/5 border border-accent-green/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-accent-green" />
              <p className="text-xs font-semibold text-accent-green uppercase tracking-wider">
                Bonus — Offert avec la solution Florence
              </p>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Refonte complète du site internet IGH
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Un nouveau site moderne pour le groupe et ses 20 établissements, avec Florence
              en chatbot intégré. Offert dans le cadre de l&apos;engagement global.
            </p>
          </div>
          <a
            href={PREVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-green text-white rounded-full font-semibold hover:bg-accent-green/90 transition-colors whitespace-nowrap flex-shrink-0 shadow-lg shadow-accent-green/20"
          >
            Voir l&apos;aperçu
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
