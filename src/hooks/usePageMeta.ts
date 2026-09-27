import { useEffect } from 'react';

const DEFAULT_DESCRIPTION =
  "Tinalytics forme les professionnels d'Afrique de l'Ouest à Excel, Power BI et Python, avec des cas concrets : microfinance, télécoms, ONG, agriculture.";

/** Met à jour le titre de l'onglet et la meta description pour chaque page. */
export function usePageMeta(title: string, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title ? `${title} · Tinalytics` : 'Tinalytics — Formations data en français';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
