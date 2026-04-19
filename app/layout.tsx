import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.envirogreenpest.com"),
  title: {
    default:
      "EnviroGreen Pest Solutions | Pest Control in Burnaby, Surrey & Vancouver",
    template: "%s | EnviroGreen Pest Solutions",
  },
  description:
    "EnviroGreen Pest Solutions provides safe, effective pest control services in Burnaby, Surrey, Vancouver, and nearby areas. Residential, commercial, and annual pest plans available.",
  keywords: [
    "pest control Burnaby",
    "pest control Surrey",
    "pest control Vancouver",
    "ant control",
    "rodent control",
    "bed bug treatment",
    "cockroach control",
    "wasp removal",
    "residential pest control",
    "commercial pest control",
  ],
  openGraph: {
    title: "EnviroGreen Pest Solutions",
    description:
      "Safe, effective pest control services for homes and businesses in Burnaby, Surrey, Vancouver, and surrounding areas.",
    url: "https://www.envirogreenpest.com",
    siteName: "EnviroGreen Pest Solutions",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
