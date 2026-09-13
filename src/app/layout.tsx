import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web3 Developer Portfolio | Blockchain & Full-Stack Engineer",
  description: "Portfolio of a Web3 & Blockchain Engineer showcasing smart contract deployments, Sepolia network integrations, and decentralized applications.",
  keywords: ["Web3", "Blockchain", "Ethereum", "Smart Contracts", "Sepolia", "Next.js", "Viem", "Solidity"],
  authors: [{ name: "Naveen" }],
  creator: "Naveen",
  publisher: "Naveen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Web3 Developer Portfolio",
    description: "Explore smart contract deployments and live on-chain analytics built with Next.js and Viem.",
    url: "https://portfolio-naveen-rnxs-projects.vercel.app/",
    siteName: "Web3 Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3 Developer Portfolio",
    description: "Explore smart contract deployments and live on-chain analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}