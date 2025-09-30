import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import SREPrinciples from "@/components/SREPrinciples";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Experience />
      <SREPrinciples />
      <Skills />
      <Projects />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
