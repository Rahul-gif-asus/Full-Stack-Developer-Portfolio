import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import NewsletterModal from './NewsletterModal';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  image?: string;
}

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Patterns",
      excerpt: "Learn how to structure large-scale React applications using modern patterns, hooks, and best practices for maintainable code.",
      content: "Full article content here...",
      author: "Rahul Vishwakarma",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Frontend"],
      featured: true,
    },
    {
      id: 2,
      title: "Algorithmic Trading: From Strategy to Implementation",
      excerpt: "A deep dive into building profitable trading algorithms using Python, backtesting strategies, and risk management.",
      content: "Full article content here...",
      author: "Rahul Vishwakarma",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Python", "Trading", "Algorithms"],
      featured: false,
    },
    {
      id: 3,
      title: "Machine Learning in Production: Best Practices",
      excerpt: "Essential guidelines for deploying ML models in production environments, including monitoring, scaling, and maintenance.",
      content: "Full article content here...",
      author: "Rahul Vishwakarma",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Machine Learning", "DevOps", "Python"],
      featured: false,
    },
    {
      id: 4,
      title: "Full-Stack Development with TypeScript and Node.js",
      excerpt: "Building robust full-stack applications using TypeScript, Node.js, and modern development practices.",
      content: "Full article content here...",
      author: "Rahul Vishwakarma",
      date: "2024-01-01",
      readTime: "15 min read",
      tags: ["TypeScript", "Node.js", "Full-Stack"],
      featured: true,
    },
  ];

  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];
  const filteredPosts = selectedTag === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-section-bg relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="text-gradient-secondary">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern software development, AI/ML, and technology trends.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-animate">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className="capitalize"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16 scroll-animate">
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-gradient-primary">
                    {post.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="mt-4 px-4 py-2 h-auto text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 group"
                    onClick={() => window.location.href = `/blog/${post.id}`}
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div className="scroll-animate">
            <h3 className="text-2xl font-semibold mb-8 text-center">All Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article key={post.id} className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-gradient-secondary">
                    {post.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="mt-4 px-4 py-2 h-auto text-secondary hover:text-secondary/80 transition-all duration-300 hover:scale-105 group"
                    onClick={() => window.location.href = `/blog/${post.id}`}
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 scroll-animate">
          <p className="text-muted-foreground mb-6">
            Want to stay updated with my latest articles?
          </p>
          <NewsletterModal>
            <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Subscribe to Newsletter
            </Button>
          </NewsletterModal>
        </div>
      </div>
    </section>
  );
};

export default Blog;
