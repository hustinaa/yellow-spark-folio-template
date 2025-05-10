
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: 'web' | 'print' | 'robots';
};

const ProjectsSection = () => {
  // Dummy projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'A responsive dashboard interface for an online store',
      image: '/placeholder.svg',
      link: '#',
      category: 'web',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A web application for managing daily tasks and projects',
      image: '/placeholder.svg',
      link: '#',
      category: 'web',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website template',
      image: '/placeholder.svg',
      link: '#',
      category: 'web',
    },
    {
      id: 4,
      title: 'Company Magazine',
      description: 'Quarterly magazine design for a tech company',
      image: '/placeholder.svg',
      link: '#',
      category: 'print',
    },
    {
      id: 5,
      title: 'Event Brochure',
      description: 'Promotional materials for a tech conference',
      image: '/placeholder.svg',
      link: '#',
      category: 'print',
    },
    {
      id: 6,
      title: 'Annual Report',
      description: 'Visual data representation for annual company report',
      image: '/placeholder.svg',
      link: '#',
      category: 'print',
    },
    {
      id: 7,
      title: 'Line Follower Robot',
      description: 'A robot that can autonomously follow a line',
      image: '/placeholder.svg',
      link: '#',
      category: 'robots',
    },
    {
      id: 8,
      title: 'Robotic Arm',
      description: 'A programmable robotic arm for precision tasks',
      image: '/placeholder.svg',
      link: '#',
      category: 'robots',
    },
    {
      id: 9,
      title: 'Home Automation System',
      description: 'IoT-based home automation project',
      image: '/placeholder.svg',
      link: '#',
      category: 'robots',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title section-title-bar">My Projects</h2>
        <p className="text-portfolio-blue-light max-w-2xl mb-12">
          Explore my diverse range of projects spanning web development, print design, and robotics. 
          Each project represents my commitment to innovation and quality.
        </p>

        <Tabs defaultValue="web" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="web">Web Applications</TabsTrigger>
            <TabsTrigger value="print">Print Magazines</TabsTrigger>
            <TabsTrigger value="robots">Robots</TabsTrigger>
          </TabsList>

          {['web', 'print', 'robots'].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="project-card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-portfolio-blue-dark/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="bg-portfolio-yellow text-portfolio-blue-dark hover:bg-portfolio-yellow/90"
            asChild
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-portfolio-blue-dark">{project.title}</h3>
        <p className="text-portfolio-blue-light mt-2">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectsSection;
