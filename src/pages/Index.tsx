import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillsModern from "@/components/SkillsModern";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Involvement from "@/components/Involvement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Initialize scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    // Set dark theme by default
    document.documentElement.classList.add('dark');

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground smooth-scroll">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <SkillsModern />
      <Experience />
      <Education />
      <Involvement />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
