import Hero from "@/components/section/homeSection/Hero";
import About from "@/components/section/homeSection/About";
import Experience from "@/components/section/homeSection/Experience";
import Blog from "@/components/section/homeSection/Blog";
import Projects from "@/components/section/homeSection/Projects";
import Footer from "@/components/layout/main/Footer";
import Contact from "@/components/section/homeSection/Contact";
import ScrollGradient from "@/components/layout/common/ScrollGradient";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="max-w-2xl mx-auto relative px-5 pb-20 space-y-14 sm:space-y-16">
        <Hero />
        <About />
        <Experience />
        <Projects limit={2} />
        <Blog />
        <Contact />
        <Footer />
      </main>
      <ScrollGradient />
    </div>
  );
}
