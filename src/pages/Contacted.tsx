import { useState, useEffect } from 'react';
import { getContactSubmissions, ContactFormData } from '@/lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Calendar, MessageSquare, User, Copy, Check } from 'lucide-react';

interface ContactSubmission extends ContactFormData {
  id: string;
}

const ContactedPage = () => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ContactSubmission | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const submissions = await getContactSubmissions() as ContactSubmission[];
        setContacts(submissions);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1200);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading contact submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">Contact</span> Submissions
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              View and manage all contact form submissions from visitors
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <Calendar className="h-4 w-4 inline mr-2" />
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <User className="h-4 w-4 inline mr-2" />
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <MessageSquare className="h-4 w-4 inline mr-2" />
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {contacts.map((contact, idx) => (
                    <tr
                      key={contact.id}
                      className={`cursor-pointer transition-all duration-200 hover:bg-primary/5 ${
                        idx % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                      }`}
                      onClick={() => setSelected(contact)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        {contact.createdAt?.toDate().toLocaleDateString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                        {contact.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        <a 
                          href={`mailto:${contact.email}`} 
                          className="text-primary hover:text-primary/80 transition-colors underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {contact.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        {contact.subject}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs truncate">
                        {contact.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {contacts.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">No contact submissions yet.</p>
                <p className="text-muted-foreground text-sm mt-2">Submissions will appear here when visitors contact you.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Modal for details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass rounded-2xl shadow-2xl max-w-md w-full p-8 relative mx-4"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-xl transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              
              <h2 className="text-2xl font-bold mb-6 text-gradient-primary">Contact Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">Name:</span>
                    <span className="ml-2 text-muted-foreground">{selected.name}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <span className="font-semibold text-foreground">Email:</span>
                    <div className="flex items-center space-x-2">
                      <a 
                        href={`mailto:${selected.email}`} 
                        className="ml-2 text-primary underline break-all hover:text-primary/80"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {selected.email}
                      </a>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCopy(selected.email, 'email')}
                        className="h-6 px-2 text-xs"
                      >
                        {copied === 'email' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <span className="font-semibold text-foreground">Subject:</span>
                  <span className="ml-2 text-muted-foreground">{selected.subject}</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <span className="font-semibold text-foreground">Message:</span>
                    <div className="flex items-start space-x-2 mt-1">
                      <p className="ml-2 text-muted-foreground break-words leading-relaxed">
                        {selected.message}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCopy(selected.message, 'message')}
                        className="h-6 px-2 text-xs flex-shrink-0"
                      >
                        {copied === 'message' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">Date:</span>
                    <span className="ml-2 text-muted-foreground">
                      {selected.createdAt?.toDate().toLocaleString('en-US', {
                        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactedPage;
