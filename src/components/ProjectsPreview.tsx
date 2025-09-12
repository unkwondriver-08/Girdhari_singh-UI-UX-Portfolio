
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProjectsPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "erp-system",
      title: "ERP SYSTEM",
      subtitle: "Enterprise & SaaS Solution",
      image: "/lovable-uploads/75650210-5487-4f3e-af0f-b7d3eebc5dab.png",
      description: "Comprehensive ERP system with SaaS architecture designed for enterprise-level functionality and scalability.",
      tags: ["SaaS", "ERP", "Enterprise"],
      gradient: "from-orange-600 to-red-600",
      isExternal: false,
      comingSoon: true
    },
    {
      id: "ziilinkz",
      title: "ZIILINKZ",
      subtitle: "Taxi Booking App",
      image: "/lovable-uploads/633d608a-2bf7-4e93-b116-80466a9a7143.png",
      description: "A comprehensive taxi booking app with intuitive user interface and seamless booking experience.",
      tags: ["Mobile App", "UX/UI", "Prototyping"],
      gradient: "from-purple-600 to-blue-600",
      isExternal: false,
      comingSoon: false
    },
    {
      id: "ecommerce-website",
      title: "E-COMMERCE",
      subtitle: "Website & Branding",
      image: "/lovable-uploads/5a3e7397-5d6f-4d03-9e92-a5ad1a16aae9.png",
      description: "Complete e-commerce platform with comprehensive branding strategy for enhanced customer engagement.",
      tags: ["E-commerce", "Branding", "Web Design"],
      gradient: "from-green-600 to-teal-600",
      isExternal: false,
      comingSoon: false
    },
    {
      id: "setu",
      title: "SETU",
      subtitle: "Social Impact Platform",
      image: "/lovable-uploads/d3d08601-4573-42cc-a53a-af3bf1341f67.png",
      description: "Community-focused social impact project connecting people and resources for positive change.",
      tags: ["Web Platform", "Social Impact", "Community"],
      gradient: "from-blue-600 to-indigo-600",
      isExternal: true,
      externalLink: "https://docs.google.com/presentation/d/13N5wGxKy4f6_MvjLhsEgvK_Oa8fgqUVOx08PNGt9vIo/edit?usp=sharing",
      comingSoon: false
    }
  ];

  const handleProjectClick = (project: any) => {
    if (project.comingSoon) {
      toast({
        title: "Coming Soon",
        description: "This case study is coming soon. Stay tuned for updates!",
        duration: 3000,
      });
      return;
    }
    
    if (project.isExternal && project.externalLink) {
      window.open(project.externalLink, '_blank');
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <span className="text-purple-700 text-sm font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Selected
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore some of my recent work where creativity meets functionality
          </p>
          
          <Link to="/projects">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              View All Projects
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {project.isExternal || project.comingSoon ? (
                <div onClick={() => handleProjectClick(project)} className="cursor-pointer">
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                        {project.comingSoon && (
                          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                            <Button className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 text-lg font-semibold shadow-lg">
                              Coming Up
                            </Button>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <h4 className="text-lg text-gray-600 mb-3 font-medium">
                          {project.subtitle}
                        </h4>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Link to={`/projects/${project.id}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <h4 className="text-lg text-gray-600 mb-3 font-medium">
                          {project.subtitle}
                        </h4>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
