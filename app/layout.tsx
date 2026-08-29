import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zem.vn.ua"),
  alternates: {
    canonical: "/",
  },

  title: {
    default:
      "ЗемВін — землеустрій та геодезія у Вінниці, Ямполі та Могилів-Подільському",
    template: "%s | ЗемВін",
  },

  description:
    "Землевпорядні та геодезичні послуги у Вінниці та Вінницькій області. Кадастрові номери, проєкти землеустрою, поділ земельних ділянок, топографічна зйомка та інші послуги.",

  keywords: [
    "землеустрій Вінниця",
    "геодезія Вінниця",
    "землевпорядні послуги Вінниця",
    "кадастровий номер",
    "проект землеустрою",
    "поділ земельної ділянки",
    "топографічна зйомка",
  ],

  authors: [{ name: "ЗемВін" }],
  creator: "ЗемВін",
  publisher: "ЗемВін",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://zem.vn.ua",
    siteName: "ЗемВін",
    title: "ЗемВін — землеустрій та геодезія у Вінниці",
    description:
      "Професійні землевпорядні та геодезичні послуги у Вінниці та Вінницькій області.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "ЗемВін — землеустрій та геодезія",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ЗемВін — землеустрій та геодезія у Вінниці",
    description:
      "Професійні землевпорядні та геодезичні послуги у Вінниці та Вінницькій області.",
    images: ["/hero.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "ЗемВін",
              url: "https://zem.vn.ua",
              description:
                "Землевпорядні та геодезичні послуги у Вінниці та Вінницькій області.",
              telephone: "+380982746415",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Вінницька область",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "вул. Київська, 4",
                addressLocality: "Вінниця",
                addressRegion: "Вінницька область",
                addressCountry: "UA",
              },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
