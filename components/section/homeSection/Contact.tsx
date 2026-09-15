import Link from "next/link";
import { USER } from "@/config/user";
import SectionHeading from "@/components/section/common/SectionHeading";
import VerticalRule from "@/components/section/common/VerticalRule";

export default function Contact() {
  return (
    <section id="connect">
      <VerticalRule className="mb-12 h-16 sm:mb-14 sm:h-20" />

      <SectionHeading title="Contact" />

      <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        Always up for new opportunities, collaborations, and conversations about
        technology and design. The way in is an{" "}
        <Link
          href={`mailto:${USER.email}`}
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          email
        </Link>
        .
      </p>
    </section>
  );
}
