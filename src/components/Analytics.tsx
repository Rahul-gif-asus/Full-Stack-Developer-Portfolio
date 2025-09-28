import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, MousePointer, Clock, Globe, TrendingUp, Users } from 'lucide-react';

interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  averageTime: string;
  topCountries: Array<{ country: string; visitors: number }>;
  topPages: Array<{ page: string; views: number }>;
  deviceTypes: Array<{ type: string; percentage: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
}

import AnimatedCounter from './AnimatedCounter';

const Analytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalViews: 0,
    uniqueVisitors: 0,
    averageTime: '0:00',
    topCountries: [],
    topPages: [],
    deviceTypes: [],
    trafficSources: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchAnalytics = async () => {
      setIsLoading(true);
      
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - in real implementation, this would come from your analytics service
      setAnalytics({
        totalViews: 15420,
        uniqueVisitors: 8930,
        averageTime: '2:34',
        topCountries: [
          { country: 'United States', visitors: 3240 },
          { country: 'India', visitors: 2890 },
          { country: 'United Kingdom', visitors: 1560 },
          { country: 'Canada', visitors: 980 },
          { country: 'Germany', visitors: 760 }
        ],
        topPages: [
          { page: '/', views: 5420 },
          { page: '/project/spacex-launch-explorer', views: 1890 },
          { page: '/project/crowdsource-platform', views: 1560 },
          { page: '/contact', views: 980 },
          { page: '/project/dividend-roi-calculator', views: 760 }
        ],
        deviceTypes: [
          { type: 'Desktop', percentage: 65 },
          { type: 'Mobile', percentage: 30 },
          { type: 'Tablet', percentage: 5 }
        ],
        trafficSources: [
          { source: 'Direct', percentage: 45 },
          { source: 'Google', percentage: 30 },
          { source: 'LinkedIn', percentage: 15 },
          { source: 'GitHub', percentage: 10 }
        ]
      });
      
      setIsLoading(false);
    };

    fetchAnalytics();
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  if (isLoading) {
    return (
      <section id="analytics" className="py-20 bg-section-bg relative">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio <span className="text-gradient-primary">Analytics</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time insights into portfolio performance and visitor engagement.
            </p>
          </div>
          
          {/* Loading State */}
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading analytics...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="analytics" className="py-20 bg-section-bg relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio <span className="text-gradient-primary">Analytics</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights into portfolio performance and visitor engagement.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 scroll-animate">
          <div className="glass p-6 rounded-2xl text-center">
            <Eye className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">
              <AnimatedCounter end={analytics.totalViews} />
            </div>
            <div className="text-muted-foreground">Total Views</div>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <Users className="h-8 w-8 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-bold text-secondary mb-2">
              <AnimatedCounter end={analytics.uniqueVisitors} />
            </div>
            <div className="text-muted-foreground">Unique Visitors</div>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <Clock className="h-8 w-8 text-accent mx-auto mb-4" />
            <div className="text-3xl font-bold text-accent mb-2">
              {analytics.averageTime}
            </div>
            <div className="text-muted-foreground">Avg. Time</div>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">
              <AnimatedCounter end={24} prefix="+" suffix="%" />
            </div>
            <div className="text-muted-foreground">Growth</div>
          </div>
        </div>

        {/* Charts and Data */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Countries */}
          <div className="glass p-6 rounded-2xl scroll-animate">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-primary" />
              Top Countries
            </h3>
            <div className="space-y-4">
              {analytics.topCountries.map((country, index) => (
                <div key={country.country} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <span className="font-medium">{country.country}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {formatNumber(country.visitors)} visitors
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Pages */}
          <div className="glass p-6 rounded-2xl scroll-animate">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <MousePointer className="h-5 w-5 mr-2 text-secondary" />
              Top Pages
            </h3>
            <div className="space-y-4">
              {analytics.topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <span className="font-medium text-sm">{page.page}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {formatNumber(page.views)} views
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Types */}
          <div className="glass p-6 rounded-2xl scroll-animate">
            <h3 className="text-xl font-semibold mb-6">Device Types</h3>
            <div className="space-y-4">
              {analytics.deviceTypes.map((device) => (
                <div key={device.type}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{device.type}</span>
                    <span className="text-muted-foreground">{device.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="glass p-6 rounded-2xl scroll-animate">
            <h3 className="text-xl font-semibold mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {analytics.trafficSources.map((source) => (
                <div key={source.source}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{source.source}</span>
                    <span className="text-muted-foreground">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-secondary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-animate">
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's discuss your project.
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
