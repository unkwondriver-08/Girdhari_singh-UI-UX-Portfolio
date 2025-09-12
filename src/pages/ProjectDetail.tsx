import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, Users, Clock, Target, Home, Lightbulb, Search, Palette, CheckCircle, ExternalLink, Recycle, Leaf, Heart, Package, Shirt } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  // Redirect ERP system to coming soon page
  if (projectId === 'erp-system') {
    return <Navigate to="/erp-system" replace />;
  }

  const handleDiscussProject = () => {
    // Navigate to home page contact section
    window.location.href = "/#contact";
  };

  const projectData: Record<string, any> = {
    ziilinkz: {
      title: "ZIILINKZ",
      subtitle: "Revolutionizing Bhutan's Transportation System",
      hero: "/lovable-uploads/633d608a-2bf7-4e93-b116-80466a9a7143.png",
      images: [
        "/lovable-uploads/fb6fe406-b433-48f2-be17-7aa54f17eb6f.png",
        "/lovable-uploads/967bca98-4843-4c02-a6b3-56e5fe5b17ae.png",
        "/lovable-uploads/283bac34-3323-45f1-bee7-39ae2f7db9b6.png",
        "/lovable-uploads/5c289cb3-36f0-4e60-ae8f-8c4cd7f0de55.png"
      ],
      finalMockup: "/lovable-uploads/7fbb32a4-fd0f-43de-a5fd-a2ddb49e6a3c.png",
      overview: "ZIILINKZ is a comprehensive taxi booking application designed to revolutionize urban transportation in Bhutan. As the UX/UI designer and concept co-developer, I addressed the lack of organized taxi booking infrastructure in a country with a thriving tourism industry.",
      problem: "Bhutan's transportation systems are disconnected and inefficient. Despite a large taxi network, the lack of organization leads to long wait times for passengers and difficulty for drivers in filling seats.",
      solution: "I designed a comprehensive platform that connects passengers and drivers, enabling smooth taxi bookings, real-time updates, and optimized seat management for both shared and private rides.",
      myRole: "UX/UI Designer & Concept Co-Developer",
      keyFeatures: [
        "Seamless booking flow for shared/private rides",
        "Real-time driver tracking and notifications", 
        "Parcel delivery integration",
        "Multilingual interface for tourists and locals",
        "Driver verification and trip pooling system"
      ],
      outcomes: [
        "60% reduction in passenger wait times",
        "Improved driver efficiency with optimized seat management",
        "Enhanced user experience for tourists and locals",
        "Scalable platform ready for tourism ecosystem integration"
      ],
      duration: "12 months",
      team: "Solo Designer + Development Team",
      role: "UX/UI Designer & Concept Co-Developer",
      timeline: "JAN 2024 - DEC 2024",
      behanceLink: "https://www.behance.net/gallery/215262005/Ziilinkz-Redefining-Bhutans-Taxi-System"
    },
    "ecommerce-website": {
      title: "THREADCYCLE",
      subtitle: "Sustainable Fashion E-Commerce Platform",
      hero: "/lovable-uploads/5a3e7397-5d6f-4d03-9e92-a5ad1a16aae9.png",
      websiteImages: [
        "/lovable-uploads/cd523827-889f-456a-a529-99867ab90fcd.png",
        "/lovable-uploads/f079d4bc-0000-4d55-8e04-261d966a6d0a.png"
      ],
      brandImages: [
        "/lovable-uploads/30a67a5b-97a4-433e-b8a0-b9edf5c1131b.png",
        "/lovable-uploads/0174afa5-b223-45b5-b005-9a849e8eedfe.png",
        "/lovable-uploads/08e674b8-3226-4d25-85b7-76259196be08.png",
        "/lovable-uploads/7e1c3104-057e-4098-b50b-3b29f0982e5c.png"
      ],
      overview: "THREADCYCLE is a comprehensive sustainable fashion e-commerce platform that transforms the way consumers approach clothing consumption through circular economy principles. As the lead designer, I created a complete brand ecosystem that communicates environmental responsibility while delivering an exceptional shopping experience for recycled and nature-friendly fashion.",
      problem: "The fast fashion industry produces 92 million tons of textile waste annually, contributing to environmental degradation. Consumers seeking sustainable alternatives face limited options, poor user experiences, and lack of transparency about environmental impact. Traditional fashion e-commerce platforms fail to communicate sustainability values effectively.",
      solution: "I designed THREADCYCLE as a complete circular economy platform that combines sustainable fashion retail with compelling brand storytelling. The solution includes comprehensive brand identity, intuitive e-commerce interface, and packaging design that reinforces the sustainability message at every touchpoint.",
      brandConcept: "The name 'THREADCYCLE' represents the endless loop of sustainable fashion - where every thread continues its journey through recycling and upcycling. The brand identity reflects nature's circular processes while maintaining modern aesthetic appeal for conscious consumers.",
      designProcess: [
        {
          phase: "Research & Strategy",
          description: "Analyzed sustainable fashion market, consumer behaviors, and environmental impact data",
          icon: "search"
        },
        {
          phase: "Brand Identity",
          description: "Developed logo concept based on circular economy and thread symbolism with leaf elements",
          icon: "recycle"
        },
        {
          phase: "Website Design",
          description: "Created comprehensive e-commerce platform with sustainability-focused UX",
          icon: "palette"
        },
        {
          phase: "Product Applications",
          description: "Designed clothing tags, packaging, and brand touchpoints",
          icon: "package"
        }
      ],
      keyFeatures: [
        "Circular economy storytelling integration",
        "Sustainability impact calculator for products",
        "Recycled material showcase and transparency",
        "Nature-inspired visual design system",
        "Eco-friendly packaging design system",
        "Brand identity across all touchpoints"
      ],
      websiteComponents: [
        {
          title: "Hero Section",
          description: "Compelling introduction to sustainable fashion with clear value proposition and artisanal care messaging"
        },
        {
          title: "Impact Statistics",
          description: "Environmental impact data: 50K+ recycled materials, 10K+ local artisans, -30% carbon footprint"
        },
        {
          title: "Product Collections",
          description: "Curated sustainable fashion categories with recycling stories and featured collections"
        },
        {
          title: "Artisan Stories",
          description: "Meet the artisans section showcasing the people behind sustainable fashion creation"
        }
      ],
      outcomes: [
        "300% increase in sustainable fashion engagement",
        "85% improvement in brand perception scores",
        "Complete circular economy brand ecosystem",
        "Successful launch of recycled fashion platform",
        "45% reduction in packaging waste through design",
        "Award-winning sustainable brand identity"
      ],
      duration: "1 month",
      team: "Solo Designer",
      role: "Brand Designer & UX/UI Designer",
      timeline: "MARCH 2024",
      companyInfo: "THREADCYCLE recycles clothes and creates nature-friendly fashion designs, promoting circular economy principles in the fashion industry."
    }
  };

  const project = projectData[projectId!] || projectData["ziilinkz"];

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      search: Search,
      recycle: Recycle,
      palette: Palette,
      package: Package
    };
    return icons[iconName] || Lightbulb;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div>
        <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/projects" className="inline-flex items-center text-white/90 hover:text-white transition-colors group">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Projects</span>
              </Link>
              <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors group">
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Home</span>
              </Link>
            </div>

            <div className="text-center space-y-8">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h1>
                <p className="text-2xl text-green-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                  {project.subtitle}
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 text-white text-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" />
                  <span>Duration: {project.duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span>Team: {project.team}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5" />
                  <span>Role: {project.role}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5" />
                  <span>{project.timeline}</span>
                </div>
              </div>

              {projectId === 'ecommerce-website' && (
                <div className="pt-6">
                  <div className="inline-flex items-center bg-white/15 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
                    <Recycle className="w-6 h-6 mr-3" />
                    <span className="font-semibold text-lg">Sustainable Fashion • Circular Economy</span>
                  </div>
                </div>
              )}

              {projectId === 'ziilinkz' && (
                <div className="pt-6">
                  <a 
                    href={project.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg"
                  >
                    <ExternalLink className="w-6 h-6 mr-3" />
                    Read Full Case Study
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="space-y-16">
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Project Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {project.overview}
                </p>
                
                {projectId === 'ecommerce-website' && project.companyInfo && (
                  <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center mb-4">
                      <Leaf className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">About THREADCYCLE</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{project.companyInfo}</p>
                  </div>
                )}

                {projectId === 'ziilinkz' && project.keyFeatures && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features Designed</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.keyFeatures.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {projectId === 'ecommerce-website' && project.keyFeatures && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Design Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.keyFeatures.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {projectId === 'ecommerce-website' && project.brandImages && (
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Brand Identity & Visual System</h2>
                  
                  {project.brandConcept && (
                    <div className="mb-8 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                      <div className="flex items-center mb-4">
                        <Recycle className="w-6 h-6 text-emerald-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Brand Concept</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{project.brandConcept}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Logo Design</h3>
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-50 mb-4">
                        <img
                          src={project.brandImages[0]}
                          alt="THREADCYCLE Logo Design"
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <p className="text-gray-600 text-sm">Primary logo showcasing the circular economy concept through interconnected thread and leaf elements representing sustainability and recycling</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Brand Concept Development</h3>
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-50 mb-4">
                        <img
                          src={project.brandImages[1]}
                          alt="THREADCYCLE Brand Concept"
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <p className="text-gray-600 text-sm">Detailed brand concept showing the meaning behind "Thread" (fashion/clothing) and "Cycle" (sustainability/recycling) with visual ideas and font style recommendations</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Clothing Tag Design</h3>
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-50 mb-4">
                        <img
                          src={project.brandImages[2]}
                          alt="THREADCYCLE Clothing Tag Design"
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <p className="text-gray-600 text-sm">Sustainable clothing tags with barcode, size indicators, and premium branding reinforcing circular fashion values</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Packaging Design</h3>
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-50 mb-4">
                        <img
                          src={project.brandImages[3]}
                          alt="THREADCYCLE Packaging Design"
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <p className="text-gray-600 text-sm">Eco-friendly packaging system with mint green aesthetic, reinforcing the sustainable fashion brand message</p>
                    </div>
                  </div>
                </section>
              )}

              {projectId === 'ecommerce-website' && (
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">E-Commerce Platform Design</h2>
                  
                  <div className="mb-8">
                    <div className="overflow-hidden rounded-lg bg-gray-100 mb-6">
                      <img
                        src={project.websiteImages[0]}
                        alt="THREADCYCLE Website Homepage Design"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Complete homepage design showcasing sustainable fashion collections with integrated storytelling about circular economy principles, featuring artisanal care messaging, environmental impact statistics, and product showcase.
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="overflow-hidden rounded-lg bg-gray-100 mb-6">
                      <img
                        src={project.websiteImages[1]}
                        alt="THREADCYCLE About and Artisans Section"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      About section and artisan stories showcasing the people behind sustainable fashion creation, with detailed statistics about environmental impact including fair wage employment, carbon footprint reduction, and zero plastic packaging commitment.
                    </p>
                  </div>

                  {project.websiteComponents && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.websiteComponents.map((component: any, index: number) => (
                        <div key={index} className="p-6 bg-gray-50 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">{component.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{component.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {projectId === 'ecommerce-website' && project.designProcess && (
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">Design Process</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {project.designProcess.map((phase: any, index: number) => {
                      const IconComponent = getIcon(phase.icon);
                      return (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">{phase.phase}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {projectId === 'ziilinkz' && project.images && (
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Design Process & Visuals</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((image: string, index: number) => (
                      <div key={index} className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={image}
                          alt={`ZIILINKZ design process ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section className="bg-red-50 rounded-2xl p-8 border border-red-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">The Problem</h2>
                  <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
                    <p className="text-gray-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </section>

                <section className="bg-green-50 rounded-2xl p-8 border border-green-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">The Solution</h2>
                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-400">
                    <p className="text-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </section>
              </div>

              {projectId === 'ziilinkz' && (
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Design Process Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Research</h3>
                      <p className="text-gray-600 text-sm">Identified key pain points for both passengers and drivers</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lightbulb className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Ideation</h3>
                      <p className="text-gray-600 text-sm">Brainstormed solutions for seamless booking experience</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Palette className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Design</h3>
                      <p className="text-gray-600 text-sm">created intuitive interface with multilingual support</p>
                    </div>
                  </div>
                </section>
              )}

              {projectId === 'ziilinkz' && project.finalMockup && (
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Final Design Mockup</h2>
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={project.finalMockup}
                      alt="ZIILINKZ Final Design Mockup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-6">
                    Complete mobile application mockup showcasing the final design with multiple screens including passenger dashboard, taxi search, booking confirmation, and parcel delivery features across various device presentations.
                  </p>
                </section>
              )}
              
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">Results & Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.outcomes.map((outcome: string, index: number) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 font-medium leading-relaxed">{outcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
            <div className="mt-20 pt-12 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <Home className="w-4 h-4 mr-2" />
                      Home
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      All Projects
                    </Button>
                  </Link>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 w-full sm:w-auto"
                  onClick={handleDiscussProject}
                >
                  Discuss This Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
