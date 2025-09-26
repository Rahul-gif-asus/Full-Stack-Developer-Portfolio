import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'spacex-launch-explorer',
      title: "SpaceX Launch Explorer",
      description: "A comprehensive web application providing detailed information on past and upcoming SpaceX rocket launches with responsive design.",
      technologies: ["React.js", "JavaScript", "REST APIs", "Mantine UI", "Zustand"],
      category: "Web Application",
      github: "https://github.com/Rahul-gif-asus/SpaceX-Launch-Explorer",
      link: "https://github.com/Rahul-gif-asus/SpaceX-Launch-Explorer",
      period: "Sep 2024",
      features: [
        "Real-time SpaceX launch data",
        "Responsive design",
        "REST API integration",
        "Modern UI with Mantine"
      ]
    },
    {
      id: 'crowdsource-platform',
      title: "CrowdSource Platform",
      description: "A dynamic web application designed to foster collaborative problem-solving by allowing users to post challenges, propose solutions, and engage in meaningful discussions.",
      technologies: ["React.js", "Redux", "Node.js", "Express", "MongoDB", "Material-UI", "JWT"],
      category: "Full-Stack Application",
      github: "https://github.com/Rahul-gif-asus/CrowdSourcePlatform",
      period: "Aug 2024",
      features: [
        "User authentication & authorization",
        "Challenge posting system",
        "Solution proposals",
        "Discussion forums"
      ]
    },
    {
      id: 'dividend-roi-calculator',
      title: "Dividend ROI Calculator",
      description: "A robust tool designed to empower investors by providing detailed insights into potential dividend earnings from stocks listed on the National Stock Exchange (NSE) of India.",
      technologies: ["Python", "MongoDB", "Angel One API", "Data Analysis"],
      category: "Trading Application",
      github: "https://github.com/Rahul-gif-asus/DividendROI-Calculator",
      period: "Mar 2023 - Jul 2023",
      features: [
        "NSE stock analysis",
        "Dividend calculations",
        "ROI projections",
        "Data visualization"
      ]
    },
    {
      id: 'vega-copy-trading',
      title: "Vega - Copy Trading Platform",
      description: "A powerful tool designed to revolutionize stock trading by enabling users to replicate trades from top-performing strategies with real-time data analysis.",
      technologies: ["Python", "MongoDB", "REST APIs", "Web Scraping", "Statistical Analysis"],
      category: "Trading Application",
      github: "https://github.com/Rahul-gif-asus/Vega_CopyTrading_Platform",
      period: "Jul 2022 - Nov 2022",
      features: [
        "Copy trading algorithms",
        "Real-time data analysis",
        "Strategy replication",
        "Performance tracking"
      ]
    },
    {
      id: 'smart-translator',
      title: "Smart Translator",
      description: "A cutting-edge language translation tool that delivers real-time, high-precision translations across multiple languages, enabling smooth cross-cultural communication.",
      technologies: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB", "REST APIs", "React.js", "Git"],
      category: "Web Application",
      github: "https://github.com/Rahul-gif-asus/smartTranslator",
      link: "https://github.com/Rahul-gif-asus/smartTranslator",
      period: "Aug 2021 - Sep 2021",
      features: [
        "Multi-language support",
        "Real-time translation",
        "High-precision results",
        "Cross-cultural communication"
      ]
    }
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
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
              className="project-card group scroll-animate cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-secondary font-medium mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-gradient-secondary transition-all duration-300">
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
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-70 hover:opacity-100 glow-on-hover"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.id);
                    }}
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm text-gradient-primary">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gradient-primary">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground hover:bg-secondary/20 hover:text-secondary transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Click anywhere or arrow to view details</span>
                  <ArrowRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
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