import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "SLI/SLO Monitoring Dashboard",
      description: "Built comprehensive New Relic dashboards providing real-time performance insights and service-level monitoring for critical applications at Rank Interactive.",
      technologies: ["New Relic", "SLI/SLO", "Monitoring", "Dashboards"],
      metrics: "Real-time insights",
      github: "#",
    },
    {
      title: "Infrastructure Automation Pipeline",
      description: "Automated multi-environment deployments using GitHub Actions and Terraform, streamlining infrastructure provisioning and reducing manual effort.",
      technologies: ["GitHub Actions", "Terraform", "Ansible", "IaC"],
      metrics: "100% automation",
      github: "#",
    },
    {
      title: "New Relic Agent Automation",
      description: "Implemented automated upgrade process for New Relic agents across all environments using Ansible, ensuring consistent monitoring coverage.",
      technologies: ["Ansible", "Terraform", "Automation", "New Relic"],
      metrics: "Zero downtime upgrades",
      github: "#",
    },
    {
      title: "EKS/ECS CI/CD Pipeline",
      description: "Designed and implemented end-to-end CI/CD pipelines for containerized applications on AWS EKS and ECS at Absa Bank.",
      technologies: ["Kubernetes", "Docker", "Jenkins", "AWS", "EKS", "ECS"],
      metrics: "Automated deployments",
      github: "#",
    },
    {
      title: "Absa Trading Platform Support",
      description: "Provided 24/7 support ensuring critical Order Management and trading systems maintained 99.9%+ uptime using Azure, Jenkins, and monitoring tools.",
      technologies: ["Azure", "Jenkins", "Prometheus", "Grafana"],
      metrics: "99.9% uptime",
      github: "#",
    },
    {
      title: "Vodacom ToBi Chatbot",
      description: "Deployed and maintained ToBi chatbot on Kubernetes infrastructure with Elastic Search backend, serving millions of customer interactions.",
      technologies: ["Kubernetes", "Docker", "Elastic Search"],
      metrics: "Millions of interactions",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world DevOps solutions delivering measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-4 p-3 bg-background/50 rounded-lg border border-border">
                  <p className="text-sm font-semibold text-primary">{project.metrics}</p>
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Details
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
