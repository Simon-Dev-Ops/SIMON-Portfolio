import { Shield, Zap, TrendingUp, Bell, Database, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

const SREPrinciples = () => {
  const principles = [
    {
      icon: Shield,
      title: "High Availability & Reliability",
      description: "Designing systems for 99.9%+ uptime with fault-tolerant architectures",
      color: "text-cyan-400",
    },
    {
      icon: Zap,
      title: "Incident Management & Response",
      description: "24/7 on-call support with rapid incident detection and resolution",
      color: "text-blue-400",
    },
    {
      icon: TrendingUp,
      title: "Performance Tuning & Optimization",
      description: "Continuous improvement of system performance and resource efficiency",
      color: "text-emerald-400",
    },
    {
      icon: Bell,
      title: "Proactive Monitoring & Alerting",
      description: "Real-time dashboards and intelligent alerting for early issue detection",
      color: "text-purple-400",
    },
    {
      icon: Database,
      title: "Capacity Planning",
      description: "Data-driven forecasting and scaling strategies for future growth",
      color: "text-orange-400",
    },
    {
      icon: RefreshCw,
      title: "Disaster Recovery Planning",
      description: "Comprehensive backup strategies and tested recovery procedures",
      color: "text-pink-400",
    },
  ];

  return (
    <section id="sre-principles" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            SRE Principles & Practices
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core philosophies that drive reliability, performance, and operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <Card
              key={principle.title}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-lg bg-background/50 ${principle.color} group-hover:scale-110 transition-transform mb-4`}>
                  <principle.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SREPrinciples;
