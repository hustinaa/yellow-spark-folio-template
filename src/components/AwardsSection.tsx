
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

type Award = {
  id: number;
  title: string;
  event: string;
  date: string;
  description: string;
  image: string;
  achievements: string[];
  year: string;
};

const AwardsSection = () => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  // Sample awards data - replace with your actual awards
  const awards: Award[] = [
    {
      id: 1,
      title: 'First Place',
      event: 'National Robotics Competition',
      date: 'March 15, 2023',
      description: 'Won first place in the national robotics competition with an innovative solution.',
      image: '/placeholder.svg',
      achievements: [
        'Best Overall Design',
        'Most Innovative Solution',
        'Perfect Score in Technical Implementation'
      ],
      year: '2023'
    },
    {
      id: 2,
      title: 'Best UI/UX Design',
      event: 'Campus Hackathon',
      date: 'May 8, 2023',
      description: 'Recognized for the best user interface and experience design during the campus hackathon.',
      image: '/placeholder.svg',
      achievements: [
        'Best User Interface',
        'Most User-Friendly Application',
        'People\'s Choice Award'
      ],
      year: '2023'
    },
    {
      id: 3,
      title: 'Second Runner-up',
      event: 'Regional App Development Contest',
      date: 'November 22, 2022',
      description: 'Secured third place in the regional app development contest.',
      image: '/placeholder.svg',
      achievements: [
        'Most Practical Application',
        'Best Code Quality',
        'Excellent Documentation'
      ],
      year: '2022'
    },
    {
      id: 4,
      title: 'Excellence Award',
      event: 'Design Thinking Symposium',
      date: 'July 10, 2022',
      description: 'Received excellence award for creative problem-solving approach.',
      image: '/placeholder.svg',
      achievements: [
        'Most Creative Solution',
        'Excellent Presentation',
        'Outstanding Teamwork'
      ],
      year: '2022'
    },
    {
      id: 5,
      title: 'Best Project',
      event: 'College Technology Expo',
      date: 'April 5, 2021',
      description: 'Won best project award at the annual college technology expo.',
      image: '/placeholder.svg',
      achievements: [
        'Most Innovative Technology',
        'Best Implementation',
        'Highest Potential for Real-world Application'
      ],
      year: '2021'
    },
  ];
  
  // Get unique years
  const years = [...new Set(awards.map(award => award.year))].sort((a, b) => parseInt(b) - parseInt(a));
  
  return (
    <section id="awards" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title section-title-bar">Awards & Achievements</h2>
        <p className="text-portfolio-blue-light max-w-2xl mb-12">
          A collection of awards and recognitions I've received throughout my academic journey.
          Click on any award to learn more about the achievement.
        </p>

        <Tabs defaultValue={years[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {years.map((year) => (
              <TabsTrigger key={year} value={year}>
                Year {year}
              </TabsTrigger>
            ))}
          </TabsList>

          {years.map((year) => (
            <TabsContent key={year} value={year} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {awards
                  .filter((award) => award.year === year)
                  .map((award) => (
                    <AwardCard 
                      key={award.id} 
                      award={award} 
                      onClick={() => setSelectedAward(award)} 
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <AwardDialog 
          award={selectedAward} 
          open={selectedAward !== null}
          onClose={() => setSelectedAward(null)} 
        />
      </div>
    </section>
  );
};

// Award Card Component
const AwardCard = ({ 
  award, 
  onClick 
}: { 
  award: Award; 
  onClick: () => void;
}) => {
  return (
    <Card 
      className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer animate-fade-in"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={award.image}
          alt={award.event}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-portfolio-blue-dark/60 flex items-center justify-center">
          <Award className="text-portfolio-yellow h-16 w-16" />
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs text-portfolio-blue-light">{award.date}</span>
        <h3 className="text-xl font-semibold text-portfolio-blue-dark mt-1">{award.title}</h3>
        <p className="text-portfolio-blue-dark font-medium mt-1">{award.event}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-4 w-full border-portfolio-yellow text-portfolio-blue-dark hover:bg-portfolio-yellow hover:text-portfolio-blue-dark"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

// Award Dialog Component
const AwardDialog = ({ 
  award, 
  open, 
  onClose 
}: { 
  award: Award | null; 
  open: boolean;
  onClose: () => void;
}) => {
  if (!award) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{award.title}</DialogTitle>
          <DialogDescription className="text-portfolio-blue-dark font-medium">
            {award.event} - {award.date}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="mb-6">
            <img
              src={award.image}
              alt={award.event}
              className="w-full h-56 object-cover rounded-md"
            />
          </div>
          <p className="text-portfolio-blue-light mb-4">{award.description}</p>
          <div>
            <h4 className="font-semibold text-portfolio-blue-dark mb-2">Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {award.achievements.map((achievement, index) => (
                <li key={index} className="text-portfolio-blue-light">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AwardsSection;
