"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoImg from "@/public/img/logo/white_logo.svg";
import Image from "next/image";
import PlusIcon from "@/components/Icon";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/main/Navbar";
import Hero from "@/components/section/homeSection/Hero";
import BorderLine from "@/components/section/common/BorderLine";
import About from "@/components/section/homeSection/About";
import Experience from "@/components/section/homeSection/Experience";
import Blog from "@/components/section/homeSection/Blog";
import Footer from "@/components/layout/main/Footer";
import Contact from "@/components/section/homeSection/Contact";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
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
            setActiveSection(entry.target.id);
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

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main className="max-w-4xl mx-auto  border border-t-0 relative">
        {/* Line Border */}
        <BorderLine />
        <Hero />
        <BorderLine />

        <About />
        <BorderLine />
        <Experience />
        <BorderLine />
        <Blog />
        <BorderLine />
        <Contact />
        <BorderLine />
        <Footer />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
