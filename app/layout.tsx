import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ametrine | Multispectral Signature Management",
  description:
    "Ametrine delivers multispectral signature management solutions for the modern battlefield — concealment across thermal, radar, and full-spectrum detection bands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
