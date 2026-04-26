import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travaux d'intérieur",
  description: "TOut type de travaux d'intérieur : montage de meubles, pose de parquet, installation de luminaires, travaux de placo, etc.",
  icons: { icon: "/fond_ecran.jpeg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        {children}
        <footer style={{width: '100%', textAlign: 'center', color: '#888', fontSize: '0.95em', padding: '1.5em 0 0.5em 0'}}>
          Site créé par <a href="mailto:samelmir5a@gmail.com" style={{color: '#4da8e6', textDecoration: 'underline'}}>samelmir5a@gmail.com</a>
        </footer>
      </body>
      <Analytics />
    </html>
  );
}
