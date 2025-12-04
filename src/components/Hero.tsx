import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, MapPin, Phone, ArrowDown } from 'lucide-react';
import { bioData } from '@/data/resume-data';
import ParticleText from './ParticleText';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleDownloadResume = () => {
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

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <ParticleText 
          defaultText="DEVELOPER" 
          hoverText="RAHUL" 
          className="opacity-30"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-[1]" />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground"
            >
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="text-sm">Ahmedabad, India</span>
            </motion.div>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                    Rahul
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                    Vishwakarma
                  </span>
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Full Stack Developer
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-muted-foreground text-sm sm:text-base">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                    AI & Data Enthusiast
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                    Scalable Solutions
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Versatile developer with expertise in algorithmic trading, AI/ML, and building 
              robust full-stack applications. Passionate about creating innovative solutions 
              that drive business success.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2 bg-muted/30 px-3 py-2 rounded-full">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                <span>+91 9131114837</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/30 px-3 py-2 rounded-full">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                <span className="hidden sm:inline">karmarahul67@gmail.com</span>
                <span className="sm:hidden">Email Me</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90 transition-all duration-300 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-secondary/50 text-foreground hover:bg-secondary/10 hover:border-secondary px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300"
                data-testid="button-contact"
              >
                Let's Connect
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-muted/30 border border-white/10 backdrop-blur-sm hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 via-accent/30 to-secondary/30 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent animate-spin-slow opacity-20" style={{ animationDuration: '20s' }} />
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <div className="p-1 rounded-full bg-gradient-to-r from-secondary via-accent to-secondary">
                  <img
                    src={bioData.profileImage}
                    alt="Rahul Vishwakarma"
                    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background"
                    data-testid="img-profile"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 p-2 sm:p-3 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 shadow-lg"
              >
                <span className="text-xl sm:text-2xl">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-secondary"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"/>
                  </svg>
                </span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 p-2 sm:p-3 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 shadow-lg"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" className="text-accent"/>
                </svg>
              </motion.div>
              
              <motion.div 
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -left-6 sm:-left-8 p-2 sm:p-3 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 shadow-lg hidden sm:block"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" className="text-secondary"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 rounded-full bg-muted/30 border border-white/10 backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300"
            aria-label="Scroll to about section"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
