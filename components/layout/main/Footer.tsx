import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/Icons";

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
    <footer className="sm:px-10 px-5 py-5">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted-foreground font-mono">
          © {currentYear} <span className="text-foreground">Joy Paul</span>. All
          rights reserved.
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.Icon size={20} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
