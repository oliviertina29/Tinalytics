# Tinalytics

Site vitrine de Tinalytics : formations data en français (Excel, Power BI, Python) pour les professionnels d'Afrique de l'Ouest.

Construit avec React, TypeScript, Vite et Tailwind CSS.

## Démarrer

```bash
npm install
npm run dev      # serveur de développement sur http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
npm run lint
```

## Modifier les informations du site

Les informations qui changent souvent sont regroupées dans [`src/config.ts`](src/config.ts) :

| Champ | Effet sur la page |
| --- | --- |
| `nextCohortDate` | Date affichée sur le parcours 01 et dans le bloc d'inscription (ex. `'7 novembre'`). |
| `launchPrice`, `individualPrice` | Prix en FCFA (nombre, ex. `75000`). Affichés formatés : « 75 000 FCFA ». |
| `whatsappNumber` | Numéro au format international, chiffres uniquement (ex. `'22370000000'`). Active les boutons WhatsApp. |
| `email`, `linkedin`, `github` | Liens de contact. |

Tant qu'une valeur vaut `null`, la page affiche un texte de repli (« Inscriptions ouvertes », « Sur demande », réservation par e-mail), sans champ vide.

## Structure

```
src/
  config.ts             coordonnées, date de cohorte, prix
  data/courses.ts       contenu des parcours (séances, prérequis, objectifs) et FAQ
  data/quiz.ts          questions et logique du test de niveau
  pages/                une page par route (accueil, formations, fiche parcours,
                        entreprises, à propos, inscription, test de niveau, 404)
  components/           sections et composants réutilisables
  components/home/      sections de la page d'accueil
public/
  _redirects            routage des pages sur Netlify
  favicon.svg, olivier-tina.jpg
```

## Pages et fonctionnalités

| Route | Contenu |
| --- | --- |
| `/` | Accueil : tableau de bord de démonstration interactif, avant/après, parcours, programme séance par séance, calculateur de temps gagné, formateur, tarifs, FAQ |
| `/formations` | Catalogue filtrable par niveau et tableau comparatif |
| `/formations/:slug` | Fiche détaillée d'un parcours, programme interactif, version imprimable |
| `/entreprises` | Offre entreprises & ONG et formulaire de demande de devis |
| `/a-propos` | Parcours du formateur et principes pédagogiques |
| `/inscription` | Inscription en 4 étapes avec validation ; envoi par WhatsApp ou e-mail pré-rempli |
| `/test-de-niveau` | Test de positionnement en 6 questions avec recommandation de parcours |

Pour modifier un parcours (séances, outils, prérequis), éditez `src/data/courses.ts`.

## Déploiement

- **GitHub Pages** : https://oliviertina29.github.io/Tinalytics/ — à chaque push sur `main`, le workflow `.github/workflows/deploy-pages.yml` construit le site et le publie sur la branche `gh-pages` (Settings → Pages → Source : *Deploy from a branch*, `gh-pages` / `root`).
- **Netlify** : construit `main` avec `npm run build` (publication de `dist/`).
