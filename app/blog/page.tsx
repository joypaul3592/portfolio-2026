"use client";

import Navbar from "@/components/layout/main/Navbar";
import Footer from "@/components/layout/main/Footer";
import BorderLine from "@/components/section/common/BorderLine";
import Link from "next/link";
import { blogs } from "@/lib/blog-data";
import { Icon } from "@iconify/react";

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main className="max-w-4xl mx-auto border border-t-0 relative bg-card/10">
        <BorderLine />

        <div className="sm:p-10 p-5 space-y-4 border-b">
          <h1 className="text-5xl font-light tracking-tight">Writing</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Thoughts on frontend architecture, user experience, and the craft of
            building for the web.
          </p>
        </div>

        <div className="grid gap-0 divide-y divide-border/50 border-b ">
          {blogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid lg:grid-cols-12 gap-8 sm:p-10 p-5 hover:bg-muted/30 transition-all duration-500 ease-in-out"
            >
              <div className="lg:col-span-2">
                <div className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-widest">
                  {post.date}
                </div>
              </div>

              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-light group-hover:text-foreground transition-colors">
                    {post.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {post.excerpt}
                </p>
              </div>

              <div className="lg:col-span-2 flex items-start lg:justify-end">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-emerald-500 transition-colors">
                  Read
                  <Icon
                    icon="lucide:arrow-right"
                    className="w-3 h-3 translate-y-[-1px]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <BorderLine />
        <Footer />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
