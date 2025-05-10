
import { Card } from '@/components/ui/card';
import { Laptop, Book, Code, Palette, Gamepad, Robot } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Web Development', progress: 85, icon: <Code className="h-5 w-5 text-portfolio-yellow" /> },
    { name: 'Database Management', progress: 80, icon: <Laptop className="h-5 w-5 text-portfolio-yellow" /> },
    { name: 'UI/UX Design', progress: 75, icon: <Palette className="h-5 w-5 text-portfolio-yellow" /> },
    { name: 'Robotics', progress: 70, icon: <Robot className="h-5 w-5 text-portfolio-yellow" /> },
  ];

  const hobbies = [
    { name: 'Reading', icon: <Book className="h-10 w-10 mb-2 text-portfolio-yellow" /> },
    { name: 'Gaming', icon: <Gamepad className="h-10 w-10 mb-2 text-portfolio-yellow" /> },
    { name: 'Digital Art', icon: <Palette className="h-10 w-10 mb-2 text-portfolio-yellow" /> },
    { name: 'Robotics', icon: <Robot className="h-10 w-10 mb-2 text-portfolio-yellow" /> },
  ];

  const revealer = (index: number) => {
    return {
      className: `animate-fade-in [animation-delay:${index * 100}ms]`
    };
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title section-title-bar">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left Column - Photo and Bio */}
          <div className="flex flex-col space-y-6">
            <div className="bg-portfolio-yellow-light p-1 rounded-lg shadow-md">
              <div className="aspect-square rounded overflow-hidden bg-gray-200">
                {/* Replace with your actual photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Your Photo Here
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-portfolio-blue-dark mb-4">Who I Am</h3>
              <p className="text-portfolio-blue-light mb-4">
                I am a passionate Management Information Systems student with a keen interest in the intersection of technology and business. My background in both tech and art gives me a unique perspective on problem-solving and innovation.
              </p>
              <p className="text-portfolio-blue-light">
                Currently seeking internship opportunities where I can apply my technical skills and creative thinking to real-world challenges. I am particularly interested in web development, database management, and UI/UX design.
              </p>
            </div>
          </div>
          
          {/* Right Column - Skills and Hobbies */}
          <div className="flex flex-col space-y-10">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-portfolio-blue-dark mb-6">My Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} {...revealer(index)}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium text-portfolio-blue-dark">{skill.name}</span>
                      </div>
                      <span className="text-sm text-portfolio-blue-light">{skill.progress}%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: `${skill.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hobbies */}
            <div>
              <h3 className="text-2xl font-bold text-portfolio-blue-dark mb-6">My Hobbies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hobbies.map((hobby, index) => (
                  <Card key={hobby.name} className="p-4 text-center hover:shadow-md transition-shadow" {...revealer(index + 4)}>
                    {hobby.icon}
                    <h4 className="font-medium text-portfolio-blue-dark">{hobby.name}</h4>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
