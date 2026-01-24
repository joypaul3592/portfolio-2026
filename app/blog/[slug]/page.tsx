"use client";

import Navbar from "@/components/layout/main/Navbar";
import Footer from "@/components/layout/main/Footer";
import BorderLine from "@/components/section/common/BorderLine";
import { blogs } from "@/lib/blog-data";
import { useParams, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import ScrollGradient from "@/components/layout/common/ScrollGradient";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const router = useRouter();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-light">404 - Post Not Found</h1>
          <Link href="/blog" className="text-emerald-500 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main className="max-w-4xl mx-auto border border-t-0 relative bg-card/5">
        <BorderLine />

        {/* Header Section */}
        <div className="sm:p-10 p-5 space-y-5 border-b">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            <Icon
              icon="lucide:arrow-left"
              className="w-3 h-3 transition-transform group-hover:-translate-x-1"
            />
            Back to Writing
          </button>

          <div className="space-y-4">
            <h1 className="text-4xl font-light leading-tight tracking-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-xs text-muted-foreground font-mono uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {blog.category}
              </div>
              <div>{blog.date}</div>
              <div>{blog.readTime} read</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="sm:p-10 p-5">
          <article className="prose prose-invert prose-lg max-w-none">
            {/* Featured Media (Video or Placeholder) */}
            {blog.videoUrl && (
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-border shadow-2xl mb-9 relative group">
                <iframe
                  src={blog.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* Visual Overlay like in the image */}
                <div className="absolute inset-0 pointer-events-none border-[12px] border-background/20 rounded-xl" />
              </div>
            )}

            {/* Render Content */}
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              {blog.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.trim().startsWith("###")) {
                  return (
                    <h2 key={i} className="text-xl text-foreground">
                      {paragraph.replace("###", "").trim()}
                    </h2>
                  );
                }
                if (paragraph.trim().startsWith("-")) {
                  return (
                    <ul key={i} className="space-y-3 ml-6">
                      {paragraph.split("\n").map((li, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-emerald-500 mt-1.5 select-none">
                            •
                          </span>
                          {li.replace("-", "").trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="whitespace-pre-line text-xl">
                    {paragraph.trim()}
                  </p>
                );
              })}
            </div>
          </article>
        </div>

        {/* Footer info (like in the image) */}
        <div className="sm:px-10 px-5 py-2.5 border-b bg-muted/10 border-t border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-border/50 overflow-hidden relative">
                <Image
                  src="/img/hero/joy2.png"
                  alt="Joy Paul"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Joy Paul</p>
                <p className="text-xs text-muted-foreground">
                  Frontend Developer @ Sparrowan
                </p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <button className="text-muted-foreground hover:text-foreground transition-colors border size-8 center rounded-lg cursor-pointer hover:border-muted ">
                <Icon icon="lucide:share-2" className="size-4" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors  border size-8 center rounded-lg cursor-pointer hover:border-muted ">
                <Icon icon="lucide:bookmark" className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <BorderLine />
        <Footer />
      </main>

      <ScrollGradient />
    </div>
  );
}
