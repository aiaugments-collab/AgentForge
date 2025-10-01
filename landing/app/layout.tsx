import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AgentForge - AI Agents Made Simple | No-Code AI Automation Platform",
    template: "%s | AgentForge"
  },
  description: "Build powerful AI agents without coding. AgentForge offers no-code AI automation, open-source customization, and expert training. Create smart workflows that work for your business.",
  keywords: [
    "AI agents",
    "no-code automation", 
    "AI automation platform",
    "workflow automation",
    "AI agents builder",
    "automation tools",
    "AI workflow",
    "no-code AI",
    "business automation",
    "AI assistant",
    "smart automation",
    "AI platform"
  ],
  authors: [{ name: "AgentForge Team" }],
  creator: "AgentForge",
  publisher: "AgentForge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://agentforge.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agentforge.com',
    siteName: 'AgentForge',
    title: 'AgentForge - AI Agents Made Simple | No-Code AI Automation Platform',
    description: 'Build powerful AI agents without coding. AgentForge offers no-code AI automation, open-source customization, and expert training. Create smart workflows that work for your business.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentForge - AI Agents Made Simple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentForge - AI Agents Made Simple',
    description: 'Build powerful AI agents without coding. No-code AI automation, open-source customization, and expert training.',
    images: ['/twitter-image.jpg'],
    creator: '@agentforge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
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
        {children}
      </body>
    </html>
  );
}
