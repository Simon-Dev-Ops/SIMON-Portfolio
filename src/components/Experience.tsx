import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Rank Interactive",
      period: "Jan 2024 - Present",
      title: "Site Reliability Engineer",
      location: "Johannesburg, South Africa",
      achievements: [
        "Built comprehensive SLI/SLO dashboards in New Relic for real-time performance insights",
        "Automated infrastructure provisioning with Terraform and GitHub Actions",
        "Implemented automated New Relic agent upgrades across all environments using Ansible",
      ],
    },
    {
      company: "Absa Bank",
      period: "Mar 2020 - Dec 2023",
      title: "DevOps Engineer",
      location: "Johannesburg, South Africa",
      achievements: [
        "Provided 24/7 support for critical trading platform and Order Management systems",
        "Designed and implemented CI/CD pipelines for EKS/ECS containerized applications",
        "Deployed comprehensive monitoring solutions using Prometheus and Grafana",
      ],
    },
    {
      company: "Vodacom",
      period: "Jul 2018 - Feb 2020",
      title: "DevOps/Support Engineer",
      location: "Johannesburg, South Africa",
      achievements: [
        "Deployed and maintained ToBi chatbot on Kubernetes infrastructure",
        "Implemented RPA automation to streamline operational workflows",
        "Established GitLab CI/CD pipelines for automated testing and deployment",
      ],
    },
    {
      company: "Vodacom",
      period: "Apr 2016 - Jun 2018",
      title: "Support Engineer",
      location: "Johannesburg, South Africa",
      achievements: [
        "Optimized application performance and resolved critical incidents",
        "Managed SLA compliance and system administration tasks",
        "Provided technical support for enterprise applications",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            8+ years of building and maintaining reliable, scalable infrastructure
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={`${exp.company}-${exp.period}`}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
