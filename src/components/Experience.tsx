const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Script Assist",
      location: "London, United Kingdom",
      period: "Feb 2024 - Present",
      type: "Remote",
      description: "Developed a scalable State Management System using NodeJS, TypeScript, PostgreSQL, and React.js.",
      achievements: [
        "Developed a scalable State Management System using NodeJS, TypeScript, PostgreSQL, and React.js",
        "Implemented secure authentication and role-based access control for different user types",
        "Designed responsive UI components with Redux for efficient state management",
        "Created RESTful APIs for seamless communication between frontend and backend services"
      ],
      technologies: ["NodeJS", "TypeScript", "PostgreSQL", "React.js", "Redux"]
    },
    {
      title: "Full Stack Developer",
      company: "Student Diwan",
      location: "Qatar",
      period: "May 2023 - Feb 2024",
      type: "Remote",
      description: "Built a comprehensive school management system catering to multiple institutions.",
      achievements: [
        "Built a comprehensive school management system catering to multiple institutions",
        "Implemented MongoDB for database management and React.js for responsive frontend interfaces",
        "Developed REST APIs for secure data exchange between various system components",
        "Created an intuitive admin dashboard for school administrators to manage operations efficiently"
      ],
      technologies: ["MongoDB", "React.js", "REST APIs", "Express", "Node.js"]
    },
    {
      title: "Coordinator of Volunteers",
      company: "Had-Anhad NGO",
      location: "Indore, Madhya Pradesh, India",
      period: "Mar 2023 - Apr 2023",
      type: "On-site",
      description: "Led a team of volunteers in coordinating community development initiatives.",
      achievements: [
        "Led a team of volunteers in coordinating community development initiatives",
        "Managed database systems for tracking volunteer participation and project outcomes",
        "Organized training sessions for new volunteers to ensure effective community engagement",
        "Successfully coordinated multiple concurrent projects across diverse communities"
      ],
      technologies: ["Leadership", "Database Management", "Community Engagement", "Project Coordination"]
    },
    {
      title: "Space Launch Vehicle Intern",
      company: "Omspace Rocket & Exploration Private Limited",
      location: "Ahmedabad, Gujarat",
      period: "Dec 2022 - Jan 2023",
      type: "On-site",
      description: "Contributed to statistical data analysis for rocket engine performance optimization.",
      achievements: [
        "Contributed to statistical data analysis for rocket engine performance optimization",
        "Participated in design and analysis of launch vehicle components using CAD software",
        "Conducted programming tasks for systems monitoring and performance tracking",
        "Collaborated in trajectory analysis and mission planning for rocket launches"
      ],
      technologies: ["Python", "Statistical Analysis", "CAD Software", "Data Analysis"]
    },
    {
      title: "Cohort Tech Lead",
      company: "Commutiny - The Youth Collective",
      location: "Delhi, India",
      period: "Dec 2021 - Feb 2022",
      type: "Remote",
      description: "Led database administration for a network of 30+ NGOs, streamlining data management processes.",
      achievements: [
        "Led database administration for a network of 30+ NGOs, streamlining data management processes",
        "Provided technical support for statistical data analysis related to social impact projects",
        "Coordinated team projects and implemented systems for tracking program effectiveness",
        "Applied data science techniques to generate insights for community development initiatives"
      ],
      technologies: ["Database Administration", "Data Science", "Team Leadership", "Statistical Analysis"]
    },
    {
      title: "Co-Founder",
      company: "Express Yourself Community",
      location: "Indore, Madhya Pradesh, India",
      period: "May 2020 - Feb 2022",
      type: "Leadership",
      description: "Co-founded and led a community dedicated to fostering personal growth and self-expression.",
      achievements: [
        "Co-founded and led a community dedicated to fostering personal growth and self-expression",
        "Built an online platform connecting diverse members across multiple regions",
        "Developed and implemented community engagement strategies that increased active participation",
        "Created and managed digital content to strengthen community bonds during the pandemic"
      ],
      technologies: ["Community Building", "Digital Content", "Strategic Planning", "Leadership"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology - BTech, Computer Science",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
      location: "Bhopal, Madhya Pradesh",
      period: "Aug 2019 - May 2023",
      grade: "7.91 CGPA",
      highlights: [
        "Specialized in Computer Science and Engineering",
        "Completed advanced coursework in Data Structures & Algorithms",
        "Participated in technical projects and competitions"
      ]
    },
    {
      degree: "Bachelor of Technology - BTech, Computer Software Engineering",
      institution: "Bansal Institute of Science & Technology",
      location: "Raisen Road, Kokta, Anand Nagar, Bhopal - 462021",
      period: "Aug 2019 - May 2023",
      grade: "7.91 (First Division with Honours)",
      highlights: [
        "Computer Software Engineering specialization",
        "First Division with Honours",
        "Comprehensive software development curriculum"
      ]
    },
    {
      degree: "Science",
      institution: "Seva Sadan Higher Secondary School",
      location: "Burhanpur, Madhya Pradesh",
      period: "Aug 2019",
      grade: "86%",
      highlights: [
        "Foundation in Mathematics and Science",
        "Active participation in technical activities"
      ]
    },
    {
      degree: "Advance Computer Application",
      institution: "Global Computer Training Academy",
      location: "Burhanpur, Madhya Pradesh",
      period: "Apr 2019 - Aug 2019",
      grade: "A+",
      highlights: [
        "Computer Hardware Specification",
        "Computer Basics and Internet Working",
        "MS-Office proficiency"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient-primary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A progressive career path spanning full-stack development, data analysis, 
            and leadership across diverse industries and technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Experience Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-12 text-center text-gradient-secondary">
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
              
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start mb-12 scroll-animate ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="relative group glass p-6 rounded-2xl glow-on-hover overflow-hidden">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gradient-primary mb-2 group-hover:text-gradient-secondary transition-all duration-500">
                              {exp.title}
                            </h4>
                            <div className="text-lg font-semibold text-foreground mb-1">{exp.company}</div>
                            <div className="text-sm text-muted-foreground">
                              {exp.location} • {exp.type}
                            </div>
                          </div>
                          <div className="relative group/badge ml-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-md opacity-0 group-hover/badge:opacity-100 transition-all duration-500"></div>
                            <div className="relative text-sm font-bold text-white bg-gradient-to-r from-secondary via-accent to-secondary px-6 py-2.5 rounded-full shadow-xl transform group-hover/badge:scale-110 transition-all duration-300 animate-gradient bg-300%">
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="font-semibold mb-2 text-sm text-gradient-secondary">
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2 text-sm text-gradient-secondary">
                          Technologies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="relative group/tech px-3 py-1.5 bg-gradient-to-r from-muted to-muted/80 hover:from-secondary/20 hover:to-accent/20 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground border border-transparent hover:border-secondary/30 transition-all duration-300 transform hover:scale-105 cursor-default"
                            >
                              <span className="relative z-10">{tech}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                            </span>
                          ))}
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-12 text-center text-gradient-secondary">
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative group glass p-6 rounded-2xl glow-on-hover scroll-animate overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                  
                  <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gradient-primary mb-2">
                        {edu.degree}
                      </h4>
                      <div className="font-semibold text-foreground mb-1">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground">
                        {edu.location}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative text-sm font-bold text-white bg-gradient-to-r from-secondary via-accent to-secondary px-6 py-2.5 rounded-full shadow-xl transform group-hover:scale-110 transition-all duration-300 animate-gradient bg-300%">
                          {edu.period}
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-sm text-gradient-secondary">
                      Highlights
                    </h5>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                     </ul>
                   </div>
                 </div>
               </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;