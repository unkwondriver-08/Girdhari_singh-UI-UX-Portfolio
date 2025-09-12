
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Target, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      icon: Lightbulb,
      title: "Empathy-Driven Design",
      description: "Understanding user needs through research and creating solutions that truly resonate with people."
    },
    {
      icon: Target,
      title: "Purpose-Focused",
      description: "Every design decision serves a purpose, balancing aesthetics with functionality and usability."
    },
    {
      icon: Zap,
      title: "Iterative Process",
      description: "Continuous improvement through testing, feedback, and refinement to achieve excellence."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Working closely with teams and stakeholders to bring shared visions to life."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                <span className="text-purple-700 text-sm font-medium">About Me</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                My Design
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Philosophy
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                I believe design is more than aesthetics—it's about creating meaningful 
                connections between people and technology. My approach combines empathy, 
                creativity, and strategic thinking to solve complex problems.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                My Iterative Journey
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every project begins with understanding. I dive deep into user research, 
                explore pain points, and iterate relentlessly. Through prototyping, testing, 
                and refining, I ensure each solution not only looks beautiful but serves 
                its purpose flawlessly.
              </p>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-purple-50 to-blue-50">
                <CardContent className="p-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"></div>
                  <img
                    src="/lovable-uploads/94e226a5-28bf-4bb3-986c-84793a44eca1.png"
                    alt="Design workspace with notebooks, coffee, and mobile design"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Design Principles Grid */}
        <div className={`mt-24 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Design Principles</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fundamental beliefs that guide every design decision I make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card key={principle.title} className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm delay-${index * 100}`}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
