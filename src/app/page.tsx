"use client";

import NavDots from "@/components/NavDots";
import HeroSection from "@/components/HeroSection";
import ContexteSection from "@/components/ContexteSection";
import ProblemesSection from "@/components/ProblemesSection";
import AttentesSection from "@/components/AttentesSection";
import ReponseSection from "@/components/ReponseSection";
import ConcretementSection from "@/components/ConcretementSection";
import TimelineSection from "@/components/TimelineSection";
import OutilsSection from "@/components/OutilsSection";
import DeploiementSection from "@/components/DeploiementSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <NavDots />
      <main>
        <HeroSection />
        <ContexteSection />
        <ProblemesSection />
        <AttentesSection />
        <ReponseSection />
        <ConcretementSection />
        <TimelineSection />
        <OutilsSection />
        <DeploiementSection />
        <FooterSection />
      </main>
    </>
  );
}
