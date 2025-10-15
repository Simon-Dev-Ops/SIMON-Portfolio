import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "mathebulasf@gmail.com";
    const subject = "Portfolio Inquiry";
    const body = "Hi Simon,\n\nI found your portfolio and would like to discuss opportunities.\n\nProject Details:\n\n\n\nBest regards,";
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard.writeText(email).then(() => {
        toast({
          title: "Email copied to clipboard",
          description: "Please paste mathebulasf@gmail.com into your email client",
        });
      }).catch(() => {
        toast({
          title: "Email: mathebulasf@gmail.com",
          description: "Please copy this email address to your email client",
        });
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss DevOps solutions? Let's connect!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Talk</h3>
              <div className="space-y-4">
                <a
                  href="mailto:mathebulasf@gmail.com?subject=Portfolio%20Inquiry"
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border hover:border-primary transition-colors group cursor-pointer"
                  title="Send email to mathebulasf@gmail.com"
                  aria-label="Send email to mathebulasf@gmail.com"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">mathebulasf@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <div className="font-medium text-foreground">
                      <p>Area: Fourways</p>
                      <p>Suburb: Dainfern</p>
                      <p>City: Johannesburg</p>
                      <p>Country: South Africa</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://github.com/Simon-Dev-Ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium text-foreground">Check out my code</p>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours. For urgent matters, feel free to reach out via LinkedIn.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card border-border animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to discuss your next project? I'm always interested in new opportunities and challenges.
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="mailto:mathebulasf@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Simon,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20opportunities.%0D%0A%0D%0AProject%20Details:%0D%0A%0D%0A%0D%0A%0D%0ABest%20regards,"
                  onClick={handleEmailClick}
                  className="inline-flex items-center justify-center w-full bg-gradient-accent text-primary-foreground hover:opacity-90 group px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
                  title="Open email client to send message"
                  aria-label="Send email to Simon Mathebula"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Email
                </a>
                
                <a
                  href="https://www.linkedin.com/in/simon-mathebula-445614b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
