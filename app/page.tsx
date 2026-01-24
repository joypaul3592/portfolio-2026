"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/main/Navbar";
import Hero from "@/components/section/homeSection/Hero";
import BorderLine from "@/components/section/common/BorderLine";
import About from "@/components/section/homeSection/About";
import Experience from "@/components/section/homeSection/Experience";
import Blog from "@/components/section/homeSection/Blog";
import Projects from "@/components/section/homeSection/Projects";
import Footer from "@/components/layout/main/Footer";
import Contact from "@/components/section/homeSection/Contact";
import ScrollGradient from "@/components/layout/common/ScrollGradient";

export default function Home() {
  const [isDark] = useState(true);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main className="max-w-4xl mx-auto  border border-t-0 relative">
        <BorderLine />
        <Hero />
        <BorderLine />
        <About />
        <BorderLine />
        <Experience />
        <BorderLine />
        <Projects limit={2} />
        <BorderLine />
        <Blog />
        <BorderLine />
        <Contact />
        <BorderLine />
        <Footer />
      </main>
      <ScrollGradient />
    </div>
  );
}
