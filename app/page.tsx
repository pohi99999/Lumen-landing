"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowDown, ArrowRight, MapPin, ScanLine, Wine } from "lucide-react";

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
      className="min-h-screen pb-20 text-[#EAEAEA] selection:bg-[#3A0F14] selection:text-white"
    >
      <section className="relative flex min-h-screen overflow-hidden py-16 sm:py-24 md:min-h-[900px] md:items-center md:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-[#160609]/36 to-[#0B0B0B]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(198,161,91,0.12),transparent_28%),radial-gradient(circle_at_18%_24%,rgba(58,15,20,0.3),transparent_34%)]" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-16 lg:px-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
            <FadeIn direction="up">
              <p className="mb-6 font-serif text-[11px] font-light italic uppercase tracking-[0.3em] text-[#C6A15B]/75 md:mb-8 md:text-sm">
                Lumen &mdash; {t.exclusivity.label}
              </p>
              <h1 className="mb-6 max-w-[94%] font-serif text-[clamp(1.72rem,1.45rem+0.55vw,1.82rem)] font-light italic leading-[1.12] text-[#EAEAEA] text-glow-gold sm:mb-7 sm:max-w-[24ch] md:mb-10 md:max-w-[23ch] md:leading-[1.09] lg:max-w-[21ch] lg:leading-[1.08]">
                <span className="block md:inline">{heroHeadingLead}</span>
                {heroHeadingTail ? (
                  <>
                    <span className="hidden md:inline"> — </span>
                    <span className="mt-1.5 block md:mt-0 md:inline">{heroHeadingTail}</span>
                  </>
                ) : null}
              </h1>
              <p className="mb-5 max-w-[32rem] font-serif text-[#EAEAEA]/78 lumen-hero-lead sm:mb-6 sm:max-w-[34rem] md:max-w-xl">
                {t.hero.subheading}
              </p>
              <p className="mb-7 max-w-lg font-serif text-[1rem] italic leading-[1.58] text-[#C6A15B] sm:text-[1.08rem] md:mb-14 md:text-[1.16rem] md:leading-[1.68]">
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
            <ImageFrame
              src="/7.jpg"
              alt={t.alt.heroImage}
              frameClassName="h-[340px] sm:h-[380px] md:h-[440px] lg:h-[72vh] lg:min-h-[640px]"
              sizes="(max-width: 1024px) 92vw, 52vw"
              priority
              className="mx-auto max-w-[19rem] sm:max-w-[23rem] md:max-w-none"
              imageClassName="max-md:object-contain"
              overlay={<div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/36 via-transparent to-[#3A0F14]/12" />}
            />
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center opacity-50 md:flex">
          <span className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em]">
            {t.hero.scroll}
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      <section className="px-6 py-28 sm:py-32 md:py-44">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn direction="up">
            <div className="space-y-12 font-serif lumen-intro-copy font-light text-[#EAEAEA]/85">
              <p className="whitespace-pre-line italic">{t.intro.line1}</p>
              <div className="section-divider mx-auto" />
              <p className="italic">{t.intro.line2}</p>
              <p className="whitespace-pre-line italic text-[#C6A15B]">{t.intro.line3}</p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="mt-14 flex justify-center sm:mt-16">
              <DecorativeCube className="h-40 w-40 sm:h-44 sm:w-44 md:h-52 md:w-52" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28 md:py-32">
        <div className="container mx-auto grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn
            direction="right"
            className="order-2 relative mx-auto w-full max-w-md lg:order-1 lg:max-w-none"
          >
            <ImageFrame
              src="/2.jpg"
              alt={t.alt.conceptImage}
              frameClassName="aspect-[3/4] lg:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              overlay={
                <div className="absolute inset-0 shadow-[inset_0_0_100px_#0B0B0B]" />
              }
            />
          </FadeIn>

          <FadeIn direction="left" className="order-1 space-y-8 lg:order-2 lg:pr-12">
            <Wine className="mb-8 h-8 w-8 text-[#C6A15B] opacity-50" />
            <h2 className="font-serif text-4xl font-light italic leading-tight text-glow-gold md:text-5xl">
              {t.concept.heading}
            </h2>
            <div className="space-y-6 font-serif lumen-body-copy font-light italic tracking-wide text-[#EAEAEA]/72">
              <p>{t.concept.p1}</p>
              <p>{t.concept.p2}</p>
              <p>{t.concept.p3}</p>
              <p className="pt-4 font-normal text-[#EAEAEA]/90">
                {t.concept.closing}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28">
        <div className="container mx-auto grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn direction="right" className="space-y-8 lg:pl-12">
            <h2 className="font-serif text-4xl font-light italic leading-tight text-[#EAEAEA] text-glow-gold md:text-5xl">
              {t.heritage.heading}
            </h2>
            <div className="space-y-6 font-serif lumen-body-copy font-light italic tracking-wide text-[#EAEAEA]/72">
              <p>{t.heritage.p1}</p>
              <p>{t.heritage.p2}</p>
              <p>{t.heritage.p3}</p>
              <p className="font-serif lumen-accent-copy-lg pt-4 italic text-[#C6A15B]">
                &ldquo;{t.heritage.quote}&rdquo;
              </p>
            </div>
          </FadeIn>

          <FadeIn
            direction="left"
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <ImageFrame
              src="/3.jpg"
              alt={t.alt.heritageImage}
              frameClassName="aspect-[4/3] lg:aspect-square"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
          <FadeIn
            direction="left"
            className="order-2 relative mx-auto w-full max-w-2xl lg:order-1 lg:max-w-none"
          >
            <ImageFrame
              src="/6.jpg"
              alt={t.alt.authImage}
              frameClassName="aspect-[4/3] lg:aspect-[16/10]"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </FadeIn>

          <FadeIn direction="right" className="order-1 space-y-8 text-right lg:order-2 lg:pl-8">
            <ScanLine className="ml-auto h-10 w-10 text-[#EAEAEA] opacity-60" />
            <h2 className="font-serif text-[1.65rem] font-light italic leading-[1.05] text-glow-gold sm:text-[2.1rem] md:text-[2.75rem] lg:text-[3.35rem]">
              {t.experience.heading}
            </h2>
            <div className="ml-auto max-w-[36rem] space-y-5 font-serif lumen-body-copy font-light italic tracking-wide text-[#EAEAEA]/76">
              <p>{t.experience.p1}</p>
              <p>{t.experience.p2}</p>
            </div>
            <p className="ml-auto max-w-[34rem] font-serif lumen-accent-copy italic text-[#C6A15B]">
              {t.experience.accent}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-6">
          <FadeIn direction="up" className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <ImageFrame
              src="/9.jpg"
              alt={t.alt.detail1}
              frameClassName="aspect-[2/3] bg-[#070708]/80"
              fit="contain"
              sizes="(max-width: 1024px) 100vw, 54vw"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <ImageFrame
                src="/3.jpg"
                alt={t.alt.heritageImage}
                frameClassName="aspect-[3/4]"
                fit="contain"
                sizes="(max-width: 1024px) 50vw, 22vw"
              />
              <ImageFrame
                src="/7.jpg"
                alt={t.alt.detail2}
                frameClassName="aspect-[3/4]"
                fit="contain"
                sizes="(max-width: 1024px) 50vw, 22vw"
              />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.12}>
            <ImageFrame
              src="/4.jpg"
              alt={t.alt.detail3}
              frameClassName="aspect-[16/9]"
              sizes="(max-width: 1024px) 100vw, 100vw"
              position="center 30%"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container mx-auto">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-20 space-y-8">
            <h2 className="font-serif text-4xl font-light italic leading-tight text-glow-gold md:text-5xl">
              {t.exclusivity.heading}
            </h2>
            <div className="space-y-4 font-serif lumen-body-copy font-light italic tracking-wide text-[#EAEAEA]/72">
              <p>{t.exclusivity.p1}</p>
              <p>{t.exclusivity.p2}</p>
            </div>
            <p className="font-serif lumen-accent-copy italic text-[#C6A15B]">
              {t.exclusivity.accent}
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 opacity-90">
            <FadeIn delay={0.1} direction="up" className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/1.jpg"
                alt={t.alt.detail1}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </FadeIn>
            <FadeIn delay={0.2} direction="up" className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/6.jpg"
                alt={t.alt.authImage}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </FadeIn>
            <FadeIn delay={0.3} direction="up" className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/3.jpg"
                alt={t.alt.heritageImage}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </FadeIn>
            <FadeIn delay={0.4} direction="up" className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/4.jpg"
                alt={t.alt.detail3}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="partnerek" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <FadeIn direction="up">
            <MapPin className="mx-auto mb-8 h-10 w-10 text-[#C6A15B]" />
            <h2 className="font-serif text-4xl font-light italic leading-tight text-glow-gold md:text-5xl">
              {t.partners.heading}
            </h2>
            <div className="mb-16 space-y-6 font-serif lumen-body-copy font-light italic tracking-wide text-[#EAEAEA]/72">
              <p>{t.partners.p1}</p>
              <p>{t.partners.p2}</p>
              <p>{t.partners.p3}</p>
            </div>
            <button className="inline-flex items-center gap-3 border border-[#EAEAEA]/40 px-8 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-500 ease-out group backdrop-blur-sm hover:bg-[#EAEAEA] hover:text-[#0B0B0B]">
              {t.partners.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-[1px]" />
        <div className="container mx-auto grid items-center gap-12 relative z-10 lg:grid-cols-2">
          <FadeIn direction="right" className="relative aspect-video w-full overflow-hidden group lg:aspect-[16/10]">
            <Image
              src="/8.jpg"
              alt={t.alt.nextReleaseImage}
              fill
              className="object-cover object-left opacity-85 transition-all duration-700 group-hover:opacity-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/18 via-transparent to-[#0B0B0B]/26" />
          </FadeIn>
          <FadeIn direction="left" className="space-y-8 lg:pl-16">
            <h2 className="font-serif text-4xl font-light italic leading-tight text-glow-gold md:text-5xl">
              {t.nextRelease.heading}
            </h2>
            <p className="font-serif lumen-body-copy whitespace-pre-line font-light italic tracking-wide text-[#EAEAEA]/72">
              {t.nextRelease.p1}
            </p>
            <div className="pt-6">
              <button className="border-b border-[#C6A15B] pb-2 pt-2 min-h-[44px] text-sm uppercase tracking-[0.2em] text-[#C6A15B] transition-colors hover:border-[#EAEAEA] hover:text-[#EAEAEA]">
                {t.nextRelease.cta}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="pt-32 pb-12 px-6 text-center">
        <FadeIn direction="up" className="mb-24">
          <h2 className="font-serif text-4xl font-light italic leading-tight text-[#EAEAEA]/90 text-glow-gold md:text-6xl">
            {t.closing.heading}
          </h2>
          <p className="font-serif lumen-accent-copy italic text-[#C6A15B]">
            {t.closing.sub}
          </p>
        </FadeIn>

        <div className="mx-auto grid max-w-7xl items-center gap-8 border-t border-[#EAEAEA]/10 pt-12 text-sm tracking-widest text-[#EAEAEA]/40 md:grid-cols-[1fr_auto_1fr]">
          <div className="order-1 flex flex-col items-center gap-2 md:items-start md:text-left">
            <span className="font-serif text-base uppercase tracking-[0.3em] text-[#EAEAEA]/70">
              Lumen Collection
            </span>
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#C6A15B]/55">
              Limitált sorozat
            </span>
          </div>

          <div className="order-3 flex justify-center md:order-2">
            <DecorativeCube className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32" />
          </div>

          <div className="order-2 flex flex-wrap justify-center gap-8 uppercase text-xs md:order-3 md:justify-end">
            <a href="#" className="inline-flex min-h-[44px] items-center py-3 transition-colors hover:text-[#EAEAEA]">
              {t.footer.imprint}
            </a>
            <a href="#" className="inline-flex min-h-[44px] items-center py-3 transition-colors hover:text-[#EAEAEA]">
              {t.footer.privacy}
            </a>
            <a href="#" className="inline-flex min-h-[44px] items-center py-3 transition-colors hover:text-[#EAEAEA]">
              {t.footer.contact}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

type ImageFrameProps = {
  src: string;
  alt: string;
  frameClassName: string;
  sizes: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  position?: string;
  className?: string;
  imageClassName?: string;
  overlay?: ReactNode;
};

function ImageFrame({
  src,
  alt,
  frameClassName,
  sizes,
  priority = false,
  fit = "cover",
  position = "center",
  className = "",
  imageClassName = "",
  overlay,
}: ImageFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[34px] border border-[#C6A15B]/18 bg-black/30 shadow-[0_28px_80px_rgba(0,0,0,0.35)] ${frameClassName} ${className}`}
    >
      {fit === "contain" ? (
        <div className="absolute inset-0 p-4 sm:p-5">
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              sizes={sizes}
              className={`object-contain ${imageClassName}`}
              style={{ objectPosition: position }}
            />
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
          style={{ objectPosition: position }}
        />
      )}
      {overlay}
    </div>
  );
}

function DecorativeCube({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-[#C6A15B]/28 bg-[linear-gradient(145deg,rgba(11,11,11,0.96),rgba(58,15,20,0.78))] shadow-[0_24px_60px_rgba(0,0,0,0.34)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,213,160,0.12),transparent_46%),linear-gradient(135deg,transparent,rgba(198,161,91,0.08),transparent_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] bg-[length:14px_14px] opacity-15 mix-blend-screen" />
      <div className="absolute inset-0 p-5 sm:p-6">
        <div className="relative h-full w-full">
          <Image
            src="/10.jpg"
            alt="Lumen díszes L jel"
            fill
            priority={false}
            sizes="(max-width: 768px) 40vw, 180px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
