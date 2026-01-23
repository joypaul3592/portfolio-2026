import React from "react";
import { Icon } from "@iconify/react";

export default function Experience() {
  return (
    <section className="border-b">
      <div className="flex items-center justify-between gap-5 sm:px-10 px-5 py-1.5 border-b">
        <h2 className="text-3xl font-medium">Experience</h2>
        <div className="text-sm text-muted-foreground font-mono">
          2022 — 2026
        </div>
      </div>

      <div className="divide-y divide-border">
        {[
          {
            year: "2026",
            role: "Lead Frontend Developer",
            company: "Sparrowan",
            description:
              "Building and maintaining scalable high performance web applications using modern technologies including React Nextjs and Typescript.",
            tech: ["React.js", "Next.js", "TypeScript"],
            current: true,
          },
          {
            year: "2025",
            role: "Frontend Developer",
            company: "brandTech",
            description:
              "Developing responsive and user friendly web interfaces while delivering clean code and optimizing performance for better usability.",
            tech: ["React.js", "Next.js", "TypeScript"],
          },
          {
            year: "2024",
            role: "Frontend Developer",
            company: "BongoBrain",
            description:
              "Contributing to core frontend development by building reusable components and ensuring seamless integration with various backend services.",
            tech: ["React.js", "Next.js", "TypeScript"],
          },
          {
            year: "2023",
            role: "Frontend Developer",
            company: "IshQool",
            description:
              "Developed interactive EdTech platforms and bidding marketplaces while ensuring high performance across multiple modern web browser environments.",
            tech: ["React.js", "Next.js"],
          },
          {
            year: "2023",
            role: "Frontend Developer",
            company: "Pi Technology BD",
            description:
              "Worked as remote developer focused on MERN stack frontend architecture and collaborating with modern cross-functional agile teams.",
            tech: ["React.js", "Next.js", "MERN Stack"],
          },
          {
            year: "2022",
            role: "React Developer",
            company: "NonAcademy",
            description:
              "Started professional journey as frontend intern focused on React fundamentals component architecture and state management for projects.",
            tech: ["React.js", "JavaScript", "CSS3"],
          },
        ].map((job, index) => (
          <div
            key={index}
            className="group relative grid lg:grid-cols-12 sm:gap-8 gap-5 sm:p-10 p-5 hover:bg-muted/30 transition-all duration-500 ease-in-out rounded-md"
          >
            <div className="lg:col-span-2 relative">
              <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500 flex items-center gap-3">
                <span className="lg:hidden w-2 h-2 rounded-full bg-foreground/20" />
                {job.year}
              </div>
              {job.current && (
                <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Latest
                </div>
              )}
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
    </section>
  );
}
