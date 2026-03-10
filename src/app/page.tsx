"use client";

import HeroSection from "@/components/HeroSection";
import ContexteSection from "@/components/ContexteSection";
import ProblemesSection from "@/components/ProblemesSection";
import AttentesSection from "@/components/AttentesSection";
import TimelineSection from "@/components/TimelineSection";
import OutilsSection from "@/components/OutilsSection";
import DeploiementSection from "@/components/DeploiementSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContexteSection />
      <ProblemesSection />
      <AttentesSection />
      <TimelineSection />
      <OutilsSection />
      <DeploiementSection />
      <FooterSection />
    </main>
  );
}
