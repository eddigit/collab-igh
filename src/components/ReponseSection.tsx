"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { axes } from "@/data/igh";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReponseSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="reponse" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-center text-foreground-muted text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
            Vous n&apos;avez pas besoin d&apos;un logiciel de plus.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Votre <span className="text-accent-green">collaborateur IA</span>
          </h2>
          <p className="text-center text-foreground-muted text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            Quelqu&apos;un qui est là tous les jours, qui connaît vos 20 établissements, et qui ne lâche rien.
          </p>
        </AnimatedSection>

        {/* Accordéon */}
        <div className="space-y-3">
          {axes.map((axe, i) => (
            <AnimatedSection key={axe.id} delay={i * 0.08}>
              <div className="rounded-2xl bg-background-alt border border-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === axe.id ? null : axe.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="text-2xl md:text-3xl">{axe.emoji}</span>
                    <h3 className="text-lg md:text-xl font-semibold">{axe.titre}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground-muted transition-transform duration-300 flex-shrink-0 ${
                      openId === axe.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openId === axe.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                        <ul className="space-y-3 mb-4">
                          {axe.points.map((point, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-3 text-foreground-muted text-[15px] leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                        {axe.preuve && (
                          <div className="mt-4 p-4 rounded-xl bg-accent-green/5 border border-accent-green/10">
                            <p className="text-sm font-medium text-accent-green">
                              Preuve&nbsp;: {axe.preuve}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
