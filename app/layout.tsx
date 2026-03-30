import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const inter = Inter( {
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
} );

const cormorant = Cormorant_Garamond( {
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
} );

export const metadata: Metadata = {
  metadataBase: new URL( "https://www.lumenlimitedseries.com" ),
  title: {
    default: "Lumen — Limitált Gyűjtői Borkollekció | Sorszámozott Kiadások",
    template: "%s | Lumen Collection",
  },
  description:
    "A Lumen egy limitált, sorszámozott gyűjtői borkollekció Magyarországról. Minden kiadás egyedi, digitálisan hitelesített. Maximum 1500 palack kiadásonként.",
  keywords: [
    "Lumen",
    "Lumen wine",
    "Lumen Collection",
    "limitált bor",
    "gyűjtői borkollekció",
    "sorszámozott bor",
    "prémium magyar bor",
    "magyar bor",
    "limited edition wine",
    "collector wine",
    "numbered wine collection",
    "Hungarian premium wine",
    "luxury wine",
    "wine collection",
    "fine wine Hungary",
    "exclusive wine",
    "numbered bottles",
    "limited wine release",
    "限量葡萄酒",
    "收藏级葡萄酒",
    "匈牙利葡萄酒",
    "限量版",
    "ไวน์สะสม",
    "ไวน์ลิมิเต็ด",
  ],
  authors: [{ name: "Lumen Collection" }],
  creator: "Lumen Collection",
  publisher: "Lumen Collection",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_US", "zh_CN", "th_TH"],
    url: "https://www.lumenlimitedseries.com",
    siteName: "Lumen Collection",
    title: "Lumen — A ritkaság valódi jelentése",
    description:
      "Limitált, sorszámozott gyűjtői borkollekció — azok számára, akik értik a ritkaság valódi jelentését.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumen — Limitált Gyűjtői Borkollekció",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumen — Limitált Gyűjtői Borkollekció",
    description:
      "Limitált, sorszámozott gyűjtői borkollekció — azok számára, akik értik a ritkaság valódi jelentését.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.lumenlimitedseries.com",
    languages: {
      "hu-HU": "https://www.lumenlimitedseries.com",
      "en-US": "https://www.lumenlimitedseries.com",
      "zh-CN": "https://www.lumenlimitedseries.com",
      "th-TH": "https://www.lumenlimitedseries.com",
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // google: "your-google-verification-code",
  },
  category: "wine",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Lumen Limited Wine Collection",
  description:
    "Limitált, sorszámozott gyűjtői borkollekció Magyarországról. Minden kiadás egyedi, digitálisan hitelesített.",
  brand: {
    "@type": "Brand",
    name: "Lumen Collection",
  },
  category: "Wine",
  countryOfOrigin: {
    "@type": "Country",
    name: "Hungary",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/LimitedAvailability",
    itemCondition: "https://schema.org/NewCondition",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Edition Size",
      value: "1500 bottles per release",
    },
    {
      "@type": "PropertyValue",
      name: "Authentication",
      value: "Digitally authenticated with QR code",
    },
  ],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumen Collection",
  url: "https://www.lumenlimitedseries.com",
  logo: "https://www.lumenlimitedseries.com/l-betu.png",
  description:
    "Prémium, limitált gyűjtői borkollekció Magyarországról.",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressCountry: "HU",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lumen Collection",
  url: "https://www.lumenlimitedseries.com",
  description:
    "Limitált, sorszámozott gyűjtői borkollekció Magyarországról.",
  inLanguage: ["hu", "en", "zh", "th"],
  publisher: {
    "@type": "Organization",
    name: "Lumen Collection",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Lumen Collection",
      item: "https://www.lumenlimitedseries.com",
    },
  ],
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify( jsonLd ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify( organizationLd ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify( websiteLd ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify( breadcrumbLd ) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0B0B0B" />
        <meta name="msapplication-TileColor" content="#3A0F14" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${ inter.variable } ${ cormorant.variable } antialiased text-[#EAEAEA] font-sans selection:bg-[#3A0F14] selection:text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C6A15B] focus:text-[#0B0B0B] focus:rounded focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
