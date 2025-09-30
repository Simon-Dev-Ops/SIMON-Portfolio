import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      icon: Award,
      institution: "Henley Business School",
      degree: "Certificate in Business Management Practice",
      year: "Professional Development",
      color: "text-cyan-400",
    },
    {
      icon: GraduationCap,
      institution: "Magabotse Secondary School",
      degree: "Grade 12 (Matric)",
      year: "Secondary Education",
      color: "text-blue-400",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card
              key={edu.institution}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-lg bg-background/50 ${edu.color} group-hover:scale-110 transition-transform mb-4`}>
                  <edu.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-muted-foreground">
                  {edu.year}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
