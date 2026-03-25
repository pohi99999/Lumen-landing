import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const montserrat = Montserrat( {
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
} );

const playfair = Playfair_Display( {
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    "limitált bor",
    "gyűjtői borkollekció",
    "sorszámozott bor",
    "prémium magyar bor",
    "limited edition wine",
    "collector wine",
    "numbered wine collection",
    "Hungarian premium wine",
    "luxury wine",
    "限量葡萄酒",
    "收藏级葡萄酒",
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
    locale: "hu_HU",
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
  logo: "https://www.lumenlimitedseries.com/og-image.jpg",
  description:
    "Prémium, limitált gyűjtői borkollekció Magyarországról.",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressCountry: "HU",
  },
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="hu" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ { __html: JSON.stringify( organizationLd ) } }
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={ `${ montserrat.variable } ${ playfair.variable } antialiased bg-[#0B0B0B] text-[#EAEAEA] font-sans selection:bg-[#3A0F14] selection:text-white` }
      >
        <LanguageProvider>{ children }</LanguageProvider>
      </body>
    </html>
  );
}
