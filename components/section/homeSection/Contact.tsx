import Link from "next/link";
import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  ArrowUpRightIcon,
} from "@/components/Icons";

export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      handle: "joypaul3592",
      url: "https://github.com/joypaul3592",
      Icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      handle: "joypaul3592",
      url: "https://www.linkedin.com/in/joypaul3592/",
      Icon: LinkedinIcon,
    },
    {
      name: "Email",
      handle: "joypaul3592@gmail.com",
      url: "mailto:joypaul3592@gmail.com",
      Icon: MailIcon,
    },
    {
      name: "Phone",
      handle: "01732023548",
      url: "tel:01732023548",
      Icon: PhoneIcon,
    },
  ];

  return (
    <section className="border-b" id="connect">
      <h2 className="sm:text-3xl text-2xl font-medium border-b sm:px-10 px-5 py-3">
        Contact
      </h2>
      <div className="grid lg:grid-cols-2 gap-10 p-5 sm:p-10">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-light">
            Let&lsquo;s Connect
          </h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Always interested in new opportunities, collaborations, and
              conversations about technology and design. Based in{" "}
              <span className="text-foreground">Barisal, Bangladesh</span>.
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:joypaul3592@gmail.com"
                className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300 w-fit"
              >
                <MailIcon
                  size={24}
                  className="w-6 h-6 mt-1 text-muted-foreground group-hover:text-foreground"
                />
                <span className="text-lg sm:text-xl font-light">
                  joypaul3592@gmail.com
                </span>
                <ArrowUpRightIcon
                  size={20}
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
            ELSEWHERE
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="group p-5 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:bg-muted/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <social.Icon
                    size={20}
                    className="w-5 h-5 text-muted-foreground group-hover:text-foreground"
                  />
                  <ArrowUpRightIcon
                    size={16}
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-foreground font-medium">
                    {social.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {social.handle}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
