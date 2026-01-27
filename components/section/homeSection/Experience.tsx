import React from "react";
import { Icon } from "@iconify/react";
import { EXPERIENCES } from "@/lib/data";
import Link from "next/link";

export default function Experience() {
  const displayedExperiences = EXPERIENCES.slice(0, 3);

  return (
    <section className="border-b">
      <div className="flex items-center justify-between gap-5 sm:px-10 px-5 py-1.5 border-b">
        <h2 className="sm:text-3xl text-2xl font-medium">Experience</h2>
        <div className="text-sm text-muted-foreground font-mono">
          2022 — 2026
        </div>
      </div>

      <div className="divide-y divide-border">
        {displayedExperiences.map((job, index) => (
          <div
            key={index}
            className="group relative grid lg:grid-cols-12 sm:gap-8 gap-5 sm:p-10 p-5 hover:bg-muted/30 transition-all duration-500 ease-in-out rounded-md"
          >
            <div className="lg:col-span-2 relative">
              <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500 flex items-center gap-3">
                <span className="lg:hidden w-2 h-2 rounded-full bg-foreground/20" />
                {job.year}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500">
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight">
                    {job.role}
                  </h3>
                  <Icon
                    icon="lucide:arrow-up-right"
                    className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-muted-foreground w-4 h-4"
                  />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-mono text-xs">@</span>
                  <span className="text-sm font-medium">{job.company}</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-lg text-sm sm:text-base">
                {job.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end content-start mt-2 lg:mt-0">
              {job.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono text-muted-foreground rounded-full border border-border/50 bg-background/50 group-hover:border-foreground/20 group-hover:text-foreground transition-all duration-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {EXPERIENCES.length > 3 && (
        <div className="p-5 flex justify-center bg-border/20 border-t">
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-300"
            aria-label="See more projects and case studies"
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
