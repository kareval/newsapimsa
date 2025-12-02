import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SAPIMSA Grupo Lutech | Consultoría SAP & Transformación Digital",
  description: "SAP Gold Partner especializado en S/4HANA, Clean Core, Business AI y Transformación Digital. Más de 30 años impulsando la innovación empresarial.",
  keywords: "SAP, Consultoría, S/4HANA, Clean Core, Business AI, Transformación Digital, Lutech, SAP Gold Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
