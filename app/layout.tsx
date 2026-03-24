import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond( {
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
} );

const inter = Inter( {
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
} );

export const metadata: Metadata = {
  title: "Lumen - A ritkaság valódi jelentése",
  description: "Limitált, sorszámozott gyűjtői bor kollekció — azok számára, akik értik a ritkaság valódi jelentését.",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="hu">
      <body className={ `${ inter.variable } ${ cormorant.variable } antialiased bg-[#0B0B0B] text-[#EAEAEA] font-sans selection:bg-[#3A0F14] selection:text-white` }>
        { children }
      </body>
    </html>
  );
}
