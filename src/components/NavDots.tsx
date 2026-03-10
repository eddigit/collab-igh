"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Accueil" },
  { id: "contexte", label: "Contexte" },
  { id: "problemes", label: "Problèmes" },
  { id: "attentes", label: "Attentes" },
  { id: "reponse", label: "La réponse" },
  { id: "concretement", label: "Concrètement" },
  { id: "timeline", label: "Timeline" },
  { id: "outils", label: "Outils" },
  { id: "deploiement", label: "Déploiement" },
];

export default function NavDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3 justify-end"
          title={label}
        >
          <span className="text-xs text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "w-3 h-3 bg-accent-blue"
                : "w-2 h-2 bg-foreground-muted/40 group-hover:bg-foreground-muted"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
