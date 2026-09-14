import Link from "next/link";
import { USER } from "@/config/user";
import SectionHeading from "@/components/section/common/SectionHeading";
import { ArrowUpRightIcon } from "@/components/Icons";

const channels = [
  { name: "Email", handle: USER.email, url: `mailto:${USER.email}` },
  { name: "GitHub", handle: USER.username, url: USER.github },
  { name: "LinkedIn", handle: USER.username, url: USER.linkedin },
  { name: "Phone", handle: USER.phone, url: `tel:${USER.phone}` },
];

export default function Contact() {
  return (
    <section id="connect">
      <SectionHeading title="Contact" />

      <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        Always up for new opportunities, collaborations, and conversations about
        technology and design. Based in{" "}
        <span className="text-foreground">{USER.location}</span>, working with
        teams anywhere.
      </p>

      <ul className="mt-5 space-y-2.5">
        {channels.map((channel) => (
          <li key={channel.name}>
            <Link
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-0.5 text-sm sm:grid-cols-[4.5rem_1fr] sm:gap-6"
            >
              <span className="text-muted-foreground">{channel.name}</span>
              <span className="flex items-center gap-1.5 text-foreground">
                {channel.handle}
                <ArrowUpRightIcon
                  size={12}
                  className="size-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
