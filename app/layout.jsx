import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BackgroundFigures from "./components/BackgroundFigures";
import MobileNavbar from "./components/MobileNavbar";
import SpeedDial from "./components/SpeedDial";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Hugo Aracena | Frontend Software Engineer",
  description:
    "Ingeniero en informática y desarrollador Frontend especializado en crear aplicaciones web modernas, escalables. Experiencia en React, Next.js y ecosistemas Web3.",
  keywords: [
    "Hugo Aracena",
    "Frontend",
    "Software Engineer",
    "React",
    "Next.js",
    "Web3",
    "Portfolio",
    "Chile",
  ],
  authors: [{ name: "Hugo Aracena" }],
  openGraph: {
    title: "Hugo Aracena | Frontend Software Engineer",
    description: "Desarrollo de aplicaciones web modernas, escalables.",
    url: "https://hugoaracena.site",
    siteName: "Hugo Aracena Portfolio",
    images: [
      {
        url: "/assets/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Hugo Aracena Portfolio Preview",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo Aracena | Frontend Software Engineer",
    description:
      "Ingeniero en informática especializado en aplicaciones web modernas.",
    images: ["/assets/images/og-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <MobileNavbar />
        <div className="w-12 h-12 bg-white rounded-full absolute -top-6 left-1/2 -translate-x-1/2 blur-[64px] opacity-75"></div>
        {children}
        <BackgroundFigures />
        {/* <div className="w-16 h-16 fixed bottom-8 right-8 rounded-full bg-gray-800"></div> */}
        <div className="absolute top-0 left-0 z-[-20] h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(12,12,12,0))]"></div>
        <SpeedDial />
      </body>
    </html>
  );
}
