import { useState, useEffect, useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

const CircularThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rippleStyle, setRippleStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.toggle('light', newTheme === 'light');
    root.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleTheme = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) return;
    
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    const maxDimension = Math.max(window.innerWidth, window.innerHeight);
    const rippleSize = maxDimension * 2.5;
    
    setRippleStyle({
      position: 'fixed',
      left: x - rippleSize / 2,
      top: y - rippleSize / 2,
      width: rippleSize,
      height: rippleSize,
      borderRadius: '50%',
      backgroundColor: theme === 'dark' ? '#fafafa' : '#0a0a0a',
      transform: 'scale(0)',
      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 9999,
      pointerEvents: 'none' as const,
    });
    
    setIsAnimating(true);
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setRippleStyle(prev => ({
          ...prev,
          transform: 'scale(1)',
        }));
      });
    });
    
    setTimeout(() => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    }, 400);
    
    setTimeout(() => {
      setIsAnimating(false);
      setRippleStyle({});
    }, 850);
  }, [theme, isAnimating]);

  if (!mounted) {
    return (
      <button
        className="relative w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center"
        disabled
      >
        <div className="w-5 h-5 rounded-full bg-foreground/20 animate-pulse" />
      </button>
    );
  }

  return (
    <>
      {isAnimating && <div style={rippleStyle} />}
      
      <button
        onClick={toggleTheme}
        disabled={isAnimating}
        className={`
          relative w-12 h-12 rounded-full
          bg-gradient-to-br from-secondary/20 to-accent/20
          backdrop-blur-md border border-white/10
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 hover:shadow-lg hover:shadow-secondary/20
          active:scale-95
          disabled:cursor-not-allowed
          overflow-hidden
          group
        `}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        data-testid="button-theme-toggle"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative w-6 h-6">
          <Sun 
            className={`
              absolute inset-0 w-6 h-6 text-yellow-400
              transition-all duration-500 ease-out
              ${theme === 'light' 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 rotate-90 scale-50'
              }
            `}
          />
          <Moon 
            className={`
              absolute inset-0 w-6 h-6 text-blue-300
              transition-all duration-500 ease-out
              ${theme === 'dark' 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 -rotate-90 scale-50'
              }
            `}
          />
        </div>
        
        <div 
          className={`
            absolute inset-0 rounded-full
            transition-all duration-300
            ${theme === 'dark' 
              ? 'shadow-[0_0_20px_rgba(147,51,234,0.3)]' 
              : 'shadow-[0_0_20px_rgba(251,191,36,0.3)]'
            }
          `}
        />
      </button>
    </>
  );
};

export default CircularThemeToggle;
