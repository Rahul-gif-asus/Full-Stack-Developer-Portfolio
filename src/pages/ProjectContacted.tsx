import { useState, useEffect } from 'react';
import { getContactSubmissions, ContactFormData } from '@/lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Calendar, MessageSquare, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface ProjectContactSubmission extends ContactFormData {
  id: string;
  projectTitle?: string;
}

export default function ProjectContactedPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [contacts, setContacts] = useState<ProjectContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ProjectContactSubmission | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const submissions = await getContactSubmissions() as ProjectContactSubmission[];
        // Filter only project-related submissions
        const projectSubmissions = submissions.filter(submission => 
          submission.type === 'project_inquiry' || 
          submission.projectTitle ||
          submission.message.includes('---\nProject:') || 
          submission.subject.toLowerCase().includes('inquiry about') ||
          submission.subject.toLowerCase().includes('project')
        );
        setContacts(projectSubmissions);
      } catch (error) {
        console.error('Error fetching project contacts:', error);
        toast({
          title: "Error",
          description: "Failed to load project inquiries. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, [toast]);

  const extractProjectTitle = (submission: ProjectContactSubmission): string => {
    // First try to get from projectTitle field
    if (submission.projectTitle) {
      return submission.projectTitle;
    }
    
    // Then try to extract from message
    const projectMatch = submission.message.match(/---\nProject: (.+)/);
    return projectMatch ? projectMatch[1] : 'Unknown Project';
  };

  const cleanMessage = (message: string): string => {
    return message.replace(/---\nProject: .+/, '').trim();
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const formatDate = (timestamp: unknown): string => {
    if (!timestamp) return 'Unknown date';
    
    let date: Date;
    try {
      // Try to handle Firestore timestamp
      if (timestamp && typeof timestamp === 'object' && 'toDate' in timestamp) {
        const firestoreTimestamp = timestamp as { toDate: () => Date };
        date = firestoreTimestamp.toDate();
      } else if (timestamp && typeof timestamp === 'object' && 'seconds' in timestamp) {
        const firestoreTimestamp = timestamp as { seconds: number };
        date = new Date(firestoreTimestamp.seconds * 1000);
      } else {
        // Regular date
        date = new Date(timestamp as string | number);
      }
    } catch {
      // Fallback to current date if parsing fails
      date = new Date();
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading project inquiries...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-4 hover:bg-muted"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Project <span className="text-gradient-primary">Inquiries</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Messages from visitors interested in specific projects
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Total: {contacts.length} project inquiry{contacts.length !== 1 ? 'ies' : ''}
            </div>
          </div>

          {contacts.length === 0 ? (
            <div className="text-center py-16">
              <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Project Inquiries Yet</h3>
              <p className="text-muted-foreground">
                Project-specific inquiries will appear here when visitors use the "Get In Touch" button on project detail pages.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {contacts.map((contact, index) => {
                const projectTitle = extractProjectTitle(contact);
                const cleanMsg = cleanMessage(contact.message);
                
                return (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-6 rounded-2xl cursor-pointer hover:bg-muted/30 transition-all duration-200"
                    onClick={() => setSelected(contact)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gradient-secondary">
                            {contact.name}
                          </h3>
                          <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
                            {projectTitle}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {contact.email}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(contact.timestamp)}
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <h4 className="font-medium text-sm mb-1">Subject:</h4>
                          <p className="text-sm text-muted-foreground">{contact.subject}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-1">Message Preview:</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {cleanMsg}
                          </p>
                        </div>
                      </div>
                      
                      <div className="ml-4 flex flex-col gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(contact.email, 'Email');
                          }}
                        >
                          {copied === 'Email' ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass p-8 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-2">
                    {selected.name}
                  </h2>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                      {extractProjectTitle(selected)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(selected.timestamp)}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelected(null)}
                >
                  ×
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground">{selected.email}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(selected.email, 'Email')}
                    >
                      {copied === 'Email' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Subject</h3>
                  <p className="text-muted-foreground">{selected.subject}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Message</h3>
                  <div className="glass p-4 rounded-lg">
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {cleanMessage(selected.message)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => window.open(`mailto:${selected.email}?subject=Re: ${selected.subject}`, '_blank')}
                    className="flex-1"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Reply via Email
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelected(null)}
                    className="flex-1"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
