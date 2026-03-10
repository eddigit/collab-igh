// Données structurées — Plan de mission Projet Florence
// Référence : CDP-IGH-2026-001

export const missionMeta = {
  titre: "Plan de Mission — Projet Florence",
  sousTitre:
    "Transformation du pilotage opérationnel du Groupe IGH par Intelligence Artificielle",
  client: "SAS IGH — 20 établissements médico-sociaux et sanitaires",
  sponsor: "M.\u00a0Imbert, Président",
  directeurMission: "M.\u00a0Cozon, Directeur Général délégué",
  partner: "Gilles Korzec — Coach Digital Paris",
  reference: "CDP-IGH-2026-001",
  classification: "Confidentiel — Diffusion restreinte",
  date: "Mars 2026",
};

export const syntheseExecutive = {
  intro:
    "Le groupe IGH opère 17 EHPAD et 3 cliniques répartis sur 9 régions. Le pilotage du groupe depuis le siège d'Aix-en-Provence repose aujourd'hui sur des processus manuels, des appels téléphoniques et l'initiative individuelle de chaque directeur d'établissement.",
  dysfonctionnements: [
    "Absence de visibilité sur la facturation et les encaissements",
    "Non-respect des obligations administratives et réglementaires",
    "Courrier physique non traité dans les établissements",
    "Emails des établissements non surveillés",
    "Admissions perdues via ViaTrajectoire par manque de réactivité",
    "Impayés non suivis, absence de relances systématiques",
  ],
  conclusion:
    "La mission consiste à doter le groupe d'une collaboratrice IA dédiée — Florence — capable de piloter en temps réel l'ensemble des 20 établissements sur les dimensions administratives, financières et réglementaires.",
};

export const copil = [
  {
    role: "Sponsor",
    nom: "M.\u00a0Imbert",
    fonction: "Président SAS IGH",
    responsabilite:
      "Décisions stratégiques, validation des gates, arbitrages",
  },
  {
    role: "Directeur de mission",
    nom: "M.\u00a0Cozon",
    fonction: "DG délégué",
    responsabilite:
      "Pilotage opérationnel, priorisation, accès terrain",
  },
  {
    role: "Partner",
    nom: "Gilles Korzec",
    fonction: "Coach Digital Paris",
    responsabilite:
      "Architecture solution, conduite de mission, livraison",
  },
  {
    role: "Manager",
    nom: "Léa",
    fonction: "Coach Digital Paris",
    responsabilite:
      "Coordination, juridique, recherches API, documentation",
  },
  {
    role: "Analyst",
    nom: "Florence",
    fonction: "Collaboratrice IA IGH",
    responsabilite:
      "Analyse, synthèse, raisonnement, apprentissage continu",
  },
];

export const instances = [
  {
    nom: "COPIL",
    frequence: "Hebdomadaire",
    participants: "Imbert, Cozon, Korzec",
    objet: "Revue d'avancement, arbitrages, validation",
  },
  {
    nom: "Point opérationnel",
    frequence: "Quotidien (via WhatsApp)",
    participants: "Cozon, Korzec, Léa, Florence",
    objet: "Suivi terrain, questions, ajustements",
  },
  {
    nom: "Gate de validation",
    frequence: "Fin de chaque phase",
    participants: "COPIL complet",
    objet: "Go/No Go passage à la phase suivante",
  },
];

export const canalWhatsApp =
  "Groupe WhatsApp sécurisé — 5 membres (COPIL + Léa + Florence). Florence y est active dès le Jour 0\u00a0: elle écoute, synthétise, pose des questions, partage son raisonnement. Le COPIL corrige et oriente en temps réel.";

// ─── PHASES ───

export interface PhaseActivity {
  ref: string;
  activite: string;
  responsable: string;
  livrable: string;
  prerequis?: string;
}

export interface AuditQuestion {
  num: string;
  theme: string;
  questions: string;
  donnees: string;
}

export interface AuditSession {
  id: string;
  titre: string;
  population: string;
  lieu: string;
  questions: AuditQuestion[];
  livrables: string[];
  florence: string;
}

export interface Phase {
  id: string;
  numero: number;
  titre: string;
  duree: string;
  cout?: string;
  objectif: string;
  couleur: "blue" | "green" | "red" | "yellow";
  activites?: PhaseActivity[];
  audits?: AuditSession[];
  synthese?: string;
  gate: string;
  documentsClient?: string[];
  interactionCopil?: string;
  semaineDebut: number;
  semaineFin: number;
}

export const phases: Phase[] = [
  {
    id: "phase-0",
    numero: 0,
    titre: "Mobilisation & Cadrage",
    duree: "2 à 3 jours",
    cout: "Offert",
    objectif:
      "Préparer la mission, constituer l'équipe, initialiser Florence",
    couleur: "blue",
    semaineDebut: 0,
    semaineFin: 0,
    activites: [
      {
        ref: "0.1",
        activite: "Constitution du COPIL",
        responsable: "Korzec",
        livrable: "Charte projet signée",
      },
      {
        ref: "0.2",
        activite: "Création du groupe WhatsApp",
        responsable: "Korzec",
        livrable: "Canal opérationnel actif",
      },
      {
        ref: "0.3",
        activite: "Naissance de Florence",
        responsable: "Korzec + Léa",
        livrable:
          "Florence initialisée, première prise de contact",
      },
      {
        ref: "0.4",
        activite: "Collecte documentaire",
        responsable: "Cozon",
        livrable:
          "Organigramme, liste établissements, contacts directeurs, contrats DSI",
      },
      {
        ref: "0.5",
        activite: "Planification audit",
        responsable: "Korzec + Cozon",
        livrable: "Agenda des 2 jours terrain confirmé",
      },
    ],
    documentsClient: [
      "Organigramme du groupe (siège + établissements)",
      "Liste des 20 établissements avec noms des directeurs et coordonnées",
      "Contact du responsable informatique / DSI",
      "Identifiants des systèmes à auditer (Titan, messageries, ViaTrajectoire)",
      "2-3 établissements pilotes identifiés (de préférence ceux qui posent le plus de problèmes)",
    ],
    gate: "Validation du périmètre et du planning → GO Phase 1",
  },
  {
    id: "phase-1",
    numero: 1,
    titre: "Diagnostic & Audit terrain",
    duree: "2 jours",
    objectif:
      "Comprendre la réalité opérationnelle du groupe, par population, en immersion",
    couleur: "blue",
    semaineDebut: 1,
    semaineFin: 1,
    audits: [
      {
        id: "j1-matin",
        titre: "Jour 1 — Matin : Direction Générale",
        population:
          "M.\u00a0Imbert (Président) + M.\u00a0Cozon (DG délégué)",
        lieu: "Siège — 930 Route de Berre, 13090 Aix-en-Provence",
        questions: [
          {
            num: "1.1",
            theme: "Vision & objectifs",
            questions:
              "Quelle est votre vision du pilotage idéal du groupe\u00a0? Qu'est-ce qui vous empêche de dormir\u00a0?",
            donnees:
              "KPIs prioritaires, frustrations majeures, niveau d'urgence",
          },
          {
            num: "1.2",
            theme: "Cycle de facturation",
            questions:
              "Comment fonctionne la facturation\u00a0? Qui émet\u00a0? Quand\u00a0? Comment vous savez si c'est encaissé\u00a0?",
            donnees:
              "Dates clés (émission J20, paiement J+5), volume mensuel par EHPAD (~80 factures), processus de suivi actuel",
          },
          {
            num: "1.3",
            theme: "Taux d'occupation",
            questions:
              "Comment connaissez-vous le taux d'occupation de chaque EHPAD\u00a0? À quelle fréquence\u00a0?",
            donnees:
              "Sources de données, fiabilité, délai de remontée",
          },
          {
            num: "1.4",
            theme: "Obligations réglementaires",
            questions:
              "Quels documents devez-vous produire\u00a0? Pour qui\u00a0? (ARS, CPAM, inspection, préfecture) Quels sont les deadlines\u00a0?",
            donnees:
              "Calendrier réglementaire, historique des incidents (La Rochelle), conséquences financières",
          },
          {
            num: "1.5",
            theme: "Relations siège-établissements",
            questions:
              "Comment communiquez-vous avec les directeurs\u00a0? Quelle fréquence\u00a0? Quels canaux\u00a0?",
            donnees:
              "Appels, emails, réunions, outils, points de friction",
          },
          {
            num: "1.6",
            theme: "Processus de décision",
            questions:
              "Qui décide quoi\u00a0? Quel est le circuit de validation\u00a0?",
            donnees:
              "Organigramme décisionnel, niveaux d'autonomie des directeurs",
          },
          {
            num: "1.7",
            theme: "Rapport idéal",
            questions:
              "Si vous receviez un rapport chaque matin à 10h, que voudriez-vous y voir en priorité\u00a0?",
            donnees:
              "Format attendu, indicateurs clés, niveau de détail",
          },
          {
            num: "1.8",
            theme: "Contraintes & sensibilités",
            questions:
              "RGPD, confidentialité, résistance au changement, budget, timing",
            donnees:
              "Freins identifiés, conditions de réussite",
          },
        ],
        livrables: ["Note de diagnostic stratégique"],
        florence:
          "Écoute en direct (via Gilles), commence à structurer sa compréhension du groupe",
      },
      {
        id: "j1-aprem",
        titre: "Jour 1 — Après-midi : DSI / Responsable informatique",
        population: "Responsable informatique / DSI du groupe",
        lieu: "Siège ou visio si le DSI est délocalisé",
        questions: [
          {
            num: "2.1",
            theme: "Titan / TitanLink",
            questions:
              "Quelle version\u00a0? Mode d'hébergement (local/cloud)\u00a0? Accès API\u00a0? Qui est l'interlocuteur Malta Informatique\u00a0?",
            donnees:
              "Version logicielle, type d'accès, URL pattern, contact Malta",
          },
          {
            num: "2.2",
            theme: "Architecture réseau",
            questions:
              "Chaque établissement a-t-il une connexion internet dédiée\u00a0? VPN\u00a0? Accès centralisé\u00a0?",
            donnees:
              "Topologie réseau, connectivité entre établissements et siège",
          },
          {
            num: "2.3",
            theme: "Messagerie",
            questions:
              "Quel fournisseur\u00a0? Les 17 EHPAD ont-ils chacun une boîte mail\u00a0? Format des adresses\u00a0?",
            donnees:
              "Fournisseur, protocole (IMAP/POP), accès admin, volume estimé",
          },
          {
            num: "2.4",
            theme: "ViaTrajectoire",
            questions:
              "Comment les établissements reçoivent les demandes\u00a0? Par email\u00a0? Interface web\u00a0? Notifications\u00a0?",
            donnees:
              "Mode de réception, fréquence de consultation, qui traite",
          },
          {
            num: "2.5",
            theme: "Autres logiciels",
            questions:
              "Paie, RH, planning, comptabilité — quels outils\u00a0?",
            donnees: "Cartographie applicative complète",
          },
          {
            num: "2.6",
            theme: "Sécurité & accès",
            questions:
              "Politique de mots de passe, MFA, accès distants, droits admin",
            donnees:
              "Contraintes de sécurité, possibilités de connexion pour Florence",
          },
          {
            num: "2.7",
            theme: "Contrats éditeurs",
            questions:
              "Contrat Malta, contrat messagerie, contrat réseau — niveaux de support\u00a0?",
            donnees:
              "Contacts support éditeurs, SLA, possibilité d'API",
          },
          {
            num: "2.8",
            theme: "Historique projets IT",
            questions:
              "Des projets de digitalisation ont-ils déjà été tentés\u00a0? Succès/échecs\u00a0?",
            donnees:
              "Leçons apprises, résistances identifiées",
          },
        ],
        livrables: [
          "Cartographie des Systèmes d'Information (SI)",
          "Matrice de connectivité",
          "Liste des contacts éditeurs",
        ],
        florence:
          "Commence à raisonner sur les connexions possibles. Le soir, elle partage dans le groupe ses premières hypothèses techniques.",
      },
      {
        id: "j2-matin",
        titre: "Jour 2 — Matin : EHPAD Pilote 1",
        population: "Directeur/Directrice d'un EHPAD pilote",
        lieu: "Dans l'établissement (immersion)",
        questions: [
          {
            num: "3.1",
            theme: "Journée type",
            questions:
              "Comment se passe une journée type du directeur\u00a0? Premières actions le matin\u00a0?",
            donnees:
              "Séquence d'activités, temps passé sur chaque tâche",
          },
          {
            num: "3.2",
            theme: "Utilisation de Titan",
            questions:
              "Comment utilise-t-il Titan au quotidien\u00a0? Pour quoi faire\u00a0? Ce qu'il n'utilise pas\u00a0?",
            donnees:
              "Écrans utilisés, fonctions utilisées/ignorées, difficultés",
          },
          {
            num: "3.3",
            theme: "Facturation",
            questions:
              "Comment émet-il les factures\u00a0? Comment sait-il qui a payé\u00a0? Comment relance-t-il\u00a0?",
            donnees:
              "Processus réel (vs. théorique), outils utilisés, délai de traitement",
          },
          {
            num: "3.4",
            theme: "Courrier physique",
            questions:
              "Où arrive le courrier\u00a0? Qui l'ouvre\u00a0? Comment est-il traité\u00a0? Pile de courrier non ouvert\u00a0?",
            donnees:
              "Volume quotidien, circuit de traitement, retards observés",
          },
          {
            num: "3.5",
            theme: "Emails",
            questions:
              "Qui gère la boîte mail de l'établissement\u00a0? Fréquence de consultation\u00a0? Emails non lus\u00a0?",
            donnees:
              "Volume, expéditeurs critiques (ARS, CPAM), emails ignorés",
          },
          {
            num: "3.6",
            theme: "ViaTrajectoire",
            questions:
              "Comment traite-t-il les demandes d'admission\u00a0? Délai de réponse\u00a0? Des demandes ratées\u00a0?",
            donnees:
              "Processus d'admission, délai moyen, exemples de pertes",
          },
          {
            num: "3.7",
            theme: "Obligations admin",
            questions:
              "Quels documents doit-il produire\u00a0? Pour qui\u00a0? Comment sait-il les deadlines\u00a0?",
            donnees:
              "Liste des obligations, méthode de suivi, retards",
          },
          {
            num: "3.8",
            theme: "Communication siège",
            questions:
              "Comment communique-t-il avec le siège\u00a0? Fréquence\u00a0? Ce qu'il aimerait améliorer\u00a0?",
            donnees: "Canaux, frustrations, suggestions",
          },
          {
            num: "3.9",
            theme: "Charge de travail",
            questions:
              "Sur quoi passe-t-il trop de temps\u00a0? Qu'est-ce qui pourrait être automatisé\u00a0?",
            donnees: "Tâches chronophages, irritants quotidiens",
          },
          {
            num: "3.10",
            theme: "Résistance au changement",
            questions:
              "A-t-il déjà utilisé des outils digitaux\u00a0? WhatsApp\u00a0? Appétence pour le numérique\u00a0?",
            donnees:
              "Niveau de maturité digitale, freins potentiels",
          },
        ],
        livrables: [
          "Fiche diagnostic Établissement A",
          "Cartographie des processus directeur",
        ],
        florence:
          "Comprend la réalité terrain. Commence à construire les alertes et relances adaptées à CET établissement.",
      },
      {
        id: "j2-aprem",
        titre:
          "Jour 2 — Après-midi : EHPAD Pilote 2 ou Clinique",
        population:
          "Directeur/Directrice d'un second établissement (comparaison)",
        lieu: "Dans l'établissement",
        questions: [
          {
            num: "4.1",
            theme: "Différences de pratiques",
            questions:
              "Les processus sont-ils les mêmes que l'établissement A\u00a0? Qu'est-ce qui diffère\u00a0?",
            donnees: "Écarts de processus",
          },
          {
            num: "4.2",
            theme: "Spécificités",
            questions:
              "Cet établissement a-t-il des particularités\u00a0? (taille, localisation, tutelle, convention collective)",
            donnees: "Caractéristiques propres",
          },
          {
            num: "4.3",
            theme: "Problèmes propres",
            questions:
              "Quels sont SES problèmes spécifiques, différents de l'EHPAD 1\u00a0?",
            donnees: "Problèmes uniques",
          },
          {
            num: "4.4",
            theme: "Si clinique",
            questions:
              "Le fonctionnement SSR/psychiatrie diffère-t-il de l'EHPAD\u00a0? Quelles obligations spécifiques\u00a0?",
            donnees: "Spécificités clinique",
          },
        ],
        livrables: [
          "Fiche diagnostic Établissement B",
          "Analyse comparative A vs. B",
          "Matrice des écarts de pratiques",
        ],
        florence:
          "Ajuste son modèle. Deux établissements, deux réalités → une approche adaptable par établissement avec vue consolidée pour le siège.",
      },
    ],
    synthese:
      "Florence produit et partage dans le groupe COPIL\u00a0: rapport d'audit consolidé, matrice des 6 problèmes avec niveau de criticité par établissement, premières recommandations et questions ouvertes, carte des connexions possibles.",
    gate: "Présentation du diagnostic au COPIL. Validation du périmètre Phase 1B.",
  },
  {
    id: "phase-1b",
    numero: 1.5,
    titre: "Analyse & Construction de Florence",
    duree: "4 jours (atelier, hors site client)",
    objectif:
      "Transformer les données d'audit en une collaboratrice IA opérationnelle",
    couleur: "green",
    semaineDebut: 2,
    semaineFin: 3,
    activites: [
      {
        ref: "J1",
        activite: "Analyse & Architecture",
        responsable: "Korzec + Léa",
        livrable:
          "Rapport d'audit finalisé + Spécifications fonctionnelles Florence v1",
      },
      {
        ref: "J2",
        activite: "Construction socle",
        responsable: "Korzec + Léa",
        livrable:
          "Florence v1 — socle de connaissances opérationnel (base IGH, mémoire 20 établissements, calendrier réglementaire, annuaire directeurs, vocabulaire métier)",
      },
      {
        ref: "J3",
        activite: "Paramétrage automatismes",
        responsable: "Korzec + Léa",
        livrable:
          "Matrice d'automatismes + Template rapport du matin (alertes, seuils, délais, règles d'escalade, personnalisation par établissement)",
      },
      {
        ref: "J4",
        activite: "Tests & ajustements",
        responsable: "Korzec + Léa",
        livrable:
          "Rapport de tests + Florence v1 validée en interne (simulation complète\u00a0: rapport du matin, scénarios d'alerte, test de réponse)",
      },
    ],
    interactionCopil:
      "Chaque soir, Florence partage dans le groupe WhatsApp ce qu'elle a appris, des exemples concrets (ex\u00a0: «\u00a0Voici à quoi ressemblerait votre rapport du matin\u00a0»), et ses questions. M.\u00a0Imbert et M.\u00a0Cozon corrigent et valident au fil de l'eau.",
    gate: "Démonstration Florence v1 au COPIL sur données réelles. Go/No Go Phase 2.",
  },
  {
    id: "phase-2",
    numero: 2,
    titre: "Intégration technique",
    duree: "5 jours (atelier technique)",
    objectif:
      "Connecter Florence aux systèmes d'information du groupe",
    couleur: "yellow",
    semaineDebut: 3,
    semaineFin: 4,
    activites: [
      {
        ref: "J1",
        activite: "Connecteur Titan (1/2)",
        responsable: "Korzec",
        livrable: "Connexion Titan initiée",
        prerequis: "Contact Malta fourni par DSI",
      },
      {
        ref: "J2",
        activite: "Connecteur Titan (2/2) + Emails (1/2)",
        responsable: "Korzec",
        livrable:
          "Connecteur Titan opérationnel. Première boîte email connectée.",
        prerequis: "Identifiants messagerie fournis",
      },
      {
        ref: "J3",
        activite: "Emails (2/2) + ViaTrajectoire",
        responsable: "Korzec",
        livrable:
          "Module email opérationnel. Module ViaTrajectoire opérationnel.",
        prerequis: "Accès ViaTrajectoire fourni",
      },
      {
        ref: "J4",
        activite: "Rapport du matin",
        responsable: "Korzec",
        livrable: "Rapport du matin en production",
        prerequis: "Tous connecteurs actifs",
      },
      {
        ref: "J5",
        activite: "Interface web Florence",
        responsable: "Korzec",
        livrable: "Interface web déployée",
        prerequis: "Données consolidées disponibles",
      },
    ],
    gate: "Recette technique. Validation de la connectivité et des flux par le COPIL.",
  },
  {
    id: "phase-3",
    numero: 3,
    titre: "Déploiement pilote & Conduite du changement",
    duree: "2 jours",
    objectif:
      "Mettre Florence en production sur 2 établissements pilotes et former les directeurs",
    couleur: "green",
    semaineDebut: 5,
    semaineFin: 5,
    activites: [
      {
        ref: "J1 matin",
        activite:
          "Démo complète au COPIL\u00a0: Florence avec données réelles, rapport du matin, alertes, interface web",
        responsable: "Korzec",
        livrable: "PV de démonstration",
      },
      {
        ref: "J1 après-midi",
        activite:
          "Déploiement EHPAD pilote 1\u00a0: Florence en production, premier rapport réel, ajustements",
        responsable: "Korzec + Directeur pilote 1",
        livrable: "EHPAD 1 opérationnel",
      },
      {
        ref: "J2 matin",
        activite:
          "Déploiement EHPAD pilote 2\u00a0: mise en production, ajustements spécifiques",
        responsable: "Korzec + Directeur pilote 2",
        livrable: "EHPAD 2 opérationnel",
      },
      {
        ref: "J2 après-midi",
        activite:
          "Formation directeurs\u00a0: utilisation de Florence via WhatsApp, guide utilisateur, FAQ",
        responsable: "Korzec",
        livrable: "Support de formation + Guide utilisateur",
      },
    ],
    gate: "Bilan du pilote. Go/No Go déploiement élargi aux 20 établissements.",
  },
  {
    id: "phase-4",
    numero: 4,
    titre: "Déploiement généralisé",
    duree: "Sur devis séparé",
    objectif:
      "Déploiement progressif sur les 18 établissements restants, par vagues de 5. Chaque vague inclut\u00a0: connexion des boîtes emails, formation du directeur, intégration dans le rapport consolidé.",
    couleur: "green",
    semaineDebut: 6,
    semaineFin: 8,
    gate: "Revue trimestrielle d'avancement.",
  },
];

// ─── LIVRABLES ───

export const livrables = [
  { phase: "0", nom: "Charte projet", format: "Document" },
  { phase: "1", nom: "Note de diagnostic stratégique", format: "Document" },
  {
    phase: "1",
    nom: "Cartographie des Systèmes d'Information",
    format: "Schéma + Document",
  },
  {
    phase: "1",
    nom: "Fiches diagnostic Établissement A et B",
    format: "Document",
  },
  {
    phase: "1",
    nom: "Analyse comparative + Matrice des écarts",
    format: "Document",
  },
  { phase: "1", nom: "Rapport d'audit consolidé", format: "Document" },
  {
    phase: "1B",
    nom: "Spécifications fonctionnelles Florence v1",
    format: "Document",
  },
  {
    phase: "1B",
    nom: "Florence v1 — socle de connaissances opérationnel",
    format: "Système IA",
  },
  {
    phase: "1B",
    nom: "Matrice d'automatismes paramétrée",
    format: "Document",
  },
  { phase: "2", nom: "Connecteur Titan opérationnel", format: "Module technique" },
  { phase: "2", nom: "Module surveillance emails", format: "Module technique" },
  { phase: "2", nom: "Module ViaTrajectoire", format: "Module technique" },
  {
    phase: "2",
    nom: "Rapport du matin automatisé",
    format: "Module technique",
  },
  { phase: "2", nom: "Interface web Florence", format: "Application web" },
  { phase: "3", nom: "Support de formation", format: "Document" },
  { phase: "3", nom: "Guide utilisateur", format: "Document" },
  { phase: "3", nom: "PV de démonstration", format: "Document signé" },
  { phase: "3", nom: "Bilan du pilote", format: "Document" },
];

// ─── PLANNING ───

export const planningPhases = [
  { label: "Phase 0 — Cadrage + Naissance Florence", semaine: "Semaine 0", width: 30 },
  { label: "Phase 1 — Audit terrain (2j / 4 demi-journées)", semaine: "Semaine 1", width: 20 },
  { label: "Phase 1B — Analyse + Construction (4j)", semaine: "Semaine 2-3", width: 40 },
  { label: "Phase 2 — Intégration technique (5j)", semaine: "Semaine 3-4", width: 50 },
  { label: "Phase 3 — Pilote + Formation (2j)", semaine: "Semaine 5", width: 20 },
];

// ─── RISQUES ───

export const risques = [
  {
    risque: "API Titan non disponible",
    probabilite: "Moyenne",
    impact: "Fort",
    mitigation:
      "Contact Malta Informatique dès Phase 0. Solution de contournement\u00a0: lecture écran ou export CSV",
  },
  {
    risque: "ViaTrajectoire sans accès API",
    probabilite: "Forte",
    impact: "Moyen",
    mitigation:
      "Monitoring par surveillance email (notifications ViaTrajectoire)",
  },
  {
    risque: "Résistance des directeurs",
    probabilite: "Moyenne",
    impact: "Moyen",
    mitigation:
      "Formation courte (30\u00a0min), outil WhatsApp familier, Florence = alliée pas contrôleuse",
  },
  {
    risque: "Données incomplètes",
    probabilite: "Faible",
    impact: "Moyen",
    mitigation:
      "Complétées au fil de l'eau via interactions Florence-directeurs",
  },
  {
    risque: "Indisponibilité du COPIL",
    probabilite: "Faible",
    impact: "Fort",
    mitigation:
      "Points async via WhatsApp, gates planifiées à l'avance",
  },
];

// ─── FACTEURS CLÉS DE SUCCÈS ───

export const facteursSucces = [
  {
    titre: "Implication du COPIL",
    description:
      "Le sponsor et le directeur de mission sont actifs dans le groupe WhatsApp et réactifs aux gates",
  },
  {
    titre: "Accès aux systèmes",
    description:
      "Les identifiants Titan, messagerie et ViaTrajectoire sont fournis avant le Jour 1",
  },
  {
    titre: "Directeurs pilotes coopératifs",
    description:
      "Choisis par M.\u00a0Cozon parmi ceux qui ont le plus de problèmes (motivation naturelle)",
  },
  {
    titre: "Réalisme des attentes",
    description:
      "Florence sera opérationnelle sur les établissements pilotes en 5 semaines. Le déploiement généralisé (20 établissements) nécessite une phase supplémentaire",
  },
];

// ─── ENGAGEMENTS ───

export const engagements = [
  {
    titre: "Confidentialité",
    description: "NDA avant toute transmission de données",
    icon: "Lock",
  },
  {
    titre: "RGPD",
    description:
      "Aucun accès aux données médicales. Hébergement France. Effacement 30 jours (sauf facturation\u00a0: 3 ans légal)",
    icon: "Shield",
  },
  {
    titre: "Qualité",
    description:
      "Gates de validation formelles. Aucune phase ne démarre sans accord du Sponsor",
    icon: "CheckCircle",
  },
  {
    titre: "Transparence",
    description:
      "Florence partage son raisonnement en temps réel. Le COPIL voit tout",
    icon: "Eye",
  },
  {
    titre: "Réversibilité",
    description:
      "Restitution de toutes les données et configurations au groupe IGH en cas d'arrêt",
    icon: "RotateCcw",
  },
];
