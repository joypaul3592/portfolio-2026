import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { SITE_INFO, META_THEME_COLORS } from "@/config/site";
import { USER } from "@/config/user";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),

  // Basic Metadata
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: [...SITE_INFO.keywords],

  // Author & Creator
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    siteName: SITE_INFO.name,
    url: SITE_INFO.url,
    type: "profile",
    locale: SITE_INFO.locale,
    title: `${USER.displayName} – ${USER.jobTitle}`,
    description: SITE_INFO.description,
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: `${USER.displayName} - ${USER.jobTitle}`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    creator: USER.twitter,
    title: `${USER.displayName} – ${USER.jobTitle}`,
    description: SITE_INFO.description,
    images: [SITE_INFO.ogImage],
  },

  // Icons & Favicons
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },

  // Theme Color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark },
  ],

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} dark`}>
      <body className="font-sans antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
