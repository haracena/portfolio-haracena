import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BackgroundFigures from "./components/BackgroundFigures";
import MobileNavbar from "./components/MobileNavbar";

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
        <MobileNavbar />
        <div className="w-12 h-12 bg-white rounded-full absolute -top-6 left-1/2 -translate-x-1/2 blur-[64px] opacity-75"></div>
        {children}
        <BackgroundFigures />
        {/* <div className="w-16 h-16 fixed bottom-8 right-8 rounded-full bg-gray-800"></div> */}
        <div className="absolute top-0 left-0 z-[-20] h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(12,12,12,0))]"></div>
      </body>
    </html>
  );
}
