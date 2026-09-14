import Link from "next/link";
import { blogs } from "@/lib/blog-data";
import SectionHeading from "@/components/section/common/SectionHeading";
import { ArrowRightIcon } from "@/components/Icons";

export default function Blog() {
  return (
    <section>
      <SectionHeading title="Writing" />

      <ul className="space-y-4">
        {blogs.slice(0, 5).map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
            >
              <span className="pt-0.5 text-sm text-muted-foreground">
                {post.date}
              </span>
              <span className="text-[15px] text-muted-foreground transition-colors group-hover:text-foreground">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/blog"
        className="group mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        All writing
        <ArrowRightIcon
          size={14}
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </section>
  );
}
