import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Café Barro Negro — Café mexicano de especialidad",
  description: "Café mexicano de especialidad. Orígenes de Oaxaca, Chiapas, Veracruz y Guerrero, tostados para revelar su carácter.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="antialiased">{children}</body>
    </html>
  );
}
