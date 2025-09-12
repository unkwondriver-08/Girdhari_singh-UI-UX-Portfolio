
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin duration-[20s]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">Available for new projects</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                Hey, I'm{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  Girdhari
                </span>
              </h1>
              
              <div className="text-2xl sm:text-3xl text-purple-300 font-light">
                <span className="typing-animation">UX/UI Designer & Creative Thinker</span>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
              Crafting digital experiences that connect people and transform ideas into 
              intuitive, beautiful, and meaningful solutions that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-white/5"
                onClick={() => window.open("/projects", "_self")}
              >
                Explore My Work
              </Button>
            </div>
          </div>
          
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <img
                  src="/lovable-uploads/fe225faa-0a7c-491a-8857-a14bee2009fd.png"
                  alt="Girdhari - UX/UI Designer"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>

      <style>{`
        .typing-animation {
          border-right: 2px solid #a855f7;
          animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #a855f7; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
