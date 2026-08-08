import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dimas Chandra Winata — Fullstack Developer & Web Consultant",
  description: "Portfolio pribadi Dimas Chandra Winata, seorang Fullstack Developer (alumni UMY Teknologi Informasi) dan Founder Penmot Dev. Spesialisasi Next.js, Laravel, dan pengembangan produk digital dari nol.",
  keywords: ["Dimas Chandra Winata", "Penmot Dev", "Fullstack Developer", "Yogyakarta", "UMY", "Next.js", "Laravel", "Web Developer"],
  authors: [{ name: "Dimas Chandra Winata" }],
  openGraph: {
    title: "Dimas Chandra Winata — Fullstack Developer & Web Consultant",
    description: "Portfolio pribadi Dimas Chandra Winata, seorang Fullstack Developer (alumni UMY Teknologi Informasi) dan Founder Penmot Dev.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary-warm text-primary-dark select-none md:select-text">
        {children}
      </body>
    </html>
  );
}

