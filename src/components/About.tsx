import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const highlights = [
    {
      title: "Full-Stack Expertise",
      description: "Proficient in MERN stack, Python, and modern web technologies with a focus on scalable solutions.",
      icon: "🔧",
      count: 15,
      suffix: "+",
      label: "Projects"
    },
    {
      title: "AI & Data Science",
      description: "Experienced in machine learning, data analysis, and building intelligent systems for real-world applications.",
      icon: "🤖",
      count: 8,
      suffix: "+",
      label: "ML Models"
    },
    {
      title: "Algorithmic Trading",
      description: "Specialized in developing automated trading systems and financial data analysis tools.",
      icon: "📈",
      count: 5,
      suffix: "+",
      label: "Trading Systems"
    },
    {
      title: "Leadership",
      description: "Proven track record in team management and community building with strong collaborative skills.",
      icon: "👥",
      count: 3,
      suffix: "+",
      label: "Years Leading"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">About</span> Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-animate space-y-6">
              <h3 className="text-2xl font-semibold text-gradient-secondary">
                Passionate Developer & Problem Solver
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a versatile full-stack developer, I bring a unique blend of technical expertise 
                  and creative problem-solving to every project. My journey spans across diverse 
                  technologies, from building robust web applications to developing sophisticated 
                  AI-powered solutions.
                </p>
                
                <p>
                  With hands-on experience in algorithmic trading, data analysis, and cybersecurity, 
                  I specialize in creating systems that not only function flawlessly but also drive 
                  meaningful business outcomes. My approach combines cutting-edge technology with 
                  practical business solutions.
                </p>
                
                <p>
                  Beyond coding, I'm passionate about leadership and community building, having 
                  successfully managed teams and fostered collaborative environments that encourage 
                  innovation and growth.
                </p>
              </div>
            </div>

            <div className="scroll-animate">
              <div className="glass p-8 rounded-2xl">
                <h4 className="text-xl font-semibold mb-6 text-center">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gradient-primary">
                      <AnimatedCounter end={3} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-secondary">
                      <AnimatedCounter end={15} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-primary">
                      <AnimatedCounter end={10} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-secondary">
                      <AnimatedCounter end={5} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="project-card scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{highlight.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-3 text-gradient-primary">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {highlight.description}
                    </p>
                    <div className="text-2xl font-bold text-gradient-secondary">
                      <AnimatedCounter end={highlight.count} suffix={highlight.suffix} />
                      <span className="text-sm text-muted-foreground ml-2">{highlight.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;