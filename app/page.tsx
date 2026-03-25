"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowDown, MapPin, Wine, ScanLine, ArrowRight } from "lucide-react";

export default function Home ()
{
  return (
    <>
      <LanguageSwitcher />
      <PageContent />
      <BackToTop />
      <CookieConsent />
    </>
  );
}

function PageContent ()
{
  const { t } = useLanguage();

  return (
    <main id="main-content" role="main" className="min-h-screen text-[#EAEAEA] selection:bg-[#3A0F14] selection:text-white pb-20">
      {/* 1. HERO SZEKCIÓ */ }
      <section className="relative h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with parallax-like layering */ }
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.jpg"
            alt={ t.alt.heroImage }
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full pt-20 pb-28">
          <FadeIn direction="up">
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6 text-[#EAEAEA] drop-shadow-lg leading-tight text-glow-gold whitespace-pre-line">
              { t.hero.heading }
            </h1>
            <p className="font-sans font-light text-lg md:text-xl max-w-lg mb-8 text-[#EAEAEA]/80 tracking-wide leading-relaxed">
              { t.hero.subheading }
            </p>
            <p className="font-serif italic text-2xl text-[#C6A15B] mb-6 md:mb-12">
              &ldquo;{ t.hero.quote }&rdquo;
            </p>
            <a
              href="#partnerek"
              className="inline-flex items-center gap-3 border border-[#C6A15B]/40 px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-all duration-500 ease-out backdrop-blur-sm"
            >
              { t.hero.cta }
            </a>
          </FadeIn>
        </div>

        {/* Scroll indicator */ }
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60">
          <span className="uppercase tracking-[0.3em] text-[10px] mb-4">{ t.hero.scroll }</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* 2. BEVEZETŐ SZEKCIÓ */ }
      <section className="py-32 md:py-48 px-6 text-center relative max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="space-y-12 font-serif text-2xl md:text-4xl leading-relaxed text-[#EAEAEA]/90 font-light">
            <p className="whitespace-pre-line">{ t.intro.line1 }</p>
            <div className="section-divider mx-auto" />
            <p>{ t.intro.line2 }</p>
            <p className="text-[#C6A15B] whitespace-pre-line">{ t.intro.line3 }</p>
          </div>
        </FadeIn>
      </section>

      {/* 3. KONCEPCIÓ SZEKCIÓ */ }
      <section className="py-24 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1 relative aspect-[3/4] lg:aspect-auto lg:h-[800px] w-full max-w-md mx-auto grayscale-[20%]">
            <Image
              src="/2.jpg"
              alt={ t.alt.conceptImage }
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_#0B0B0B]" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2 space-y-8 lg:pr-12">
            <Wine className="w-8 h-8 text-[#C6A15B] mb-8 opacity-50" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light whitespace-pre-line text-glow-gold">
              { t.concept.heading }
            </h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 space-y-6 text-lg tracking-wide leading-relaxed">
              <p>{ t.concept.p1 }</p>
              <p>{ t.concept.p2 }</p>
              <p>{ t.concept.p3 }</p>
              <p className="text-[#EAEAEA] font-medium pt-4">{ t.concept.closing }</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. MAGYAR EREDET / STORY */ }
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <FadeIn direction="right" className="space-y-8 lg:pl-12">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-[#EAEAEA] whitespace-pre-line text-glow-gold">
              { t.heritage.heading }
            </h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 space-y-6 text-lg tracking-wide leading-relaxed">
              <p>{ t.heritage.p1 }</p>
              <p>{ t.heritage.p2 }</p>
              <p>{ t.heritage.p3 }</p>
              <p className="italic font-serif text-[#C6A15B] text-2xl pt-4">
                &ldquo;{ t.heritage.quote }&rdquo;
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="relative aspect-[4/3] lg:aspect-square w-full opacity-80">
            <Image
              src="/3.jpg"
              alt={ t.alt.heritageImage }
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-[#0B0B0B]" />
          </FadeIn>
        </div>
      </section>

      {/* 5. ÉLMÉNY SZEKCIÓ */ }
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-20 space-y-8">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light whitespace-pre-line text-glow-gold">
              { t.experience.heading }
            </h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 text-lg tracking-wide space-y-4">
              <p>{ t.experience.p1 }</p>
              <p>{ t.experience.p2 }</p>
            </div>
            <p className="font-serif text-2xl text-[#C6A15B] italic leading-relaxed">{ t.experience.accent }</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-90">
            <FadeIn delay={ 0.1 } direction="up" className="relative aspect-square overflow-hidden group">
              <Image
                src="/4.jpg"
                alt={ t.alt.detail1 }
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </FadeIn>
            <FadeIn delay={ 0.3 } direction="up" className="relative aspect-[3/4] md:-translate-y-12 overflow-hidden group">
              <Image
                src="/1.jpg"
                alt={ t.alt.detail2 }
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </FadeIn>
            <FadeIn delay={ 0.5 } direction="up" className="relative aspect-square md:translate-y-12 overflow-hidden group">
              <Image
                src="/5.jpg"
                alt={ t.alt.detail3 }
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. EXKLUZIVITÁS SZEKCIÓ */ }
      <section className="py-32 px-6 bg-[#3A0F14]/80 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[#000000] mix-blend-overlay opacity-30" />

        <div className="container mx-auto relative z-10 text-center flex flex-col items-center">
          <FadeIn direction="up">
            <span className="uppercase tracking-[0.3em] text-[#C6A15B] text-sm mb-6 block font-semibold">
              { t.exclusivity.label }
            </span>
            <div className="font-[family-name:var(--font-display)] text-[120px] md:text-[200px] leading-none mb-4 text-gradient-gold drop-shadow-2xl opacity-90">
              { t.exclusivity.number }
            </div>
            <span className="uppercase tracking-[0.4em] text-[#C6A15B] text-2xl md:text-3xl font-light mb-10 block">
              { t.exclusivity.unit }
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-light mb-8 max-w-2xl mx-auto leading-tight">
              { t.exclusivity.heading }
            </h2>
            <div className="font-sans font-light text-[#EAEAEA]/80 text-lg md:text-xl tracking-wide max-w-2xl mx-auto space-y-4">
              <p>{ t.exclusivity.p1 }</p>
              <p>{ t.exclusivity.p2 }</p>
              <p className="text-[#C6A15B] font-medium pt-8">{ t.exclusivity.accent }</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. HITELESSÉG (QR / TECH) */ }
      <section className="py-32 px-6 border-b border-[#EAEAEA]/5">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="space-y-8">
            <ScanLine className="w-10 h-10 text-[#EAEAEA] mb-6 opacity-60" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light text-glow-gold">
              { t.authenticity.heading }
            </h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 text-lg tracking-wide space-y-6">
              <p>{ t.authenticity.p1 }</p>
              <p>{ t.authenticity.p2 }</p>
              <p className="text-[#EAEAEA]">{ t.authenticity.p3 }</p>
            </div>
            <div className="pt-6">
              <a href="#partnerek" className="inline-flex items-center gap-3 border border-[#EAEAEA]/40 px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#EAEAEA] hover:text-[#0B0B0B] transition-all duration-500 ease-out group backdrop-blur-sm">
                { t.authenticity.cta }
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="relative h-[500px] w-full max-w-sm mx-auto p-1 border border-[#EAEAEA]/10 rounded-xl overflow-hidden backdrop-blur-sm bg-black/20 shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#3A0F14]/20 to-transparent" />
            <Image
              src="/6.jpg"
              alt={ t.alt.authImage }
              fill
              className="object-cover opacity-50 mix-blend-screen"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            <div className="relative z-10 w-48 h-48 border-2 border-[#C6A15B] rounded-lg flex items-center justify-center">
              <div className="w-full h-0.5 bg-[#C6A15B] animate-[scan_2s_ease-in-out_infinite]" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. ELÉRHETŐSÉG / PARTNEREK */ }
      <section id="partnerek" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <FadeIn direction="up">
            <MapPin className="w-10 h-10 mx-auto text-[#C6A15B] mb-8" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light mb-8 text-glow-gold">
              { t.partners.heading }
            </h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 text-lg tracking-wide space-y-6 mb-16">
              <p>{ t.partners.p1 }</p>
              <p>{ t.partners.p2 }</p>
              <p>{ t.partners.p3 }</p>
            </div>
            <button className="inline-flex items-center gap-3 border border-[#EAEAEA]/40 px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#EAEAEA] hover:text-[#0B0B0B] transition-all duration-500 ease-out group backdrop-blur-sm">
              { t.partners.cta }
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 9. KÖVETKEZŐ KIADÁS */ }
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <FadeIn direction="right" className="relative aspect-video w-full overflow-hidden group">
            <Image
              src="/5.jpg"
              alt={ t.alt.nextReleaseImage }
              fill
              className="object-cover opacity-60 grayscale-[40%] group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <FadeIn direction="left" className="space-y-8 lg:pl-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-glow-gold">
              { t.nextRelease.heading }
            </h2>
            <p className="font-sans font-light text-[#EAEAEA]/70 text-lg tracking-wide whitespace-pre-line">
              { t.nextRelease.p1 }
            </p>
            <div className="pt-6">
              <button className="border-b border-[#C6A15B] pb-2 uppercase tracking-[0.2em] text-sm text-[#C6A15B] hover:text-[#EAEAEA] hover:border-[#EAEAEA] transition-colors">
                { t.nextRelease.cta }
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. ZÁRÓ SZEKCIÓ & FOOTER */ }
      <footer className="pt-32 pb-12 px-6 text-center">
        <FadeIn direction="up" className="mb-32">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-light mb-8 text-[#EAEAEA]/90 leading-tight text-glow-gold">
            { t.closing.heading }
          </h2>
          <p className="font-serif text-2xl text-[#C6A15B] italic">
            { t.closing.sub }
          </p>
        </FadeIn>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-[#EAEAEA]/10 pt-12 text-sm font-sans tracking-widest text-[#EAEAEA]/40 gap-6">
          <div>© { new Date().getFullYear() } LUMEN COLLECTION</div>
          <div className="flex gap-8 uppercase text-[10px]">
            <a href="#" className="hover:text-[#EAEAEA] transition-colors">{ t.footer.imprint }</a>
            <a href="#" className="hover:text-[#EAEAEA] transition-colors">{ t.footer.privacy }</a>
            <a href="#" className="hover:text-[#EAEAEA] transition-colors">{ t.footer.contact }</a>
          </div>
        </div>
      </footer>

      {/* Animations via Tailwind */ }
      <style dangerouslySetInnerHTML={ {
        __html: `
        @keyframes scan {
          0%, 100% { transform: translateY(-70px); opacity: 0; }
          10%, 90% { opacity: 1; }
          50% { transform: translateY(70px); }
        }
      `} } />
    </main>
  );
}
