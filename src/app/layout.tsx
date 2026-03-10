import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Collaborateur IA — Groupe IGH",
  description: "Présentation du collaborateur IA dédié au groupe IGH",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
