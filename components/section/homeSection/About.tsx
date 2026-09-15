import Link from "next/link";
import SectionHeading from "@/components/section/common/SectionHeading";

export default function About() {
  // Pulled up: the hero's copy already flows into this, so it needs less air
  // than the gap between two unrelated sections.
  return (
    <section className="-mt-6 sm:-mt-8">
      <SectionHeading title="About" />

      <div className="space-y-4 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        <p>
          I&rsquo;m a frontend developer with 3+ years of experience building
          scalable, high-performance web applications. Day to day that means
          React, Next.js and TypeScript — clean, responsive, accessible code,
          and interfaces that hold up on every device.
        </p>
        <p>
          Lately I&rsquo;ve been building{" "}
          <Link
            href="https://kipui.app/"
            target="_blank"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Kipui
          </Link>{" "}
          and{" "}
          <Link
            href="https://bunnybook.vercel.app/"
            target="_blank"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            BunnyBook
          </Link>
          . I enjoy working alongside designers and backend folks, and I care
          about the small details most people never consciously notice.
        </p>
      </div>
    </section>
  );
}
