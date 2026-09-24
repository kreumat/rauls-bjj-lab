import { useLanguage } from '../i18n/LanguageContext';
import { whatsappUrl } from '../lib/whatsapp';
import { SectionIntro } from './SectionIntro';

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M8.25 5.8a1 1 0 0 1 1.52-.85l9 6.2a1 1 0 0 1 0 1.7l-9 6.2a1 1 0 0 1-1.52-.85V5.8Z" />
    </svg>
  );
}

export function VideoShop() {
  const { t } = useLanguage();

  return (
    <section id="magaza" className="scroll-mt-16 bg-[#ebeae4] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
          <SectionIntro eyebrow={t.shop.eyebrow} title={t.shop.title} />
          <div className="lg:pb-2">
            <p className="max-w-md text-base leading-7 text-black/58">{t.shop.intro}</p>
            <p className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">
              <span className="h-2 w-2 rounded-full bg-[#25D366]" />
              {t.shop.deliveryNote}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.shop.items.map((video, index) => {
            const orderMessage = `${t.shop.orderMessage} ${video.title} (${video.price}).`;

            return (
              <article
                key={video.code}
                className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f7f6f1] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#11110f] p-6 text-white">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_75%_20%,#ef233c_0,transparent_32%),linear-gradient(135deg,transparent_42%,rgba(255,255,255,.13)_42%,rgba(255,255,255,.13)_43%,transparent_43%)]"
                  />
                  <span className="relative z-10 font-mono text-[10px] font-semibold tracking-[0.16em] text-white/45">
                    {video.code} / 0{index + 1}
                  </span>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#ef233c]">
                      <PlayIcon />
                    </span>
                  </div>
                  <span className="absolute bottom-5 right-6 text-[4.6rem] font-black leading-none tracking-[-0.08em] text-white/[0.07]">
                    0{index + 1}
                  </span>
                  <span className="absolute bottom-5 left-6 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/70">
                    {video.level}
                  </span>
                </div>

                <div className="flex min-h-[300px] flex-col p-6 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#df111c]">
                    {video.meta}
                  </p>
                  <h3 lang="en" className="mt-4 text-3xl font-black uppercase leading-[0.96] tracking-[-0.04em]">
                    {video.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-black/55">{video.description}</p>

                  <div className="mt-auto flex items-end justify-between gap-4 border-t border-black/10 pt-6">
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-black/35">
                        {t.shop.priceLabel}
                      </span>
                      <strong className="mt-1 block text-2xl font-black tracking-[-0.04em]">{video.price}</strong>
                    </div>
                    <a
                      href={whatsappUrl(orderMessage)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.shop.buy} — ${video.title}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[10px] font-black uppercase tracking-[0.1em] text-[#081c0f] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128c4b] focus-visible:ring-offset-2"
                    >
                      {t.shop.buy}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
