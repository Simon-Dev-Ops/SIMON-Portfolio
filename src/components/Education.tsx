import { GraduationCap, Award, FileText, Zap, Shield, BookOpen, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      icon: Award,
      institution: "Henley Business School",
      degree: "Higher Certificate in Management Practice (HCMP)",
      year: "2023 - Valid",
      color: "text-cyan-400",
      type: "Professional Certification"
    },
    {
      icon: BarChart3,
      institution: "New Relic",
      degree: "New Relic Observability Foundations Badge",
      year: "Feb 2024 - Feb 2026",
      color: "text-green-400",
      type: "Observability Certification"
    },
    {
      icon: Zap,
      institution: "UiPath Academy",
      degree: "RPA Developer L3, RPA Orchestrator Level 2, RPA Awareness",
      year: "2018 & 2019 - Valid",
      color: "text-purple-400",
      type: "RPA Certification"
    },
    {
      icon: Shield,
      institution: "CompTIA",
      degree: "CompTIA A+",
      year: "2015 - Expired",
      color: "text-orange-400",
      type: "IT Certification"
    },
    {
      icon: FileText,
      institution: "Microsoft",
      degree: "MCSA (Microsoft Certified Solutions Associate)",
      year: "2014 - Expired",
      color: "text-blue-400",
      type: "Microsoft Certification"
    },
    {
      icon: GraduationCap,
      institution: "Technical Institution",
      degree: "Diploma in Computer Engineering",
      year: "2012-2014 - Misplaced",
      color: "text-indigo-400",
      type: "Diploma Qualification"
    },
    {
      icon: BookOpen,
      institution: "Various Institutions",
      degree: "IT Systems Support NQF Level 5",
      year: "2013 - Valid",
      color: "text-emerald-400",
      type: "Technical Qualification"
    },
    {
      icon: BookOpen,
      institution: "Various Institutions",
      degree: "IT Technical Support NQF Level 4",
      year: "2013 - Valid",
      color: "text-teal-400",
      type: "Technical Qualification"
    },
    {
      icon: GraduationCap,
      institution: "Magabotse Secondary School",
      degree: "Grade 12 (Matric)",
      year: "2011 - Completed",
      color: "text-amber-400",
      type: "Secondary Education"
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card
              key={`${edu.institution}-${edu.degree}`}
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
                <p className="text-xs text-muted-foreground mb-2">
                  {edu.year}
                </p>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  {edu.type}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
