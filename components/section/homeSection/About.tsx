import Link from "next/link";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section className="border-b">
      <h2 className="sm:text-3xl text-2xl font-medium border-b sm:px-10 px-5 py-1.5">
        About us
      </h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed p-5 sm:p-10">
        <div className="flex gap-3">
          <Icon
            icon="uil:compress-point"
            className="text-foreground mt-1.5 w-4 h-4 flex-shrink-0"
          />
          <p>
            Frontend Developer with 2+ years of experience, specializing in
            building scalable, high-performance web applications using modern
            technologies.
          </p>
        </div>

        <div className="flex gap-3">
          <Icon
            icon="uil:compress-point"
            className="text-foreground mt-1.5 w-4 h-4 flex-shrink-0"
          />
          <p>
            Skilled in{" "}
            <span className="text-foreground font-medium">React.js</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span>,{" "}
            <span className="text-foreground font-medium">HTML5</span>, and{" "}
            <span className="text-foreground font-medium">Node.js</span>;
            delivering clean, responsive, and accessible code while optimizing
            user experience across devices.
          </p>
        </div>

        <div className="flex gap-3">
          <Icon
            icon="uil:compress-point"
            className="text-foreground mt-1.5 w-4 h-4 flex-shrink-0"
          />
          <p>
            I am the creator of{" "}
            <Link
              href="https://no-ui.vercel.app/"
              target="_blank"
              className="text-foreground font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Noui
            </Link>
            , a minimalist UI component library designed for speed and
            simplicity.
          </p>
        </div>

        <div className="flex gap-3">
          <Icon
            icon="uil:compress-point"
            className="text-foreground mt-1.5 w-4 h-4 flex-shrink-0"
          />
          <p>
            Passionate about collaborating with cross-functional teams to
            implement intuitive user interfaces and enhance platform performance
            through responsive, user-friendly web interfaces.
          </p>
        </div>

        <div className="flex gap-3">
          <Icon
            icon="uil:compress-point"
            className="text-foreground mt-1.5 w-4 h-4 flex-shrink-0"
          />
          <p>
            Based in{" "}
            <span className="text-foreground font-medium">
              Barisal, Bangladesh
            </span>
            , working remotely with teams across the globe.
          </p>
        </div>
      </div>
    </section>
  );
}
