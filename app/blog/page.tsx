"use client";

import Navbar from "@/components/layout/main/Navbar";
import Footer from "@/components/layout/main/Footer";
import BorderLine from "@/components/section/common/BorderLine";
import Link from "next/link";
import { blogs } from "@/lib/blog-data";
import { ArrowRightIcon } from "@/components/Icons";
import ScrollGradient from "@/components/layout/common/ScrollGradient";

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main className="max-w-4xl mx-auto border border-t-0 relative bg-card/10">
        <BorderLine />

        <div className="sm:p-10 p-5 sm:space-y-4 space-y-2 border-b">
          <h1 className="sm:text-5xl text-3xl font-light tracking-tight">
            All Blogs
          </h1>
          <p className="text-muted-foreground sm:text-lg max-w-xl">
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
                  <ArrowRightIcon
                    size={12}
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

      <ScrollGradient />
    </div>
  );
}
