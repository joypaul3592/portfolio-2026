"use client";

import { useEffect, useState } from "react";

/**
 * Stacked backdrop layers, each blurrier than the last and masked to a shorter
 * band. Because backdrop filters accumulate, the blur is heaviest along the
 * bottom edge and thins out towards the top, where the last layer fades to
 * nothing. A single blurred strip would instead end in a visible seam.
 */
const LAYERS = [
  { blur: 1, stop: 100 },
  { blur: 2, stop: 78 },
  { blur: 4, stop: 58 },
  { blur: 8, stop: 38 },
  { blur: 16, stop: 20 },
];

export default function ScrollGradient() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // If we are within 20px of the bottom, hide the gradient
      const buffer = 20;
      if (scrollTop + clientHeight >= scrollHeight - buffer) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 h-28 transition-opacity duration-300 sm:h-36 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {LAYERS.map(({ blur, stop }) => {
        const mask = `linear-gradient(to top, #000 0%, #000 ${Math.round(
          stop * 0.35,
        )}%, transparent ${stop}%)`;

        return (
          <div
            key={blur}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}

      {/* A touch of the page colour, so the copy dissolves rather than smears */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </div>
  );
}
