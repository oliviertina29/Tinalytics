export type Session = {
  title: string;
  summary: string;
  topics: string[];
  deliverable: string;
};

export type Course = {
  slug: string;
  num: string;
  status: 'open' | 'soon';
  title: string;
  shortTitle: string;
  tagline: string;
  pitch: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  domain: 'Bureautique & BI' | 'Suivi-évaluation' | 'Data science';
  audience: string[];
  prerequisites: string[];
  outcomes: string[];
  tools: string[];
  duration: string;
  sessions: Session[];
};

export const COURSES: Course[] = [
  {
    slug: 'excel-power-bi',
    num: '01',
    status: 'open',
    title: "Automatiser ses rapports : d'Excel à Power BI",
    shortTitle: 'Excel → Power BI',
    tagline: 'Six samedis pour ne plus jamais refaire un rapport à la main.',
    pitch:
      'Pour ceux qui passent leurs journées sur Excel. Vous repartez avec un tableau de bord qui se met à jour tout seul.',
    level: 'Débutant',
    domain: 'Bureautique & BI',
    audience: [
      'Chargés de reporting, contrôleurs de gestion, comptables',
      'Agents de banque, de microfinance et de télécoms',
      'Assistants et chargés de programme qui compilent des chiffres chaque mois',
    ],
    prerequisites: [
      'Savoir saisir des données et écrire une formule simple dans Excel',
      'Un ordinateur Windows avec Excel (2016 ou plus récent)',
      'Une connexion suffisante pour suivre une visio de 3 heures',
    ],
    outcomes: [
      'Structurer proprement vos données pour qu’elles soient analysables',
      'Remplacer le copier-coller mensuel par une requête Power Query',
      'Construire un modèle de données et des mesures DAX fiables',
      'Livrer un tableau de bord Power BI clair, prêt pour la direction',
    ],
    tools: ['Excel', 'Power Query', 'Power BI Desktop', 'DAX'],
    duration: '6 samedis · 18 h en direct',
    sessions: [
      {
        title: 'Excel solide',
        summary: 'Des données propres et des formules qui ne cassent pas.',
        topics: ['Mettre ses données sous forme de tableau', 'RECHERCHEX, SOMME.SI.ENS, NB.SI.ENS', 'Fonctions texte et date', 'Erreurs fréquentes et comment les éviter'],
        deliverable: "Un fichier de ventes d'un distributeur, nettoyé et prêt à analyser.",
      },
      {
        title: 'Tableaux croisés et graphiques',
        summary: 'Analyser vite et choisir le bon graphique.',
        topics: ['Tableaux croisés dynamiques', 'Segments et chronologies', 'Choisir le graphique adapté au message', 'Premier tableau de bord Excel'],
        deliverable: "Un tableau de bord des encaissements d'une microfinance.",
      },
      {
        title: 'Power Query',
        summary: 'La fin du copier-coller mensuel.',
        topics: ['Importer depuis Excel, CSV et dossiers', 'Nettoyer : types, colonnes, doublons', 'Fusionner et ajouter des requêtes', 'Actualiser en un clic'],
        deliverable: 'Une requête qui combine automatiquement douze fichiers mensuels.',
      },
      {
        title: 'Premiers pas dans Power BI',
        summary: 'Du fichier Excel au rapport interactif.',
        topics: ['Interface et import des données', 'Tables de faits et de dimensions', 'Relations et modèle en étoile', 'Premiers visuels et filtres'],
        deliverable: 'Un premier rapport Power BI à plusieurs pages.',
      },
      {
        title: 'DAX et tableau de bord pro',
        summary: 'Les mesures qui répondent aux vraies questions.',
        topics: ['Mesures vs colonnes calculées', 'CALCULATE et le contexte de filtre', 'Comparaisons mois sur mois, cumul annuel', 'Mise en page lisible pour la direction'],
        deliverable: 'Un tableau de bord de pilotage avec indicateurs clés.',
      },
      {
        title: 'Projet final',
        summary: 'Votre tableau de bord, sur vos données.',
        topics: ['Présentation de votre projet', 'Retour personnalisé', 'Publication et partage', "Remise de l'attestation"],
        deliverable: 'Un projet à montrer et une attestation de fin de parcours.',
      },
    ],
  },
  {
    slug: 'kobo-power-bi-suivi-evaluation',
    num: '02',
    status: 'soon',
    title: 'Kobo + Power BI pour le suivi-évaluation',
    shortTitle: 'Kobo + Power BI',
    tagline: 'De la collecte terrain au rapport bailleur, sans ressaisie.',
    pitch:
      'Pour les équipes S&E des ONG et projets : de la collecte terrain au rapport bailleur, sans ressaisie.',
    level: 'Intermédiaire',
    domain: 'Suivi-évaluation',
    audience: [
      'Responsables et chargés de suivi-évaluation',
      'Coordinateurs de projets financés par des bailleurs',
      'Enquêteurs et superviseurs de collecte',
    ],
    prerequisites: [
      'Aisance de base avec Excel',
      'Un compte KoboToolbox (gratuit)',
      'Idéalement, un cadre logique ou une liste d’indicateurs à suivre',
    ],
    outcomes: [
      'Concevoir des formulaires Kobo qui produisent des données propres',
      'Automatiser le nettoyage et le calcul des indicateurs',
      'Relier Kobo à Power BI pour un suivi en temps réel',
      'Produire des tableaux de bord adaptés aux bailleurs',
    ],
    tools: ['KoboToolbox', 'XLSForm', 'Power Query', 'Power BI'],
    duration: '6 samedis · 18 h en direct',
    sessions: [
      {
        title: 'Formulaires Kobo bien conçus',
        summary: 'La qualité des données se joue à la collecte.',
        topics: ['XLSForm : types de questions', 'Contraintes et sauts logiques', 'Groupes et répétitions', 'Tester avant le terrain'],
        deliverable: 'Un formulaire d’enquête prêt à déployer.',
      },
      {
        title: 'Déploiement et gestion de la collecte',
        summary: 'Suivre la collecte au jour le jour.',
        topics: ['Déploiement sur téléphone', 'Collecte hors ligne', 'Suivi des soumissions', 'Validation des données'],
        deliverable: 'Un tableau de suivi de la collecte.',
      },
      {
        title: 'Nettoyage automatique',
        summary: 'Des règles écrites une fois, appliquées à chaque export.',
        topics: ['Connexion Kobo → Power Query', 'Doublons et valeurs aberrantes', 'Recodage des variables', 'Documentation du nettoyage'],
        deliverable: 'Une chaîne de nettoyage réutilisable.',
      },
      {
        title: 'Indicateurs et cadre logique',
        summary: 'Du jeu de données aux indicateurs du projet.',
        topics: ['Traduire le cadre logique en mesures', 'Désagrégations (sexe, âge, zone)', 'Cibles et taux d’atteinte', 'Mesures DAX pour le S&E'],
        deliverable: 'Le calcul automatique de vos indicateurs.',
      },
      {
        title: 'Tableaux de bord pour les bailleurs',
        summary: 'Montrer les résultats clairement.',
        topics: ['Structure d’un rapport bailleur', 'Cartes et visuels géographiques', 'Filtres par zone et période', 'Export et partage'],
        deliverable: 'Un tableau de bord de suivi du projet.',
      },
      {
        title: 'Projet final',
        summary: 'Votre dispositif de suivi, de bout en bout.',
        topics: ['Présentation du projet', 'Retour personnalisé', 'Plan de mise en œuvre', "Remise de l'attestation"],
        deliverable: 'Un dispositif S&E complet et une attestation.',
      },
    ],
  },
  {
    slug: 'python-machine-learning',
    num: '03',
    status: 'soon',
    title: "Python pour l'analyse, jusqu'au machine learning",
    shortTitle: 'Python & ML',
    tagline: 'Passer du tableur au code, puis aux modèles prédictifs.',
    pitch:
      'Pour évoluer vers les métiers de la data, avec des projets inspirés de cas réels en télécoms, finance et agriculture.',
    level: 'Avancé',
    domain: 'Data science',
    audience: [
      'Analystes qui veulent aller au-delà d’Excel et Power BI',
      'Étudiants et jeunes diplômés en reconversion vers la data',
      'Ingénieurs et statisticiens qui veulent industrialiser leurs analyses',
    ],
    prerequisites: [
      'Bonne maîtrise d’Excel ou d’un outil d’analyse',
      'Notions de statistiques descriptives',
      'Un ordinateur capable d’installer Python (Windows, macOS ou Linux)',
    ],
    outcomes: [
      'Manipuler et analyser des données avec pandas et SQL',
      'Produire des visualisations claires en Python',
      'Construire, évaluer et expliquer un modèle prédictif',
      'Mettre un modèle à disposition d’une équipe métier',
    ],
    tools: ['Python', 'pandas', 'SQL', 'scikit-learn', 'SHAP', 'Streamlit'],
    duration: '8 samedis · 24 h en direct',
    sessions: [
      {
        title: 'Python pour analystes',
        summary: 'Les bases utiles, sans détour.',
        topics: ['Jupyter et environnement', 'Types, listes, dictionnaires', 'Fonctions et boucles', 'Lire un fichier Excel ou CSV'],
        deliverable: 'Un premier notebook d’analyse.',
      },
      {
        title: 'pandas et SQL',
        summary: 'Manipuler de vrais volumes de données.',
        topics: ['Filtrer, grouper, agréger', 'Jointures', 'Requêtes SQL depuis Python', 'Données manquantes'],
        deliverable: 'Une analyse de la base clients d’un opérateur.',
      },
      {
        title: 'Visualisation',
        summary: 'Des graphiques qui racontent quelque chose.',
        topics: ['matplotlib et seaborn', 'Choisir le bon graphique', 'Graphiques interactifs', 'Rapport reproductible'],
        deliverable: 'Un rapport d’analyse exploratoire.',
      },
      {
        title: 'Premiers modèles prédictifs',
        summary: 'Comprendre avant de coder.',
        topics: ['Régression et classification', 'Découpage entraînement / test', 'Métriques d’évaluation', 'Surapprentissage'],
        deliverable: 'Un modèle de prédiction du désabonnement.',
      },
      {
        title: 'Modèles avancés et explicabilité',
        summary: 'Des modèles performants que le métier comprend.',
        topics: ['Forêts aléatoires et gradient boosting', 'Validation croisée', 'Explicabilité avec SHAP', 'Déséquilibre des classes'],
        deliverable: 'Un modèle expliqué variable par variable.',
      },
      {
        title: 'Mettre le modèle entre les mains des équipes',
        summary: 'Du notebook à l’application.',
        topics: ['Application Streamlit', 'Suivi des expériences', 'Bonnes pratiques de code', 'Présenter à des non-techniciens'],
        deliverable: 'Une application de scoring utilisable par le métier.',
      },
      {
        title: 'Projet encadré',
        summary: 'Votre cas, avec accompagnement.',
        topics: ['Cadrage du problème', 'Travail en autonomie', 'Points de suivi', 'Revue de code'],
        deliverable: 'Un projet complet sur un cas réel.',
      },
      {
        title: 'Soutenance',
        summary: 'Présenter et défendre son travail.',
        topics: ['Présentation du projet', 'Questions et retour', 'Suite du parcours', "Remise de l'attestation"],
        deliverable: 'Un projet de portfolio et une attestation.',
      },
    ],
  },
];

export const getCourse = (slug: string | undefined) => COURSES.find((c) => c.slug === slug);

export const FAQ = [
  {
    q: "Je débute sur Excel, c'est pour moi ?",
    a: 'Oui, si vous savez déjà saisir des données et faire une formule simple. La première séance remet tout le monde au même niveau. En cas de doute, faites le test de niveau : il vous oriente en deux minutes.',
  },
  {
    q: 'Et si je rate une séance ?',
    a: 'Chaque séance est enregistrée. Le replay, les fichiers et les exercices sont disponibles, et vos questions trouvent réponse dans le groupe de cohorte.',
  },
  {
    q: 'De quel matériel ai-je besoin ?',
    a: "Un ordinateur Windows avec Excel et une connexion correcte. Power BI Desktop est gratuit, on l'installe ensemble lors de la séance 4.",
  },
  {
    q: 'Mon employeur peut-il payer ?',
    a: 'Oui. Nous établissons un devis puis une facture au nom de votre structure, ainsi qu’une attestation de formation.',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Par Orange Money, Wave ou Moov Money, en une ou deux fois. Les entreprises et ONG peuvent payer par virement sur facture.',
  },
  {
    q: 'Est-ce que je reçois une attestation ?',
    a: 'Oui, une attestation de fin de parcours est remise après la présentation de votre projet final.',
  },
  {
    q: 'Les séances sont-elles vraiment en direct ?',
    a: 'Oui, trois heures en visio le samedi, avec questions en temps réel et exercices pratiques. Ce ne sont pas des vidéos préenregistrées.',
  },
  {
    q: 'Pouvez-vous former toute mon équipe ?',
    a: 'Oui : session privée pour votre structure, sur vos propres données, en ligne ou en présentiel selon la ville. Voir la page Entreprises.',
  },
];
