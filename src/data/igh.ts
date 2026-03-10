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

// ─── ARGUMENTAIRE SONCAS — Tableaux Problème / Caractéristique / Avantage / Preuve ───

export interface SoncasRow {
  probleme: string;
  caracteristique: string;
  avantage: string;
  preuve: string;
}

export interface SoncasSection {
  id: number;
  emoji: string;
  titre: string;
  couleur: "blue" | "green" | "red";
  rows: SoncasRow[];
  conclusion: string;
}

export const argumentaireIntro = {
  titre: "Pourquoi un collaborateur IA dédié est la bonne réponse",
  description:
    "Vous n'avez pas besoin d'un logiciel de plus. Vous n'avez pas besoin d'un consultant qui vient, fait un rapport, et repart. Vous avez besoin de quelqu'un qui est là tous les jours, qui connaît vos 20 établissements, et qui ne lâche rien.",
  sousTitre: "Voici pourquoi cette approche répond à chacune de vos préoccupations\u00a0:",
};

export const soncasSections: SoncasSection[] = [
  {
    id: 1,
    emoji: "🔒",
    titre: "Plus jamais de mauvaise surprise",
    couleur: "blue",
    rows: [
      {
        probleme:
          "L'inspection du travail débarque parce qu'un directeur a oublié un document",
        caracteristique:
          "Il connaît chaque deadline réglementaire de chaque établissement. Il alerte 5 jours avant, relance 2 jours avant, et vous prévient si ce n'est pas fait.",
        avantage: "",
        preuve:
          "L'EHPAD de La Rochelle ne vous aurait jamais valu cette visite — le collaborateur aurait détecté le retard et escaladé avant la deadline",
      },
      {
        probleme:
          "Un courrier de la préfecture dort sur un bureau pendant 3 semaines",
        caracteristique:
          "Le directeur le photographie, le collaborateur l'analyse en quelques secondes\u00a0: expéditeur, objet, deadline, urgence. Rien ne passe entre les mailles.",
        avantage: "",
        preuve:
          "Traçabilité complète\u00a0: vous savez quel courrier est arrivé où, quand, et s'il a été traité",
      },
      {
        probleme:
          "Des emails critiques (ARS, CPAM) restent sans réponse",
        caracteristique:
          "Il surveille les boîtes mail de chaque établissement 24/7. Email urgent non traité depuis 3 jours\u00a0? Alerte automatique.",
        avantage: "",
        preuve:
          "Aucun email ne peut plus «\u00a0dormir\u00a0» sans que vous le sachiez",
      },
      {
        probleme: "Données sensibles — le RGPD",
        caracteristique:
          "Aucun accès aux données médicales. Hébergement 100% en France, local si vous le souhaitez. Effacement automatique après 30 jours (sauf facturation\u00a0: 3 ans).",
        avantage: "",
        preuve:
          "M.\u00a0Cozon le sait\u00a0: en tant qu'ancien référent RGPD, il pourra vérifier lui-même la conformité de l'architecture",
      },
    ],
    conclusion: "Vous dormez tranquille. Plus de mauvaise surprise.",
  },
  {
    id: 2,
    emoji: "🏆",
    titre: "Le groupe EHPAD le mieux piloté de France",
    couleur: "blue",
    rows: [
      {
        probleme:
          "Aujourd'hui, le pilotage du groupe repose sur des coups de téléphone et des estimations",
        caracteristique:
          "Demain, vous avez un tableau de bord consolidé de 20 établissements, mis à jour chaque jour, accessible depuis votre téléphone",
        avantage: "",
        preuve:
          "Aucun autre groupe EHPAD familial de cette taille n'a ça aujourd'hui",
      },
      {
        probleme: "Les directeurs font ce qu'ils veulent",
        caracteristique:
          "Chaque action, chaque deadline, chaque document est tracé. Vous avez les données objectives pour vos réunions. Pas des «\u00a0je crois que…\u00a0»",
        avantage: "",
        preuve:
          "Quand vous recevez l'ARS ou l'inspection, vous ouvrez votre dashboard\u00a0: tout est à jour, preuves à l'appui",
      },
    ],
    conclusion:
      "IGH devient le groupe EHPAD familial le mieux piloté de France.",
  },
  {
    id: 3,
    emoji: "✨",
    titre: "Une longueur d'avance sur vos concurrents",
    couleur: "blue",
    rows: [
      {
        probleme:
          "«\u00a0On a toujours fait comme ça\u00a0» — appeler, relancer à la main, espérer que ce soit fait",
        caracteristique:
          "Le collaborateur IA est une rupture\u00a0: il comprend un document, il sait poser les bonnes questions, il sait relancer au bon moment. Ce n'est pas un logiciel qu'on remplit — c'est un collaborateur qui agit.",
        avantage: "",
        preuve:
          "Vous le verrez dès le premier jour dans le groupe WhatsApp\u00a0: il pose des questions intelligentes, il retient tout, il s'adapte à votre façon de travailler",
      },
      {
        probleme:
          "ViaTrajectoire\u00a0: les demandes d'admission passent inaperçues",
        caracteristique:
          "Le collaborateur détecte chaque nouvelle demande en temps réel et alerte le directeur concerné. Plus rapide que n'importe quel humain.",
        avantage: "",
        preuve:
          "Le groupe le plus réactif emporte l'admission. Avec ce collaborateur, c'est toujours vous.",
      },
    ],
    conclusion:
      "Vous prenez une avance que vos concurrents n'ont pas.",
  },
  {
    id: 4,
    emoji: "🛋️",
    titre: "Vous pilotez, il exécute",
    couleur: "green",
    rows: [
      {
        probleme:
          "Appeler 17 directeurs un par un pour avoir des chiffres",
        caracteristique:
          "1 rapport à 10h, tous les matins, automatique. Vous ouvrez, vous savez. Zéro appel, zéro relance, zéro «\u00a0je te rappelle\u00a0»",
        avantage: "",
        preuve: "",
      },
      {
        probleme:
          "Courir après les directeurs pour savoir si le boulot est fait",
        caracteristique:
          "Le collaborateur court pour vous. Il relance, il escalade, il trace.",
        avantage: "",
        preuve:
          "Vous ne gérez que les exceptions. Le reste est automatique.",
      },
      {
        probleme: "«\u00a0C'est compliqué, il faut se former\u00a0»",
        caracteristique:
          "WhatsApp. Le directeur sait déjà l'utiliser. Zéro installation, zéro formation lourde.",
        avantage: "",
        preuve:
          "Votre collaborateur parle en français, sur WhatsApp, comme un collègue.",
      },
    ],
    conclusion:
      "M.\u00a0Cozon récupère des heures chaque semaine. M.\u00a0Imbert a la tranquillité d'esprit.",
  },
  {
    id: 5,
    emoji: "💰",
    titre: "Chaque euro compte — voici les chiffres",
    couleur: "green",
    rows: [
      {
        probleme: "1 amende d'inspection du travail",
        caracteristique: "Évitée grâce au contrôle des deadlines",
        avantage: "",
        preuve: "5\u202f000 à 50\u202f000\u202f€ économisés par incident",
      },
      {
        probleme: "1 admission perdue via ViaTrajectoire",
        caracteristique: "Récupérée grâce à la détection en temps réel",
        avantage: "",
        preuve: "~2\u202f500\u202f€/mois de revenus par admission",
      },
      {
        probleme: "5 admissions récupérées par an sur le groupe",
        caracteristique: "",
        avantage: "",
        preuve: "~150\u202f000\u202f€/an de CA supplémentaire",
      },
      {
        probleme: "Impayés qui traînent 3-6 mois",
        caracteristique:
          "Relances systématiques dès le 1er retard",
        avantage: "",
        preuve: "Trésorerie améliorée immédiatement",
      },
      {
        probleme: "Temps de M.\u00a0Cozon passé au téléphone",
        caracteristique: "Libéré pour des tâches à valeur ajoutée",
        avantage: "",
        preuve: "Le DG pilote au lieu de courir",
      },
    ],
    conclusion:
      "L'investissement est récupéré dès les premiers mois.",
  },
  {
    id: 6,
    emoji: "🤝",
    titre: "Un collaborateur, pas un logiciel",
    couleur: "blue",
    rows: [
      {
        probleme:
          "«\u00a0Encore un outil informatique que personne ne va utiliser\u00a0»",
        caracteristique:
          "Ce n'est pas un outil. C'est un collaborateur. Il a un prénom, que vous choisissez. Il apprend votre vocabulaire, vos habitudes.",
        avantage: "",
        preuve:
          "Dès le premier jour dans le groupe WhatsApp, vous verrez\u00a0: il parle comme un collègue, pas comme une machine",
      },
      {
        probleme: "Les directeurs vont résister au changement",
        caracteristique:
          "Le collaborateur ne les remplace pas, il les aide. Il leur rappelle gentiment. C'est un allié, pas un contrôleur.",
        avantage: "",
        preuve:
          "«\u00a0Cadrer les directeurs, gentiment\u00a0» — c'est exactement ce qu'il fait",
      },
      {
        probleme: "Gilles et Léa, on les connaît à peine",
        caracteristique:
          "Gilles est sur le terrain avec vous pendant l'audit. Léa est dans le groupe WhatsApp. Vous avez une équipe dédiée, joignable, réactive.",
        avantage: "",
        preuve: "Pas un prestataire lointain. Une équipe engagée.",
      },
    ],
    conclusion:
      "C'est un partenariat, pas un contrat de prestation.",
  },
];

// ─── PAGE "À QUOI ÇA SERT" — Contenu enrichi ───

export const aqcsIntro = {
  titre: "Concrètement, à quoi ça sert\u00a0?",
  sousTitre:
    "M.\u00a0Imbert, vous avez posé la question à M.\u00a0Cozon pendant la réunion\u00a0: «\u00a0À quoi ça va nous servir\u00a0?\u00a0» Voici la réponse, sans détour.",
};

export const scenarioAvant = {
  titre: "Le lundi matin, 10h. Aujourd'hui\u00a0:",
  description:
    "Vous décrochez le téléphone. Vous appelez La Rochelle. Pas de réponse. Vous appelez Aix. Le directeur cherche ses chiffres. Vous rappelez La Rochelle. On vous dit «\u00a0je crois que c'est bon\u00a0». Vous raccrochez sans savoir si c'est vrai. Vous avez passé 45 minutes et vous n'avez couvert que 2 établissements sur 17. Pour les 15 autres, vous espérez que ça tourne.",
  duree: "45 min",
  etablissements: "2 / 17",
};

export const scenarioApres = {
  titre: "Le lundi matin, 10h. Avec votre collaborateur\u00a0:",
  description: "Vous ouvrez WhatsApp. Le rapport est là. Les 17 EHPAD. Pour chacun\u00a0:",
  items: [
    "Taux d'occupation\u00a0: 92%, 87%, 78%…",
    "Facturation du mois\u00a0: émise / en attente / en retard",
    "Impayés\u00a0: 3 familles en retard de plus de 30 jours (noms, montants, relances déjà envoyées)",
    "Obligations admin\u00a0: 2 documents à rendre cette semaine — les directeurs ont été alertés, l'un a déjà soumis, l'autre pas encore",
    "Admissions\u00a0: 4 demandes ViaTrajectoire reçues hier, 3 traitées, 1 en attente de réponse depuis 48h — le directeur a été relancé ce matin",
    "Courrier\u00a0: un recommandé ARS reçu vendredi à Béziers, scanné par le directeur, analysé — demande de mise en conformité, deadline dans 15 jours",
  ],
  conclusion: "Vous n'avez appelé personne. Vous savez tout. En 3 minutes.",
  duree: "3 min",
  etablissements: "17 / 17",
};

export const alertes = [
  "M.\u00a0Imbert, l'EHPAD de Grenoble n'a pas soumis le document CPAM dû demain. Le directeur n'a pas répondu à ma relance de ce matin. Voulez-vous que M.\u00a0Cozon l'appelle\u00a0?",
  "Nouvelle demande d'admission ViaTrajectoire pour l'EHPAD de Marseille. Le directeur n'a pas consulté le dossier depuis 24h. Je relance.",
  "Alerte\u00a0: 12 factures non encaissées à plus de 45 jours sur l'EHPAD d'Aix. Montant total\u00a0: 34\u202f200\u202f€. Relances individuelles envoyées aux familles.",
];

export const impactCozon = {
  titre: "Ce que ça change pour M.\u00a0Cozon",
  description:
    "Au lieu de passer ses journées au téléphone à relancer les directeurs, il reçoit chaque matin la liste de ce qui ne va pas — et uniquement ce qui ne va pas. Il intervient sur les exceptions. Le reste est géré. Il passe de pompier à pilote.",
};

export const impactImbert = {
  titre: "Ce que ça change pour M.\u00a0Imbert",
  description:
    "Vous avez la vision complète de vos 20 établissements depuis votre téléphone. Pas de surprise. Pas de «\u00a0je savais pas\u00a0». Quand l'ARS vous appelle, vous avez la réponse avant même de décrocher.",
};

export const impactDirecteurs = {
  titre: "Ce que ça change pour les directeurs",
  description:
    "Ils ne sont pas fliqués — ils sont accompagnés. Le collaborateur leur rappelle leurs obligations, les aide à ne rien oublier, et leur enlève de la charge mentale. Un directeur qui sait que rien ne passe entre les mailles travaille plus sereinement.",
};

export const tableauComparatif = [
  {
    sans: "Vous appelez, personne ne sait",
    avec: "Vous ouvrez WhatsApp, tout est là",
  },
  {
    sans: "Les documents sont en retard, vous l'apprenez après l'amende",
    avec: "Il alerte 5 jours avant, relance, escalade",
  },
  {
    sans: "Un courrier ARS dort 3 semaines",
    avec: "Scanné, analysé, deadline identifiée le jour même",
  },
  {
    sans: "Des admissions passent inaperçues",
    avec: "Détectées en temps réel, directeur relancé automatiquement",
  },
  {
    sans: "Les impayés traînent des mois",
    avec: "Relances systématiques, suivi au centime près",
  },
  {
    sans: "M.\u00a0Cozon passe ses journées au téléphone",
    avec: "Il gère uniquement les exceptions",
  },
  {
    sans: "Vous espérez que ça tourne",
    avec: "Vous savez que ça tourne — et quand ça ne tourne pas, vous le savez aussi",
  },
];

export const roiChiffres = [
  { label: "Amende inspection évitée", value: "5k–50k€", description: "économisés par incident" },
  { label: "1 admission récupérée", value: "2 500€", description: "par mois de séjour" },
  { label: "5 admissions/an récupérées", value: "150 000€", description: "de CA supplémentaire/an" },
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

// Navigation pages
export const navPages = [
  { href: "/", label: "Présentation" },
  { href: "/argumentaire", label: "Argumentaire" },
  { href: "/a-quoi-ca-sert", label: "À quoi ça sert\u00a0?" },
];
