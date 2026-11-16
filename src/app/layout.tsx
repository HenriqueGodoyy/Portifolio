import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const title = "Henrique Godoy | Desenvolvedor web e segurança";
const description =
  "Portfólio de Henrique Godoy: aplicações web, segurança e estudos de Engenharia de Software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "Henrique Godoy" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}
    >
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
