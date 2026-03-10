"use client";

import AnimatedSection from "./AnimatedSection";
import { citationsImbert } from "@/data/igh";
import { Quote } from "lucide-react";

export default function AttentesSection() {
  return (
    <section id="attentes" className="py-24 px-6 bg-background-alt relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-green rounded-full" />

      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Ce que vous attendez
          </h2>
          <p className="text-center text-foreground-muted text-lg mb-16">
            Les mots de M.&nbsp;Imbert
          </p>
        </AnimatedSection>

        <div className="space-y-10">
          {citationsImbert.map((citation, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <blockquote className="relative pl-8 md:pl-12 border-l-4 border-accent-blue/50">
                <Quote className="absolute -left-3 -top-2 w-6 h-6 text-accent-blue/30" />
                <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 italic">
                  &ldquo;{citation}&rdquo;
                </p>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
