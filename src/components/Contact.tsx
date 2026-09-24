import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="iletisim" className="scroll-mt-16 bg-[#df111c] text-white">
      <div className="mx-auto grid min-h-[70vh] w-full max-w-[1480px] items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_360px] lg:px-12">
        <div>
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.25em] text-white/60">
            {t.contact.eyebrow}
          </p>
          <h2 className="flex min-w-0 max-w-5xl flex-col gap-[0.05em] break-words text-[clamp(2.2rem,9.5vw,8.5rem)] font-black uppercase leading-[0.96] tracking-[-0.035em] sm:leading-[0.88] sm:tracking-[-0.055em]">
            <span>{t.contact.title}</span>
            <span className="block text-outline-dark">{t.contact.outline}</span>
          </h2>
        </div>

        <div className="border-l border-white/30 pl-6 sm:pl-8">
          <p className="text-base leading-7 text-white/72">
            {t.contact.description}
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://wa.me/yusufxterzi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-full bg-white px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              {t.contact.whatsapp}
              <span>↗</span>
            </a>
            <span
              aria-disabled="true"
              className="flex cursor-not-allowed items-center justify-between rounded-full border border-white/30 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white/65"
            >
              {t.contact.instagram}
              <span className="text-[10px] tracking-[0.16em]">{t.contact.soon}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
