import React from "react";
import { Icon } from "@iconify/react";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";

export default function Projects({ limit }: { limit?: number }) {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="border-b" id="projects">
      <div className="flex items-center justify-between gap-5 sm:px-10 px-5 py-3 border-b bg-muted/5">
        <h2 className="sm:text-3xl text-2xl font-semibold flex items-center gap-2">
          Projects{" "}
        </h2>
        <span className="text-xs font-mono text-muted-foreground align-top mb-1">
          ({PROJECTS.length})
        </span>
      </div>

      <div className="divide-y divide-border">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col  hover:bg-muted/30 transition-all duration-500"
          >
            {/* Project Header */}
            <div className="flex items-center justify-between py-2.5 sm:py-5 sm:px-10 px-5 border-b">
              <div className="flex items-center sm:gap-5 gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center border border-border/50 group-hover:border-foreground/20 transition-all shadow-sm">
                  <Icon icon={project.icon} className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="sm:text-xl text-lg font-medium tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground tracking-wider">
                    {project.period}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md border border-border/50 hover:border-foreground/30 hover:bg-foreground/5 transition-all text-muted-foreground hover:text-foreground"
                  aria-label={`View ${project.title} live`}
                >
                  <Icon icon="lucide:link-2" className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project Body */}
            <div className="space-y-5 sm:p-10 p-5">
              <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl italic">
                {project.description}
              </p>

              <ul className="space-y-5">
                {project.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-4 text-sm text-foreground/90 group/item"
                  >
                    <Icon
                      icon={feature.icon}
                      className="w-4 h-4 text-muted-foreground group-hover/item:text-foreground transition-colors"
                    />
                    <span className="font-light tracking-wide">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-5 ">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[10px] font-medium tracking-wide bg-muted text-muted-foreground rounded-full border border-border/50 group-hover:border-border transition-all duration-500 hover:bg-muted/80 hover:text-foreground cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {limit && PROJECTS.length > limit && (
        <div className="p-5 flex justify-center bg-border/20 border-t">
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-300"
            aria-label="See more projects and implementation details"
          >
            <span className="text-sm font-medium">See more</span>
            <Icon
              icon="lucide:arrow-right"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      )}
    </section>
  );
}
