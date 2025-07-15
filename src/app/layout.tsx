import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  weight: ['400', '700'],
  style:['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});
export const metadata: Metadata = {
  title: "Global Impact Wallet",
  description: "The Global Impact wallet web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
