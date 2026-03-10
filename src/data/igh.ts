// Données structurées — Groupe IGH
// Issues de la réunion du 9 mars 2026 avec M. Imbert (PDG) et M. Cozon (DG délégué)

export const hero = {
  title: "Votre collaborateur IA dédié au groupe IGH",
  subtitle: "20 établissements. 1 collaborateur. 0 surprise.",
  cta: "Découvrir",
};

export const contexte = {
  description:
    "SAS IGH, société familiale créée en 2001. 17 EHPAD et 3 cliniques répartis sur tout le territoire français.",
  siege: "930 Route de Berre, 13090 Aix-en-Provence",
  chiffres: [
    { label: "Établissements", value: 20 },
    { label: "Lits", value: 1400, prefix: "~" },
    { label: "Régions", value: 6 },
    { label: "Années d'expérience", value: 25, prefix: "+" },
  ],
  etablissements: {
    ehpad: 17,
    cliniques: 3,
  },
};

export const problemes = [
  {
    id: 1,
    titre: "Pas de visibilité sur la facturation",
    icon: "FileQuestion",
    description:
      "80 lits par EHPAD, 80 factures chaque fin de mois, émises le 20, payables avant le 5 du mois suivant. Quand vous appelez un directeur pour savoir combien il a encaissé, la réponse c'est\u00a0: \"Ah, je ne sais pas.\"",
  },
  {
    id: 2,
    titre: "Les obligations administratives ne sont pas respectées",
    icon: "FileWarning",
    description:
      "Documents à remplir, deadlines à tenir, signalements à faire. Les directeurs ne le font pas — ou pas à temps. Résultat\u00a0: l'inspection du travail débarque, comme à La Rochelle, \"la rage entre les dents\". Des PV, des amendes, des problèmes évitables.",
  },
  {
    id: 3,
    titre: "Le courrier est maltraité",
    icon: "MailX",
    description:
      "Des courriers physiques arrivent dans les établissements — ARS, CPAM, préfecture, inspection du travail. Ils sont oubliés sur un bureau, pas ouverts, pas traités. Quand vous le découvrez, c'est souvent trop tard.",
  },
  {
    id: 4,
    titre: "Les emails des établissements ne sont pas suivis",
    icon: "Inbox",
    description:
      "Les boîtes mail des EHPAD reçoivent des messages importants — convocations, demandes d'information, relances administratives. Personne ne les surveille de manière systématique. Des emails critiques restent sans réponse pendant des jours, voire des semaines.",
  },
  {
    id: 5,
    titre: "Des admissions sont perdues",
    icon: "UserX",
    description:
      "Les demandes de placement arrivent via ViaTrajectoire. C'est le plus réactif qui emporte le morceau. Certains directeurs ne traitent pas les dossiers à temps. Chaque admission perdue, c'est ~2\u202f500\u202f€/mois de séjour en moins.",
  },
  {
    id: 6,
    titre: "Les impayés ne sont pas suivis",
    icon: "CircleDollarSign",
    description:
      "Pas de visibilité claire sur qui a payé et qui n'a pas payé. Pas de relances systématiques. L'argent traîne.",
  },
];

export const citationsImbert = [
  "Tous les matins à 10h, un rapport d'où est-ce qu'on en est.",
  "La condition, c'est que ce soit simple pour moi.",
  "Cadrer les directeurs et les directrices, gentiment.",
];

export const axes = [
  {
    id: 1,
    emoji: "🔒",
    titre: "Plus jamais de mauvaise surprise",
    points: [
      "Inspection du travail → Alerte 5 jours avant, relance 2 jours avant, escalade si pas fait",
      "Courrier préfecture → Photo par le directeur, analysé en secondes (expéditeur, objet, deadline, urgence)",
      "Emails critiques ARS/CPAM → Surveillance 24/7 de chaque boîte mail, alerte si pas traité sous 3 jours",
      "RGPD → Aucun accès données médicales, hébergement France, effacement 30 jours (sauf facturation 3 ans)",
    ],
    preuve:
      "La Rochelle n'aurait jamais eu lieu. Traçabilité complète.",
  },
  {
    id: 2,
    emoji: "🏆",
    titre: "Le groupe EHPAD le mieux piloté de France",
    points: [
      "Tableau de bord consolidé 20 établissements, mis à jour chaque jour, sur votre téléphone",
      "Chaque action, deadline, document tracé. Données objectives, pas des \"je crois que…\"",
    ],
    preuve:
      "Aucun autre groupe EHPAD familial de cette taille n'a ça.",
  },
  {
    id: 3,
    emoji: "✨",
    titre: "Une longueur d'avance sur vos concurrents",
    points: [
      "Le collaborateur comprend un document, pose les bonnes questions, relance au bon moment",
      "ViaTrajectoire\u00a0: détection temps réel, alerte directeur, réactivité maximale",
    ],
    preuve:
      "Le plus réactif emporte l'admission. Avec ce collaborateur, c'est toujours vous.",
  },
  {
    id: 4,
    emoji: "🛋️",
    titre: "Vous pilotez, il exécute",
    points: [
      "1 rapport à 10h, automatique. Zéro appel.",
      "Il relance, escalade, trace. Vous gérez les exceptions.",
      "WhatsApp. Zéro formation. Le directeur sait déjà l'utiliser.",
    ],
    preuve: null,
  },
  {
    id: 5,
    emoji: "💰",
    titre: "Chaque euro compte — voici les chiffres",
    points: [
      "Amende inspection évitée\u00a0: 5\u202f000 à 50\u202f000\u202f€ économisés par incident",
      "1 admission récupérée\u00a0: ~2\u202f500\u202f€/mois",
      "5 admissions/an sur le groupe\u00a0: ~150\u202f000\u202f€/an de CA supplémentaire",
      "Impayés\u00a0: relances systématiques, trésorerie améliorée",
      "Temps DG\u00a0: libéré pour tâches à valeur ajoutée",
    ],
    preuve: null,
  },
  {
    id: 6,
    emoji: "🤝",
    titre: "Un collaborateur, pas un logiciel",
    points: [
      "Il a un prénom (que vous choisissez). Il apprend votre vocabulaire, vos habitudes.",
      "Il ne remplace pas les directeurs, il les aide. Allié, pas contrôleur.",
      "\"Cadrer les directeurs, gentiment\" — c'est exactement ce qu'il fait.",
      "Équipe dédiée\u00a0: Gilles sur le terrain, Léa dans le groupe.",
    ],
    preuve: null,
  },
];

export const roiChiffres = [
  { label: "Amende inspection évitée", value: "5k–50k€", description: "économisés par incident" },
  { label: "1 admission récupérée", value: "2 500€", description: "par mois de séjour" },
  { label: "5 admissions/an récupérées", value: "150 000€", description: "de CA supplémentaire/an" },
];

export const scenarioAvant = {
  titre: "AVANT — Le lundi matin, 10h",
  description:
    "Vous décrochez le téléphone. Vous appelez La Rochelle. Pas de réponse. Vous appelez Aix. Le directeur cherche ses chiffres. Vous rappelez La Rochelle. On vous dit \"je crois que c'est bon\". Vous raccrochez sans savoir si c'est vrai. 45 minutes. 2 établissements sur 17. Pour les 15 autres, vous espérez.",
  duree: "45 min",
  etablissements: "2 / 17",
};

export const scenarioApres = {
  titre: "APRÈS — Le lundi matin, 10h",
  description: "Vous ouvrez WhatsApp. Le rapport est là. Les 17 EHPAD\u00a0:",
  items: [
    "Taux d'occupation\u00a0: 92%, 87%, 78%…",
    "Facturation\u00a0: émise / en attente / en retard",
    "Impayés\u00a0: 3 familles en retard >30 jours (noms, montants, relances envoyées)",
    "Obligations admin\u00a0: 2 documents cette semaine — directeurs alertés",
    "Admissions\u00a0: 4 ViaTrajectoire hier, 3 traitées, 1 en attente — directeur relancé",
    "Courrier\u00a0: recommandé ARS Béziers, scanné, analysé — conformité, deadline 15 jours",
  ],
  duree: "3 min",
  etablissements: "17 / 17",
};

export const alertes = [
  "L'EHPAD de Grenoble n'a pas soumis le document CPAM dû demain. Voulez-vous que M.\u00a0Cozon l'appelle\u00a0?",
  "Nouvelle admission ViaTrajectoire pour Marseille. Directeur pas consulté depuis 24h. Je relance.",
  "12 factures non encaissées >45 jours sur Aix. Montant\u00a0: 34\u202f200\u202f€. Relances envoyées.",
];

export const tableauComparatif = [
  {
    sans: "Vous appelez, personne ne sait",
    avec: "Vous ouvrez WhatsApp, tout est là",
  },
  {
    sans: "Documents en retard → amende",
    avec: "Alerte 5j avant, relance, escalade",
  },
  {
    sans: "Courrier ARS dort 3 semaines",
    avec: "Scanné, analysé, deadline le jour même",
  },
  {
    sans: "Admissions inaperçues",
    avec: "Détectées temps réel, directeur relancé",
  },
  {
    sans: "Impayés traînent des mois",
    avec: "Relances systématiques, suivi au centime",
  },
  {
    sans: "M.\u00a0Cozon au téléphone toute la journée",
    avec: "Il gère uniquement les exceptions",
  },
  {
    sans: "Vous espérez que ça tourne",
    avec: "Vous savez que ça tourne",
  },
];

export const timeline = {
  equipe: [
    { nom: "M.\u00a0Imbert", role: "Direction, validation, orientations stratégiques" },
    { nom: "M.\u00a0Cozon", role: "Opérationnel, connaissance terrain, priorités" },
    { nom: "Gilles Korzec", role: "Architecte de la solution, audit, formation" },
    { nom: "Léa", role: "Admin, juridique, suivi projet, recherches API" },
    { nom: "Votre collaborateur IGH", role: "Le nouveau (vous choisissez son prénom)" },
  ],
  jours: [
    {
      jour: "Jour 1",
      titre: "Siège Aix avec M.\u00a0Imbert + M.\u00a0Cozon",
      details: [
        "Cycle facturation, obligations admin, relations siège-établissements",
        "Le soir\u00a0: synthèse structurée dans le groupe. Vous corrigez, il apprend.",
      ],
    },
    {
      jour: "Jour 2",
      titre: "DSI / Responsable informatique",
      details: [
        "Cartographie Titan, emails, ViaTrajectoire, réseau",
        "Le soir\u00a0: raisonnement sur connexions possibles, points de blocage, pistes.",
      ],
    },
    {
      jour: "Jour 3",
      titre: "Un EHPAD terrain",
      details: [
        "Quotidien directeur\u00a0: Titan, courrier, emails, admissions",
        "Le soir\u00a0: alertes et contrôles adaptés à CET établissement.",
      ],
    },
    {
      jour: "Jour 4",
      titre: "Second établissement",
      details: [
        "Comparaison, ajustement",
        "Vue consolidée siège + adaptation par établissement.",
      ],
    },
  ],
  atelierJours: 8,
  totalJours: 12,
};

export const outils = [
  { nom: "Titan / TitanLink", description: "Facturation, lits, encaissements", icon: "Database" },
  { nom: "Boîtes emails 17 EHPAD", description: "Surveillance, détection, alertes", icon: "Mail" },
  { nom: "ViaTrajectoire", description: "Demandes d'admission temps réel", icon: "Route" },
  { nom: "Rapport du matin", description: "Consolidation automatique chaque jour à 10h", icon: "FileText" },
];

export const deploiement = [
  "Démo avec vrais établissements, vrais chiffres",
  "2-3 EHPAD pilotes",
  "Puis les 20",
];

export const footer = {
  contact: "Coach Digital Paris — Gilles Korzec — 06 52 34 51 80",
  apiNote:
    "Qu'est-ce qu'une API\u00a0? Une API est simplement un pont entre deux logiciels. C'est ce qui permet à votre collaborateur de lire les données de Titan sans se connecter manuellement — comme un assistant qui consulte un dossier dans une armoire, sauf que l'armoire est un logiciel.",
};
