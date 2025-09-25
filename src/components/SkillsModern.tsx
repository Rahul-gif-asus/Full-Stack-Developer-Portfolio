import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Brain,
  GitBranch,
  Server,
  Layers,
  Zap,
  Shield,
  BarChart3,
  Cpu
} from 'lucide-react';

const SkillsModern = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      skills: [
        { name: "React.js", icon: Code2, level: "Expert" },
        { name: "Next.js", icon: Layers, level: "Advanced" },
        { name: "TypeScript", icon: Code2, level: "Expert" },
        { name: "Vue.js", icon: Code2, level: "Advanced" },
        { name: "HTML/CSS", icon: Globe, level: "Expert" },
        { name: "JavaScript", icon: Code2, level: "Expert" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      skills: [
        { name: "Node.js", icon: Server, level: "Expert" },
        { name: "Python", icon: Code2, level: "Expert" },
        { name: "Django", icon: Layers, level: "Advanced" },
        { name: "Flask", icon: Zap, level: "Advanced" },
        { name: "PHP", icon: Code2, level: "Intermediate" },
        { name: "C++", icon: Cpu, level: "Advanced" }
      ]
    },
    {
      title: "Database & DevOps",
      icon: Database,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      skills: [
        { name: "MongoDB", icon: Database, level: "Expert" },
        { name: "MySQL", icon: Database, level: "Advanced" },
        { name: "Redis", icon: Zap, level: "Advanced" },
        { name: "Git", icon: GitBranch, level: "Expert" },
        { name: "Docker", icon: Layers, level: "Intermediate" },
        { name: "SQLite", icon: Database, level: "Advanced" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      skills: [
        { name: "TensorFlow", icon: Brain, level: "Advanced" },
        { name: "Scikit-learn", icon: BarChart3, level: "Expert" },
        { name: "Pandas", icon: BarChart3, level: "Expert" },
        { name: "NumPy", icon: BarChart3, level: "Expert" },
        { name: "Data Analysis", icon: BarChart3, level: "Advanced" },
        { name: "Machine Learning", icon: Brain, level: "Advanced" }
      ]
    }
  ];

  const specializations = [
    { name: "Algorithmic Trading", icon: BarChart3, color: "text-green-400" },
    { name: "Cybersecurity", icon: Shield, color: "text-red-400" },
    { name: "Team Leadership", icon: Code2, color: "text-blue-400" },
    { name: "Full-Stack Development", icon: Layers, color: "text-purple-400" },
    { name: "API Development", icon: Server, color: "text-orange-400" },
    { name: "Cloud Computing", icon: Globe, color: "text-cyan-400" },
  ];

  const certifications = [
    "Advanced Computer Application - Global Computer Training Academy",
    "Business Analytics using WEKA - Infosys Springboard",
    "Geoprocessing Using Python - Indian Institute of Remote Sensing",
    "Data Mining and Decision Making - Infosys Springboard",
    "Ethical Hacking from Scratch - zSecurity/Udemy"
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Advanced': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 bg-section-bg relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient-secondary">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning modern technologies, frameworks, 
            and methodologies for building next-generation applications.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="glass p-8 rounded-2xl scroll-animate glow-on-hover"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl ${category.bgColor}`}>
                    <CategoryIcon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gradient-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-200 group"
                      >
                        <div className="flex items-center space-x-2">
                          <SkillIcon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                          <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Specializations */}
        <div className="mb-16 scroll-animate">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gradient-secondary">
            Core Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {specializations.map((spec, index) => {
              const SpecIcon = spec.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 glass px-4 py-3 rounded-full glow-on-hover"
                >
                  <SpecIcon className={`h-4 w-4 ${spec.color}`} />
                  <span className="text-sm font-medium">{spec.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Languages */}
          <div className="glass p-8 rounded-2xl scroll-animate glow-on-hover">
            <h3 className="text-xl font-semibold text-gradient-primary mb-6 flex items-center">
              <Globe className="h-5 w-5 mr-3 text-cyan-400" />
              Languages
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="font-medium">Hindi</span>
                <span className="text-sm px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
                  Native
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="font-medium">English</span>
                <span className="text-sm px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">
                  Fluent
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="glass p-8 rounded-2xl scroll-animate glow-on-hover">
            <h3 className="text-xl font-semibold text-gradient-primary mb-6 flex items-center">
              <Shield className="h-5 w-5 mr-3 text-orange-400" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3 p-2 hover:bg-muted/30 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsModern;