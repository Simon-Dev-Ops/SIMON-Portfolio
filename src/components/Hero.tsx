import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="DevOps Infrastructure"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary rounded-full animate-glow-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary rounded-full animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-accent p-1 animate-scale-in">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
                SM
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-fade-in-up">
            Simon Mathebula
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mb-6 text-sm md:text-base font-mono text-muted-foreground animate-fade-in-up">
            <span className="px-3 py-1 bg-card border border-border rounded-full">Site Reliability Engineer</span>
            <span className="px-3 py-1 bg-card border border-border rounded-full">DevOps Engineer</span>
            <span className="px-3 py-1 bg-card border border-border rounded-full">Cloud Enthusiast</span>
          </div>

          <p className="text-lg md:text-xl text-primary mb-4 font-semibold animate-fade-in-up">
            9+ years building resilient systems, automating infrastructure, and ensuring 24/7 uptime
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Currently optimizing reliability and performance at Rank Interactive, with a proven track record at Absa Bank and Vodacom. 
            Passionate about Infrastructure as Code, CI/CD automation, and proactive monitoring.
          </p>

          {/* Animated Metrics */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">9+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Deployments</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up">
            <a
              href="/Simon_Mathebula_Resume.pdf"
              download="Simon_Mathebula_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-accent text-primary-foreground hover:opacity-90 rounded-lg font-medium transition-all duration-300 group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Projects
            </Button>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-up">
            <a
              href="https://github.com/Simon-Dev-Ops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
              title="Visit my GitHub profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/simon-mathebula-445614b2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
              title="Connect with me on LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:mathebulasf@gmail.com?subject=Portfolio%20Inquiry"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Send email to mathebulasf@gmail.com"
              aria-label="Send Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
