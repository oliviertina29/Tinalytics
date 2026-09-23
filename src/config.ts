// Informations du site. Laissez une valeur à `null` tant qu'elle n'est pas
// connue : la page affiche alors un texte de repli au lieu d'un champ vide.
type SiteConfig = {
  email: string;
  linkedin: string;
  github: string;
  /** Numéro WhatsApp au format international, chiffres uniquement (ex. 22370000000). */
  whatsappNumber: string | null;
  /** Date de démarrage de la prochaine cohorte, en toutes lettres (ex. « 7 novembre »). */
  nextCohortDate: string | null;
  /** Prix en FCFA. */
  launchPrice: number | null;
  individualPrice: number | null;
  photo: string;
};

export const SITE: SiteConfig = {
  email: 'olivertina29@gmail.com',
  linkedin: 'https://linkedin.com/in/djara-olivier-tina',
  github: 'https://github.com/oliviertina29',
  whatsappNumber: null,
  nextCohortDate: null,
  launchPrice: null,
  individualPrice: null,
  photo: '/olivier-tina.jpg',
};

export const whatsappUrl = SITE.whatsappNumber ? `https://wa.me/${SITE.whatsappNumber}` : null;

export const mailtoUrl = (subject?: string) =>
  `mailto:${SITE.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

export const formatFcfa = (amount: number) => new Intl.NumberFormat('fr-FR').format(amount);
