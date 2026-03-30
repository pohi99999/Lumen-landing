export type Locale = "hu" | "en" | "zh" | "th";

export const localeNames: Record<Locale, string> = {
  hu: "Magyar",
  en: "English",
  zh: "中文",
  th: "ไทย",
};

export interface SiteTranslations {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    heading: string;
    subheading: string;
    quote: string;
    cta: string;
    scroll: string;
  };
  intro: {
    line1: string;
    line2: string;
    line3: string;
  };
  concept: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    closing: string;
  };
  heritage: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    quote: string;
  };
  experience: {
    heading: string;
    p1: string;
    p2: string;
    accent: string;
  };
  exclusivity: {
    label: string;
    number: string;
    unit: string;
    heading: string;
    p1: string;
    p2: string;
    accent: string;
  };
  authenticity: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    cta: string;
  };
  partners: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    cta: string;
  };
  nextRelease: {
    heading: string;
    p1: string;
    cta: string;
  };
  closing: {
    heading: string;
    sub: string;
  };
  footer: {
    series: string;
    imprint: string;
    privacy: string;
    contact: string;
  };
  alt: {
    heroImage: string;
    conceptImage: string;
    heritageImage: string;
    detail1: string;
    detail2: string;
    detail3: string;
    authImage: string;
    nextReleaseImage: string;
  };
}

export const translations: Record<Locale, SiteTranslations> = {
  hu: {
    meta: {
      title: "Lumen — Limitált Gyűjtői Borkollekció | Sorszámozott Kiadások",
      description:
        "A Lumen egy limitált, sorszámozott gyűjtői borkollekció Magyarországról. Minden kiadás egyedi, digitálisan hitelesített. Maximum 1500 palack kiadásonként.",
      ogTitle: "Lumen — A ritkaság valódi jelentése",
      ogDescription:
        "Limitált, sorszámozott gyűjtői borkollekció — azok számára, akik értik a ritkaság valódi jelentését.",
    },
    hero: {
      heading: "Van olyan, amit nem a világ számára alkottak — csak azoknak, akik felismerik az értéket.",
      subheading:
        "A Lumen egy limitált, sorszámozott gyűjtői borkollekció — azok számára, akik értik a ritkaság valódi jelentését.",
      quote: "A ritkaságnak nem kell elérhetetlennek lennie.",
      cta: "Elérhetőség megtekintése",
      scroll: "Görgessen",
    },
    intro: {
      line1: "Vannak dolgok, amelyek nem sietnek.\nIdő kell hozzájuk. Figyelem. Csend.",
      line2: "A Lumen nem a pillanatnak készül — hanem azoknak, akik észreveszik a pillanat értékét.",
      line3: "Nem mindenhol jelenik meg.\nÉs nem marad sokáig.",
    },
    concept: {
      heading: "Minden Lumen kiadás\negy önálló történet.",
      p1: "Egy adott időszak lenyomata, egy gondosan kiválasztott bor, és egy kollekció, amelyből csak korlátozott számú darab létezik.",
      p2: "Minden palack sorszámozott. Minden darab egy helyhez és egy időhöz kötődik.",
      p3: "Amikor egy kiadás elfogy, nem tér vissza ugyanabban a formában.",
      closing: "Egyszer jelen volt. És aki ott volt emlékezni fog rá.",
    },
    heritage: {
      heading: "A Lumen gyökerei\nmélyre nyúlnak.",
      p1: "Magyarország borászata évszázadok óta formálódik – a föld, a klíma és a generációkon át öröklődő tudás finom egyensúlyából.",
      p2: "Ez a tudás nem látványos, nem hangos – rétegről rétegre épül.",
      p3: "A Lumen ezt az örökséget emeli ki, és ad neki egy kortárs, letisztult formát.\nEgy gondosan válogatott Pinot Gris, amely rövid ideig tölgyfahordóban érlelődik, hogy finom mélységet és eleganciát nyerjen, miközben megőrzi természetes frissességét.",
      quote: "Egy palack, amely nemcsak megőriz, hanem tovább is mesél.",
    },
    experience: {
      heading: "A Lumen nem csupán\negy tárgy.",
      p1: "Sorszámozott és digitálisan hitelesített.",
      p2: "A QR-kódon keresztül visszakövethető a kollekció eredete, története és helye.",
      accent: "Egyfajta biztos pont — egy világban, ahol a valódi érték ritkán egyértelmű.",
    },
    exclusivity: {
      label: "Korlátozott elérés",
      number: "1500",
      unit: "palack",
      heading: "Nem minden döntés kérdése.",
      p1: "Van, amikor az számít, hogy valaki éppen ott van. Abban a városban. Abban az időben.",
      p2: "Minden kiadás egy szűk kör számára válik elérhetővé. Legfeljebb 1500 palack. Nem ismételhető. Nem pótolható.",
      accent: "Akik hozzájutnak, nemcsak birtokolják — hanem részesei lesznek egy adott pillanatnak.",
    },
    authenticity: {
      heading: "Minden palack egyedi.",
      p1: "Sorszámozott és digitálisan hitelesített.",
      p2: "A QR-kódon keresztül visszakövethető a kollekció eredete, története és helye.",
      p3: "Egyfajta biztos pont — egy világban, ahol a valódi érték ritkán egyértelmű.",
      cta: "Helyi elérhetőség megtekintése",
    },
    partners: {
      heading: "A Lumen nem közvetlen értékesítésben jelenik meg.",
      p1: "Minden régióban gondosan kiválasztott partnereken keresztül válik elérhetővé.",
      p2: "Ők nem csupán disztribútorok. Hanem közvetítők.",
      p3: "Egy korlátozott örökség továbbadásában vesznek részt — felelősséggel és érzékenységgel.",
      cta: "Helyi elérhetőség megtekintése",
    },
    nextRelease: {
      heading: "A történet folytatódik.",
      p1: "Évente néhány új kollekció jelenik meg, mindegyik saját karakterrel és történettel.\n\nA következő kiadás már formálódik.",
      cta: "Értesítést kérek",
    },
    closing: {
      heading: "Nem minden marad elérhető.",
      sub: "És talán éppen ezért válik igazán értékessé.",
    },
    footer: {
      series: "Limitált sorozat",
      imprint: "Impresszum",
      privacy: "Adatkezelés",
      contact: "Kapcsolat",
    },
    alt: {
      heroImage: "Lumen limitált borkollekció bemutató",
      conceptImage: "A Lumen története — prémium borpalack",
      heritageImage: "Magyar szőlőhegyoldal, borászati táj",
      detail1: "Lumen párt ábrázoló kép",
      detail2: "Nyitott Lumen doboz belső oldallal",
      detail3: "Szerzetes borral, pohárral és szőlőfürttel",
      authImage: "QR-kódos hitelesítés",
      nextReleaseImage: "A következő Lumen kiadás előzetese",
    },
  },

  en: {
    meta: {
      title: "Lumen — Limited Collector's Wine Collection | Numbered Editions",
      description:
        "Lumen is a limited, numbered collector's wine collection from Hungary. Each release is unique, digitally authenticated. Maximum 1500 bottles per edition.",
      ogTitle: "Lumen — The True Meaning of Rarity",
      ogDescription:
        "A limited, numbered collector's wine collection — for those who understand the true meaning of rarity.",
    },
    hero: {
      heading: "There are things not made for the world — only for those who recognize value.",
      subheading:
        "Lumen is a limited, numbered collector's wine collection — for those who understand the true meaning of rarity.",
      quote: "Rarity does not have to mean inaccessibility.",
      cta: "View availability",
      scroll: "Scroll",
    },
    intro: {
      line1: "Some things are not meant to be rushed.\nThey require time. Attention. Silence.",
      line2: "Lumen is not created for the moment — but for those who recognize its value.",
      line3: "It does not appear everywhere.\nAnd it does not remain for long.",
    },
    concept: {
      heading: "Every Lumen release\nis a story of its own.",
      p1: "A reflection of a moment in time, a carefully selected wine, and a collection produced in strictly limited quantities.",
      p2: "Every bottle is individually numbered. Each piece is tied to a place and a moment.",
      p3: "Once a release is gone, it does not return in the same form.",
      closing: "It existed once. And those who were there remember.",
    },
    heritage: {
      heading: "The roots of Lumen\nrun deep.",
      p1: "Hungarian winemaking has been shaped for centuries — by the delicate balance of the land, the climate, and knowledge passed down through generations.",
      p2: "That knowledge is not visual or loud — it builds layer by layer.",
      p3: "Lumen lifts this heritage into a contemporary, clean form.\nA carefully selected Pinot Gris, briefly matured in oak, gains subtle depth and elegance while keeping its natural freshness.",
      quote: "A bottle that not only preserves, but continues to tell its story.",
    },
    experience: {
      heading: "Lumen is more\nthan an object.",
      p1: "Individually numbered and digitally authenticated.",
      p2: "Through the QR code, the origin, story, and provenance of each piece can be traced.",
      accent: "A point of certainty — in a world where true value is rarely obvious.",
    },
    exclusivity: {
      label: "Limited access",
      number: "1500",
      unit: "bottles",
      heading: "Not every decision is about choice.",
      p1: "Sometimes what matters is being there. In that city. At that time.",
      p2: "Each release becomes available to a select few. A maximum of 1500 bottles. Unrepeatable. Irreplaceable.",
      accent:
        "Those who obtain it do not simply own it — they become part of a singular moment.",
    },
    authenticity: {
      heading: "Every bottle is unique.",
      p1: "Individually numbered and digitally authenticated.",
      p2: "Through the QR code, the origin, story, and provenance of each piece can be traced.",
      p3: "A point of certainty — in a world where true value is rarely obvious.",
      cta: "View local availability",
    },
    partners: {
      heading: "Lumen is not sold directly.",
      p1: "In every region, it becomes available through carefully selected partners.",
      p2: "They are not merely distributors. They are custodians.",
      p3: "They participate in passing on a limited heritage — with responsibility and discernment.",
      cta: "View local availability",
    },
    nextRelease: {
      heading: "The story continues.",
      p1: "A handful of new collections appear each year, each with its own character and story.\n\nThe next release is already taking shape.",
      cta: "Notify me",
    },
    closing: {
      heading: "Not everything remains available.",
      sub: "And perhaps that is exactly what makes it truly valuable.",
    },
    footer: {
      series: "Limited series",
      imprint: "Imprint",
      privacy: "Privacy",
      contact: "Contact",
    },
    alt: {
      heroImage: "Lumen limited wine collection showcase",
      conceptImage: "The story of Lumen — premium wine bottle",
      heritageImage: "Hungarian vineyard landscape, winemaking heritage",
      detail1: "Lumen collection detail — packaging",
      detail2: "Lumen premium wine bottle close-up",
      detail3: "Lumen release — exclusive detail",
      authImage: "Digital authentication and QR code verification",
      nextReleaseImage: "Preview of the next Lumen release",
    },
  },

  zh: {
    meta: {
      title: "Lumen — 限量收藏级葡萄酒 | 编号版",
      description:
        "Lumen是来自匈牙利的限量、编号收藏级葡萄酒。每版独特，数字认证。每版最多1500瓶。",
      ogTitle: "Lumen — 稀有的真正含义",
      ogDescription: "限量编号收藏级葡萄酒——献给懂得稀有真正含义的人。",
    },
    hero: {
      heading: "有些事物并非为世界而造——只为懂得价值的人而生。",
      subheading:
        "Lumen 是一组限量、编号的收藏级葡萄酒——献给懂得稀有真正含义的人。",
      quote: "稀有，不必意味着遥不可及。",
      cta: "查看可购渠道",
      scroll: "向下滚动",
    },
    intro: {
      line1: "有些事物，不应被催促。\n它们需要时间、专注与宁静。",
      line2: "Lumen 并非为瞬间而生，而是献给懂得其价值的人。",
      line3: "它不会出现在每一个地方，\n也不会停留太久。",
    },
    concept: {
      heading: "每一款 Lumen，\n都是一个独立的故事。",
      p1: "它是时间的印记，是精心甄选的佳酿，也是一组数量极为有限的收藏之作。",
      p2: "每一瓶皆为独立编号。每一件都属于特定的时间与地点。",
      p3: "一旦售罄，不再复刻。",
      closing: "它只存在过一次。而见证者，终将铭记。",
    },
    heritage: {
      heading: "Lumen 的根源，\n深植于历史。",
      p1: "匈牙利葡萄酒业数百年来不断形成——源自土地、气候与代代相传的知识之间的微妙平衡。",
      p2: "这种知识并不张扬，也不喧哗——而是层层累积而成。",
      p3: "Lumen 将这份传承提炼为一种当代而克制的表达。\n一款精心挑选的 Pinot Gris，在橡木桶中短暂陈酿，获得细腻的深度与优雅，同时保留其天然的新鲜感。",
      quote: "一瓶酒，不只是保存，也会继续讲述。",
    },
    experience: {
      heading: "Lumen，\n不仅是一件物品。",
      p1: "每一瓶均有编号，并经过数字认证。",
      p2: "通过二维码，可追溯其来源与历史。",
      accent: "在一个价值模糊的世界中，它是一种确定性的存在。",
    },
    exclusivity: {
      label: "限量发售",
      number: "1500",
      unit: "瓶",
      heading: "并非所有决定都关乎选择。",
      p1: "有时重要的是，恰好在那个城市、那个时刻。",
      p2: "每一期仅向少数人开放。最多1500瓶。不可复制。不可替代。",
      accent: "获得者不仅拥有它——更成为某个特定时刻的一部分。",
    },
    authenticity: {
      heading: "每一瓶都是独一无二的。",
      p1: "独立编号，数字认证。",
      p2: "通过二维码，可追溯收藏的起源、故事与产地。",
      p3: "在一个价值模糊的世界中，它是一种确定性的存在。",
      cta: "查看本地渠道",
    },
    partners: {
      heading: "Lumen 不直接销售。",
      p1: "在每个地区，通过精心挑选的合作伙伴提供。",
      p2: "他们不仅是分销商，更是传承者。",
      p3: "他们以责任与敏锐参与传递这份限量遗产。",
      cta: "查看本地渠道",
    },
    nextRelease: {
      heading: "故事仍在继续。",
      p1: "每年推出少量新系列，每款都独具个性与故事。\n\n下一期已在酝酿中。",
      cta: "通知我",
    },
    closing: {
      heading: "并非一切都会长久。",
      sub: "也许，正因如此，才真正珍贵。",
    },
    footer: {
      series: "限量系列",
      imprint: "法律声明",
      privacy: "隐私政策",
      contact: "联系我们",
    },
    alt: {
      heroImage: "Lumen限量葡萄酒收藏展示",
      conceptImage: "Lumen的故事——高端葡萄酒瓶",
      heritageImage: "匈牙利葡萄园风景，酿酒传统",
      detail1: "Lumen收藏细节——包装",
      detail2: "Lumen高端葡萄酒瓶特写",
      detail3: "Lumen发行——独家细节",
      authImage: "数字认证与二维码验证",
      nextReleaseImage: "下一期Lumen预告",
    },
  },

  th: {
    meta: {
      title: "Lumen — ไวน์สะสมลิมิเต็ด เอดิชั่น | มีหมายเลขกำกับ",
      description:
        "Lumen คือคอลเลกชันไวน์สะสมจำนวนจำกัดจากฮังการี แต่ละรุ่นไม่ซ้ำกัน ผ่านการรับรองดิจิทัล สูงสุด 1500 ขวดต่อรุ่น",
      ogTitle: "Lumen — ความหมายที่แท้จริงของความหายาก",
      ogDescription:
        "คอลเลกชันไวน์สะสมจำนวนจำกัดมีหมายเลข — สำหรับผู้ที่เข้าใจความหมายแท้จริงของความหายาก",
    },
    hero: {
      heading: "มีบางสิ่งไม่ได้ถูกสร้างมาเพื่อโลกทั้งใบ — แต่เพื่อผู้ที่มองเห็นคุณค่าเท่านั้น",
      subheading:
        "Lumen คือคอลเลกชันไวน์สะสมจำนวนจำกัด มีหมายเลขกำกับ — สำหรับผู้ที่เข้าใจความหมายแท้จริงของความหายาก",
      quote: "ความหายาก ไม่จำเป็นต้องหมายถึงสิ่งที่เข้าถึงไม่ได้",
      cta: "ดูช่องทางจำหน่าย",
      scroll: "เลื่อนลง",
    },
    intro: {
      line1: "บางสิ่ง ไม่ควรถูกเร่งรีบ\nต้องใช้เวลา ความใส่ใจ และความสงบ",
      line2: "Lumen ไม่ได้สร้างขึ้นเพื่อช่วงเวลา แต่สำหรับผู้ที่เข้าใจคุณค่าของมัน",
      line3: "มันไม่ได้มีอยู่ทุกที่\nและไม่ได้อยู่ตลอดไป",
    },
    concept: {
      heading: "Lumen แต่ละรุ่น\nคือเรื่องราวที่เป็นเอกลักษณ์",
      p1: "เป็นภาพสะท้อนของช่วงเวลา ไวน์ที่ได้รับการคัดสรรอย่างพิถีพิถัน และคอลเลกชันที่มีจำนวนจำกัด",
      p2: "ทุกขวดมีหมายเลขเฉพาะ ทุกชิ้นเชื่อมโยงกับสถานที่และเวลา",
      p3: "เมื่อหมดแล้ว จะไม่มีการผลิตซ้ำในรูปแบบเดิม",
      closing: "มันเคยมีอยู่ครั้งหนึ่ง และผู้ที่ได้สัมผัส จะไม่มีวันลืม",
    },
    heritage: {
      heading: "รากเหง้าของ Lumen\nฝังลึกในประวัติศาสตร์",
      p1: "การทำไวน์ของฮังการีก่อร่างขึ้นมาหลายศตวรรษ — จากสมดุลอันละเอียดอ่อนระหว่างผืนดิน สภาพอากาศ และความรู้ที่สืบทอดกันมาจากรุ่นสู่รุ่น",
      p2: "ความรู้นี้ไม่ฉูดฉาด ไม่ส่งเสียงดัง — แต่มันก่อตัวขึ้นทีละชั้น",
      p3: "Lumen นำมรดกนี้มาถ่ายทอดในรูปแบบร่วมสมัยที่เรียบคม\nไวน์ Pinot Gris ที่คัดสรรมาอย่างพิถีพิถัน บ่มในถังไม้โอ๊กช่วงเวลาสั้น ๆ เพื่อให้ได้มิติและความสง่างามที่ละเมียดละไม ขณะยังคงความสดตามธรรมชาติไว้",
      quote: "หนึ่งขวดที่ไม่เพียงเก็บรักษา แต่ยังเล่าเรื่องต่อไป",
    },
    experience: {
      heading: "Lumen\nไม่ใช่แค่สิ่งของ",
      p1: "มีหมายเลขเฉพาะและผ่านการรับรองดิจิทัล",
      p2: "ผ่าน QR Code สามารถติดตามต้นกำเนิด เรื่องราว และที่มาได้",
      accent: "จุดยืนแห่งความแน่นอน — ในโลกที่คุณค่าแท้จริงแทบไม่ชัดเจน",
    },
    exclusivity: {
      label: "จำนวนจำกัด",
      number: "1500",
      unit: "ขวด",
      heading: "ไม่ใช่ทุกการตัดสินใจเป็นเรื่องของทางเลือก",
      p1: "บางครั้งสิ่งสำคัญคือการอยู่ที่นั่น ในเมืองนั้น ในเวลานั้น",
      p2: "แต่ละรุ่นเปิดให้เฉพาะกลุ่มคนจำนวนน้อย สูงสุด 1500 ขวด ไม่ผลิตซ้ำ ไม่ทดแทนได้",
      accent:
        "ผู้ที่ได้รับไม่เพียงครอบครอง — แต่กลายเป็นส่วนหนึ่งของช่วงเวลาพิเศษ",
    },
    authenticity: {
      heading: "ทุกขวดมีเอกลักษณ์",
      p1: "มีหมายเลขเฉพาะและผ่านการรับรองดิจิทัล",
      p2: "ผ่าน QR Code สามารถติดตามต้นกำเนิด เรื่องราว และที่มาได้",
      p3: "จุดยืนแห่งความแน่นอน — ในโลกที่คุณค่าแท้จริงแทบไม่ชัดเจน",
      cta: "ดูช่องทางในพื้นที่",
    },
    partners: {
      heading: "Lumen ไม่ได้จำหน่ายโดยตรง",
      p1: "ในแต่ละภูมิภาค จะเข้าถึงได้ผ่านพาร์ทเนอร์ที่คัดสรรแล้ว",
      p2: "พวกเขาไม่ใช่แค่ผู้จัดจำหน่าย แต่เป็นผู้สืบทอด",
      p3: "พวกเขามีส่วนร่วมในการส่งต่อมรดกอันจำกัดนี้ — ด้วยความรับผิดชอบและความละเอียดอ่อน",
      cta: "ดูช่องทางในพื้นที่",
    },
    nextRelease: {
      heading: "เรื่องราวยังคงดำเนินต่อ",
      p1: "ในแต่ละปีมีคอลเลกชันใหม่ออกมาไม่กี่ชุด แต่ละชุดมีตัวตนและเรื่องราวเฉพาะ\n\nรุ่นถัดไปกำลังก่อร่างขึ้นแล้ว",
      cta: "แจ้งเตือนฉัน",
    },
    closing: {
      heading: "ไม่ใช่ทุกสิ่งที่จะคงอยู่ตลอดไป",
      sub: "และบางที นั่นคือสิ่งที่ทำให้มันมีค่าอย่างแท้จริง",
    },
    footer: {
      series: "ซีรีส์ลิมิเต็ด",
      imprint: "ข้อกฎหมาย",
      privacy: "นโยบายความเป็นส่วนตัว",
      contact: "ติดต่อเรา",
    },
    alt: {
      heroImage: "คอลเลกชันไวน์ Lumen จำนวนจำกัด",
      conceptImage: "เรื่องราวของ Lumen — ขวดไวน์พรีเมียม",
      heritageImage: "ทิวทัศน์ไร่องุ่นฮังการี มรดกการทำไวน์",
      detail1: "รายละเอียดคอลเลกชัน Lumen — บรรจุภัณฑ์",
      detail2: "ขวดไวน์พรีเมียม Lumen ระยะใกล้",
      detail3: "การเปิดตัว Lumen — รายละเอียดพิเศษ",
      authImage: "การรับรองดิจิทัลและการตรวจสอบ QR Code",
      nextReleaseImage: "ตัวอย่างการเปิดตัว Lumen ครั้งถัดไป",
    },
  },
};
