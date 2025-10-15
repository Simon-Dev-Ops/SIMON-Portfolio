import { Code, Cloud, Cog, LineChart, GitBranch, Users, Zap, Database, Shield, Wrench, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["Microsoft Azure", "AWS (EC2, S3, RDS, CodeDeploy, CloudWatch, IAM)", "Azure SQL Database"],
      color: "text-blue-400",
    },
    {
      icon: Cog,
      title: "DevOps & CI/CD",
      skills: ["Azure DevOps", "Jenkins", "GitLab CI/CD", "GitHub Actions", "Azure Pipelines"],
      color: "text-cyan-400",
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "ARM Templates", "Automated Provisioning"],
      color: "text-emerald-400",
    },
    {
      icon: Cog,
      title: "Container Orchestration",
      skills: ["Kubernetes", "Docker", "Amazon EKS", "Docker Compose", "Container Registry"],
      color: "text-purple-400",
    },
    {
      icon: LineChart,
      title: "Monitoring & Observability",
      skills: ["New Relic", "Prometheus", "Grafana", "Elasticsearch", "Nagios", "Log Analytics"],
      color: "text-orange-400",
    },
    {
      icon: Search,
      title: "Code Quality & Security",
      skills: ["SonarQube", "Static Code Analysis", "Vulnerability Assessment", "Security Scanning"],
      color: "text-green-400",
    },
    {
      icon: Zap,
      title: "Process Automation",
      skills: ["UiPath RPA", "Business Process Automation", "Workflow Optimization", "Digital Transformation"],
      color: "text-yellow-400",
    },
    {
      icon: Code,
      title: "Programming & Scripting",
      skills: ["Python", "Bash/Shell Scripting", "C#", "PowerShell", "YAML", "JSON"],
      color: "text-pink-400",
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["SQL Server", "Azure SQL Database", "Oracle", "PostgreSQL", "Amazon RDS"],
      color: "text-sky-400",
    },
    {
      icon: Users,
      title: "IT Service Management",
      skills: ["Jira", "ServiceNow", "BMC Remedy", "Confluence", "Change Management"],
      color: "text-slate-400",
    },
    {
      icon: GitBranch,
      title: "Version Control & APIs",
      skills: ["Git", "GitHub", "Postman", "SoapUI", "REST APIs"],
      color: "text-lime-400",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      skills: ["Security Scanning", "Risk Assessment", "Compliance Frameworks", "Access Control"],
      color: "text-rose-400",
    },
    {
      icon: Wrench,
      title: "System Administration",
      skills: ["Windows/Linux Servers", "User Management", "SSH/Telnet", "FTP/SFTP", "Performance Tuning"],
      color: "text-indigo-400",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining modern cloud infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-background/50 ${category.color} group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-background border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
