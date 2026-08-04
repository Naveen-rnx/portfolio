import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naveen Kumar — Blockchain & Web3 Developer",
  description:
    "Portfolio of Naveen Kumar, a blockchain developer building smart contracts and Web3 dApps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
