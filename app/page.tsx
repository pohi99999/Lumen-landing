"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowDown, MapPin, Wine, ScanLine, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <LanguageSwitcher />
      <PageContent />
      <BackToTop />
      <CookieConsent />
    </>
  );
}

function PageContent() {
  const { t } = useLanguage();
  const [heroHeadingLead, ...heroHeadingTailParts] = t.hero.heading.split(" — ");
  const heroHeadingTail = heroHeadingTailParts.join(" — ");

  return (
    <main
      id="main-content"
      role="main"
      className="min-h-screen text-[#EAEAEA] selection:bg-[#3A0F14] selection:text-white pb-20"
    >
      <section className="relative flex min-h-screen items-start overflow-hidden py-16 sm:py-24 md:min-h-[900px] md:items-center md:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/78 via-[#160609]/34 to-[#0B0B0B]/48" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(198,161,91,0.12),transparent_28%),radial-gradient(circle_at_18%_24%,rgba(58,15,20,0.28),transparent_34%)]" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
            <FadeIn direction="up">
              <p className="mb-6 font-serif text-[11px] font-light italic uppercase tracking-[0.3em] text-[#C6A15B]/75 md:mb-8 md:text-sm">
                Lumen &mdash; {t.exclusivity.label}
              </p>
              <h1 className="mb-6 max-w-[15.25ch] font-serif text-[1.42rem] font-light italic leading-[1.03] text-[#EAEAEA] text-balance text-glow-gold sm:mb-7 sm:max-w-[15ch] sm:text-[1.82rem] sm:leading-[1.06] md:mb-10 md:max-w-[11.5ch] md:text-[3.1rem] md:leading-[1.08] lg:max-w-[12ch] lg:text-[3.75rem] xl:text-[4.15rem]">
                <span className="block md:inline">{heroHeadingLead}</span>
                {heroHeadingTail ? (
                  <>
                    <span className="hidden md:inline"> — </span>
                    <span className="mt-1.5 block md:mt-0 md:inline">{heroHeadingTail}</span>
                  </>
                ) : null}
              </h1>
              <p className="mb-5 max-w-xl font-serif text-[1rem] font-light italic leading-[1.62] tracking-[0.015em] text-[#EAEAEA]/76 sm:mb-6 sm:text-[1.18rem] sm:leading-[1.7] md:lumen-hero-lead">
                {t.hero.subheading}
              </p>
              <p className="mb-7 max-w-lg font-serif text-[0.98rem] italic leading-[1.58] text-[#C6A15B] sm:text-[1.08rem] md:mb-14 md:lumen-hero-quote">
                &ldquo;{t.hero.quote}&rdquo;
              </p>
              <a
                href="#partnerek"
                className="inline-flex items-center gap-3 border border-[#C6A15B]/40 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-500 ease-out hover:bg-[#C6A15B] hover:text-[#0B0B0B] backdrop-blur-sm sm:px-8 sm:py-4 sm:text-sm"
              >
                {t.hero.cta}
              </a>
            </FadeIn>

            <FadeIn direction="left" className="relative mt-2 w-full lg:justify-self-stretch">
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full border border-[#C6A15B]/16" />
              <div className="absolute -bottom-8 right-10 h-36 w-36 rounded-full border border-[#C6A15B]/12" />
              <div className="relative h-[280px] w-full overflow-hidden rounded-[30px] border border-[#C6A15B]/18 bg-black/18 shadow-[0_24px_80px_rgba(0,0,0,0.42)] sm:h-[360px] md:h-[440px] lg:h-[72vh] lg:min-h-[640px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B0B0B]/34 via-transparent to-[#3A0F14]/10" />
                <Image
                  src="/7.jpg"
                  alt={t.alt.heroImage}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 92vw, 52vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center opacity-50 md:flex">
          <span className="uppercase tracking-[0.3em] text-[10px] mb-4 font-sans">
            {t.hero.scroll}
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 text-center relative max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="space-y-12 font-serif lumen-intro-copy text-[#EAEAEA]/85 font-light">
            <p className="whitespace-pre-line italic">{t.intro.line1}</p>
            <div className="section-divider mx-auto" />
            <p className="italic">{t.intro.line2}</p>
            <p className="text-[#C6A15B] whitespace-pre-line italic">{t.intro.line3}</p>
          </div>
        </FadeIn>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn
            direction="right"
            className="order-2 lg:order-1 relative aspect-[3/4] lg:aspect-auto lg:h-[800px] w-full max-w-md mx-auto grayscale-[20%]"
          >
            <Image
              src="/2.jpg"
              alt={t.alt.conceptImage}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_#0B0B0B]" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2 space-y-8 lg:pr-12">
            <Wine className="w-8 h-8 text-[#C6A15B] mb-8 opacity-50" />
            <h2 className="font-serif italic text-4xl md:text-5xl font-light whitespace-pre-line text-glow-gold leading-tight">
              {t.concept.heading}
            </h2>
            <div className="font-serif italic font-light text-[#EAEAEA]/72 space-y-6 lumen-body-copy tracking-wide">
              <p>{t.concept.p1}</p>
              <p>{t.concept.p2}</p>
              <p>{t.concept.p3}</p>
              <p className="text-[#EAEAEA]/90 font-normal pt-4">{t.concept.closing}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <FadeIn direction="right" className="space-y-8 lg:pl-12">
            <h2 className="font-serif italic text-4xl md:text-5xl font-light text-[#EAEAEA] whitespace-pre-line text-glow-gold leading-tight">
              {t.heritage.heading}
            </h2>
            <div className="font-serif italic font-light text-[#EAEAEA]/72 space-y-6 lumen-body-copy tracking-wide">
              <p>{t.heritage.p1}</p>
              <p>{t.heritage.p2}</p>
              <p>{t.heritage.p3}</p>
              <p className="italic font-serif text-[#C6A15B] lumen-accent-copy pt-4">
                &ldquo;{t.heritage.quote}&rdquo;
              </p>
            </div>
          </FadeIn>
          <FadeIn
            direction="left"
            className="relative aspect-[4/3] lg:aspect-square w-full opacity-80"
          >
            <Image
              src="/3.jpg"
              alt={t.alt.heritageImage}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-[#0B0B0B]" />
          </FadeIn>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container mx-auto">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-20 space-y-8">
            <h2 className="font-serif italic text-4xl md:text-5xl font-light whitespace-pre-line text-glow-gold leading-tight">
              {t.experience.heading}
            </h2>
            <div className="font-serif italic font-light text-[#EAEAEA]/72 lumen-body-copy tracking-wide space-y-4">
              <p>{t.experience.p1}</p>
              <p>{t.experience.p2}</p>
            </div>
            <p className="font-serif text-[#C6A15B] italic lumen-accent-copy">
              {t.experience.accent}
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 opacity-90">
            <FadeIn delay={0.1} direction="up" className="relative aspect-[3/4] overflow-hidden group">
              <Image src="/1.jpg" alt={t.alt.detail1} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </FadeIn>
            <FadeIn delay={0.2} direction="up" className="relative aspect-[3/4] overflow-hidden group">
              <Image src="/6.jpg" alt={t.alt.detail2} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </FadeIn>
            <FadeIn delay={0.3} direction="up" className="relative aspect-[3/4] overflow-hidden group">
              <Image src="/3.jpg" alt={t.alt.detail3} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </FadeIn>
            <FadeIn delay={0.4} direction="up" className="relative aspect-[3/4] overflow-hidden group">
              <Image src="/4.jpg" alt={t.alt.detail1} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-36 md:py-44 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-[#1a0a0d]/25 to-[#0B0B0B]/40" />
        <div className="container mx-auto relative z-10 text-center flex flex-col items-center max-w-3xl">
          <FadeIn direction="up">
            <div className="section-divider mx-auto mb-16" />
            <span className="uppercase tracking-[0.3em] text-[#C6A15B]/80 text-xs md:text-sm mb-10 block font-light font-serif italic">
              {t.exclusivity.label}
            </span>
            <div className="flex items-baseline justify-center gap-4 md:gap-6 mb-10">
              <span className="font-serif italic text-7xl md:text-8xl lg:text-9xl font-light text-[#EAEAEA] leading-none">
                {t.exclusivity.number}
              </span>
              <span className="font-serif italic text-xl md:text-2xl text-[#EAEAEA]/70 font-light tracking-wider lowercase">
                {t.exclusivity.unit}
              </span>
            </div>
            <div className="section-divider mx-auto mb-12" />
            <h2 className="font-serif italic text-4xl md:text-5xl font-light mb-8 max-w-2xl mx-auto leading-tight text-glow-gold whitespace-pre-line">
              {t.exclusivity.heading}
            </h2>
            <div className="font-serif italic font-light text-[#EAEAEA]/72 lumen-body-copy tracking-wide max-w-2xl mx-auto space-y-5">
              <p>{t.exclusivity.p1}</p>
              <p>{t.exclusivity.p2}</p>
              <p className="text-[#C6A15B] font-normal italic pt-6 font-serif lumen-accent-copy">{t.exclusivity.accent}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-32 px-6 border-b border-[#EAEAEA]/5">
        <div className="container mx-auto grid lg:grid-cols-[0.72fr_minmax(0,1.18fr)] gap-16 items-start">
          <FadeIn direction="right" className="space-y-8 lg:pt-4">
            <ScanLine className="w-10 h-10 text-[#EAEAEA] mb-6 opacity-60" />
            <h2 className="font-serif italic text-4xl md:text-5xl font-light text-glow-gold leading-tight whitespace-pre-line">
              {t.authenticity.heading}
            </h2>
          </FadeIn>
          <FadeIn direction="left" className="relative overflow-hidden rounded-[30px] border border-[#EAEAEA]/10 bg-black/18 px-8 py-10 md:px-12 md:py-14 shadow-[0_22px_64px_rgba(0,0,0,0.32)]">
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(58,15,20,0.2),transparent_42%,rgba(198,161,91,0.05)_100%)]" />
            <div className="relative z-10">
              <div className="font-serif italic font-light text-[#EAEAEA]/72 lumen-body-copy tracking-wide space-y-6">
                <p>{t.authenticity.p1}</p>
                <p>{t.authenticity.p2}</p>
                <p className="text-[#EAEAEA]/92">{t.authenticity.p3}</p>
              </div>
              <div className="pt-8">
                <a href="#partnerek" className="inline-flex items-center gap-3 border border-[#EAEAEA]/40 px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#EAEAEA] hover:text-[#0B0B0B] transition-all duration-500 ease-out group backdrop-blur-sm">
                  {t.authenticity.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="partnerek" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <FadeIn direction="up">
            <MapPin className="w-10 h-10 mx-auto text-[#C6A15B] mb-8" />
            <h2 className="font-serif italic text-4xl md:text-5xl font-light mb-8 text-glow-gold leading-tight whitespace-pre-line">
              {t.partners.heading}
            </h2>
            <div className="font-serif italic font-light text-[#EAEAEA]/72 lumen-body-copy tracking-wide space-y-6 mb-16">
              <p>{t.partners.p1}</p>
              <p>{t.partners.p2}</p>
              <p>{t.partners.p3}</p>
            </div>
            <button className="inline-flex items-center gap-3 border border-[#EAEAEA]/40 px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#EAEAEA] hover:text-[#0B0B0B] transition-all duration-500 ease-out group backdrop-blur-sm">
              {t.partners.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-[1px]" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <FadeIn direction="right" className="relative aspect-video w-full overflow-hidden group">
            <Image src="/5.jpg" alt={t.alt.nextReleaseImage} fill className="object-cover opacity-60 grayscale-[40%] group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" sizes="(max-width: 1024px) 100vw, 50vw" />
          </FadeIn>
          <FadeIn direction="left" className="space-y-8 lg:pl-16">
            <h2 className="font-serif italic text-4xl md:text-5xl font-light text-glow-gold leading-tight">
              {t.nextRelease.heading}
            </h2>
            <p className="font-serif italic font-light text-[#EAEAEA]/72 lumen-body-copy tracking-wide whitespace-pre-line">
              {t.nextRelease.p1}
            </p>
            <div className="pt-6">
              <button className="border-b border-[#C6A15B] pb-2 pt-2 min-h-[44px] uppercase tracking-[0.2em] text-sm text-[#C6A15B] hover:text-[#EAEAEA] hover:border-[#EAEAEA] transition-colors">
                {t.nextRelease.cta}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="pt-32 pb-12 px-6 text-center">
        <FadeIn direction="up" className="mb-32">
          <h2 className="font-serif italic text-4xl md:text-6xl font-light mb-8 text-[#EAEAEA]/90 leading-tight text-glow-gold">
            {t.closing.heading}
          </h2>
          <p className="font-serif text-[#C6A15B] italic lumen-accent-copy">
            {t.closing.sub}
          </p>
        </FadeIn>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-[#EAEAEA]/10 pt-12 text-sm font-sans tracking-widest text-[#EAEAEA]/40 gap-6">
          <div>&copy; {new Date().getFullYear()} LUMEN COLLECTION</div>
          <div className="flex gap-8 uppercase text-xs">
            <a href="#" className="hover:text-[#EAEAEA] transition-colors py-3 min-h-[44px] inline-flex items-center">{t.footer.imprint}</a>
            <a href="#" className="hover:text-[#EAEAEA] transition-colors py-3 min-h-[44px] inline-flex items-center">{t.footer.privacy}</a>
            <a href="#" className="hover:text-[#EAEAEA] transition-colors py-3 min-h-[44px] inline-flex items-center">{t.footer.contact}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
