import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

// Shippori Mincho B1 800, recortada só com o caractere 栄 (1,3 KB).
const kanji = localFont({
  src: "./fonts/sakae-kanji.woff2",
  weight: "800",
  variable: "--font-kanji-face",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  // TODO: quando houver domínio, adicionar metadataBase: new URL("https://...")
  title: "Sakae Detail Shop · Produtos de estética automotiva em Ji-Paraná",
  description:
    "Soft99, Kers, Cadillac, Finisher, Lincoln, Nobrecar, Wolf Pads e PPF Quad Film. Diga o seu carro e a Sakae indica o produto certo pelo WhatsApp.",
  openGraph: {
    title: "Sakae Detail Shop",
    description: "Brilho não é sorte. É produto certo na etapa certa.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${instrument.variable} ${plex.variable} ${kanji.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
