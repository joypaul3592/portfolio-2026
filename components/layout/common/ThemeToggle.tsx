"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "@/components/Icons";
import { useSound } from "@/hooks/useSound";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [isDark, setIsDark] = useState(true);
  const playClick = useSound("/sounds/public_audio_ui-sounds_click.wav");

  const toggleTheme = () => {
    playClick(0.5);
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`cursor-pointer text-muted-foreground transition-colors hover:text-foreground ${className}`}
    >
      {isDark ? (
        <SunIcon size={16} className="size-4" />
      ) : (
        <MoonIcon size={16} className="size-4" />
      )}
    </button>
  );
}
