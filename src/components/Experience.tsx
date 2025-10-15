import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Rank Interactive / Rank Group",
      period: "Jan 2024 - Present",
      title: "Site Reliability Engineer",
      location: "Johannesburg, South Africa",
      achievements: [
        "Developed and managed platform and integration frameworks with a focus on reliability and scalability",
        "Built comprehensive SLI/SLO dashboards in New Relic for real-time performance insights and faster bottleneck identification",
        "Automated infrastructure provisioning with Terraform and GitHub Actions, reducing manual intervention",
        "Implemented automated New Relic agent upgrades across all environments using Ansible",
        "Enhanced system reliability and performance through proactive monitoring and automation",
      ],
    },
    {
      company: "Absa Bank Limited",
      period: "Mar 2020 - Dec 2023",
      title: "DevOps Engineer",
      location: "Johannesburg, South Africa",
      achievements: [
        "Provided 24/7 support for critical Order Management and Trading applications used by Portfolio Managers and Traders",
        "Ensured seamless operation of trading support applications connecting front-office with back-office processes",
        "Designed and implemented CI/CD pipelines for EKS/ECS containerized applications on AWS",
        "Managed change controls for upgrades and modifications, ensuring 24/7 application uptime",
        "Analyzed Unix scripts and managed job scheduling using cron and Autosys",
        "Led weekly client calls to review issues and identify preventive measures",
        "Developed project plans for annual recertification of managed applications",
      ],
    },
    {
      company: "Vodacom",
      period: "Jul 2018 - Mar 2020",
      title: "2nd Line Support / RPA - DevOps Engineer",
      location: "Johannesburg, South Africa",
      achievements: [
        "Deployed and maintained ToBi chatbot in a Kubernetes environment, creating Kubernetes pods",
        "Implemented RPA automation using UiPath for process analysis, design, and implementation",
        "Built end-to-end CI/CD pipelines for ECS-based applications, integrating GitLab CI/CD and Jenkins",
        "Provided front-end support for knowledge base website (tradekbs.vodacom.co.za)",
        "Monitored applications using Elasticsearch and ensured system stability after deployments",
        "Automated infrastructure provisioning for ECS clusters using Terraform",
        "Conducted vulnerability system scans and risk mitigation procedures",
      ],
    },
    {
      company: "Vodacom",
      period: "Apr 2016 - Jun 2018",
      title: "Support Engineer",
      location: "Johannesburg, South Africa",
      achievements: [
        "Analyzed software application functionality to identify and suggest enhancements",
        "Optimized application performance and resolved critical incidents within SLA",
        "Managed system administration tasks including user configuration and password resets",
        "Provided technical support for enterprise applications and maintained documentation",
        "Collaborated with cross-functional teams to ensure smooth operations",
      ],
    },
    {
      company: "Bytes Managed Solutions",
      period: "Mar 2015 - Mar 2016",
      title: "Customer Service Representative (Field Technician - ATM/TCR)",
      location: "South Africa",
      achievements: [
        "Managed and maintained adequate boot stock for operational efficiency",
        "Addressed customer inquiries and issues within stipulated Service Level Agreements (SLAs)",
        "Conducted site inspections prior to ATM installations, ensuring compliance",
        "Performed installations of cash vault machines, software upgrades, and network configurations",
        "Provided maintenance and troubleshooting for Dell equipment ensuring optimal performance",
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
            9+ years of building and maintaining reliable, scalable infrastructure
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
