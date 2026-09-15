import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/section/common/SectionHeading";
import VerticalRule from "@/components/section/common/VerticalRule";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  LinkIcon,
  LayersIcon,
  BookmarkIcon,
  GlobeIcon,
  HomeIcon,
  ShieldIcon,
  FlameIcon,
} from "@/components/Icons";

const projectIcons: Record<
  string,
  React.ComponentType<
    React.SVGProps<SVGSVGElement> & { size?: number | string }
  >
> = {
  layers: LayersIcon,
  book: BookmarkIcon,
  globe: GlobeIcon,
  home: HomeIcon,
  shield: ShieldIcon,
  flame: FlameIcon,
};

// `rule` is opt-in: the home page threads a hairline between its sections,
// while /projects renders this component on its own.
export default function Projects({
  limit,
  rule = false,
}: {
  limit?: number;
  rule?: boolean;
}) {
  const displayed = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section id="projects">
      {rule ? <VerticalRule className="mb-12 h-16 sm:mb-14 sm:h-20" /> : null}

      <SectionHeading title="Projects" meta={`${PROJECTS.length} total`} />

      <ul className="space-y-6">
        {displayed.map((project) => {
          const ProjectIcon = projectIcons[project.icon] || LinkIcon;

          return (
            <li key={project.title}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4"
              >
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:text-foreground">
                  <ProjectIcon size={17} className="size-[17px]" />
                </span>

                <div className="space-y-1">
                  <h3 className="flex items-center gap-1.5 text-[15px] font-medium">
                    {project.title}
                    <ArrowUpRightIcon
                      size={13}
                      className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    <span className="text-xs font-normal text-muted-foreground">
                      {project.period}
                    </span>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {project.tags.slice(0, 4).join(" · ")}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {displayed.length < PROJECTS.length && (
        <Link
          href="/projects"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All projects
          <ArrowRightIcon
            size={14}
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </section>
  );
}
