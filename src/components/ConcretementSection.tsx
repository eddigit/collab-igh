"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  scenarioAvant,
  scenarioApres,
  alertes,
  tableauComparatif,
} from "@/data/igh";
import { Phone, MessageCircle, Bell, X, Check, Clock, Timer } from "lucide-react";

function AlertNotification({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, scale: 1 }
          : { opacity: 0, x: 60, scale: 0.9 }
      }
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-start gap-3 p-4 rounded-xl bg-background border border-accent-blue/20 shadow-lg shadow-accent-blue/5"
    >
      <div className="p-1.5 rounded-lg bg-accent-blue/10 flex-shrink-0">
        <Bell className="w-4 h-4 text-accent-blue" />
      </div>
      <p className="text-sm text-foreground/90 leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function ConcretementSection() {
  const [visibleAlerts, setVisibleAlerts] = useState(0);
  const alertsRef = useRef(null);
  const alertsInView = useInView(alertsRef, { once: true });

  useEffect(() => {
    if (!alertsInView) return;
    const timers = alertes.map((_, i) =>
      setTimeout(() => setVisibleAlerts(i + 1), (i + 1) * 800)
    );
    return () => timers.forEach(clearTimeout);
  }, [alertsInView]);

  return (
    <section id="concretement" className="py-24 px-6 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Concrètement, à quoi ça <span className="text-accent-blue">sert</span>&nbsp;?
          </h2>
          <p className="text-center text-foreground-muted text-lg mb-16">
            Le même lundi matin. Deux réalités.
          </p>
        </AnimatedSection>

        {/* Avant / Après */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* AVANT */}
          <AnimatedSection delay={0.1}>
            <div className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent-red/5 to-transparent border border-accent-red/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-accent-red/10">
                  <Phone className="w-5 h-5 text-accent-red" />
                </div>
                <h3 className="text-xl font-bold text-accent-red">
                  {scenarioAvant.titre}
                </h3>
              </div>
              <p className="text-foreground-muted text-[15px] leading-relaxed mb-6">
                {scenarioAvant.description}
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-accent-red">
                  <Timer className="w-4 h-4" />
                  <span className="text-sm font-semibold">{scenarioAvant.duree}</span>
                </div>
                <div className="flex items-center gap-2 text-accent-red">
                  <span className="text-sm font-semibold">{scenarioAvant.etablissements} EHPAD</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* APRÈS */}
          <AnimatedSection delay={0.2}>
            <div className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent-green/5 to-transparent border border-accent-green/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-accent-green/10">
                  <MessageCircle className="w-5 h-5 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-accent-green">
                  {scenarioApres.titre}
                </h3>
              </div>
              <p className="text-foreground-muted text-[15px] leading-relaxed mb-4">
                {scenarioApres.description}
              </p>
              <ul className="space-y-2.5 mb-6">
                {scenarioApres.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-foreground/80 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-accent-green">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">{scenarioApres.duree}</span>
                </div>
                <div className="flex items-center gap-2 text-accent-green">
                  <span className="text-sm font-semibold">{scenarioApres.etablissements} EHPAD</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Alertes temps réel */}
        <AnimatedSection>
          <h3 className="text-2xl font-bold text-center mb-8">
            Alertes <span className="text-accent-blue">temps réel</span>
          </h3>
        </AnimatedSection>
        <div ref={alertsRef} className="max-w-2xl mx-auto space-y-4 mb-20">
          {alertes.map((alerte, i) => (
            <div key={i} className={visibleAlerts > i ? "" : "opacity-0"}>
              {visibleAlerts > i && (
                <AlertNotification text={alerte} delay={0} />
              )}
            </div>
          ))}
        </div>

        {/* Tableau comparatif */}
        <AnimatedSection>
          <h3 className="text-2xl font-bold text-center mb-8">
            Avant / Après
          </h3>
        </AnimatedSection>

        {/* Desktop table */}
        <AnimatedSection delay={0.1}>
          <div className="hidden md:block rounded-2xl overflow-hidden border border-white/5">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-accent-red/10 text-accent-red font-semibold">
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5" /> Sans le collaborateur
                    </div>
                  </th>
                  <th className="p-4 text-left bg-accent-green/10 text-accent-green font-semibold">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5" /> Avec le collaborateur
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableauComparatif.map((row, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="p-4 text-foreground-muted text-[15px]">{row.sans}</td>
                    <td className="p-4 text-foreground text-[15px] font-medium">{row.avec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {tableauComparatif.map((row, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="rounded-xl overflow-hidden border border-white/5">
                <div className="p-4 bg-accent-red/5 border-b border-white/5">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                    <p className="text-foreground-muted text-sm">{row.sans}</p>
                  </div>
                </div>
                <div className="p-4 bg-accent-green/5">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-sm font-medium">{row.avec}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
