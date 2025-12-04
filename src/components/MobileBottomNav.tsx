import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  Mail,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  id: string;
}

const MobileBottomNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  const mainNavItems: NavItem[] = [
    { icon: Home, label: 'Home', id: 'hero' },
    { icon: User, label: 'About', id: 'about' },
    { icon: Briefcase, label: 'Projects', id: 'projects' },
    { icon: Code2, label: 'Skills', id: 'skills' },
    { icon: Mail, label: 'Contact', id: 'contact' },
  ];

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
      setIsVisible(false);
      setIsExpanded(false);
    } else {
      setIsVisible(true);
    }
    
    lastScrollYRef.current = currentScrollY;

    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'blog', 'testimonials', 'analytics', 'contact'];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="md:hidden fixed bottom-4 left-4 right-4 z-50"
        >
          <div className="relative">
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-full mb-3 left-0 right-0"
                >
                  <div className="bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                    <div className="grid grid-cols-3 gap-3">
                      {['experience', 'blog', 'testimonials', 'analytics', 'education', 'involvement'].map((item) => (
                        <button
                          key={item}
                          onClick={() => scrollToSection(item)}
                          className={`
                            p-3 rounded-xl text-center transition-all duration-300
                            ${activeSection === item 
                              ? 'bg-gradient-to-br from-secondary/30 to-accent/30 text-foreground' 
                              : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                            }
                          `}
                          data-testid={`button-nav-${item}`}
                        >
                          <span className="text-xs font-medium capitalize">{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-around p-2">
                {mainNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        relative flex flex-col items-center justify-center
                        p-3 rounded-xl transition-all duration-300
                        min-w-[56px]
                        ${isActive 
                          ? 'text-foreground' 
                          : 'text-muted-foreground hover:text-foreground'
                        }
                      `}
                      whileTap={{ scale: 0.9 }}
                      data-testid={`button-mobile-nav-${item.id}`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-xl"
                          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        />
                      )}
                      <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-secondary' : ''}`} />
                      <span className={`text-[10px] mt-1 relative z-10 font-medium ${isActive ? 'text-secondary' : ''}`}>
                        {item.label}
                      </span>
                    </motion.button>
                  );
                })}
                
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`
                    relative flex flex-col items-center justify-center
                    p-3 rounded-xl transition-all duration-300
                    min-w-[56px] text-muted-foreground hover:text-foreground
                  `}
                  whileTap={{ scale: 0.9 }}
                  data-testid="button-expand-nav"
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isExpanded ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </motion.div>
                  <span className="text-[10px] mt-1 font-medium">
                    {isExpanded ? 'Close' : 'More'}
                  </span>
                </motion.button>
              </div>
              
              <div className="h-1 w-full bg-gradient-to-r from-secondary via-accent to-secondary opacity-50" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileBottomNav;
