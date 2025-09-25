import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.jpg';

const Hero = () => {
  const handleDownloadResume = () => {
    // Placeholder for resume download
    console.log('Download resume functionality would be implemented here');
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:karmarahul67@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rahul-vishwakarma-101346192', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rahul-vishwakarma', label: 'GitHub' },
  ];

  return (
    <section id="hero" className="min-h-screen animated-bg relative flex items-center justify-center">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Burhanpur, India</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-primary">Rahul</span>
                <br />
                <span className="text-foreground">Vishwakarma</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground font-light">
                <span className="text-gradient-secondary">Full Stack Developer</span>
                <br />
                <span>AI & Data Enthusiast</span>
                <br />
                <span>Builder of Scalable Solutions</span>
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
              <Button 
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-on-hover px-8 py-6 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              >
                Let's Connect
              </Button>
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
            <div className="relative">
              <div className="glass rounded-full p-4 animate-pulse-glow">
                <img
                  src={developerAvatar}
                  alt="Rahul Vishwakarma"
                  className="w-80 h-80 rounded-full object-cover"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 glass p-3 rounded-full animate-bounce-soft">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass p-3 rounded-full animate-bounce-soft" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🐍</span>
              </div>
              <div className="absolute top-1/2 -left-8 glass p-3 rounded-full animate-bounce-soft" style={{ animationDelay: '2s' }}>
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;