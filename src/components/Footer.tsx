import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:karmarahul67@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rahul-vishwakarma-101346192', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rahul-vishwakarma', label: 'GitHub' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hero-bg border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo & Back to Top */}
          <div 
            className="text-3xl font-bold text-gradient-primary cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={scrollToTop}
          >
            RV
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              { label: 'About', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Skills', id: 'skills' },
              { label: 'Experience', id: 'experience' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-6">
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

          {/* Quote */}
          <div className="text-center max-w-2xl">
            <p className="text-muted-foreground italic">
              "Building the future, one line of code at a time."
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <span>© {currentYear} Rahul Vishwakarma. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="mt-2 md:mt-0">
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;