import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "SLI/SLO Monitoring Dashboard",
      description: "Built comprehensive New Relic dashboards providing real-time performance insights and service-level monitoring for critical applications at Rank Interactive, leading to faster identification of performance bottlenecks.",
      technologies: ["New Relic", "SLI/SLO", "Monitoring", "Dashboards", "Performance Analytics"],
      metrics: "Faster bottleneck identification",
      github: "#",
    },
    {
      title: "Infrastructure Automation Pipeline",
      description: "Automated multi-environment deployments using GitHub Actions and Terraform, streamlining infrastructure provisioning and reducing manual intervention while ensuring consistency across environments.",
      technologies: ["GitHub Actions", "Terraform", "Ansible", "IaC", "Multi-environment"],
      metrics: "100% automation",
      github: "#",
    },
    {
      title: "New Relic Agent Automation",
      description: "Implemented automated upgrade process for New Relic agents across all environments using Ansible, ensuring consistent monitoring coverage and zero-downtime upgrades.",
      technologies: ["Ansible", "Terraform", "Automation", "New Relic", "Zero-downtime"],
      metrics: "Zero downtime upgrades",
      github: "#",
    },
    {
      title: "Absa Trading Platform CI/CD",
      description: "Designed and implemented end-to-end CI/CD pipelines for containerized applications on AWS EKS and ECS, supporting critical Order Management and Trading systems used by Portfolio Managers and Traders.",
      technologies: ["Kubernetes", "Docker", "Jenkins", "AWS EKS", "AWS ECS", "Trading Systems"],
      metrics: "24/7 trading support",
      github: "#",
    },
    {
      title: "Vodacom ToBi Chatbot Deployment",
      description: "Deployed and maintained ToBi chatbot on Kubernetes infrastructure with Elastic Search backend, creating Kubernetes pods and serving millions of customer interactions with high availability.",
      technologies: ["Kubernetes", "Docker", "Elastic Search", "Chatbot", "High Availability"],
      metrics: "Millions of interactions",
      github: "#",
    },
    {
      title: "RPA Process Automation",
      description: "Implemented UiPath RPA solutions for process analysis, design, and implementation, including business rules and technical requirements, streamlining operational workflows at Vodacom.",
      technologies: ["UiPath", "RPA", "Process Automation", "Business Rules", "Workflow Optimization"],
      metrics: "Streamlined operations",
      github: "#",
    },
    {
      title: "ECS Infrastructure Automation",
      description: "Automated infrastructure provisioning for ECS clusters using Terraform, reducing manual intervention and ensuring consistency across environments while supporting ECS-based applications.",
      technologies: ["Terraform", "AWS ECS", "Infrastructure Automation", "IaC", "Cluster Management"],
      metrics: "Reduced manual effort",
      github: "#",
    },
    {
      title: "GitLab CI/CD Integration",
      description: "Built end-to-end CI/CD pipelines for ECS-based applications, integrating GitLab CI/CD and Jenkins for automated testing and deployment, ensuring reliable software delivery.",
      technologies: ["GitLab CI/CD", "Jenkins", "ECS", "Automated Testing", "Deployment"],
      metrics: "Reliable delivery",
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
