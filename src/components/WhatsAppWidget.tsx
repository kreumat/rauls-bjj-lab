import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { whatsappUrl } from '../lib/whatsapp';

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        fill="currentColor"
        d="M16.04 3.2A12.72 12.72 0 0 0 5.3 22.75L3.5 29.32l6.72-1.76A12.72 12.72 0 1 0 16.04 3.2Zm0 23.28a10.52 10.52 0 0 1-5.36-1.47l-.38-.23-3.99 1.05 1.07-3.89-.25-.4a10.53 10.53 0 1 1 8.91 4.94Z"
      />
      <path
        fill="currentColor"
        d="M21.82 18.61c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58a9.57 9.57 0 0 1-1.77-2.2c-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.31.32-.52.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.29 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.82.67.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.14-1.5.26-.74.26-1.37.18-1.5-.08-.14-.29-.22-.61-.38Z"
      />
    </svg>
  );
}

export function WhatsAppWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <aside
      aria-label={t.whatsappWidget.regionLabel}
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 flex flex-col items-end sm:bottom-6 sm:right-6"
    >
      {isOpen && (
        <div
          id="whatsapp-contact-card"
          role="dialog"
          aria-labelledby="whatsapp-contact-title"
          className="whatsapp-popover mb-3 max-h-[calc(100svh-6rem)] w-[calc(100vw-2rem)] max-w-[22rem] overflow-y-auto rounded-[1.5rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
        >
          <div className="relative overflow-hidden rounded-t-[1.45rem] bg-[#11110f] px-5 py-5 text-white sm:px-6">
            <div className="absolute -right-10 -top-14 h-32 w-32 rounded-full border border-white/10" />
            <div className="relative flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-lg">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <div className="min-w-0 pt-0.5">
                <p lang="en" className="text-[9px] font-extrabold uppercase tracking-[0.19em] text-white/45">
                  Roger Gracie Bursa
                </p>
                <h2 id="whatsapp-contact-title" className="mt-1 text-lg font-black leading-tight">
                  {t.whatsappWidget.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={t.whatsappWidget.close}
                className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-lg text-white/60 transition-colors hover:border-white/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                ×
              </button>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-sm leading-6 text-black/60">
              {t.whatsappWidget.description}
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center justify-between rounded-full bg-[#25D366] px-5 py-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#081c0f] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128c4b] focus-visible:ring-offset-2"
            >
              <span className="flex items-center gap-2.5">
                <WhatsAppIcon className="h-5 w-5" />
                {t.whatsappWidget.cta}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <p className="mt-3 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-black/30">
              {t.whatsappWidget.note}
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="whatsapp-contact-card"
        aria-label={isOpen ? t.whatsappWidget.close : t.whatsappWidget.open}
        className="group flex h-14 w-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-0 text-[#081c0f] shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128c4b] focus-visible:ring-offset-2 sm:w-auto sm:px-5"
      >
        <WhatsAppIcon className="h-7 w-7 shrink-0 transition-transform group-hover:scale-105" />
        <span className="hidden text-xs font-black uppercase tracking-[0.11em] sm:inline">
          {t.whatsappWidget.open}
        </span>
      </button>
    </aside>
  );
}
