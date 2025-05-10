
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-portfolio-yellow-light relative"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="w-96 h-96 rounded-full bg-portfolio-yellow absolute -top-20 -left-20"></div>
        <div className="w-64 h-64 rounded-full bg-portfolio-yellow absolute bottom-40 right-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-0 z-10">
        <div className="flex flex-col items-center justify-center text-center animate-fade-in">
          <p className="text-lg md:text-xl text-portfolio-blue-light mb-4">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-blue-dark mb-6">
            Your <span className="text-portfolio-yellow">Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-portfolio-blue-dark max-w-2xl mb-8">
            MIS Student, Artist & Tech Enthusiast seeking to make a mark in the tech world
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-portfolio-yellow hover:bg-portfolio-yellow/90 text-portfolio-blue-dark text-lg"
              asChild
            >
              <a href="#projects">
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-portfolio-blue-dark text-portfolio-blue-dark hover:bg-portfolio-blue-dark/5 text-lg"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-portfolio-blue-dark">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
