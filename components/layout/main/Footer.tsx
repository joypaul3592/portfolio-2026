import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import ThemeToggle from "@/components/layout/common/ThemeToggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      Icon: GithubIcon,
      url: "https://github.com/joypaul3592",
      label: "GitHub",
    },
    {
      Icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/joypaul3592/",
      label: "LinkedIn",
    },
    // {
    //   Icon: FacebookIcon,
    //   url: "https://www.facebook.com/joy.paul.466713/",
    //   label: "Facebook",
    // },
  ];

  return (
    <footer className="pt-4">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {currentYear} <span className="text-foreground">Joy Paul</span>. All
          rights reserved.
        </div>

        <div className="flex items-center gap-5">
          <ThemeToggle />
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label={social.label}
            >
              <social.Icon size={17} className="size-[17px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
