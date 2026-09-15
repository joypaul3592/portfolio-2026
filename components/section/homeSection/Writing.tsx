import Link from "next/link";
import SectionHeading from "@/components/section/common/SectionHeading";
import VerticalRule from "@/components/section/common/VerticalRule";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/Icons";

const HANDBOOK = "https://bunnybook.vercel.app/learn";

const FACTS = [
  { value: "23", label: "chapters" },
  { value: "230", label: "topics" },
  { value: "বাংলা", label: "written in" },
];

/**
 * Three topics lifted from the handbook's first chapter — enough to show what
 * the writing is actually about, without turning the home page into a table of
 * contents. Titles are verbatim; the handbook itself is the only link target,
 * since topics are read in sequence rather than one at a time.
 */
const TOPICS = [
  {
    kicker: "Rendering",
    title: "RSC Payload Mechanics & Network Overhead",
    blurb: "What actually crosses the wire on every server render.",
  },
  {
    kicker: "Streaming",
    title: "Streaming SSR with Suspense Architecture",
    blurb: "Where to draw boundaries so the page arrives in useful pieces.",
  },
  {
    kicker: "Routing",
    title: "Parallel & Intercepting Routes for Production Modals",
    blurb: "Modals that survive a refresh, a back button and a shared link.",
  },
];

export default function Writing() {
  return (
    <section>
      <VerticalRule className="mb-12 h-16 sm:mb-14 sm:h-20" />

      <SectionHeading title="Writing" meta="on BunnyBook" />

      <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        I&rsquo;m writing a Bengali handbook on production Next.js — the things
        that only bite you once an app is actually live.
      </p>

      {/* The shape of the thing, before the sample: three facts, no punctuation noise */}
      <dl className="mt-5 flex flex-wrap gap-2">
        {FACTS.map(({ value, label }) => (
          <div
            key={label}
            className="flex items-baseline gap-1.5 rounded-full bg-muted/60 px-2.5 py-1 ring-1 ring-border"
          >
            <dt className="sr-only">{label}</dt>
            <dd className="text-xs font-medium text-foreground">{value}</dd>
            <p className="text-[11px] text-muted-foreground">{label}</p>
          </div>
        ))}
      </dl>

      {/* Hairlines instead of cards: the list stays quiet next to the rest of the page.
          The kicker column borrows Experience's year column, so the two read as siblings. */}
      <ul className="mt-6 space-y-1">
        {TOPICS.map(({ kicker, title, blurb }, i) => (
          <li key={title}>
            <Link
              href={HANDBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-3 flex gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted/60 sm:gap-4"
            >
              {/* The index doubles as the row's anchor — it keeps the titles
                  from starting at a naked left edge */}
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-md bg-muted text-[11px] font-medium tabular-nums text-muted-foreground ring-1 ring-border transition-colors group-hover:text-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
                  {kicker}
                </span>
                <span className="mt-0.5 block text-pretty text-[15px] font-medium text-foreground/90 transition-colors group-hover:text-foreground">
                  {title}
                </span>
                <span className="mt-1 block text-pretty text-[13px] leading-relaxed text-muted-foreground">
                  {blurb}
                </span>
              </span>

              <ArrowUpRightIcon
                size={14}
                className="mt-1 size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={HANDBOOK}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Read the handbook
        <ArrowRightIcon
          size={14}
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </section>
  );
}
