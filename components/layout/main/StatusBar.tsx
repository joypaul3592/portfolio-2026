"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon, ArrowLeftIcon } from "@/components/Icons";
import { useSound } from "@/hooks/useSound";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Dhaka",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export default function StatusBar({
  back,
  status = "open to work",
}: {
  back?: { href: string; label: string };
  status?: string;
}) {
  // Rendered only after mount — the server has no idea what time it is here.
  const [time, setTime] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);
  const playClick = useSound("/sounds/public_audio_ui-sounds_click.wav");

  useEffect(() => {
    const tick = () => setTime(timeFormatter.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  const toggleTheme = () => {
    playClick(0.5);
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        {back && (
          <>
            <Link
              href={back.href}
              className="group flex items-center gap-1 transition-colors hover:text-foreground"
            >
              <ArrowLeftIcon
                size={12}
                className="size-3 transition-transform group-hover:-translate-x-0.5"
              />
              {back.label}
            </Link>
            <span className="text-border">·</span>
          </>
        )}

        {/* Reserve the width so the line doesn't jump when the clock arrives */}
        <span className="tabular-nums">{time ?? "--:--"} BST</span>
        <span className="text-border">·</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {status}
        </span>
      </div>

      <button
        onClick={toggleTheme}
        className="cursor-pointer transition-colors hover:text-foreground"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <SunIcon size={14} className="size-3.5" />
        ) : (
          <MoonIcon size={14} className="size-3.5" />
        )}
      </button>
    </div>
  );
}
