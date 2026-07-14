import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madera Viva | Carpintería artesanal en Panamá",
  description: "Mesas, barras y muebles de madera a medida. Cuéntanos tu idea y cotiza por WhatsApp.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Madera Viva | Piezas con alma",
    description: "Carpintería artesanal a medida en Panamá.",
    images: [{ url: "/og.png", width: 1792, height: 928, alt: "Madera Viva — Piezas con alma" }],
  },
  twitter: { card: "summary_large_image", title: "Madera Viva | Piezas con alma", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
