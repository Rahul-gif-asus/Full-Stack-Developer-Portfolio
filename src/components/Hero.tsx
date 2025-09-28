import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { bioData } from '@/data/resume-data';
import MagneticButton from './MagneticButton';
import RippleButton from './RippleButton';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rahul_Vishwakarma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:karmarahul67@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rahul-vishwakarma-101346192', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Rahul-gif-asus', label: 'GitHub' },
  ];

  return (
    <section id="hero" className="min-h-screen animated-bg relative flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up relative">
            {/* Animated particles */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full animate-ping"></div>
            <div className="absolute top-10 -right-8 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Ahmedabad, India</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight relative">
                <div className="relative overflow-hidden">
                  <span className="inline-block text-gradient-primary animate-slide-up" style={{ animationDelay: '0.2s' }}>Rahul Vishwakarma</span>
                </div>
                {/* Animated text decoration */}
                <div className="absolute -top-2 -right-4 text-2xl animate-bounce-soft" style={{ animationDelay: '1s' }}>✨</div>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground font-light space-y-2">
                <div className="overflow-hidden">
                  <span className="inline-block text-gradient-secondary animate-slide-up" style={{ animationDelay: '0.6s' }}>Full Stack Developer</span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block animate-slide-up" style={{ animationDelay: '0.8s' }}>AI & Data Enthusiast</span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block animate-slide-up" style={{ animationDelay: '1s' }}>Builder of Scalable Solutions</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Versatile developer with expertise in algorithmic trading, AI/ML, and building 
              robust full-stack applications. Passionate about creating innovative solutions 
              that drive business success.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9131114837</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>karmarahul67@gmail.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagneticButton 
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-on-hover px-8 py-6 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </MagneticButton>
              
              <RippleButton 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              >
                Let's Connect
              </RippleButton>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-full glow-on-hover transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative group">
              {/* Animated background rings - behind the image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/30 to-accent/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              <div className="relative glass rounded-full p-4 animate-pulse-glow">
                <img
                  src={bioData.profileImage}
                  alt="Rahul Vishwakarma"
                  className="w-80 h-80 rounded-full object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 glass p-3 rounded-full animate-bounce-soft hover:scale-110 transition-transform cursor-pointer">
                <span className="text-2xl animate-pulse">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass p-3 rounded-full animate-bounce-soft hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '1s' }}>
                <span className="text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>🐍</span>
              </div>
              <div className="absolute top-1/2 -left-8 glass p-3 rounded-full animate-bounce-soft hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '2s' }}>
                <span className="text-2xl animate-pulse" style={{ animationDelay: '1s' }}>🚀</span>
              </div>
              <div className="absolute top-1/4 -right-8 glass p-2 rounded-full animate-bounce-soft hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '3s' }}>
                <span className="text-xl animate-pulse" style={{ animationDelay: '1.5s' }}>🤖</span>
              </div>
              <div className="absolute bottom-1/4 right-2 glass p-2 rounded-full animate-bounce-soft hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '4s' }}>
                <span className="text-xl animate-pulse" style={{ animationDelay: '2s' }}>📊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;