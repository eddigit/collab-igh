// Données structurées — Budget Projet Florence / Groupe IGH

export const budgetMeta = {
  reference: "CDP-IGH-2026-001",
  date: "Mars 2026",
  tarifJournalier: "640€ HT",
  fraisDeplacement: "Inclus dans le tarif",
};

// ─── Phases de mise en place ───

export interface PhaseAuditRow {
  demiJournee: string;
  population: string;
  activites: string;
  tarif: string;
}

export interface PhaseJourRow {
  jour: string;
  activites: string;
  tarif: string;
}

export interface Phase {
  id: string;
  numero: string;
  titre: string;
  jours: string;
  total: string;
  offert?: boolean;
  description?: string;
  auditRows?: PhaseAuditRow[];
  jourRows?: PhaseJourRow[];
  note?: string;
}

export const phases: Phase[] = [
  {
    id: "phase0",
    numero: "Phase 0",
    titre: "Mobilisation & Cadrage",
    jours: "—",
    total: "Offert",
    offert: true,
    description:
      "Constitution COPIL, groupe WhatsApp, naissance de Florence, collecte documentaire.",
  },
  {
    id: "phase1",
    numero: "Phase 1",
    titre: "Diagnostic & Audit terrain",
    jours: "2 jours",
    total: "1\u202f280€ HT",
    auditRows: [
      {
        demiJournee: "J1 matin",
        population: "Direction (Imbert + Cozon)",
        activites:
          "Vision, facturation, obligations, KPIs, rapport idéal",
        tarif: "320€",
      },
      {
        demiJournee: "J1 après-midi",
        population: "DSI / Responsable IT",
        activites:
          "Titan, emails, ViaTrajectoire, réseau, contrats éditeurs",
        tarif: "320€",
      },
      {
        demiJournee: "J2 matin",
        population: "Directeur EHPAD pilote 1",
        activites:
          "Terrain\u00a0: Titan, courrier, emails, admissions, facturation",
        tarif: "320€",
      },
      {
        demiJournee: "J2 après-midi",
        population: "Directeur EHPAD pilote 2",
        activites: "Comparaison, écarts de pratiques",
        tarif: "320€",
      },
    ],
  },
  {
    id: "phase1b",
    numero: "Phase 1B",
    titre: "Analyse & Construction de Florence",
    jours: "4 jours",
    total: "2\u202f560€ HT",
    jourRows: [
      {
        jour: "J1",
        activites:
          "Analyse données terrain + Architecture fonctionnelle",
        tarif: "640€",
      },
      {
        jour: "J2",
        activites:
          "Construction socle IA\u00a0: connaissances IGH, 20 établissements, calendrier réglementaire",
        tarif: "640€",
      },
      {
        jour: "J3",
        activites:
          "Paramétrage automatismes\u00a0: alertes, relances, escalades, rapport du matin",
        tarif: "640€",
      },
      {
        jour: "J4",
        activites:
          "Tests + connexion APIs juridiques (Légifrance, Judilibre, BODACC, FINESS)",
        tarif: "640€",
      },
    ],
  },
  {
    id: "phase2",
    numero: "Phase 2",
    titre: "Intégration technique",
    jours: "4 jours",
    total: "2\u202f560€ HT",
    jourRows: [
      {
        jour: "J1",
        activites:
          "Connecteur Titan/TitanLink + surveillance emails (début)",
        tarif: "640€",
      },
      {
        jour: "J2",
        activites: "Surveillance 17 boîtes emails + ViaTrajectoire",
        tarif: "640€",
      },
      {
        jour: "J3",
        activites:
          "Rapport du matin consolidé 20 établissements → WhatsApp 10h",
        tarif: "640€",
      },
      {
        jour: "J4",
        activites: "Interface web Florence (tableau de bord)",
        tarif: "640€",
      },
    ],
  },
  {
    id: "phase3",
    numero: "Phase 3",
    titre: "Déploiement pilote & Formation",
    jours: "2 jours",
    total: "1\u202f280€ HT",
    jourRows: [
      {
        jour: "J1",
        activites: "Démo COPIL + déploiement EHPAD pilote 1",
        tarif: "640€",
      },
      {
        jour: "J2",
        activites:
          "Déploiement EHPAD pilote 2 + formation directeurs",
        tarif: "640€",
      },
    ],
    note: "+2 semaines de support à distance inclus.",
  },
];

// ─── Récapitulatif ───

export interface RecapRow {
  phase: string;
  jours: string;
  total: string;
  highlight?: boolean;
}

export const recapitulatif: RecapRow[] = [
  { phase: "Phase 0 — Cadrage + Naissance Florence", jours: "—", total: "Offert" },
  { phase: "Phase 1 — Audit terrain (4 demi-journées)", jours: "2", total: "1\u202f280€" },
  { phase: "Phase 1B — Analyse + Construction", jours: "4", total: "2\u202f560€" },
  { phase: "Phase 2 — Intégration technique", jours: "4", total: "2\u202f560€" },
  { phase: "Phase 3 — Pilote + Formation", jours: "2", total: "1\u202f280€" },
];

export const totaux = {
  totalHT: "7\u202f680€ HT",
  tva: "1\u202f536€",
  totalTTC: "9\u202f216€ TTC",
  totalJours: 12,
};

// ─── Conditions de règlement ───

export const conditionsReglement = [
  { echeance: "Acompte", montant: "3\u202f840€ (50%)", declencheur: "Signature du devis" },
  { echeance: "Solde", montant: "3\u202f840€ (50%)", declencheur: "Gate 3 validée" },
];

// ─── Abonnement mensuel ───

export const abonnementTarif = "180€ HT / mois / établissement";

export interface AbonnementRow {
  perimetre: string;
  etablissements: number;
  moisHT: string;
  anHT: string;
  highlight?: boolean;
}

export const abonnementOptions: AbonnementRow[] = [
  { perimetre: "Phase pilote (2-3 EHPAD)", etablissements: 3, moisHT: "540€", anHT: "6\u202f480€" },
  { perimetre: "Déploiement partiel (10 EHPAD)", etablissements: 10, moisHT: "1\u202f800€", anHT: "21\u202f600€" },
  {
    perimetre: "Déploiement complet (20 étab.)",
    etablissements: 20,
    moisHT: "3\u202f600€",
    anHT: "43\u202f200€",
    highlight: true,
  },
];

export const abonnementInclus = [
  "Florence 24/7\u00a0: surveillance emails, alertes, relances, rapport du matin",
  "Suivi facturation et impayés",
  "Monitoring ViaTrajectoire (admissions)",
  "Gestion courrier (scan → analyse)",
  "Accès APIs juridiques (Légifrance, Judilibre, BODACC, FINESS)",
  "Interface web de pilotage",
  "Mises à jour et évolutions",
  "Infrastructure et hébergement France",
  "Support via WhatsApp",
];

// ─── Comparaison Florence vs salarié ───

export interface ComparaisonRow {
  critere: string;
  florence: string;
  humain: string;
}

export const comparaisonSalarie: ComparaisonRow[] = [
  {
    critere: "Coût mensuel (20 étab.)",
    florence: "3\u202f600€ HT",
    humain: "~4\u202f500€ brut (salaire + charges)",
  },
  {
    critere: "Coût annuel",
    florence: "43\u202f200€",
    humain: "~70\u202f000€ (salaire chargé + CP + RTT + mutuelle)",
  },
  {
    critere: "Disponibilité",
    florence: "24h/24, 7j/7, 365 jours",
    humain: "35h/semaine, congés, arrêts maladie",
  },
  {
    critere: "Couverture",
    florence: "20 établissements simultanément",
    humain: "3-4 établissements max",
  },
  {
    critere: "Temps de réponse",
    florence: "Immédiat",
    humain: "Heures / jours",
  },
  {
    critere: "Compétences juridiques",
    florence: "Légifrance + Judilibre + BODACC + FINESS en temps réel",
    humain: "Pas de formation juridique",
  },
  {
    critere: "Surveillance emails 17 boîtes",
    florence: "24/7 automatique",
    humain: "Impossible humainement",
  },
  {
    critere: "Oubli / erreur",
    florence: "Jamais",
    humain: "Humain",
  },
  {
    critere: "Congés / remplacement",
    florence: "Aucun",
    humain: "5 semaines + RTT + maladie",
  },
  {
    critere: "Formation",
    florence: "Zéro — elle apprend toute seule",
    humain: "3-6 mois",
  },
  {
    critere: "Scalabilité",
    florence: "+1 établissement = +180€/mois",
    humain: "Saturation",
  },
];

// ─── Ce que 180€/mois représente ───

export const reperes = [
  { label: "180€/mois pour un EHPAD de 80 lits", value: "2,25€ par lit par mois" },
  { label: "Par lit par jour", value: "0,075€" },
  { label: "1 admission récupérée via ViaTrajectoire", value: "2\u202f500€/mois de revenus" },
  { label: "Florence se rembourse dès la 1ère admission sauvée", value: "ROI immédiat" },
  { label: "1 amende inspection évitée", value: "5\u202f000 à 50\u202f000€ économisés" },
];

// ─── ROI global annuel ───

export interface RoiCoutRow {
  label: string;
  montant: string;
  note?: string;
}

export interface RoiValeurRow {
  label: string;
  montant: string;
}

export const roiCouts: RoiCoutRow[] = [
  { label: "Mise en place", montant: "7\u202f680€ HT", note: "unique" },
  { label: "Abonnement 20 établissements", montant: "43\u202f200€/an" },
];

export const roiCoutTotal = "50\u202f880€";

export const roiValeurs: RoiValeurRow[] = [
  { label: "5 admissions récupérées/an", montant: "+150\u202f000€" },
  { label: "1 amende évitée/an", montant: "+5\u202f000 à 50\u202f000€" },
  { label: "Impayés récupérés plus vite", montant: "+20\u202f000 à 50\u202f000€" },
  { label: "Temps DG libéré (~2h/jour)", montant: "~25\u202f000€" },
];

export const roiValeurTotal = "+200\u202f000 à 275\u202f000€";

export const roiMultiplier = {
  annee1: "x4 à x5",
  annee2Plus: "x5 à x6",
};
