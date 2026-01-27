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
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main className="max-w-4xl mx-auto border border-t-0 relative">
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
