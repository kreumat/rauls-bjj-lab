import { assetUrl } from '../lib/asset';
import { useLanguage } from '../i18n/LanguageContext';
import { whatsappUrl } from '../lib/whatsapp';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#11110f] px-5 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={assetUrl('brand/academy-mark.png')}
            alt=""
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p lang="en" className="text-sm font-black uppercase tracking-[0.16em]">Roger Gracie Bursa</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/38">
              {t.footer.discipline}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
          <a href="#top" className="hover:text-white">{t.footer.top}</a>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
          <span className="text-white/25" aria-label={`${t.footer.instagram} — ${t.contact.soon}`}>{t.footer.instagram}</span>
          <span>© 2026 Roger Gracie Bursa</span>
        </div>
      </div>
    </footer>
  );
}
