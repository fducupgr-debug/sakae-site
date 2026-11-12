import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileWhatsAppBar } from "@/components/layout/MobileWhatsAppBar";
import { Hero } from "@/components/sections/Hero";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { Manifesto } from "@/components/sections/Manifesto";
import { StepCatalog } from "@/components/sections/StepCatalog";
import { RainTest } from "@/components/sections/RainTest";
import { MonthEdition } from "@/components/sections/MonthEdition";
import { ForDetailers } from "@/components/sections/ForDetailers";
import { Store } from "@/components/sections/Store";
import { HowToBuy } from "@/components/sections/HowToBuy";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { store } from "@/data/store";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: store.name,
  description: "Produtos de estética automotiva e distribuição exclusiva de PPF Quad Film.",
  telephone: store.phoneSchema,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${store.street}, ${store.district}`,
    addressLocality: store.city,
    addressRegion: store.state,
    postalCode: store.postalCode,
    addressCountry: "BR",
  },
  openingHoursSpecification: store.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  hasMap: store.mapsUrl,
  sameAs: [store.instagram],
};

export default function Home() {
  return (
    <>
      <a
        href="#produtos"
        className="lbl sr-only z-50 bg-laranja px-4 py-3 text-verniz focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para os produtos
      </a>
      <Header />
      <main>
        {/* Atenção */}
        <Hero />
        {/* Curiosidade */}
        <BrandMarquee />
        <Manifesto />
        {/* Entendimento */}
        <StepCatalog />
        {/* Desejo */}
        <RainTest />
        <MonthEdition />
        {/* Confiança */}
        <ForDetailers />
        <Store />
        <HowToBuy />
        <Faq />
        {/* Conversão */}
        <FinalCta />
      </main>
      <Footer />
      <MobileWhatsAppBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
