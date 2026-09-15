import Image from "next/image";
import { USER } from "@/config/user";
import VerticalRule from "@/components/section/common/VerticalRule";

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
        <div className=" ring-1 ring-paper-edge/30 rounded-lg">
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
        <h1 className="mt-4 font-medium text-[14px] uppercase tracking-[0.12em] text-foreground">
          {USER.displayName}
        </h1>
        <p className="mt-2  text-[12px] leading-[1.6] text-paper-muted px-1">
          frontend developer. react, next and typescript, and far too much time
          spent on the small details.
        </p>
      </div>

      {/* A rule dropping out of the card, tying it to the copy below */}
      <VerticalRule />

      <p className="mt-4 text-balance text-lg text-muted-foreground sm:text-xl whitespace-nowrap">
        {USER.jobTitle} — Where design meets real user pain points.
      </p>

      <div className="mt-6 space-y-4 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        <p>
          Most of my time goes into the gap between a design file and a screen
          that actually works. If a button feels off, I&rsquo;ll rebuild it four
          times until it stops bothering me. Mostly{" "}
          <span className="text-foreground">React</span>,{" "}
          <span className="text-foreground">Next.js</span> and{" "}
          <span className="text-foreground">TypeScript</span>.
        </p>
      </div>
    </header>
  );
}
