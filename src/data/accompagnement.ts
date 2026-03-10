// Données structurées — Page "Accompagnement"
// Formation, assistance technique, refonte site internet

export const accompagnementIntro = {
  titre: "Un accompagnement complet, pas juste un logiciel",
  sousTitre:
    "Florence n'arrive pas toute seule. Derrière elle, il y a une équipe, une méthode, et un engagement\u00a0: que chaque directeur, chaque collaborateur, soit à l'aise et autonome. Voici tout ce qui est prévu pour vous accompagner.",
};

// ─── Formation ───

export interface FormationItem {
  titre: string;
  description: string;
  emoji: string;
}

export const formationIntro = {
  titre: "Formation — Florence vous apprend, au quotidien",
  description:
    "La formation ne se limite pas à une journée de présentation. Florence elle-même est formatrice. Elle accompagne chaque directeur au quotidien, sur les outils métier comme sur les compétences digitales. Pas de jargon, pas de manuel de 200 pages\u00a0: Florence explique, montre, et s'adapte à votre rythme.",
};

export const formationFlorenceCapacites: FormationItem[] = [
  {
    titre: "Prise en main des outils métier",
    description:
      "Florence guide les directeurs pas à pas sur Titan, TitanLink, et les outils de facturation. «\u00a0Comment saisir une facture\u00a0?\u00a0», «\u00a0Comment consulter un encaissement\u00a0?\u00a0» — Florence répond en temps réel, sur WhatsApp, avec des explications claires et adaptées.",
    emoji: "🖥️",
  },
  {
    titre: "Assistance bureautique — Excel, Word, emails",
    description:
      "Un directeur ne sait pas faire un tableau croisé dynamique sur Excel\u00a0? Florence lui explique étape par étape. Rédiger un courrier officiel\u00a0? Florence propose un modèle. Trier et filtrer ses emails\u00a0? Florence montre comment. Elle est aussi assistante bureautique.",
    emoji: "📊",
  },
  {
    titre: "Aide à la rédaction",
    description:
      "Rédiger un rapport pour l'ARS, répondre à un courrier de la préfecture, formuler une réponse à une famille\u00a0: Florence aide à structurer, rédiger, et vérifier. Le directeur n'est plus seul devant une page blanche.",
    emoji: "✍️",
  },
  {
    titre: "Résolution de problèmes informatiques courants",
    description:
      "«\u00a0Mon imprimante ne marche plus\u00a0», «\u00a0Je n'arrive pas à me connecter à Titan\u00a0», «\u00a0Mon mot de passe ne fonctionne plus\u00a0» — Florence guide le directeur dans les étapes de diagnostic et de résolution. Si le problème dépasse ses compétences, elle escalade vers l'équipe technique.",
    emoji: "🔧",
  },
  {
    titre: "Formation réglementaire continue",
    description:
      "Nouvelle obligation ARS\u00a0? Changement de convention collective\u00a0? Florence détecte les évolutions et explique concrètement ce qui change pour le directeur, dans son établissement. Pas de veille à faire, Florence la fait pour vous.",
    emoji: "⚖️",
  },
  {
    titre: "Accompagnement personnalisé",
    description:
      "Chaque directeur a son propre niveau, ses propres habitudes, ses propres difficultés. Florence s'adapte\u00a0: elle ne donne pas la même explication à un directeur expérimenté qu'à un directeur qui prend ses fonctions. Elle apprend de chaque interaction.",
    emoji: "🎯",
  },
];

export const formationPresentielle = {
  titre: "Formation présentielle — 2 journées d'intégration",
  description:
    "En plus de l'accompagnement quotidien de Florence, deux journées de formation en présentiel sont prévues avec Gilles pour que chaque directeur soit pleinement opérationnel dès le départ.",
  sessions: [
    {
      groupe: "Groupe Nord",
      participants: "~8 directeurs",
      contenu: [
        "Présentation de Florence\u00a0: qui est-elle, que fait-elle, comment lui parler",
        "Cas pratiques\u00a0: scanner un courrier, poser une question juridique, consulter le rapport du matin",
        "Prise en main WhatsApp et interface web",
        "Questions-réponses, retours d'expérience des EHPAD pilotes",
      ],
    },
    {
      groupe: "Groupe Sud",
      participants: "~8 directeurs",
      contenu: [
        "Même programme, adapté aux spécificités régionales",
        "Démonstration en direct sur les données de leurs établissements",
        "Atelier collaboratif\u00a0: scénarios réels de leur quotidien",
        "Plan d'action individuel\u00a0: ce que chaque directeur met en place dès le lendemain",
      ],
    },
  ],
  note: "2 sessions régionales pour éviter des déplacements lourds. Gilles se déplace — pas les directeurs.",
};

// ─── Assistance humaine ───

export const assistanceHumaine = {
  titre: "Assistance humaine — Vous n'êtes jamais seul",
  description:
    "Florence est en première ligne, 24/7. Mais derrière elle, une équipe humaine est prête à intervenir quand la situation le demande.",
  niveaux: [
    {
      niveau: "Niveau 1 — Florence",
      description:
        "Première réponse à toute question, tout problème, toute demande. Florence couvre 90% des besoins courants\u00a0: obligations, facturation, emails, admissions, bureautique, juridique.",
      disponibilite: "24/7",
      emoji: "🤖",
    },
    {
      niveau: "Niveau 2 — Léa",
      description:
        "Pour les cas que Florence ne peut pas résoudre seule\u00a0: recherches approfondies, coordination complexe, problématiques administratives spécifiques. Léa est joignable via le groupe WhatsApp du projet.",
      disponibilite: "Jours ouvrés",
      emoji: "👩‍💼",
    },
    {
      niveau: "Niveau 3 — Gilles",
      description:
        "Escalade sur les problématiques stratégiques ou techniques complexes. Intervention en distanciel (incluse dans l'abonnement) ou en présentiel si nécessaire (seuls les frais de déplacement sont refacturés).",
      disponibilite: "Selon besoin",
      emoji: "👨‍💻",
    },
  ],
};

// ─── Refonte site internet ───

export const refonteSite = {
  titre: "Refonte du site internet — Offerte",
  sousTitre: "Un bonus inclus dans le projet Florence",
  description:
    "L'intégration de Florence en tant que chatbot sur le site du groupe et les sites des 20 établissements nécessite une technologie moderne que le site actuel ne supporte pas. Plutôt que de greffer Florence sur une infrastructure vieillissante, nous refaisons le site.",
  avantages: [
    {
      titre: "Refonte complète offerte",
      description:
        "Dans le cadre de l'acceptation du projet Florence, la refonte du site internet du groupe IGH est prise en charge intégralement — sans surcoût.",
      emoji: "🎁",
    },
    {
      titre: "Technologie moderne",
      description:
        "Le nouveau site sera construit sur des technologies actuelles (Next.js, responsive mobile-first) — rapide, sécurisé, et compatible avec le chatbot Florence.",
      emoji: "⚡",
    },
    {
      titre: "Florence intégrée nativement",
      description:
        "Le chatbot Florence sera intégré dès la conception du site — pas ajouté en surcouche. Une expérience fluide pour les familles qui visitent le site.",
      emoji: "💬",
    },
    {
      titre: "Un site pour le groupe + les 20 établissements",
      description:
        "Chaque établissement dispose de sa propre page avec ses spécificités (capacité, contacts, tarifs, photos). Florence adapte ses réponses selon l'établissement visité.",
      emoji: "🏥",
    },
    {
      titre: "SEO & référencement",
      description:
        "Structure optimisée pour le référencement Google\u00a0: les familles qui cherchent un EHPAD dans votre région vous trouvent facilement.",
      emoji: "🔍",
    },
    {
      titre: "Maintenance et hébergement inclus",
      description:
        "Le nouveau site est maintenu et hébergé dans le cadre de l'abonnement mensuel Florence. Aucun frais supplémentaire.",
      emoji: "🛡️",
    },
  ],
  conditionImportante:
    "La refonte du site internet est offerte dans le cadre de l'acceptation du budget Projet Florence. C'est un investissement de notre part pour garantir que Florence soit pleinement opérationnelle sur tous vos canaux — et que le groupe IGH ait enfin une vitrine digitale à la hauteur de ses 20 établissements.",
};

// ─── Infogérance ───

export const infogerance = {
  titre: "Infogérance — Tout est géré pour vous",
  description:
    "Vous n'avez rien à installer, rien à maintenir, rien à mettre à jour. Tout est inclus dans l'abonnement mensuel.",
  items: [
    {
      titre: "Hébergement France ou serveur privé local",
      description:
        "Serveurs en France par défaut, conformité RGPD. Option serveur privé installé au siège d'Aix-en-Provence pour un contrôle total des données (installation offerte, matériel en sus).",
      emoji: "🇫🇷",
    },
    {
      titre: "Mises à jour automatiques",
      description:
        "Florence évolue en permanence\u00a0: nouvelles fonctionnalités, améliorations, adaptations réglementaires. Tout est transparent pour vous.",
      emoji: "🔄",
    },
    {
      titre: "Monitoring 24/7",
      description:
        "L'infrastructure est surveillée en permanence. En cas d'anomalie, l'équipe intervient avant que vous ne le remarquiez.",
      emoji: "📡",
    },
    {
      titre: "Sauvegardes automatiques",
      description:
        "Données sauvegardées quotidiennement. En cas de problème, restauration rapide garantie.",
      emoji: "💾",
    },
    {
      titre: "Support WhatsApp",
      description:
        "Un problème\u00a0? Un message dans le groupe WhatsApp du projet et l'équipe intervient.",
      emoji: "💬",
    },
  ],
};
