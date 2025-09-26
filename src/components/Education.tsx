import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - BTech, Computer Science",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
      location: "Bhopal, Madhya Pradesh",
      period: "Aug 2019 - May 2023",
      grade: "7.91 CGPA",
      type: "University"
    },
    {
      degree: "Bachelor of Technology - BTech, Computer Software Engineering",
      institution: "Bansal Institute of Science & Technology",
      location: "Raisen Road, Kokta, Anand Nagar, Bhopal - 462021",
      period: "Aug 2019 - May 2023",
      grade: "7.91 (First Division with Honours)",
      type: "College"
    },
    {
      degree: "Science",
      institution: "Seva Sadan Higher Secondary School",
      location: "Burhanpur, Madhya Pradesh",
      period: "Aug 2019",
      grade: "86%",
      type: "School"
    },
    {
      degree: "Advance Computer Application",
      institution: "Global Computer Training Academy",
      location: "Burhanpur, Madhya Pradesh",
      period: "Apr 2019 - Aug 2019",
      grade: "A+",
      type: "Certification"
    }
  ];

  const certifications = [
    {
      title: "Learn Ethical Hacking from Scratch",
      issuer: "zSecurity | Udemy",
      year: "2023",
      description: "Certified in WiFi hacking, creating Trojans, gaining access to computers, finding website vulnerabilities, SQL injection, and social engineering attacks."
    },
    {
      title: "Geoprocessing Using Python",
      issuer: "Indian Institute of Remote Sensing",
      year: "2023",
      description: "Certified in analyzing geo and spatial data, raster and vector data processing, using Numpy and Pandas libraries in Python."
    },
    {
      title: "Data Mining and Business Analytics",
      issuer: "Infosys | Springboard",
      year: "2023",
      description: "Certified in data mining for answering business questions and overview of business analytics using WEKA."
    },
    {
      title: "Advance Computer Application",
      issuer: "Global Computer Training Academy",
      year: "2019",
      description: "Certified in Computer Hardware Specification, Computer Basics, Internet Working, MS-Office."
    }
  ];

  return (
    <section id="education" className="py-20 bg-section-bg relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="text-gradient-primary">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic background and professional certifications that have shaped my expertise 
            in technology and software development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-12 text-center text-gradient-secondary flex items-center justify-center">
              <GraduationCap className="h-8 w-8 mr-3" />
              Academic Background
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
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-12 text-center text-gradient-secondary flex items-center justify-center">
              <Award className="h-8 w-8 mr-3" />
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="relative group glass p-6 rounded-2xl glow-on-hover scroll-animate overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gradient-primary mb-2">
                          {cert.title}
                        </h4>
                        <div className="font-semibold text-foreground mb-1">{cert.issuer}</div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          {cert.year}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-secondary bg-secondary/20 px-3 py-1 rounded-full">
                          {cert.year}
                        </div>
                      </div>
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

export default Education;
