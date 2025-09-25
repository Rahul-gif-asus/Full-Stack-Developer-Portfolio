import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Target, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = {
    'vega-copy-trading': {
      title: "Vega - Copy Trading Platform",
      subtitle: "Advanced Stock Market Training & Analytics Platform",
      description: "A comprehensive CopyTrading program designed for stock market training with real-time tracking capabilities, detailed analytics, and robust data management systems.",
      longDescription: `Vega represents a sophisticated approach to copy trading education and practice. The platform provides users with a comprehensive environment to learn, practice, and analyze trading strategies without real financial risk.

The system incorporates advanced real-time tracking mechanisms that monitor and record trading activities across multiple databases simultaneously. This multi-database approach ensures data redundancy, improved performance, and comprehensive analytics capabilities.

The platform's analytical engine processes vast amounts of trading data to provide users with detailed insights into their trading patterns, success rates, and areas for improvement. The graphical analysis tools offer intuitive visualizations of trading performance, market trends, and portfolio evolution.`,
      technologies: ["Node.js", "MongoDB", "React", "Chart.js", "WebSocket", "Express.js", "Redis", "Docker"],
      category: "Full-Stack Application",
      github: "https://github.com/Rahul-gif-asus/Vega_CopyTrading_Platform",
      demo: "#",
      period: "July - November 2022",
      duration: "5 months",
      team: "Solo Developer",
      status: "Completed",
      features: [
        {
          title: "Real-time Trade Tracking",
          description: "Advanced WebSocket implementation for real-time monitoring and recording of trading activities with sub-second latency.",
          icon: Zap
        },
        {
          title: "Multi-Database Architecture",
          description: "Sophisticated data management system utilizing MongoDB for primary storage and Redis for caching, ensuring data integrity and performance.",
          icon: Target
        },
        {
          title: "Advanced Analytics Dashboard",
          description: "Comprehensive analytics engine with interactive charts, performance metrics, and detailed reporting capabilities using Chart.js.",
          icon: Target
        },
        {
          title: "Cloud & Local Data Management",
          description: "Hybrid data storage solution supporting both cloud-based and local data management with automatic synchronization.",
          icon: Target
        }
      ],
      challenges: [
        "Implementing real-time data synchronization across multiple databases",
        "Designing a scalable architecture to handle high-frequency trading data",
        "Creating intuitive data visualizations for complex trading analytics",
        "Ensuring data consistency and integrity across cloud and local storage"
      ],
      outcomes: [
        "Achieved sub-second real-time data processing capabilities",
        "Successfully handled concurrent tracking of 1000+ simulated trades",
        "Implemented comprehensive analytics reducing analysis time by 75%",
        "Created a robust educational platform for trading strategy development"
      ],
      images: [
        "/api/placeholder/800/400",
        "/api/placeholder/800/400",
        "/api/placeholder/800/400"
      ]
    },
    'veronika-ai': {
      title: "Veronika - AI Assistant",
      subtitle: "Advanced AI-Powered Personal Assistant",
      description: "A sophisticated AI assistant with cutting-edge capabilities including natural language processing, voice commands, computer automation, and ethical AI implementation.",
      longDescription: `Veronika represents the pinnacle of personal AI assistant technology, combining advanced machine learning algorithms with practical automation capabilities. The system is designed to continuously learn and adapt to user preferences while maintaining strict ethical guidelines.

The AI utilizes state-of-the-art natural language processing to understand context, intent, and nuance in human communication. Its multilingual capabilities extend beyond simple translation to include cultural context understanding and appropriate response generation.

The computer automation features allow Veronika to perform complex tasks ranging from file management to application control, significantly enhancing productivity. The voice command system provides hands-free operation with advanced speech recognition and synthesis capabilities.`,
      technologies: ["Python", "TensorFlow", "NLP", "Speech Recognition", "APIs", "Automation", "Machine Learning", "Neural Networks"],
      category: "AI/ML Project",
      github: "#",
      demo: "#",
      period: "May 2021 - August 2023",
      duration: "2 years 4 months",
      team: "Solo Developer",
      status: "Ongoing Development",
      features: [
        {
          title: "Advanced Natural Language Processing",
          description: "State-of-the-art NLP engine capable of understanding context, sentiment, and intent with 95%+ accuracy.",
          icon: Zap
        },
        {
          title: "Multi-language Support",
          description: "Comprehensive language support with real-time translation capabilities and cultural context awareness.",
          icon: Target
        },
        {
          title: "Voice Command Integration",
          description: "Advanced speech recognition and synthesis system with noise cancellation and accent adaptation.",
          icon: Target
        },
        {
          title: "Computer Automation Scripts",
          description: "Sophisticated automation engine capable of performing complex computer tasks and workflow optimization.",
          icon: Target
        }
      ],
      challenges: [
        "Implementing ethical AI guidelines while maintaining functionality",
        "Achieving high accuracy in diverse linguistic contexts",
        "Balancing automation capabilities with security considerations",
        "Creating a learning system that adapts without compromising privacy"
      ],
      outcomes: [
        "Achieved 95% accuracy in natural language understanding",
        "Implemented support for 40+ languages with cultural context",
        "Reduced routine task completion time by 80%",
        "Established ethical AI framework adopted by other projects"
      ],
      images: [
        "/api/placeholder/800/400",
        "/api/placeholder/800/400",
        "/api/placeholder/800/400"
      ]
    },
    'friday-trading-ai': {
      title: "F.R.I.D.A.Y - Trading AI",
      subtitle: "Automated Stock Market Trading System",
      description: "An intelligent automated trading system utilizing machine learning algorithms for market analysis, stock prediction, and automated trading execution with advanced risk management.",
      longDescription: `F.R.I.D.A.Y represents a breakthrough in automated trading technology, combining sophisticated machine learning algorithms with real-time market analysis capabilities. The system processes thousands of data points simultaneously to make informed trading decisions.

The platform's predictive algorithms analyze historical data, market trends, technical indicators, and news sentiment to forecast stock movements with remarkable accuracy. The risk management system ensures that all trades comply with predefined parameters and safety measures.

The automated execution engine operates with minimal latency, capable of processing market changes and executing trades within milliseconds. The comprehensive reporting system provides detailed analysis of trading performance, market conditions, and optimization opportunities.`,
      technologies: ["Python", "Machine Learning", "Financial APIs", "Data Analytics", "Pandas", "NumPy", "Scikit-learn", "Real-time Processing"],
      category: "AI/ML Project",
      github: "#",
      demo: "#",
      period: "2022 - 2023",
      duration: "1 year",
      team: "Solo Developer",
      status: "Completed",
      features: [
        {
          title: "Automated Trading Algorithms",
          description: "Advanced machine learning algorithms for automated trade execution based on real-time market analysis and predictive modeling.",
          icon: Zap
        },
        {
          title: "Real-time Market Analysis",
          description: "Comprehensive market data processing system analyzing thousands of stocks simultaneously with sub-second response times.",
          icon: Target
        },
        {
          title: "Predictive Modeling Engine",
          description: "Sophisticated prediction algorithms utilizing historical data, technical indicators, and sentiment analysis for market forecasting.",
          icon: Target
        },
        {
          title: "Risk Management Systems",
          description: "Advanced risk assessment and management protocols ensuring safe trading operations with customizable safety parameters.",
          icon: Target
        }
      ],
      challenges: [
        "Processing high-frequency market data with minimal latency",
        "Developing accurate predictive models in volatile markets",
        "Implementing comprehensive risk management protocols",
        "Ensuring system reliability during market fluctuations"
      ],
      outcomes: [
        "Achieved 78% accuracy in stock movement predictions",
        "Processed 10,000+ stocks simultaneously with <100ms latency",
        "Reduced manual analysis time by 95%",
        "Implemented zero-downtime trading operations"
      ],
      images: [
        "/api/placeholder/800/400",
        "/api/placeholder/800/400",
        "/api/placeholder/800/400"
      ]
    },
    'node-translator': {
      title: "Node Translator",
      subtitle: "Intelligent Multi-language Translation Platform",
      description: "A sleek and efficient Node.js web application featuring intelligent caching, multi-language support, and optimized API usage for seamless translation experiences.",
      longDescription: `Node Translator represents an efficient approach to web-based translation services, combining the power of Google Translate API with intelligent caching mechanisms to create a fast, reliable, and cost-effective translation platform.

The system's intelligent caching layer significantly reduces API calls by storing frequently requested translations in a MySQL database. This approach not only improves response times but also reduces operational costs while maintaining translation accuracy.

The platform supports 160+ languages with automatic language detection and smart routing capabilities. The user interface is designed for simplicity and efficiency, allowing users to quickly translate text, documents, or even real-time conversations.`,
      technologies: ["Node.js", "MySQL", "Google Translate API", "Express.js", "JavaScript", "HTML/CSS", "REST API"],
      category: "Web Application",
      github: "#",
      demo: "#",
      period: "August 2021",
      duration: "1 month",
      team: "Solo Developer",
      status: "Completed",
      features: [
        {
          title: "160+ Language Support",
          description: "Comprehensive language support covering major world languages with automatic detection and intelligent routing capabilities.",
          icon: Zap
        },
        {
          title: "Smart Caching System",
          description: "Intelligent MySQL-based caching mechanism that reduces API calls by 70% while maintaining translation accuracy and speed.",
          icon: Target
        },
        {
          title: "API Optimization Engine",
          description: "Advanced optimization system that minimizes Google Translate API usage through smart caching and batch processing techniques.",
          icon: Target
        },
        {
          title: "Real-time Translation",
          description: "Lightning-fast translation processing with real-time updates and seamless user experience across all supported languages.",
          icon: Target
        }
      ],
      challenges: [
        "Optimizing API usage to reduce costs while maintaining performance",
        "Implementing efficient caching strategies for 160+ languages",
        "Ensuring translation accuracy across diverse language pairs",
        "Creating a responsive and intuitive user interface"
      ],
      outcomes: [
        "Achieved 70% reduction in API calls through intelligent caching",
        "Supported 160+ languages with 99.9% uptime",
        "Delivered sub-second translation responses for cached content",
        "Created a scalable architecture supporting 1000+ concurrent users"
      ],
      images: [
        "/api/placeholder/800/400",
        "/api/placeholder/800/400",
        "/api/placeholder/800/400"
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-bg relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Button
                onClick={() => navigate('/')}
                variant="ghost"
                className="mb-8 hover:bg-muted"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>

              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                  {project.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gradient-secondary mb-6">
                  {project.subtitle}
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {project.github !== '#' && (
                    <Button
                      onClick={() => window.open(project.github, '_blank')}
                      className="bg-muted hover:bg-muted/80 text-foreground"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  )}
                  {project.demo !== '#' && (
                    <Button
                      onClick={() => window.open(project.demo, '_blank')}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Meta */}
              <div className="grid md:grid-cols-4 gap-6 glass p-6 rounded-2xl">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="font-semibold text-sm text-secondary">Duration</div>
                  <div className="text-muted-foreground text-sm">{project.duration}</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="font-semibold text-sm text-secondary">Team</div>
                  <div className="text-muted-foreground text-sm">{project.team}</div>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="font-semibold text-sm text-secondary">Status</div>
                  <div className="text-muted-foreground text-sm">{project.status}</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="font-semibold text-sm text-secondary">Period</div>
                  <div className="text-muted-foreground text-sm">{project.period}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Overview */}
                  <div className="glass p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-gradient-primary">Project Overview</h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {project.longDescription}
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="glass p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-gradient-primary">Key Features</h2>
                    <div className="space-y-6">
                      {project.features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                            <Icon className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="font-semibold mb-2 text-gradient-secondary">{feature.title}</h3>
                              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass p-6 rounded-2xl">
                      <h3 className="text-xl font-bold mb-4 text-gradient-primary">Challenges</h3>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm leading-relaxed">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass p-6 rounded-2xl">
                      <h3 className="text-xl font-bold mb-4 text-gradient-primary">Outcomes</h3>
                      <ul className="space-y-3">
                        {project.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Technologies */}
                  <div className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-gradient-secondary">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-muted/50 rounded-full text-xs font-medium text-muted-foreground hover:bg-secondary/20 hover:text-secondary transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-gradient-secondary">Project Links</h3>
                    <div className="space-y-3">
                      {project.github !== '#' && (
                        <Button
                          onClick={() => window.open(project.github, '_blank')}
                          className="w-full bg-muted hover:bg-muted/80 text-foreground justify-start"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Button>
                      )}
                      {project.demo !== '#' && (
                        <Button
                          onClick={() => window.open(project.demo, '_blank')}
                          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground justify-start"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-gradient-secondary">Interested?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Want to know more about this project or discuss a similar solution?
                    </p>
                    <Button
                      onClick={() => navigate('/#contact')}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;