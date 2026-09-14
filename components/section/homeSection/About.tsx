import Link from "next/link";
import SectionHeading from "@/components/section/common/SectionHeading";

export default function About() {
  return (
    <section>
      <SectionHeading title="About" />

      <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        <p>
          I&rsquo;m a frontend developer with 2+ years of experience building
          scalable, high-performance web applications. Day to day that means
          React, Next.js and TypeScript — clean, responsive, accessible code,
          and interfaces that hold up on every device.
        </p>
        <p>
          I&rsquo;m the creator of{" "}
          <Link
            href="https://no-ui.vercel.app/"
            target="_blank"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Noui
          </Link>
          , a minimalist UI component library built for speed and simplicity. I
          enjoy working alongside designers and backend folks, and I care about
          the small details most people never consciously notice.
        </p>
        <p>
          Based in Barisal, Bangladesh, working remotely with teams across the
          globe.
        </p>
      </div>
    </section>
  );
}
