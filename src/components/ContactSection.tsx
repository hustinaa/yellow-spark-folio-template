
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5 text-portfolio-yellow" />, 
      label: 'Email', 
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    { 
      icon: <Phone className="h-5 w-5 text-portfolio-yellow" />, 
      label: 'Phone', 
      value: '+1 (123) 456-7890',
      href: 'tel:+11234567890'
    },
    { 
      icon: <GitHub className="h-5 w-5 text-portfolio-yellow" />, 
      label: 'GitHub', 
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername'
    },
    { 
      icon: <Linkedin className="h-5 w-5 text-portfolio-yellow" />, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/yourusername',
      href: 'https://linkedin.com/in/yourusername'
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title section-title-bar">Get In Touch</h2>
        <p className="text-portfolio-blue-light max-w-2xl mb-12">
          Have a question or interested in working together? Feel free to reach out!
          I'm currently open to internship opportunities in the tech industry.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold text-portfolio-blue-dark mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-blue-dark mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-blue-dark mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-blue-dark mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[150px]"
                  required
                  placeholder="Your message here..."
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-portfolio-yellow hover:bg-portfolio-yellow/90 text-portfolio-blue-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-portfolio-blue-dark mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={info.label} className="p-4 animate-fade-in [animation-delay:200ms]">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-portfolio-blue-light">{info.label}</div>
                      <a 
                        href={info.href} 
                        className="text-portfolio-blue-dark hover:text-portfolio-yellow transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 mt-6 bg-portfolio-blue-dark text-white animate-fade-in [animation-delay:400ms]">
              <h4 className="text-lg font-semibold mb-2">Looking for Opportunities</h4>
              <p className="mb-4">
                I'm currently seeking internships in the tech industry where I can apply my MIS knowledge and creative skills.
              </p>
              <p>
                Let's connect and discuss how my skills can contribute to your team!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
