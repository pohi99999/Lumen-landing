# 🎬 "THE WHISPER" — Lumen Boxed Wine | AI Video Prompt
> Generálva: 2026-03-26 | Stílus: subtle luxury animation, no full reveal

---

## MASTER PROMPT (teljes, cinematic verzió)

```
A luxury dark studio environment. A matte black wine box with gold foil lettering 
("LUMEN") sits perfectly still at the center of a dark surface — slightly elevated, 
as if resting on obsidian stone. Soft, directional lighting from above casts a warm 
amber-gold highlight across the top edge of the box.

The box lid begins to open — barely. A 10–15 degree rotation, no more. As it lifts, 
a slow golden glow breathes outward from within the gap: warm, diffused, amber light 
that suggests something precious inside without revealing it. The glow pulses gently 
— not flickering, but breathing, as if the wine itself is alive.

The lid pauses at its peak — holds for a breath — then slowly, inevitably descends 
back, as if reconsidering. The glow fades. The box becomes still again, sealed.

Camera movement: slowly rotating around the front-right diagonal axis, a 15–20 degree 
arc, almost imperceptible. No dramatic zoom. No full reveal. The camera never crosses 
the centerline.

Color palette: deep blacks, matte gold, warm amber glows, microscopic dust particles 
suspended in the light beam. No bright whites. No reflective chrome.

Rhythm: slow. Timed to a breath — 3 seconds of stillness, 2 seconds of opening, 
1.5 seconds hold, 2 seconds of closing, 3 seconds of stillness.

Mood: exclusivity, restraint, luxury, desire — the suggestion is more powerful than 
the reveal. Think Chanel N°5. Think Hermès. Think silence.

Style: photorealistic CGI, 4K, cinematic depth of field, anamorphic bokeh in the 
background, film grain at 5%.
```

---

## SHORT PLATFORM VERSION (Instagram / TikTok / Reels — 15 sec)

```
Dark studio. Matte black luxury wine box with gold lettering. The lid opens 
barely — 10 degrees — releasing a warm golden glow from within. Holds. Then 
closes. Slow camera drift around the box. No reveal. Pure suggestion. 
Cinematic 4K, warm amber light, film grain.
```

---

## NEGATIVE PROMPT

```
Do not show: full bottle reveal, bright white lighting, fast movement, 
rotation above 20 degrees, plastic texture, cheap packaging, text overlays, 
people, hands, generic wine imagery, cheerful or casual mood, 
daytime lighting, lens flare, neon colors.
```

---

## Animációs paraméterek (GSAP referencia)

| Fázis | Időtartam | Mozdulat |
|-------|-----------|----------|
| Stillness | 3s | Semmi |
| Opening | 2s | rotateY: -12deg → -8deg |
| Hold | 1.5s | Pausa |
| Closing | 2s | rotateY: -8deg → -12deg |
| Stillness | 3s | Semmi |
| **Loop** | **11.5s** | **Teljes ciklus** |

## Fény paraméterek

- Glow opacity: 0 → 0.25 (opening), 0.25 → 0 (closing)
- Glow color: `rgba(255, 180, 40, 0.8)`
- Glow blur: 40px Gaussian
- Ambient: `rgba(20, 10, 0, 1)` — sötétbarna háttér
