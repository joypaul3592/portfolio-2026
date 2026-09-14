import { USER } from "./user";

/**
 * Site Configuration
 * SEO and metadata settings for the entire website
 */
export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://joypaul.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  longDescription: USER.longBio,
  keywords: USER.keywords,
  author: USER.displayName,
  locale: "en_US",
  type: "website",
} as const;

/**
 * Theme Colors for Meta Tags
 */
export const META_THEME_COLORS = {
  light: "#f9faf0",
  dark: "#09090b",
} as const;

/**
 * Navigation Items
 */
export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Component",
    href: "https://no-ui.vercel.app",
    external: true,
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

/**
 * Social Links
 */
export const SOCIAL_LINKS = {
  github: USER.github,
  linkedin: USER.linkedin,
  twitter: `https://twitter.com/${USER.twitter.replace("@", "")}`,
  email: `mailto:${USER.email}`,
  phone: `tel:${USER.phone}`,
} as const;

/**
 * GitHub Info
 */
export const GITHUB_USERNAME = "joypaul3592";
export const SOURCE_CODE_GITHUB_REPO = "joypaul3592/portfolio-2026";
export const SOURCE_CODE_GITHUB_URL = `https://github.com/${SOURCE_CODE_GITHUB_REPO}`;

/**
 * UTM Parameters for Analytics
 */
export const UTM_PARAMS = {
  utm_source: "joypaul.vercel.app",
  utm_medium: "portfolio",
} as const;
