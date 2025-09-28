import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Rahul's technical expertise and attention to detail are exceptional. He delivered our project ahead of schedule and exceeded all expectations. His communication throughout the process was outstanding.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Rahul was a game-changer for our company. His full-stack development skills and innovative solutions helped us scale our platform efficiently. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "CreativeStudio",
      content: "Rahul's ability to translate complex requirements into elegant solutions is remarkable. His collaborative approach and technical depth make him an invaluable team member.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "InnovateLab",
      content: "Rahul's expertise in AI/ML and algorithmic trading systems is impressive. He helped us implement sophisticated trading algorithms that significantly improved our performance.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues say about working with me.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-2xl text-center relative overflow-hidden">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
              <Quote className="absolute bottom-4 right-4 h-8 w-8 text-primary/20 rotate-180" />
              
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="border-t border-muted pt-6">
                <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-10 h-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary scale-125'
                        : 'bg-muted hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-10 h-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
