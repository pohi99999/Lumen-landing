import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { ArrowDown, MapPin, Wine, ScanLine, ArrowRight } from "lucide-react";

export default function Home ()
{
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#EAEAEA] selection:bg-[#3A0F14] selection:text-white pb-20">
      {/* 1. HERO SZEKCIÓ */ }
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image / Texture */ }
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.jpg"
            alt="Lumen kollekció"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full pt-20">
          <FadeIn direction="up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6 text-[#EAEAEA] drop-shadow-lg leading-tight">
              Nem minden <br /> kerül a világ elé.
            </h1>
            <p className="font-sans font-light text-lg md:text-xl max-w-lg mb-8 text-[#EAEAEA]/80 tracking-wide">
              A Lumen egy limitált, sorszámozott gyűjtői bor kollekció — azok számára, akik értik a ritkaság valódi jelentését.
            </p>
            <p className="font-serif italic text-2xl text-[#C6A15B] mb-12">
              "A ritkaságnak nem kell elérhetetlen árúnak lennie."
            </p>
            <a
              href="#partnerek"
              className="inline-flex items-center gap-3 border border-[#C6A15B]/40 px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-all duration-500 ease-out"
            >
              Elérhetőség megtekintése
            </a>
          </FadeIn>
        </div>

        {/* Scroll indicator */ }
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60">
          <span className="uppercase tracking-[0.3em] text-[10px] mb-4">Görgessen</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* 2. BEVEZETŐ SZEKCIÓ */ }
      <section className="py-32 md:py-48 px-6 text-center relative max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="space-y-12 font-serif text-2xl md:text-4xl leading-relaxed text-[#EAEAEA]/90 font-light mix-blend-screen">
            <p>Vannak dolgok, amelyek nem sietnek.<br />Idő kell hozzájuk. Figyelem. Csend.</p>
            <p>A Lumen nem a pillanatnak készül — hanem azoknak, akik észreveszik a pillanat értékét.</p>
            <p className="text-[#C6A15B]">Nem mindenhol jelenik meg.<br />És nem marad sokáig.</p>
          </div>
        </FadeIn>
      </section>

      {/* 3. KONCEPCIÓ SZEKCIÓ */ }
      <section className="py-24 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1 relative aspect-[3/4] lg:aspect-auto lg:h-[800px] w-full max-w-md mx-auto grayscale-[20%]">
            <Image
              src="/2.jpg"
              alt="A Lumen története"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_#0B0B0B]" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2 space-y-8 lg:pr-12">
            <Wine className="w-8 h-8 text-[#C6A15B] mb-8 opacity-50" />
            <h2 className="font-serif text-4xl md:text-5xl font-light">Minden kiadás <br /> egy önálló történet.</h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 space-y-6 text-lg tracking-wide leading-relaxed">
              <p>Egy adott időszak lenyomata, egy gondosan kiválasztott bor, és egy kollekció, amelyből csak korlátozott számú darab létezik.</p>
              <p>Minden palack sorszámozott. Minden darab egy helyhez és egy időhöz kötődik.</p>
              <p>Amikor egy kiadás elfogy, nem tér vissza ugyanabban a formában.</p>
              <p className="text-[#EAEAEA] font-medium pt-4">Egyszer volt. És aki ott volt, emlékszik rá.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. MAGYAR EREDET / STORY */ }
      <section className="py-24 px-6 bg-[#0E0E0E]">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right" className="space-y-8 lg:pl-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#EAEAEA]">A Lumen gyökerei <br /> mélyre nyúlnak.</h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 space-y-6 text-lg tracking-wide leading-relaxed">
              <p>Magyarország borászata évszázadok óta formálódik — föld, klíma és emberi tudás finom egyensúlyából.</p>
              <p>Ez a tudás nem látványos. Nem hangos. Hanem rétegről rétegre épül.</p>
              <p>A Lumen ezt az örökséget emeli ki, és ad neki egy új, kortárs formát.</p>
              <p className="italic font-serif text-[#C6A15B] text-2xl pt-4">"Egy palack, amely nemcsak megőriz, hanem tovább is mesél."</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="relative aspect-[4/3] lg:aspect-square w-full opacity-80">
            <Image
              src="/3.jpg"
              alt="Magyar táj, szőlőbirtok"
              fill
              className="object-cover"
            />
            {/* Cinematic shadow overlay */ }
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-[#0B0B0B]" />
          </FadeIn>
        </div>
      </section>

      {/* 5. ÉLMÉNY SZEKCIÓ */ }
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-20 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-light">A Lumen nem csupán <br className="hidden md:block" />egy tárgy.</h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 text-lg tracking-wide space-y-4">
              <p>Jelen van a részletekben — a díszdoboz arányaiban, az anyagok választásában, a megjelenés csendes eleganciájában. És jelen van a tartalomban is.</p>
              <p>Az ízekben, az illatokban, abban az élményben, amely lassan bontakozik ki.</p>
            </div>
            <p className="font-serif text-2xl text-[#C6A15B] italic leading-relaxed">Egyszerre szól a szemnek és az érzékeknek. Egyensúlyban.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-90">
            <FadeIn delay={ 0.1 } direction="up" className="relative aspect-square">
              <Image src="/4.jpg" alt="Részlet 1" fill className="object-cover" />
            </FadeIn>
            <FadeIn delay={ 0.3 } direction="up" className="relative aspect-[3/4] md:-translate-y-12">
              <Image src="/1.jpg" alt="Részlet 2" fill className="object-cover" />
            </FadeIn>
            <FadeIn delay={ 0.5 } direction="up" className="relative aspect-square md:translate-y-12">
              <Image src="/5.jpg" alt="Részlet 3" fill className="object-cover" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. EXKLUZIVITÁS SZEKCIÓ */ }
      <section className="py-32 px-6 bg-[#3A0F14] relative overflow-hidden">
        {/* Subtle noise/texture effect placeholder */ }
        <div className="absolute inset-0 bg-[#000000] mix-blend-overlay opacity-30" />

        <div className="container mx-auto relative z-10 text-center flex flex-col items-center">
          <FadeIn direction="up">
            <span className="uppercase tracking-[0.3em] text-[#C6A15B] text-sm mb-6 block font-semibold">Korlátozott elérés</span>
            <div className="font-serif text-[120px] md:text-[200px] leading-none mb-8 text-[#EAEAEA] drop-shadow-2xl opacity-90">
              1500
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 max-w-2xl mx-auto leading-tight">
              Nem minden döntés kérdése.
            </h2>
            <div className="font-sans font-light text-[#EAEAEA]/80 text-lg md:text-xl tracking-wide max-w-2xl mx-auto space-y-4">
              <p>Van, amikor az számít, hogy valaki éppen ott van. Abban a városban. Abban az időben.</p>
              <p>Minden kiadás egy szűk kör számára válik elérhetővé. Legfeljebb 1500 palack. Nem ismételhető. Nem pótolható.</p>
              <p className="text-[#C6A15B] font-medium pt-8">Akik hozzájutnak, nemcsak birtokolják — hanem részesei lesznek egy adott pillanatnak.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. HITELESSÉG (QR / TECH) */ }
      <section className="py-32 px-6 border-b border-[#EAEAEA]/5">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="space-y-8">
            <ScanLine className="w-10 h-10 text-[#EAEAEA] mb-6 opacity-60" />
            <h2 className="font-serif text-4xl md:text-5xl font-light">Minden palack egyedi.</h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 text-lg tracking-wide space-y-6">
              <p>Sorszámozott és digitálisan hitelesített.</p>
              <p>A QR kódon keresztül visszakövethető a kollekció eredete, története és helye.</p>
              <p className="text-[#EAEAEA]">Egyfajta biztos pont — egy világban, ahol a valódi érték ritkán egyértelmű.</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="relative h-[500px] w-full max-w-sm mx-auto p-1 border border-[#EAEAEA]/10 rounded-xl overflow-hidden backdrop-blur-sm bg-block/20 shadow-2xl flex items-center justify-center">
            {/* Mocking QR scanning interface */ }
            <div className="absolute inset-0 bg-gradient-to-b from-[#3A0F14]/20 to-transparent" />
            <Image src="/6.jpg" alt="Hitelesítés" fill className="object-cover opacity-50 mix-blend-screen" />
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
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">A Lumen nem közvetlen értékesítésben jelenik meg.</h2>
            <div className="font-sans font-light text-[#EAEAEA]/70 text-lg tracking-wide space-y-6 mb-16">
              <p>Minden régióban gondosan kiválasztott partnereken keresztül válik elérhetővé.</p>
              <p>Ők nem csupán disztribútorok. Hanem közvetítők.</p>
              <p>Egy korlátozott örökség továbbadásában vesznek részt — felelősséggel és érzékenységgel.</p>
            </div>
            <button className="inline-flex items-center gap-3 border border-[#EAEAEA]/40 px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#EAEAEA] hover:text-[#0B0B0B] transition-all duration-500 ease-out group">
              Helyi elérhetőség megtekintése
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 9. KÖVETKEZŐ KIADÁS */ }
      <section className="py-24 px-6 bg-[#0E0E0E]">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" className="relative aspect-video w-full">
            <Image src="/5.jpg" alt="A következő kiadás" fill className="object-cover opacity-60 grayscale-[40%]" />
          </FadeIn>
          <FadeIn direction="left" className="space-y-8 lg:pl-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light">A történet folytatódik.</h2>
            <p className="font-sans font-light text-[#EAEAEA]/70 text-lg tracking-wide">
              Évente néhány új kollekció jelenik meg, mindegyik saját karakterrel és történettel.<br /><br />
              A következő kiadás már formálódik.
            </p>
            <div className="pt-6">
              <button className="border-b border-[#C6A15B] pb-2 uppercase tracking-[0.2em] text-sm text-[#C6A15B] hover:text-[#EAEAEA] hover:border-[#EAEAEA] transition-colors">
                Értesítést kérek
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. ZÁRÓ SZEKCIÓ & FOOTER */ }
      <footer className="pt-32 pb-12 px-6 text-center">
        <FadeIn direction="up" className="mb-32">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-8 text-[#EAEAEA]/90 leading-tight">
            Nem minden marad elérhető.
          </h2>
          <p className="font-serif text-2xl text-[#C6A15B] italic">
            És talán éppen ezért válik igazán értékessé.
          </p>
        </FadeIn>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-[#EAEAEA]/10 pt-12 text-sm font-sans tracking-widest text-[#EAEAEA]/40 gap-6">
          <div>© { new Date().getFullYear() } LUMEN COLLECTION</div>
          <div className="flex gap-8 uppercase text-[10px]">
            <a href="#" className="hover:text-[#EAEAEA] transition-colors">Impresszum</a>
            <a href="#" className="hover:text-[#EAEAEA] transition-colors">Adatkezelés</a>
            <a href="#" className="hover:text-[#EAEAEA] transition-colors">Kapcsolat</a>
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

