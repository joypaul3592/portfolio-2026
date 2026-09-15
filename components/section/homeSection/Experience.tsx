import Link from "next/link";
import { EXPERIENCES } from "@/lib/data";
import SectionHeading from "@/components/section/common/SectionHeading";
import VerticalRule from "@/components/section/common/VerticalRule";
import { ArrowRightIcon } from "@/components/Icons";

export default function Experience() {
  const displayed = EXPERIENCES.slice(0, 3);

  return (
    <section>
      {/* Carries the hero's rule down past About, into the timeline */}
      <VerticalRule className="mb-12 h-16 sm:mb-14 sm:h-20" />

      <SectionHeading title="Experience" meta="2022 — 2026" />

      <ul className="space-y-6">
        {displayed.map((job) => (
          <li
            key={`${job.year}-${job.company}`}
            className="group grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
          >
            <span className="pt-0.5 text-sm text-muted-foreground">
              {job.year}
            </span>

            <div className="space-y-1.5">
              <h3 className="text-[15px] font-medium">
                {job.role}{" "}
                <span className="font-normal text-muted-foreground">
                  @ {job.company}
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {job.description}
              </p>
              <p className="text-xs text-muted-foreground/70">
                {job.tech.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {EXPERIENCES.length > displayed.length && (
        <Link
          href="/projects"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All experience
          <ArrowRightIcon
            size={14}
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </section>
  );
}
