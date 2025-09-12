
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "UX RESEARCH", level: 70, color: "from-purple-500 to-purple-600" },
    { name: "IDEATION", level: 75, color: "from-blue-500 to-blue-600" },
    { name: "FIGMA", level: 60, color: "from-green-500 to-green-600" },
    { name: "PHOTOSHOP", level: 85, color: "from-pink-500 to-pink-600" },
    { name: "SKETCHING", level: 70, color: "from-orange-500 to-orange-600" },
    { name: "WIREFRAMING", level: 80, color: "from-teal-500 to-teal-600" },
    { name: "PROTOTYPING", level: 75, color: "from-indigo-500 to-indigo-600" },
    { name: "TESTING", level: 65, color: "from-red-500 to-red-600" },
    { name: "HTML/CSS", level: 50, color: "from-yellow-500 to-yellow-600" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills bars one by one
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            My expertise spans the entire design process, from research and ideation 
            to implementation and testing
          </p>
        </div>
        
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <CardContent className="p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Skills List */}
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className={`space-y-3 transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm sm:text-base tracking-wider">
                        {skill.name}
                      </span>
                      <span className="text-white font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out shadow-lg`}
                        style={{ 
                          width: animatedSkills[index] ? `${skill.level}%` : '0%',
                          boxShadow: animatedSkills[index] ? `0 0 20px rgba(255, 255, 255, 0.3)` : 'none'
                        }}
                      />
                      <div className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm transition-all duration-1500 ease-out`}
                        style={{ width: animatedSkills[index] ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Categories */}
              <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Design Process</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Research', 'Ideation', 'Wireframing', 'Prototyping'].map((process) => (
                      <div key={process} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <span className="text-white/90 font-medium">{process}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Tools & Software</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Figma', 'Photoshop', 'Testing', 'HTML/CSS'].map((tool) => (
                      <div key={tool} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <span className="text-white/90 font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h4 className="text-lg font-bold text-white mb-3">Continuous Learning</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    I'm constantly evolving my skills, staying updated with the latest design trends, 
                    tools, and methodologies to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
