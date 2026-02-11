import Link from "next/link";
import { blogs } from "@/lib/blog-data";

export default function Blog() {
  return (
    <section className="border-b">
      <div className="flex items-center justify-between border-b sm:px-10 px-5 py-3">
        <h2 className="sm:text-3xl text-2xl font-medium">Recent Blog</h2>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-widest"
        >
          View All —&gt;
        </Link>
      </div>

      <div className="grid gap-5 p-5 sm:px-10 lg:grid-cols-2">
        {blogs.slice(0, 4).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group p-5 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <span>Read more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
