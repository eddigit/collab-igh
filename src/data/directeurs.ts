// Données structurées — Page "Pour les directeurs"
// Avantages de Florence pour les directeurs d'établissement

export const directeursIntro = {
  titre: "Florence, votre alliée au quotidien",
  sousTitre:
    "Florence n'est pas là pour vous surveiller. Elle est là pour vous aider. Elle vous rappelle ce qui doit être fait, vous alerte quand quelque chose ne va pas, et vous enlève de la charge mentale. Vous gardez le contrôle — elle fait le travail de fond.",
};

// ─── Scénario quotidien avant / après ───

export const scenarioAvant = {
  titre: "Votre lundi matin, aujourd'hui",
  items: [
    "Vous arrivez à l'EHPAD, 15 emails non lus dont 3 de l'ARS",
    "Un courrier recommandé de la préfecture attend sur votre bureau depuis vendredi",
    "Le siège appelle pour savoir où en est la facturation du mois",
    "2 demandes ViaTrajectoire que vous n'avez pas encore vues",
    "Une famille appelle pour un impayé que vous n'avez pas suivi",
    "Vous cherchez un document CPAM à rendre cette semaine — vous ne retrouvez plus la deadline",
  ],
  conclusion: "Vous passez la matinée à éteindre des feux au lieu de gérer votre établissement.",
};

export const scenarioApres = {
  titre: "Votre lundi matin, avec Florence",
  items: [
    "En arrivant, vous ouvrez WhatsApp — Florence a déjà résumé vos emails importants et classé le reste",
    "Le courrier recommandé\u00a0? Florence l'a analysé quand vous l'avez scanné vendredi\u00a0: expéditeur, objet, deadline dans 12 jours",
    "La facturation\u00a0? Florence a les chiffres. Pas besoin d'appeler le siège, ils les ont déjà",
    "Les 2 demandes ViaTrajectoire\u00a0? Florence vous les a signalées samedi, avec le profil du résident et l'urgence",
    "L'impayé\u00a0? Florence a déjà envoyé la relance à la famille il y a 5 jours",
    "Le document CPAM\u00a0? Florence vous l'a rappelé vendredi, vous l'avez soumis. C'est fait.",
  ],
  conclusion: "Vous commencez la semaine sereinement. Tout est sous contrôle.",
};

// ─── Avantages concrets par domaine ───

export interface AvantageRow {
  situation: string;
  action: string;
  benefice: string;
}

export interface AvantageCategory {
  id: string;
  emoji: string;
  titre: string;
  rows: AvantageRow[];
}

export const avantages: AvantageCategory[] = [
  {
    id: "admin",
    emoji: "📋",
    titre: "Obligations administratives — Zéro oubli",
    rows: [
      {
        situation: "Document CPAM à rendre dans 10 jours",
        action: "Florence vous alerte 5 jours avant, relance 2 jours avant, et prévient le siège si ce n'est pas fait",
        benefice: "Plus jamais de retard, plus jamais d'amende",
      },
      {
        situation: "Rapport d'activité annuel à produire",
        action: "Florence vous rappelle les échéances, vous liste les données nécessaires et vérifie que tout est complet",
        benefice: "Vous gagnez des heures de préparation",
      },
      {
        situation: "Inspection du travail prévue ou surprise",
        action: "Florence connaît toutes vos obligations. Elle vous prépare une checklist personnalisée pour votre établissement",
        benefice: "Vous êtes prêt, même en cas de visite surprise",
      },
      {
        situation: "Nouvelle réglementation ARS",
        action: "Florence détecte les changements réglementaires et vous explique ce qui change concrètement pour votre EHPAD",
        benefice: "Vous restez à jour sans devoir surveiller le Journal Officiel",
      },
    ],
  },
  {
    id: "courrier",
    emoji: "✉️",
    titre: "Courrier & emails — Rien ne passe entre les mailles",
    rows: [
      {
        situation: "Un courrier recommandé ARS arrive vendredi à 17h",
        action: "Vous le photographiez. Florence l'analyse en secondes\u00a0: expéditeur, objet, deadline, niveau d'urgence",
        benefice: "Vous savez immédiatement quoi faire, même en partant en week-end",
      },
      {
        situation: "45 emails dans la boîte de l'établissement",
        action: "Florence les trie 24/7\u00a0: urgent / important / informatif. Elle vous alerte uniquement sur ce qui compte",
        benefice: "Vous ne passez plus 1h à trier vos emails",
      },
      {
        situation: "Un email CPAM non traité depuis 5 jours",
        action: "Florence le détecte et vous relance. Si vous ne répondez toujours pas, elle prévient M.\u00a0Cozon",
        benefice: "Aucun email critique ne peut plus dormir sans que quelqu'un le sache",
      },
    ],
  },
  {
    id: "facturation",
    emoji: "💰",
    titre: "Facturation & impayés — Chaque euro suivi",
    rows: [
      {
        situation: "80 factures à émettre le 20 du mois",
        action: "Florence vérifie que les factures sont bien émises et suit les encaissements un par un",
        benefice: "Vous avez une vue claire de qui a payé et qui n'a pas payé",
      },
      {
        situation: "3 familles en retard de paiement",
        action: "Florence envoie des relances automatiques et individualisées dès le 1er retard. Ton professionnel et bienveillant.",
        benefice: "La trésorerie s'améliore sans que vous ayez à passer des appels désagréables",
      },
      {
        situation: "Le siège vous demande vos chiffres de facturation",
        action: "Florence les a déjà\u00a0: ils sont dans le rapport du matin, envoyé automatiquement chaque jour à 10h",
        benefice: "Zéro appel du siège pour demander des chiffres",
      },
    ],
  },
  {
    id: "admissions",
    emoji: "🚪",
    titre: "Admissions — Réactivité maximale",
    rows: [
      {
        situation: "Nouvelle demande ViaTrajectoire reçue à 22h",
        action: "Florence la détecte immédiatement et vous la signale dès le lendemain matin avec le profil du résident",
        benefice: "Vous êtes le premier à répondre — et le plus réactif emporte l'admission",
      },
      {
        situation: "Vous n'avez pas consulté un dossier depuis 24h",
        action: "Florence vous relance gentiment\u00a0: «\u00a0Une demande d'admission attend votre réponse depuis hier\u00a0»",
        benefice: "Plus aucune admission perdue par oubli",
      },
      {
        situation: "Une famille cherche des informations sur votre site web",
        action: "Florence (en chatbot) répond 24/7\u00a0: horaires, tarifs, démarches, documents nécessaires. Elle qualifie la demande et vous la transmet.",
        benefice: "Les familles sont accueillies même quand vous n'êtes pas disponible",
      },
    ],
  },
  {
    id: "juridique",
    emoji: "⚖️",
    titre: "Compétences juridiques — Une experte à portée de message",
    rows: [
      {
        situation: "Un salarié conteste son planning de nuit",
        action: "Vous demandez à Florence\u00a0: elle trouve en 30 secondes l'article du Code du travail, la convention collective et les dernières jurisprudences",
        benefice: "Vous avez une réponse fondée, sans appeler un avocat",
      },
      {
        situation: "Doute sur une obligation réglementaire",
        action: "Florence cherche dans Légifrance, Judilibre, la convention collective SYNERPA/FEHAP en temps réel",
        benefice: "Vous ne restez jamais sans réponse face à une question juridique",
      },
      {
        situation: "L'ARS demande une mise en conformité",
        action: "Florence identifie exactement ce qui est demandé, le texte de référence, et le délai. Elle vous accompagne pas à pas.",
        benefice: "Vous répondez vite et bien, avec les bons textes",
      },
    ],
  },
  {
    id: "formation",
    emoji: "🎓",
    titre: "Formation & Soutien technique — Vous n'êtes jamais seul(e)",
    rows: [
      {
        situation: "Vous ne savez plus comment faire une opération sur Titan",
        action: "Florence vous guide pas à pas, en temps réel, sur WhatsApp. Elle connaît les procédures et s'adapte à votre niveau.",
        benefice: "Plus besoin d'appeler le siège ou d'attendre un technicien",
      },
      {
        situation: "Vous êtes nouveau directeur et vous prenez vos fonctions",
        action: "Florence vous accueille et vous forme\u00a0: obligations de votre établissement, outils, procédures, contacts clés. Elle vous met à niveau en quelques jours.",
        benefice: "Vous êtes opérationnel rapidement, sans formation lourde",
      },
      {
        situation: "Un problème technique que Florence ne peut pas résoudre",
        action: "Léa prend le relais en premier niveau. Si nécessaire, Gilles intervient — en distanciel (inclus) ou en présentiel.",
        benefice: "Une chaîne d'assistance humaine derrière Florence\u00a0: vous n'êtes jamais bloqué",
      },
      {
        situation: "Vous voulez améliorer vos pratiques de suivi",
        action: "Florence vous forme en continu\u00a0: bonnes pratiques, rappels de procédures, astuces pour gagner du temps",
        benefice: "Vous progressez sans effort, au fil de l'eau",
      },
    ],
  },
  {
    id: "chargementale",
    emoji: "🧠",
    titre: "Charge mentale — Florence porte ce que vous ne devriez plus porter seul",
    rows: [
      {
        situation: "Vous avez 15 choses à ne pas oublier cette semaine",
        action: "Florence les connaît toutes. Elle vous les rappelle au bon moment, dans le bon ordre de priorité.",
        benefice: "Votre tête est libre pour gérer votre établissement et vos équipes",
      },
      {
        situation: "Vous partez en congé",
        action: "Florence continue de surveiller\u00a0: emails, ViaTrajectoire, deadlines. Votre remplaçant a les mêmes alertes.",
        benefice: "Vous partez l'esprit tranquille",
      },
      {
        situation: "Vous gérez seul(e) un établissement de 80 lits",
        action: "Florence est votre bras droit\u00a0: elle ne dort jamais, n'oublie rien, et ne lâche rien",
        benefice: "Vous n'êtes plus seul(e)",
      },
    ],
  },
];

// ─── Ce que Florence ne fait PAS ───

export const nepaspas = [
  "Florence ne vous remplace pas — elle vous assiste",
  "Florence ne prend aucune décision à votre place",
  "Florence ne contacte jamais les familles sans votre accord",
  "Florence n'accède pas aux dossiers médicaux des résidents",
  "Florence ne communique pas vos données à d'autres établissements",
  "Florence ne juge pas votre travail — elle vous aide à le faire mieux",
];

// ─── Communication avec Florence ───

export const communication = [
  {
    canal: "WhatsApp",
    description: "Vous lui parlez comme à un collègue. En français, naturellement. Pas de logiciel, pas de formation.",
    emoji: "💬",
  },
  {
    canal: "Scanner un courrier",
    description: "Vous photographiez le courrier, Florence l'analyse instantanément\u00a0: expéditeur, objet, deadline.",
    emoji: "📸",
  },
  {
    canal: "Poser une question",
    description: "«\u00a0Florence, quelles sont mes obligations cette semaine\u00a0?\u00a0» Elle répond en quelques secondes.",
    emoji: "❓",
  },
  {
    canal: "Recevoir des alertes",
    description: "Florence vous envoie des alertes personnalisées\u00a0: VOS deadlines, VOS emails critiques, VOS admissions.",
    emoji: "🔔",
  },
];

// ─── Témoignage type / promesse ───

export const promesse = {
  titre: "Notre engagement envers vous",
  description:
    "Florence ne vous ajoute pas du travail. Elle vous en enlève. Elle ne vous complique pas la vie — elle vous la simplifie. Chaque directeur a ses propres enjeux, ses propres habitudes, son propre rythme. Florence s'adapte à vous, pas l'inverse.",
  citationFlorence:
    "Bonjour\u00a0! Je suis Florence, votre collaboratrice IA. Je suis là pour vous aider au quotidien — pas pour vous surveiller. Si vous avez une question, un doute, un courrier à analyser, envoyez-moi un message. Je suis disponible 24/7.",
};
