"use client";

import StatusBar from "@/components/layout/main/StatusBar";
import Footer from "@/components/layout/main/Footer";
import { blogs } from "@/lib/blog-data";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeftIcon, ShareIcon, BookmarkIcon } from "@/components/Icons";
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
      <main className="max-w-2xl mx-auto relative px-5 pt-6 pb-20 bg-card/5">
        <StatusBar back={{ href: "/", label: "Home" }} />

        {/* Header Section */}
        <div className="sm:py-10 py-5 space-y-5">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest cursor-pointer"
          >
            <ArrowLeftIcon
              size={12}
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
        <div className="sm:py-10 py-5">
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
        <div className="py-2.5 bg-muted/10">
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
                <ShareIcon size={16} className="size-4" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors  border size-8 center rounded-lg cursor-pointer hover:border-muted ">
                <BookmarkIcon size={16} className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </main>

      <ScrollGradient />
    </div>
  );
}
