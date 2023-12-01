import { Inter } from "next/font/google";
import "./globals.css";
import SpeedDial from "./components/SpeedDial";
import Navbar from "./components/Navbar";
import BackgroundFigures from "./components/BackgroundFigures";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hugo Aracena",
  description: "CV Software developer Hugo Aracena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="w-12 h-12 bg-white rounded-full absolute -top-6 left-1/2 -translate-x-1/2 blur-[64px] opacity-75"></div>
        {children}
        <SpeedDial />
        <BackgroundFigures />
      </body>
    </html>
  );
}
