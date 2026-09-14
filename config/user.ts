/**
 * User Profile Data
 * Central source of truth for all user-related information
 */
export const USER = {
  // Basic Info
  firstName: "Joy",
  lastName: "Paul",
  displayName: "Joy Paul",
  username: "joypaul3592",
  jobTitle: "Frontend Developer",

  // Bio & Description
  bio: "Frontend Developer crafting digital experiences at the intersection of design, technology, and user experience.",

  longBio:
    "Frontend Developer with 2+ years of experience, specializing in building scalable, high-performance web applications using modern technologies like React.js, Next.js, and TypeScript.",

  // Location
  location: "Barisal, Bangladesh",
  country: "Bangladesh",

  // Contact
  email: "joypaul3592@gmail.com",
  phone: "01732023548",

  // Social Links
  github: "https://github.com/joypaul3592",
  linkedin: "https://www.linkedin.com/in/joypaul3592/",
  twitter: "@joypaul3592",

  // Images
  avatar: "/img/hero/joy.png",
  // Drop a landscape photo in /public/img/hero and point this at it.
  // Left empty, the hero falls back to a generated gradient cover.
  cover: "/img/hero/my-cover.png" as string,
  ogImage: "/img/hero/joy.png", // For social media sharing

  // Skills & Keywords for SEO
  keywords: [
    "Joy Paul",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer Bangladesh",
    "UI/UX Developer",
    "JavaScript Developer",
    "Full Stack Developer",
    "Barisal Developer",
    "Remote Developer",
    "React.js Expert",
    "Next.js Expert",
    "Tailwind CSS",
    "Node.js Developer",
    "Portfolio Website",
    "Web Application Development",
    "Responsive Web Design",
    "Modern Web Development",
    "Noui Creator",
  ],

  // Tech Stack
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Responsive Design",
    "UI/UX Design",
    "Web Performance",
  ],

  // Projects
  featuredProject: {
    name: "Noui",
    description:
      "A minimalist UI component library designed for speed and simplicity",
    url: "https://no-ui.vercel.app/",
  },
} as const;
