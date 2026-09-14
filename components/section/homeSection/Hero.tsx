import Image from "next/image";
import Link from "next/link";
import { USER } from "@/config/user";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "@/components/Icons";

const links = [
  { label: "Email", href: `mailto:${USER.email}`, Icon: MailIcon },
  { label: "GitHub", href: USER.github, Icon: GithubIcon },
  { label: "LinkedIn", href: USER.linkedin, Icon: LinkedinIcon },
];

export default function Hero() {
  return (
    <header>
      {/* Cover banner — a real photo when USER.cover is set, a gradient otherwise */}
      <div className="relative left-1/2 h-52 w-[min(90vw-2.5rem,60rem)] -translate-x-1/2 overflow-hidden rounded-xl sm:h-72 lg:h-80 mt-1">
        {USER.cover ? (
          <Image
            src={USER.cover}
            alt=""
            fill
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
        ) : (
          <div aria-hidden="true" className="hero-cover absolute inset-0" />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/50"
        />
      </div>

      {/* Photo card, centred on the cover's edge — a print with its caption */}
      <div className="relative -mt-24 mx-auto w-64 bg-paper/0 p-1.5 pb-6 text-center sm:-mt-28 sm:w-[21rem] backdrop-blur-[1.5px] ">
        <div className=" ring-1 ring-paper-edge rounded-lg">
          <Image
            src={USER.avatar}
            alt={`${USER.displayName} — ${USER.jobTitle}`}
            width={400}
            height={400}
            priority
            className="aspect-square w-full object-cover"
          />
        </div>

        {/* The card's title is the page's heading, now that the big one is gone */}
        <h1 className="mt-4 font-medium text-[14px] uppercase tracking-[0.12em] text-paper-foreground">
          {USER.displayName}
        </h1>
        <p className="mt-2  text-[12px] leading-[1.6] text-paper-muted px-1">
          building quiet interfaces for the web — react, next and typescript,
          from a small city in bangladesh.
        </p>
      </div>

      {/* A rule dropping out of the card, tying it to the copy below */}
      <div
        aria-hidden="true"
        className="mx-auto h-20 w-px bg-border sm:h-28"
      />

      <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
        {USER.jobTitle} — building for the web from {USER.location}.
      </p>

      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        <p>
          I like to sit where design and engineering meet — thinking about how
          an interface looks, feels, and actually works. Mostly{" "}
          <span className="text-foreground">React</span>,{" "}
          <span className="text-foreground">Next.js</span> and{" "}
          <span className="text-foreground">TypeScript</span>, with a soft spot
          for interaction detail.
        </p>
        <p>
          Currently open to full-time roles and freelance work. The fastest way
          to reach me is{" "}
          <Link
            href={`mailto:${USER.email}`}
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            email
          </Link>
          , or take a look at{" "}
          <Link
            href="/projects"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            what I&rsquo;ve built
          </Link>
          .
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
        Available for new work
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
        {links.map(({ label, href, Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon size={15} className="size-[15px]" />
            {label}
            <ArrowUpRightIcon
              size={12}
              className="size-3 opacity-0 transition-all duration-300 group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </header>
  );
}
