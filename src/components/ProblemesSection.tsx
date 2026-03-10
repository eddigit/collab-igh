"use client";

import AnimatedSection from "./AnimatedSection";
import { problemes } from "@/data/igh";
import {
  FileQuestion,
  FileWarning,
  MailX,
  Inbox,
  UserX,
  CircleDollarSign,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FileQuestion,
  FileWarning,
  MailX,
  Inbox,
  UserX,
  CircleDollarSign,
};

export default function ProblemesSection() {
  return (
    <section id="problemes" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Ce que vous nous avez <span className="text-accent-red">dit</span>
          </h2>
          <p className="text-center text-foreground-muted text-lg max-w-2xl mx-auto mb-16">
            6 problèmes identifiés. Aucun n&apos;est une fatalité.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemes.map((probleme, i) => {
            const Icon = iconMap[probleme.icon] || FileQuestion;
            return (
              <AnimatedSection key={probleme.id} delay={i * 0.1}>
                <div className="h-full p-6 rounded-2xl bg-background-alt border border-white/5 hover:border-accent-red/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-accent-red/10 text-accent-red group-hover:bg-accent-red/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-foreground-muted uppercase tracking-wider">
                      Problème {probleme.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{probleme.titre}</h3>
                  <p className="text-foreground-muted text-[15px] leading-relaxed">
                    {probleme.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
