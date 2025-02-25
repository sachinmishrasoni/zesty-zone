import type { Metadata } from "next";
import localFont from "next/font/local";
import CombineProvider from "@/contexts/CombineProvider";
import "@/styles/globals.css";


const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zesty Zone",
  description: "Delicious meals delivered to your doorstep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="theme-color" content="#F4EEE0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CombineProvider>
          {children}
        </CombineProvider>
      </body>
    </html>
  );
}
