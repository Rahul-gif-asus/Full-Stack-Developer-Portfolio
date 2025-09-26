import { Users, Medal, HandHeart } from 'lucide-react';

const Involvement = () => {
  const involvement = [
    {
      title: "Co-Founder and Head",
      organization: "Express Yourself Community",
      period: "May 2020 - February 2022",
      description: "Founded an NGO-dedicated community that connects people across diverse communities worldwide, focusing on social challenges and mental health.",
      icon: Users
    },
    {
      title: "Bronze Medallist",
      organization: "Commutiny - The Youth Collective",
      period: "Q-ki National Championship | June - August 2021",
      description: "Received bronze medal in national competition focused on youth development and leadership skills.",
      icon: Medal
    },
    {
      title: "Database Management Volunteer",
      organization: "Commutiny - The Youth Collective",
      period: "November 2021 - February 2022",
      description: "Led volunteer team managing databases for 30 NGOs while contributing to social causes and community development.",
      icon: HandHeart
    }
  ];

  return (
    <section id="involvement" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="text-gradient-secondary">Involvement</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My activities and achievements beyond professional work, showcasing leadership, 
            community involvement, and recognition in various domains.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {involvement.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="relative group glass p-8 rounded-2xl glow-on-hover scroll-animate overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="relative group/icon">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-lg opacity-0 group-hover/icon:opacity-100 transition-all duration-500"></div>
                        <div className="relative p-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full border border-secondary/30">
                          <Icon className="h-8 w-8 text-secondary group-hover/icon:text-accent transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gradient-primary mb-3 group-hover:text-gradient-secondary transition-all duration-500">
                      {item.title}
                    </h3>
                    
                    <div className="text-lg font-semibold text-foreground mb-2">
                      {item.organization}
                    </div>
                    
                    <div className="text-sm text-muted-foreground mb-4 font-medium">
                      {item.period}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Highlights */}
        <div className="mt-20 text-center scroll-animate">
          <h3 className="text-2xl font-semibold mb-8 text-gradient-primary">
            Key Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient-secondary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">NGOs Database Management</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Community Leadership</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient-accent mb-2">1</div>
              <div className="text-sm text-muted-foreground">National Championship Medal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Involvement;
