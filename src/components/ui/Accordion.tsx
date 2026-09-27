import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';

type Item = { title: ReactNode; content: ReactNode; meta?: ReactNode };

type Props = {
  items: Item[];
  defaultOpen?: number | null;
  dark?: boolean;
};

export function Accordion({ items, defaultOpen = null, dark = false }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const border = dark ? 'border-white/15' : 'border-line';

  return (
    <div className={`border-t ${border}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={i} className={`border-b ${border}`}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-5 py-6 text-left"
              >
                {item.meta && <span className="flex-none">{item.meta}</span>}
                <span className="flex-1 text-lg font-semibold md:text-xl">{item.title}</span>
                <span
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border transition-all duration-300 ${
                    dark ? 'border-white/25 group-hover:bg-white/10' : 'border-line group-hover:bg-sand'
                  } ${isOpen ? 'rotate-45' : ''}`}
                  aria-hidden="true"
                >
                  <Plus size={18} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pr-14">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
