import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "ICEPADM | SKIT",
  description: "Website for ICEPADM conferences at SKIT Jaipur",
  openGraph: {
    type: "website",
    url: "https://icepadm.skit.ac.in/",
    title: "ICEPADM | SKIT",
    description: "Website for ICEPADM conferences at SKIT Jaipur",
    siteName: "Designed and Developed by Prashant Singh | @httpsPrashant on Twitter",
    images: [
      {
        url: "https://res.cloudinary.com/denl2iizs/image/upload/v1709137066/kijhxczp42nqbmuik8ih.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "ICEPADM | SKIT",
    creator: "Designed and Developed by Prashant Singh | @httpsPrashant on Twitter",
    images:
      "https://res.cloudinary.com/denl2iizs/image/upload/v1709137066/kijhxczp42nqbmuik8ih.png",
  },
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
