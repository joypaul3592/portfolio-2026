"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * SmoothScrollProvider - Provides smooth scrolling using Lenis
 *
 * This component is SEO-friendly because:
 * 1. It only runs on client-side (doesn't affect SSR)
 * 2. It doesn't modify the DOM structure
 * 3. It preserves native scroll behavior for crawlers
 * 4. It's progressively enhanced (works without JS)
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      orientation: "vertical", // Vertical scrolling
      gestureOrientation: "vertical",
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      wheelMultiplier: 1, // Mouse wheel sensitivity
      touchMultiplier: 2, // Touch scroll sensitivity
      infinite: false, // Disable infinite scroll
    });

    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
