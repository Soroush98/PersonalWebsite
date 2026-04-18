import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.sorooshes98.com";
const SITE_NAME = "Soroosh Esmaeilian";
const SITE_DESCRIPTION =
  "Soroosh Esmaeilian — applied AI and full-stack engineer. I ship end-to-end products built on LLMs, messy real-world data, and cloud infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Applied AI & Full-Stack Engineer`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Soroosh Esmaeilian",
    "applied AI engineer",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "Django",
    "Express.js",
    "PostgreSQL",
    "Calgary",
    "LLM engineer",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  icons: { icon: "/Logo.png", apple: "/Logo.png" },
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
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Applied AI & Full-Stack Engineer`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Applied AI & Full-Stack Engineer`,
    description: SITE_DESCRIPTION,
  },
};

const GA_ID = "G-VR69FPQZSE";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/Soroosh_Esmaeilian.jpg`,
  jobTitle: "Applied AI & Full-Stack Engineer",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Calgary",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Amirkabir University of Technology (Tehran Polytechnic)",
    },
  ],
  knowsAbout: [
    "Applied AI",
    "Large Language Models",
    "Full-Stack Development",
    "TypeScript",
    "Next.js",
    "Django",
    "PostgreSQL",
    "Software-Defined Networks",
  ],
  sameAs: [
    "https://github.com/Soroush98",
    "https://www.linkedin.com/in/sorooshes98/",
    "https://www.instagram.com/soroosh_es98",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
