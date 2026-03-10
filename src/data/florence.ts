// Données structurées — Florence, Collaboratrice IA dédiée au Groupe IGH

export const florenceMeta = {
  nom: "Florence",
  photo:
    "https://res.cloudinary.com/dniurvpzd/image/upload/v1773122563/ChatGPT_Image_10_mars_2026_07_02_24_yqb68w.png",
  hommage: "Florence Nightingale",
  hommageAnnees: "1820–1910",
  hommageTitre: "pionnière des soins infirmiers modernes et inventrice du premier tableau de bord hospitalier",
};

export const florenceIntro = {
  qui: "Florence est la collaboratrice IA dédiée au groupe IGH. Elle est nommée en hommage à Florence Nightingale (1820-1910), pionnière des soins infirmiers modernes et inventrice du premier tableau de bord hospitalier. Comme son homonyme, Florence IGH apporte rigueur, méthode et humanité au pilotage de vos 20 établissements.",
  description:
    "Florence n'est pas un logiciel. C'est une collaboratrice qui apprend, raisonne, alerte et s'adapte. Elle connaît chaque établissement, chaque directeur, chaque échéance. Elle ne dort jamais, n'oublie rien, et ne lâche rien.",
  mission:
    "Assister M.\u00a0Imbert et M.\u00a0Cozon dans le pilotage quotidien des 20 établissements du groupe IGH, en assurant la visibilité financière, la conformité réglementaire, le suivi des admissions et la coordination avec les directeurs d'établissement.",
};

// ─── Missions quotidiennes ───

export interface MissionRow {
  mission: string;
  action: string;
  frequence: string;
}

export interface MissionCategory {
  id: string;
  emoji: string;
  titre: string;
  rows: MissionRow[];
}

export const missionsQuotidiennes: MissionCategory[] = [
  {
    id: "financier",
    emoji: "📊",
    titre: "Pilotage financier",
    rows: [
      {
        mission: "Rapport du matin",
        action:
          "Consolidation des 20 établissements\u00a0: taux d'occupation, facturation émise/encaissée, impayés, alertes",
        frequence: "Chaque jour à 10h00",
      },
      {
        mission: "Suivi facturation",
        action:
          "Vérification émission des factures (J20), suivi encaissements, détection retards",
        frequence: "Quotidien",
      },
      {
        mission: "Relance impayés",
        action:
          "Identification des retards de paiement, envoi de relances aux familles, escalade si nécessaire",
        frequence: "Automatique dès J+30",
      },
      {
        mission: "Taux d'occupation",
        action:
          "Suivi en temps réel des lits disponibles / occupés par établissement",
        frequence: "Quotidien",
      },
      {
        mission: "Alertes trésorerie",
        action:
          "Notification si un établissement passe sous un seuil d'encaissement critique",
        frequence: "Temps réel",
      },
    ],
  },
  {
    id: "conformite",
    emoji: "📋",
    titre: "Conformité réglementaire",
    rows: [
      {
        mission: "Calendrier réglementaire",
        action:
          "Connaissance de TOUTES les obligations de chaque établissement (ARS, CPAM, inspection du travail, préfecture)",
        frequence: "Permanent",
      },
      {
        mission: "Alertes échéances",
        action:
          "Alerte 5 jours avant deadline, relance 2 jours avant, escalade si pas fait",
        frequence: "Automatique",
      },
      {
        mission: "Suivi des inspections",
        action:
          "Historique des contrôles, résultats, actions correctives demandées, suivi de mise en conformité",
        frequence: "Permanent",
      },
      {
        mission: "Documents à produire",
        action:
          "Rappel des rapports d'activité, comptes administratifs, CPOM, évaluations à rendre",
        frequence: "Selon calendrier",
      },
      {
        mission: "Veille réglementaire",
        action:
          "Surveillance des nouvelles réglementations ARS, décrets, circulaires impactant les EHPAD",
        frequence: "Hebdomadaire",
      },
    ],
  },
  {
    id: "flux",
    emoji: "✉️",
    titre: "Gestion des flux entrants",
    rows: [
      {
        mission: "Surveillance emails",
        action:
          "Connexion aux 17 boîtes mail EHPAD — détection des emails critiques (ARS, CPAM, inspection, préfecture)",
        frequence: "24/7",
      },
      {
        mission: "Analyse courrier",
        action:
          "Le directeur photographie le courrier → Florence analyse\u00a0: expéditeur, objet, deadline, urgence",
        frequence: "À chaque scan",
      },
      {
        mission: "Tri et priorisation",
        action:
          "Classification automatique\u00a0: urgent / important / informatif / à classer",
        frequence: "Temps réel",
      },
      {
        mission: "Alertes non-traitement",
        action:
          "Si un email critique n'est pas traité sous 3 jours → alerte M.\u00a0Cozon",
        frequence: "Automatique",
      },
      {
        mission: "Traçabilité",
        action:
          "Historique complet\u00a0: quel courrier/email est arrivé où, quand, traité ou pas",
        frequence: "Permanent",
      },
    ],
  },
  {
    id: "admissions",
    emoji: "🚪",
    titre: "Admissions & ViaTrajectoire",
    rows: [
      {
        mission: "Monitoring ViaTrajectoire",
        action:
          "Détection en temps réel de chaque nouvelle demande d'admission",
        frequence: "24/7",
      },
      {
        mission: "Alerte directeur",
        action:
          "Notification immédiate au directeur concerné dès réception d'une demande",
        frequence: "Temps réel",
      },
      {
        mission: "Suivi de traitement",
        action:
          "Si le directeur n'a pas consulté le dossier sous 24h → relance",
        frequence: "Automatique",
      },
      {
        mission: "Reporting admissions",
        action:
          "Nombre de demandes reçues/traitées/acceptées/refusées par établissement",
        frequence: "Hebdomadaire",
      },
      {
        mission: "Taux de conversion",
        action:
          "Suivi du ratio demandes → admissions effectives",
        frequence: "Mensuel",
      },
    ],
  },
  {
    id: "coordination",
    emoji: "👥",
    titre: "Coordination avec les directeurs",
    rows: [
      {
        mission: "Rappels personnalisés",
        action:
          "Chaque directeur reçoit SES obligations, SES deadlines, SES alertes",
        frequence: "Quotidien",
      },
      {
        mission: "Relances bienveillantes",
        action:
          "Ton professionnel et respectueux — «\u00a0cadrer gentiment\u00a0»",
        frequence: "Automatique",
      },
      {
        mission: "Escalade",
        action:
          "Si un directeur ne répond pas après 2 relances → alerte M.\u00a0Cozon",
        frequence: "Automatique",
      },
      {
        mission: "Suivi individuel",
        action:
          "Score de réactivité par directeur — données objectives pour les réunions",
        frequence: "Permanent",
      },
      {
        mission: "Communication siège",
        action:
          "Transmission des demandes du siège aux directeurs, suivi des réponses",
        frequence: "À la demande",
      },
    ],
  },
  {
    id: "chatbot",
    emoji: "💬",
    titre: "Accueil digital & Chatbot",
    rows: [
      {
        mission: "Chatbot sites web",
        action:
          "Florence est déployée en chatbot sur le site internet du groupe et/ou sur les sites de chaque établissement. Elle accueille les visiteurs, répond aux questions courantes (horaires de visite, tarifs, démarches d'admission, documents nécessaires).",
        frequence: "24/7",
      },
      {
        mission: "Qualification des demandes",
        action:
          "Chaque demande entrante (famille, médecin traitant, assistante sociale) est qualifiée automatiquement\u00a0: type de besoin, urgence, établissement concerné, coordonnées.",
        frequence: "Temps réel",
      },
      {
        mission: "Canalisation des flux",
        action:
          "Les demandes sont triées et orientées vers le bon interlocuteur\u00a0: admission → directeur concerné, question médicale → médecin coordonnateur, réclamation → siège.",
        frequence: "Automatique",
      },
      {
        mission: "Recensement des demandes",
        action:
          "Historique complet de toutes les interactions\u00a0: qui a contacté quel établissement, pour quoi, quand. Données consolidées pour le siège.",
        frequence: "Permanent",
      },
      {
        mission: "Pré-admission en ligne",
        action:
          "Florence guide les familles dans la constitution du dossier d'admission\u00a0: documents nécessaires, étapes, délais. Elle peut pré-remplir une demande et la transmettre au directeur.",
        frequence: "À la demande",
      },
      {
        mission: "Support multi-établissements",
        action:
          "Un seul chatbot pour les 20 établissements — Florence connaît les spécificités de chacun et adapte ses réponses selon l'établissement consulté.",
        frequence: "24/7",
      },
    ],
  },
  {
    id: "formation",
    emoji: "🎓",
    titre: "Formation & Soutien technique",
    rows: [
      {
        mission: "Formation continue",
        action:
          "Florence forme les directeurs et les équipes en continu\u00a0: bonnes pratiques, utilisation des outils, rappels de procédures. Elle s'adapte au niveau de chaque interlocuteur.",
        frequence: "Permanent",
      },
      {
        mission: "Soutien technique interne",
        action:
          "Florence intervient en soutien technique sur l'ensemble du système pour chaque directeur\u00a0: aide à l'utilisation de Titan, résolution de problèmes courants, guidance pas à pas.",
        frequence: "À la demande",
      },
      {
        mission: "Onboarding nouveaux directeurs",
        action:
          "Quand un nouveau directeur prend ses fonctions, Florence l'accueille et le forme\u00a0: présentation du fonctionnement, des outils, des obligations spécifiques à son établissement.",
        frequence: "À chaque arrivée",
      },
      {
        mission: "Assistance escaladée",
        action:
          "Si Florence ne peut pas résoudre un problème, Léa prend le relais en premier niveau. Gilles intervient en escalade, en distanciel ou présentiel si nécessaire.",
        frequence: "Selon besoin",
      },
    ],
  },
];

// ─── Compétences connectées (APIs) ───

export interface ApiSource {
  source: string;
  api: string;
  description: string;
}

export interface CompetenceCategory {
  id: string;
  emoji: string;
  titre: string;
  sources: ApiSource[];
  exemple: string;
}

export const competencesConnectees: CompetenceCategory[] = [
  {
    id: "juridique",
    emoji: "⚖️",
    titre: "Compétences juridiques & réglementaires",
    sources: [
      {
        source: "Légifrance",
        api: "API PISTE ✅",
        description:
          "Rechercher en temps réel dans le Code de la santé publique, le Code de l'action sociale et des familles (CASF), le Code du travail. Quand M.\u00a0Imbert demande «\u00a0qu'est-ce qu'on risque si on ne fait pas X\u00a0?\u00a0», Florence trouve l'article de loi en quelques secondes.",
      },
      {
        source: "Judilibre",
        api: "API PISTE ✅",
        description:
          "Recherche de jurisprudence de la Cour de cassation. Si un salarié attaque un EHPAD aux prud'hommes, Florence peut retrouver les décisions similaires. Si l'ARS conteste une pratique, elle trouve les précédents.",
      },
      {
        source: "BOAMP",
        api: "API PISTE ✅",
        description:
          "Surveillance des marchés publics dans le secteur médico-social. Quand un ARS publie un appel d'offres pour un EHPAD, Florence le détecte. Veille concurrentielle.",
      },
      {
        source: "CEDH (HUDOC)",
        api: "API gratuite ✅",
        description:
          "Recherche dans la jurisprudence européenne — droits des personnes âgées, dignité, conditions d'hébergement.",
      },
      {
        source: "EUR-Lex",
        api: "API gratuite ✅",
        description:
          "Recherche dans le droit européen — directives santé, réglementations européennes sur les établissements médico-sociaux.",
      },
    ],
    exemple:
      "L'inspection du travail arrive dans un EHPAD. Le directeur paniqué appelle M.\u00a0Cozon. M.\u00a0Cozon demande à Florence\u00a0: «\u00a0Quelles sont nos obligations exactes sur le temps de repos des aides-soignantes en EHPAD\u00a0?\u00a0» Florence sort en 30 secondes l'article L3131-1 du Code du travail + les décisions de la Cour de cassation les plus récentes + la convention collective applicable.",
  },
  {
    id: "admin",
    emoji: "🏢",
    titre: "Compétences administratives & entreprise",
    sources: [
      {
        source: "BODACC",
        api: "API publique ✅",
        description:
          "Surveillance du Bulletin Officiel des Annonces Civiles et Commerciales — procédures collectives des fournisseurs, sous-traitants, partenaires du groupe. Si un prestataire de l'EHPAD est en difficulté, Florence le détecte avant que ça impacte les résidents.",
      },
      {
        source: "Pappers",
        api: "API payante (à activer)",
        description:
          "Données entreprises complètes\u00a0: bilans financiers, dirigeants, bénéficiaires effectifs, comptes de résultat. Analyse financière d'un fournisseur avant de signer un contrat. Veille sur les concurrents.",
      },
      {
        source: "INSEE SIRENE",
        api: "API publique ✅",
        description:
          "Données légales des 20 établissements IGH\u00a0: SIRET, adresse, code APE, date de création. Vérification des données d'un nouveau partenaire ou fournisseur.",
      },
      {
        source: "FINESS",
        api: "Base publique ✅",
        description:
          "Fichier National des Établissements Sanitaires et Sociaux — données officielles de chaque EHPAD en France\u00a0: numéro FINESS, catégorie, capacité autorisée, date d'autorisation. Florence connaît les données officielles de VOS 20 établissements ET de tous vos concurrents.",
      },
    ],
    exemple:
      "M.\u00a0Imbert envisage de racheter un EHPAD dans une nouvelle région. Florence sort en 2 minutes\u00a0: la fiche FINESS (capacité, autorisation), le bilan financier via Pappers, les dernières annonces BODACC (pas de procédure collective en cours), et les obligations réglementaires spécifiques au département via Légifrance.",
  },
  {
    id: "rh",
    emoji: "👷",
    titre: "Compétences droit du travail & RH",
    sources: [
      {
        source: "Convention collective",
        api: "API Conventions collectives ✅",
        description:
          "Accès direct à la CCN des EHPAD privés commerciaux (IDCC 2264 — SYNERPA) ou CCN 51 (FEHAP). Florence connaît les grilles de salaires, les droits aux congés, les obligations de l'employeur, les préavis.",
      },
      {
        source: "Code du travail (Légifrance)",
        api: "API PISTE ✅",
        description:
          "Recherche d'articles du Code du travail. Temps de travail des soignants, repos obligatoire, heures supplémentaires, astreintes.",
      },
      {
        source: "Jurisprudence prud'homale",
        api: "Judilibre ✅",
        description:
          "Recherche de décisions de la Cour de cassation en droit du travail. Licenciement, harcèlement, rupture conventionnelle — Florence retrouve les décisions récentes pertinentes.",
      },
    ],
    exemple:
      "Un aide-soignant d'un EHPAD conteste son planning de nuit. Le directeur ne sait pas quoi répondre. Il demande à Florence\u00a0: «\u00a0Quelle est la durée maximale de travail de nuit en EHPAD\u00a0?\u00a0» Florence répond avec l'article du Code du travail, l'article de la convention collective applicable, et les 3 dernières décisions de la Cour de cassation sur le sujet.",
  },
  {
    id: "geo",
    emoji: "🗺️",
    titre: "Compétences géographiques & données publiques",
    sources: [
      {
        source: "API Géo",
        api: "API publique ✅",
        description:
          "Données géographiques\u00a0: communes, départements, régions, codes postaux. Utile pour le reporting par zone.",
      },
      {
        source: "Base Adresse Nationale",
        api: "API publique ✅",
        description:
          "Géolocalisation exacte des 20 établissements. Calcul de distances.",
      },
      {
        source: "ARS (données publiques)",
        api: "Données ouvertes ✅",
        description:
          "Données des ARS par région\u00a0: inspections, indicateurs qualité des EHPAD, budgets alloués.",
      },
    ],
    exemple: "",
  },
];

// ─── Communication ───

export const canaux = [
  {
    canal: "WhatsApp",
    usage:
      "Canal principal — Florence envoie le rapport du matin, les alertes, répond aux questions. Conversations naturelles en français.",
    icon: "MessageCircle",
  },
  {
    canal: "Interface web",
    usage:
      "Tableau de bord visuel — chiffres consolidés, historiques, indicateurs, graphiques. Accessible depuis téléphone, tablette, ordinateur.",
    icon: "Monitor",
  },
  {
    canal: "Email",
    usage:
      "Florence peut envoyer des rapports formalisés par email (rapports hebdomadaires, bilans mensuels).",
    icon: "Mail",
  },
  {
    canal: "Chatbot site web",
    usage:
      "Intégrée sur le site du groupe et les sites des 20 établissements — accueil des familles, qualification des demandes, orientation vers le bon interlocuteur. 24/7.",
    icon: "Globe",
  },
];

export const tonFlorence =
  "Professionnel, clair, bienveillant. Elle s'adapte à son interlocuteur. Avec M.\u00a0Imbert, elle est synthétique et directe. Avec les directeurs, elle est encourageante et respectueuse.";

// ─── Sécurité & RGPD ───

export const securite = [
  {
    engagement: "Aucune donnée médicale",
    detail:
      "Florence n'accède JAMAIS aux dossiers médicaux des résidents",
  },
  {
    engagement: "Hébergement France ou local",
    detail:
      "Données hébergées sur serveurs en France — ou sur un serveur privé installé à votre siège d'Aix-en-Provence (installation offerte)",
  },
  {
    engagement: "Effacement automatique",
    detail:
      "Données opérationnelles effacées après 30 jours (sauf facturation\u00a0: conservation 3 ans, obligation légale)",
  },
  {
    engagement: "Accès restreint",
    detail:
      "Seuls le COPIL (Imbert, Cozon, Korzec) ont accès aux données consolidées",
  },
  {
    engagement: "Chiffrement",
    detail: "Communications chiffrées de bout en bout",
  },
  {
    engagement: "Audit RGPD",
    detail:
      "M.\u00a0Cozon peut auditer à tout moment l'architecture et les flux de données",
  },
];

// ─── Hébergement local — option serveur privé ───

export const hebergementLocal = {
  titre: "Option hébergement local — Serveur privé à Aix-en-Provence",
  sousTitre: "Le niveau de sécurité le plus élevé : vos données ne quittent jamais vos murs",
  description:
    "Pour les organisations qui exigent un contrôle total sur leurs données, nous proposons l'installation d'un serveur privé sécurisé directement au siège social d'IGH, 930 Route de Berre, 13090 Aix-en-Provence. Vos données restent physiquement chez vous, sous votre contrôle exclusif.",
  avantages: [
    {
      titre: "Données 100% sur site",
      description:
        "Toutes les données de Florence sont stockées et traitées sur un serveur physique installé dans vos locaux. Rien ne transite par des serveurs externes.",
      emoji: "🏢",
    },
    {
      titre: "Contrôle total",
      description:
        "Vous êtes propriétaire du matériel et des données. Accès physique restreint au personnel autorisé. Votre DSI supervise l'infrastructure.",
      emoji: "🔐",
    },
    {
      titre: "Conformité renforcée",
      description:
        "Niveau de conformité RGPD maximal : pas de transfert de données, pas de sous-traitant cloud, pas de risque juridique lié à l'hébergement tiers.",
      emoji: "⚖️",
    },
    {
      titre: "Performance optimale",
      description:
        "Latence minimale pour les établissements de la région. Connexion directe au réseau interne IGH.",
      emoji: "⚡",
    },
    {
      titre: "Sauvegarde locale + distante",
      description:
        "Sauvegardes automatiques en local avec réplication chiffrée vers un site de secours en France pour la continuité d'activité.",
      emoji: "💾",
    },
    {
      titre: "Installation offerte",
      description:
        "L'installation complète du serveur, la configuration et la mise en service sont offertes. Seul le coût du matériel serveur est en sus.",
      emoji: "🎁",
    },
  ],
  conditionPrix:
    "L'installation et la configuration du serveur privé sont offertes. Seul le coût du matériel serveur est à la charge d'IGH (estimé entre 3 000 € et 5 000 € HT selon la configuration retenue).",
  inclus: [
    "Installation et configuration complète sur site",
    "Mise en réseau et sécurisation du serveur",
    "Migration des données vers le serveur local",
    "Formation de votre DSI à l'administration du serveur",
    "Monitoring à distance 24/7 par notre équipe",
    "Maintenance préventive et mises à jour incluses dans l'abonnement",
  ],
};

// ─── Comparaison logiciel vs Florence ───

export const comparaison = [
  {
    logiciel: "Il faut le remplir",
    florence: "Elle va chercher les données toute seule",
  },
  {
    logiciel: "Il envoie des notifications génériques",
    florence:
      "Elle envoie des alertes contextualisées, adaptées à chaque établissement",
  },
  {
    logiciel: "Il ne comprend pas vos questions",
    florence:
      "Elle répond en français, elle raisonne, elle argumente",
  },
  {
    logiciel: "Il ne connaît pas le droit",
    florence:
      "Elle a accès au Code de la santé publique, au Code du travail, à la jurisprudence",
  },
  {
    logiciel: "Il ne surveille pas vos emails",
    florence: "Elle les surveille 24/7 et détecte les urgences",
  },
  {
    logiciel: "Il ne relance personne",
    florence:
      "Elle relance les directeurs, les familles, les fournisseurs",
  },
  {
    logiciel: "Il faut se former",
    florence:
      "Elle parle sur WhatsApp — tout le monde sait l'utiliser",
  },
  {
    logiciel: "Il tombe en panne",
    florence: "Elle est disponible 24h/24, 7j/7, 365 jours par an",
  },
  {
    logiciel: "Il n'accueille personne sur votre site web",
    florence:
      "Elle est chatbot sur les sites de vos 20 établissements — elle accueille, qualifie et oriente chaque demande",
  },
];

// ─── Planning déploiement ───

export const planningFlorence = [
  {
    etape: "Jour 0",
    duree: "1 jour",
    description:
      "Florence naît. Groupe WhatsApp créé. Elle fait connaissance avec le COPIL.",
  },
  {
    etape: "Phase 1",
    duree: "2 jours",
    description:
      "Audit terrain (4 demi-journées par population). Florence participe, synthétise chaque soir.",
  },
  {
    etape: "Phase 1B",
    duree: "4 jours",
    description:
      "Construction du cerveau\u00a0: connaissances IGH, automatismes, tests.",
  },
  {
    etape: "Phase 2",
    duree: "5 jours",
    description:
      "Connexion aux outils\u00a0: Titan, emails, ViaTrajectoire, APIs juridiques.",
  },
  {
    etape: "Phase 3",
    duree: "2 jours",
    description:
      "Démo + pilote sur 2 EHPAD + formation directeurs.",
  },
  {
    etape: "Phase 4",
    duree: "Continu",
    description:
      "Déploiement progressif sur les 20 établissements.",
  },
];
