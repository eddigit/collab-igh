"use client";

import { footer } from "@/data/igh";
import { Phone, Info } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-16 px-6 bg-background-alt border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Phone className="w-5 h-5 text-accent-blue" />
          <p className="text-lg font-medium">{footer.contact}</p>
        </div>

        <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-background/50 border border-white/5">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-foreground-muted mt-0.5 flex-shrink-0" />
            <p className="text-foreground-muted text-sm leading-relaxed text-left">
              {footer.apiNote}
            </p>
          </div>
        </div>

        <p className="mt-8 text-foreground-muted/40 text-xs">
          Document confidentiel — Groupe IGH
        </p>
      </div>
    </footer>
  );
}
