import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "ICEPADM | SKIT",
  description: "Website for ICEPADM conferences at SKIT Jaipur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NAVBAR />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}
