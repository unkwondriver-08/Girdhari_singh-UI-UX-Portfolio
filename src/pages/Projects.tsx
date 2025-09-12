import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Eye, Calendar, User, Sparkles, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const handleStartProject = () => {
    // Navigate to home page contact section
    window.location.href = "/#contact";
  };

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

  const projects = [
    {
      id: "erp-system",
      title: "ERP System & SaaS",
      subtitle: "Enterprise Resource Planning Solution",
      image: "/lovable-uploads/75650210-5487-4f3e-af0f-b7d3eebc5dab.png",
      description: "Comprehensive ERP system with SaaS architecture designed to streamline business operations. Features modern UI/UX design with focus on enterprise-level functionality and scalability.",
      tags: ["SaaS", "ERP", "Enterprise"],
      year: "2025",
      status: "Coming Soon",
      category: "Enterprise Software",
      duration: "8 months",
      timeline: "MAY 2025 - PRESENT",
      isExternal: false,
      comingSoon: true
    },
    {
      id: "ziilinkz",
      title: "ZIILINKZ",
      subtitle: "Taxi Booking Application",
      image: "/lovable-uploads/633d608a-2bf7-4e93-b116-80466a9a7143.png",
      description: "A comprehensive taxi booking application designed to provide users with a seamless and intuitive booking experience. The app features real-time tracking, multiple payment options, and an elegant user interface that prioritizes ease of use.",
      tags: ["Mobile App", "UX/UI Design", "Prototyping"],
      year: "2024",
      status: "Live",
      category: "Mobile Design",
      duration: "12 months",
      timeline: "JAN 2024 - DEC 2024",
      isExternal: false,
      comingSoon: false
    },
    {
      id: "ecommerce-website",
      title: "E-Commerce Website",
      subtitle: "Online Shopping Platform & Branding",
      image: "/lovable-uploads/5a3e7397-5d6f-4d03-9e92-a5ad1a16aae9.png",
      description: "Complete e-commerce website design with comprehensive branding strategy. Features modern shopping experience, product showcasing, and brand identity development for enhanced customer engagement.",
      tags: ["E-commerce", "Branding", "Web Design"],
      year: "2024",
      status: "Live",
      category: "Web Platform",
      duration: "1 month",
      timeline: "MARCH 2024",
      isExternal: false,
      comingSoon: false
    },
    {
      id: "setu",
      title: "SETU",
      subtitle: "Community Social Impact Platform",
      image: "/lovable-uploads/d3d08601-4573-42cc-a53a-af3bf1341f67.png",
      description: "A community-focused platform designed to connect people and resources for positive social impact. SETU bridges the gap between volunteers, organizations, and community needs through thoughtful design and user-centered approach.",
      tags: ["Web Platform", "Social Impact", "Community Design"],
      year: "2023",
      status: "Live",
      category: "Web Platform",
      duration: "5 months",
      timeline: "AUG - DEC 2023",
      isExternal: true,
      externalLink: "https://docs.google.com/presentation/d/13N5wGxKy4f6_MvjLhsEgvK_Oa8fgqUVOx08PNGt9vIo/edit?usp=sharing",
      comingSoon: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />
      
      <div>
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white pt-16">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-20">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link to="/">
                <Button 
                  variant="outline" 
                  className="mb-8 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Featured
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    Projects
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Discover my journey through design, where every project tells a story of innovation, 
                  creativity, and user-centered solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">12+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={project.id} className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {project.isExternal || project.comingSoon ? (
                  <div onClick={() => handleProjectClick(project)} className="cursor-pointer">
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Status Badge - only show for non-ERP projects */}
                            {project.id !== "erp-system" && (
                              <div className="absolute top-6 left-6">
                                <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                                  project.status === "Live" 
                                    ? "bg-green-500/90 text-white" 
                                    : project.status === "Coming Soon"
                                    ? "bg-yellow-500/90 text-white"
                                    : "bg-blue-500/90 text-white"
                                }`}>
                                  {project.status}
                                </span>
                              </div>
                            )}

                            {project.comingSoon && project.id !== "erp-system" && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-lg font-bold bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full">
                                  Coming Soon
                                </span>
                              </div>
                            )}

                            {/* Coming Up button for ERP system with light black background */}
                            {project.id === "erp-system" && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Button className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 text-lg font-semibold shadow-lg">
                                  Coming Up
                                </Button>
                              </div>
                            )}

                            {/* View Button - only show for non-ERP projects */}
                            {project.id !== "erp-system" && (
                              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                                  {project.isExternal ? (
                                    <>
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      View Presentation
                                    </>
                                  ) : (
                                    <>
                                      <Eye className="w-4 h-4 mr-2" />
                                      View Case Study
                                    </>
                                  )}
                                </Button>
                              </div>
                            )}
                          </div>
                          
                          <div className="p-8">
                            <div className="flex items-center justify-between mb-4">
                              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                {project.category}
                              </span>
                              <div className="flex items-center text-gray-500 text-sm">
                                <Calendar className="w-4 h-4 mr-1" />
                                {project.timeline}
                              </div>
                            </div>
                            
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                              {project.title}
                            </h2>
                            <h3 className="text-lg text-gray-600 mb-4 font-medium">
                              {project.subtitle}
                            </h3>
                            
                            <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center text-gray-500 text-sm">
                                <User className="w-4 h-4 mr-1" />
                                {project.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <Link to={`/projects/${project.id}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Status Badge */}
                            <div className="absolute top-6 left-6">
                              <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                                project.status === "Live" 
                                  ? "bg-green-500/90 text-white" 
                                  : project.status === "Coming Soon"
                                  ? "bg-yellow-500/90 text-white"
                                  : "bg-blue-500/90 text-white"
                              }`}>
                                {project.status}
                              </span>
                            </div>

                            {/* View Button */}
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                                <Eye className="w-4 h-4 mr-2" />
                                View Case Study
                              </Button>
                            </div>
                          </div>
                          
                          <div className="p-8">
                            <div className="flex items-center justify-between mb-4">
                              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                {project.category}
                              </span>
                              <div className="flex items-center text-gray-500 text-sm">
                                <Calendar className="w-4 h-4 mr-1" />
                                {project.timeline}
                              </div>
                            </div>
                            
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                              {project.title}
                            </h2>
                            <h3 className="text-lg text-gray-600 mb-4 font-medium">
                              {project.subtitle}
                            </h3>
                            
                            <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center text-gray-500 text-sm">
                                <User className="w-4 h-4 mr-1" />
                                {project.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Sparkles className="w-16 h-16 mx-auto mb-8 text-yellow-300" />
              <h3 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with thoughtful design and innovative solutions.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
                onClick={handleStartProject}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
