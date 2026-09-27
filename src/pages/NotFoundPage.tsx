import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFoundPage() {
  usePageMeta('Page introuvable');
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center gap-7 py-20 text-center">
      <span className="font-display text-[140px] font-semibold leading-none tracking-tight text-clay md:text-[200px]">404</span>
      <h1 className="h2 m-0">Cette page n’existe pas.</h1>
      <p className="lead m-0 max-w-[520px]">Le lien est peut-être incomplet, ou la page a été déplacée.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-dark">
          Retour à l’accueil
        </Link>
        <Link to="/formations" className="btn-outline">
          Voir les formations <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
