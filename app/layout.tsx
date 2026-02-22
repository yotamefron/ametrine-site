import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMETRINE — Multispectral Concealment Systems",
  description:
    "Technologies to be invisible. AMETRINE delivers multispectral concealment solutions for tactical superiority across all domains.",
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
