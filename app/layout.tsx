import type { Metadata } from "next";
import { Merriweather, Montserrat, Open_Sans, Lato, Roboto } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dil Chahal Constructions Ltd.",
  description:
    "Dil Chahal Construction Ltd. proudly serves Saskatoon and surrounding areas with expert drywall services, including installation, steel framing, T-bar ceilings, house renovations, insulation, mudding, tapping, and texturing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${montserrat.variable} ${openSans.variable} ${lato.variable} ${roboto.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
