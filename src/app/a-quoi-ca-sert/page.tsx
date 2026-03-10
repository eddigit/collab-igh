"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import FooterSection from "@/components/FooterSection";
import {
  aqcsIntro,
  scenarioAvant,
  scenarioApres,
  alertes,
  impactCozon,
  impactImbert,
  impactDirecteurs,
  tableauComparatif,
} from "@/data/igh";
import {
  Phone,
  MessageCircle,
  Bell,
  X,
  Check,
  Clock,
  Timer,
  User,
  Building2,
  Users,
} from "lucide-react";

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

function ImpactCard({
  titre,
  description,
  icon: Icon,
  color,
  delay,
}: {
  titre: string;
  description: string;
  icon: React.ElementType;
  color: string;
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <div className="h-full p-6 md:p-8 rounded-2xl bg-background-alt border border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-xl ${color}`}>
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold">{titre}</h3>
        </div>
        <p className="text-foreground-muted text-[15px] leading-relaxed">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
}

export default function AQuoiCaSertPage() {
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
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              {aqcsIntro.titre}
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
              {aqcsIntro.sousTitre}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Avant / Après */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {/* AVANT */}
            <AnimatedSection delay={0.1}>
              <div className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent-red/5 to-transparent border border-accent-red/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-accent-red/10">
                    <Phone className="w-5 h-5 text-accent-red" />
                  </div>
                  <h2 className="text-xl font-bold text-accent-red">
                    {scenarioAvant.titre}
                  </h2>
                </div>
                <p className="text-foreground-muted text-[15px] leading-relaxed mb-6">
                  {scenarioAvant.description}
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-accent-red">
                    <Timer className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      {scenarioAvant.duree}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-accent-red">
                    <span className="text-sm font-semibold">
                      {scenarioAvant.etablissements} EHPAD
                    </span>
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
                  <h2 className="text-xl font-bold text-accent-green">
                    {scenarioApres.titre}
                  </h2>
                </div>
                <p className="text-foreground-muted text-[15px] leading-relaxed mb-4">
                  {scenarioApres.description}
                </p>
                <ul className="space-y-2.5 mb-4">
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
                <p className="text-accent-green font-semibold text-sm mb-4">
                  {scenarioApres.conclusion}
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-accent-green">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      {scenarioApres.duree}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-accent-green">
                    <span className="text-sm font-semibold">
                      {scenarioApres.etablissements} EHPAD
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Alertes temps réel */}
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Et si quelque chose ne va pas&nbsp;?
            </h2>
            <p className="text-center text-foreground-muted text-lg mb-8">
              Vous n&apos;attendez pas lundi. Le collaborateur vous alerte en temps réel&nbsp;:
            </p>
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

          {/* Impact cards */}
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Ce que ça <span className="text-accent-green">change</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <ImpactCard
              titre={impactCozon.titre}
              description={impactCozon.description}
              icon={User}
              color="bg-accent-blue/10 text-accent-blue"
              delay={0.1}
            />
            <ImpactCard
              titre={impactImbert.titre}
              description={impactImbert.description}
              icon={Building2}
              color="bg-accent-green/10 text-accent-green"
              delay={0.2}
            />
            <ImpactCard
              titre={impactDirecteurs.titre}
              description={impactDirecteurs.description}
              icon={Users}
              color="bg-accent-blue/10 text-accent-blue"
              delay={0.3}
            />
          </div>

          {/* Tableau comparatif */}
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Avant / Après
            </h2>
          </AnimatedSection>

          {/* Desktop table */}
          <AnimatedSection delay={0.1}>
            <div className="hidden md:block rounded-2xl overflow-hidden border border-white/5 mb-8">
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
                      <td className="p-4 text-foreground-muted text-[15px]">
                        {row.sans}
                      </td>
                      <td className="p-4 text-foreground text-[15px] font-medium">
                        {row.avec}
                      </td>
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
                      <p className="text-foreground text-sm font-medium">
                        {row.avec}
                      </p>
                    </div>
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
