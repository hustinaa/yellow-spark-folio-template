
import { GitHub, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-blue-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-portfolio-yellow">Y</span>our
              <span className="text-portfolio-yellow">N</span>ame
            </a>
            <p className="text-gray-400 mt-2 text-center md:text-left">
              MIS Student & Artist
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-yellow transition-colors"
              aria-label="GitHub"
            >
              <GitHub className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-yellow transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="hover:text-portfolio-yellow transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed and built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
