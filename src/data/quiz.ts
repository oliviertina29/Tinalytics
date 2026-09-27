export type QuizOption = { label: string; value: number };
export type QuizQuestion = {
  id: string;
  question: string;
  hint?: string;
  kind: 'goal' | 'excel' | 'bi' | 'code';
  options: QuizOption[];
};

export const QUIZ: QuizQuestion[] = [
  {
    id: 'goal',
    kind: 'goal',
    question: 'Quel est votre objectif principal ?',
    options: [
      { label: 'Gagner du temps sur mes rapports mensuels', value: 1 },
      { label: 'Mieux suivre les indicateurs de mon projet ou de mon ONG', value: 2 },
      { label: 'Évoluer vers un métier de la data', value: 3 },
    ],
  },
  {
    id: 'excel-lookup',
    kind: 'excel',
    question: 'Vous devez retrouver le prix de chaque produit dans un autre tableau. Vous…',
    options: [
      { label: 'Cherchez et recopiez à la main', value: 0 },
      { label: 'Utilisez RECHERCHEV, parfois avec des erreurs', value: 1 },
      { label: 'Utilisez RECHERCHEX ou INDEX/EQUIV sans difficulté', value: 2 },
    ],
  },
  {
    id: 'excel-pivot',
    kind: 'excel',
    question: 'Les tableaux croisés dynamiques, pour vous, c’est…',
    options: [
      { label: 'Je ne connais pas', value: 0 },
      { label: 'J’en ai déjà fait, en suivant un tutoriel', value: 1 },
      { label: 'Mon outil de tous les jours', value: 2 },
    ],
  },
  {
    id: 'excel-monthly',
    kind: 'bi',
    question: 'Chaque mois, vous recevez de nouveaux fichiers à consolider. Vous…',
    options: [
      { label: 'Copiez-collez tout dans un fichier maître', value: 0 },
      { label: 'Avez quelques macros ou formules qui aident', value: 1 },
      { label: 'Utilisez Power Query : un clic et c’est actualisé', value: 2 },
    ],
  },
  {
    id: 'bi-tool',
    kind: 'bi',
    question: 'Avez-vous déjà utilisé Power BI ou Tableau ?',
    options: [
      { label: 'Jamais', value: 0 },
      { label: 'Un peu, pour des visuels simples', value: 1 },
      { label: 'Oui, avec un modèle de données et des mesures', value: 2 },
    ],
  },
  {
    id: 'code',
    kind: 'code',
    question: 'Et la programmation (Python, R, SQL) ?',
    options: [
      { label: 'Jamais essayé', value: 0 },
      { label: 'Quelques bases, ou un peu de SQL', value: 1 },
      { label: 'J’écris régulièrement du code d’analyse', value: 2 },
    ],
  },
];

export type QuizResult = {
  slug: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  score: number;
  max: number;
  headline: string;
  message: string;
};

export function scoreQuiz(answers: Record<string, number>): QuizResult {
  const sum = (kind: QuizQuestion['kind']) =>
    QUIZ.filter((q) => q.kind === kind).reduce((s, q) => s + (answers[q.id] ?? 0), 0);

  const excel = sum('excel'); // 0–4
  const bi = sum('bi'); // 0–4
  const code = sum('code'); // 0–2
  const goal = answers.goal ?? 1;
  const score = excel + bi + code;
  const max = 10;
  const level = score <= 3 ? 'Débutant' : score <= 7 ? 'Intermédiaire' : 'Avancé';

  if (goal === 3) {
    if (excel + bi >= 5) {
      return {
        slug: 'python-machine-learning',
        level,
        score,
        max,
        headline: 'Vous êtes prêt pour Python.',
        message:
          'Vos bases en tableur et en BI sont solides : le parcours Python vous fera passer au code, puis aux modèles prédictifs.',
      };
    }
    return {
      slug: 'excel-power-bi',
      level,
      score,
      max,
      headline: 'Commencez par consolider vos bases.',
      message:
        'Pour réussir en data science, la maîtrise des données dans Excel et Power BI est la meilleure fondation. Le parcours 01 vous y amène en six samedis, puis vous enchaînez avec Python.',
    };
  }

  if (goal === 2) {
    return {
      slug: 'kobo-power-bi-suivi-evaluation',
      level,
      score,
      max,
      headline: 'Le parcours suivi-évaluation est fait pour vous.',
      message:
        excel <= 1
          ? 'Nous vous conseillons de revoir les bases d’Excel avant le démarrage : la première séance du parcours 01 est un bon point de départ.'
          : 'Vous avez les bases nécessaires pour passer de la collecte Kobo à des tableaux de bord bailleurs automatisés.',
    };
  }

  return {
    slug: 'excel-power-bi',
    level,
    score,
    max,
    headline:
      bi >= 3 ? 'Vous irez vite sur le parcours 01.' : 'Le parcours 01 va transformer vos rapports.',
    message:
      bi >= 3
        ? 'Vous connaissez déjà une partie des outils : vous tirerez le meilleur des séances sur Power Query, DAX et le projet final.'
        : 'Vous allez remplacer le copier-coller par des requêtes automatiques et livrer un tableau de bord qui se met à jour tout seul.',
  };
}
