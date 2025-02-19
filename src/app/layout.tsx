import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <iframe
        id="myIframe"
        allow="microphone"
        src="https://qa-app.exei.ai/sdk/6790fa2f0bcaccd55ebf5e04?mic=true&channelType=IFRAME&API_KEY=a801104387ac4f4d82ae1b584863f600"
        style={{
          position: 'fixed',
          bottom: '85px',
          right: '20px',
          width: '400px',
          height: '70%',
          border: 'none',
          zIndex: 9999,
        }}
        title="Exei SDK"
      >
        {/* <p>Your browser does not support iframes.</p> */}
      </iframe>
      <Script
        src="https://exei-bkt-important-object.s3.ap-south-1.amazonaws.com/123.js"
        strategy="afterInteractive" // Loads the script after the page becomes interactive
      />

        {children}
      </body>
    </html>
  );
}
