import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Vega - Copy Trading Platform",
      description: "A comprehensive CopyTrading program for stock market training with real-time tracking, detailed analytics, and cloud storage capabilities. Features multi-database integration and advanced graphical analysis tools.",
      technologies: ["Node.js", "MongoDB", "React", "Chart.js", "Cloud Storage"],
      category: "Full-Stack Application",
      github: "https://github.com/Rahul-gif-asus/Vega_CopyTrading_Platform",
      period: "July - Nov 2022",
      features: [
        "Real-time trade tracking",
        "Multi-database storage",
        "Advanced analytics dashboard",
        "Cloud & local data management"
      ]
    },
    {
      title: "Veronika - AI Assistant",
      description: "A sophisticated AI assistant with cutting-edge capabilities including data fetching, API analysis, language translation, voice commands, and computer automation. Features continuous learning and ethical guidelines.",
      technologies: ["Python", "TensorFlow", "NLP", "APIs", "Automation"],
      category: "AI/ML Project",
      period: "May 2021 - Aug 2023",
      features: [
        "Advanced NLP processing",
        "Multi-language support",
        "Voice command integration",
        "Computer automation scripts"
      ]
    },
    {
      title: "F.R.I.D.A.Y - Trading AI",
      description: "Automated share market trading system using Python for swift stock analysis, enhanced prediction algorithms, and streamlined financial report processing to minimize manual research and maximize efficiency.",
      technologies: ["Python", "Machine Learning", "Financial APIs", "Data Analytics"],
      category: "AI/ML Project",
      period: "2022 - 2023",
      features: [
        "Automated trading algorithms",
        "Real-time market analysis",
        "Predictive modeling",
        "Risk management systems"
      ]
    },
    {
      title: "Node Translator",
      description: "Sleek Node.js web application with MySQL database for dynamic translations using Google Translate API. Features smart caching system to reduce API calls and supports 160 languages.",
      technologies: ["Node.js", "MySQL", "Google Translate API", "Express"],
      category: "Web Application",
      period: "Aug 2021",
      features: [
        "160+ language support",
        "Smart caching system",
        "API optimization",
        "Real-time translation"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning full-stack development, AI/ML, 
            and algorithmic trading systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card group scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-primary font-medium mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-gradient-primary transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mt-1">
                    {project.period}
                  </div>
                </div>
                <div className="flex space-x-2">
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-70 hover:opacity-100 glow-on-hover"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-70 hover:opacity-100 glow-on-hover"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm text-gradient-secondary">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gradient-secondary">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-animate">
          <p className="text-muted-foreground mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-on-hover px-8 py-3"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;