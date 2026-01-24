"use client";

import Navbar from "@/components/layout/main/Navbar";
import Projects from "@/components/section/homeSection/Projects";
import Footer from "@/components/layout/main/Footer";
import BorderLine from "@/components/section/common/BorderLine";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { EXPERIENCES } from "@/lib/data";
import ScrollGradient from "@/components/layout/common/ScrollGradient";

export default function ProjectsPage() {
  const [isDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main className="max-w-4xl mx-auto border border-t-0 relative bg-background">
        <BorderLine />

        {/* Page Header */}
        <div className="sm:p-10 p-5 border-b space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <Icon icon="lucide:arrow-left" className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Full Portfolio
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A comprehensive list of projects and professional experience
            I&apos;ve gained over the years.
          </p>
        </div>

        {/* Full Experience Section */}
        <section className="border-b">
          <div className="flex items-center justify-between gap-5 sm:px-10 px-5 py-4 border-b bg-muted/5">
            <h2 className="text-2xl font-semibold">All Experience</h2>
            <span className="text-xs font-mono text-muted-foreground">
              ({EXPERIENCES.length})
            </span>
          </div>
          <div className="divide-y divide-border">
            {EXPERIENCES.map((job, index) => (
              <div
                key={index}
                className="group relative grid lg:grid-cols-12 sm:gap-8 gap-5 sm:p-10 p-5 hover:bg-muted/30 transition-all duration-500 ease-in-out"
              >
                <div className="lg:col-span-2 relative">
                  <div className="text-xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    {job.year}
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium tracking-tight">
                      {job.role}
                    </h3>
                    <div className="text-sm font-medium text-muted-foreground">
                      @ {job.company}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {job.description}
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end content-start mt-2 lg:mt-0">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-mono text-muted-foreground rounded-full border border-border/50 bg-background/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <BorderLine />

        {/* All Projects Section */}
        <Projects />

        <BorderLine />
        <Footer />
      </main>

      <ScrollGradient />
    </div>
  );
}
