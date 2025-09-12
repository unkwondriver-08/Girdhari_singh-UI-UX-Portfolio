
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Clock, Users, Target, Calendar } from "lucide-react";

const ERPSystem = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Cash Flow Background */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/cdc0c52b-f0da-48d4-9496-bfbee434a0c4.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 pt-20 pb-12">
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

            <div className="text-center space-y-8 py-20">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  ERP System & SaaS
                </h1>
                <p className="text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Enterprise Resource Planning Solution
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 text-white text-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" />
                  <span>Duration: 8 months</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span>Team: Solo Designer + Development Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5" />
                  <span>Role: UX/UI Designer & Product Strategist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5" />
                  <span>MAY 2025 - PRESENT</span>
                </div>
              </div>

              <div className="pt-12">
                <div className="inline-flex items-center bg-yellow-500/90 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/30">
                  <span className="font-bold text-white text-2xl">🚧 Case Study Coming Soon</span>
                </div>
                <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto">
                  This comprehensive case study is currently being developed. 
                  Stay tuned for detailed insights into our enterprise-level ERP solution design process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPSystem;
