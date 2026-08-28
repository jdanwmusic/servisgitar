import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap", preload: true });

export const metadata: Metadata = {
  title: { default: "ServisGitar — Profesional Servis Gitar & Bass", template: "%s | ServisGitar" },
  description: "ServisGitar.com — Layanan servis gitar akustik, elektrik, dan bass profesional. Setup, custom mod, fret job, dan overhaul.",
  keywords: ["servis gitar", "setup gitar", "fret job", "custom gitar", "luthier"],
  authors: [{ name: "ServisGitar" }],
  creator: "ServisGitar",
  publisher: "ServisGitar",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://servisgitar.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "id_ID", url: "https://servisgitar.com",
    siteName: "ServisGitar", title: "ServisGitar — Profesional Servis Gitar & Bass",
    description: "Layanan servis gitar akustik, elektrik, dan bass profesional.",
  },
  twitter: { card: "summary_large_image", title: "ServisGitar — Profesional Servis Gitar & Bass", description: "Layanan servis gitar akustik, elektrik, dan bass profesional." },
  icons: { icon: "/icon.svg" },
};

export const viewport = { themeColor: "#0A0A0C", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="bg-brand-bg text-brand-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
