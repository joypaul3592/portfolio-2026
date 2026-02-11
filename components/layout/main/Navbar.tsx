"use client";
import { PlusIcon, GithubIcon, MoonIcon, SunIcon } from "@/components/Icons";
import Image from "next/image";
import whiteImg from "@/public/img/logo/white_logo.svg";
import blackImg from "@/public/img/logo/black_logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSound } from "@/hooks/useSound";

export default function Navbar() {
  const pathname = usePathname();

  const [isDark, setIsDark] = useState(true);
  const playClick = useSound("/sounds/public_audio_ui-sounds_click.wav");

  const toggleTheme = () => {
    playClick(0.5);
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="sticky border-b top-0 z-10 bg-background/50 backdrop-blur-md  ">
      <div className="max-w-4xl mx-auto px-5 sm:px-10 relative border-x border-border py-2.5">
        <div className="flex items-center justify-between gap-5 ">
          <Link href="/" className="sm:block hidden">
            <Image
              src={isDark ? whiteImg : blackImg}
              alt="logo"
              className="w-16"
              priority
            />
          </Link>

          <div className="flex items-center justify-between gap-5 flex-1 sm:flex-0">
            {[
              { name: "Portfolio", path: "/" },
              { name: "Component", path: "https://no-ui.vercel.app" },
              { name: "Blog", path: "/blog" },
            ].map((section) => (
              <Link
                key={section.name}
                href={section.path}
                className={` transition-all text-sm duration-500 cursor-pointer capitalize font-medium ${
                  pathname === section.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {section.name}
              </Link>
            ))}

            <div className="flex items-center gap-2.5 border-l border-border pl-5 h-full">
              <button
                onClick={toggleTheme}
                className="group size-8 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 cursor-pointer flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <SunIcon
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    size={12}
                  />
                ) : (
                  <MoonIcon
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    size={12}
                  />
                )}
              </button>

              <Link
                href="https://github.com/joypaul3592"
                target="_blank"
                className="group size-8 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 cursor-pointer flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <GithubIcon
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  size={16}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute  -left-[0.49rem] -bottom-[0.49rem] sm:block hidden ">
          <PlusIcon />
        </div>
        <div className="absolute  -right-[0.49rem] -bottom-[0.49rem] sm:block hidden">
          <PlusIcon />
        </div>
      </div>
    </nav>
  );
}
