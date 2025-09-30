import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      title: "Building Resilient CI/CD Pipelines with Jenkins and Docker",
      excerpt: "Learn how to create fault-tolerant continuous integration and deployment pipelines that scale with your team's needs.",
      category: "DevOps Tutorials",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["Jenkins", "Docker", "CI/CD"],
    },
    {
      title: "Kubernetes Best Practices for Production Environments",
      excerpt: "Essential strategies for running Kubernetes clusters in production, including security, monitoring, and resource management.",
      category: "Cloud Architecture",
      date: "2024-03-10",
      readTime: "12 min read",
      tags: ["Kubernetes", "Security", "Production"],
    },
    {
      title: "Infrastructure as Code: Terraform vs Ansible",
      excerpt: "A comprehensive comparison of two popular IaC tools, their strengths, and when to use each one in your projects.",
      category: "Automation",
      date: "2024-03-05",
      readTime: "10 min read",
      tags: ["Terraform", "Ansible", "IaC"],
    },
    {
      title: "Monitoring Microservices with Prometheus and Grafana",
      excerpt: "Set up comprehensive monitoring for your microservices architecture using open-source tools.",
      category: "Best Practices",
      date: "2024-02-28",
      readTime: "15 min read",
      tags: ["Prometheus", "Grafana", "Monitoring"],
    },
  ];

  const categories = ["All", "DevOps Tutorials", "Cloud Architecture", "Automation", "Best Practices"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Latest Insights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts on DevOps, cloud architecture, and automation best practices
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-card border-border focus:border-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border text-foreground hover:border-primary hover:text-primary"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredPosts.map((post, index) => (
            <Card
              key={post.title}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <span className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full font-mono">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-background border border-border rounded text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10 group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
