
import { useEffect, useRef, useState } from "react";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader isVisible={isVisible} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo isVisible={isVisible} />
          <ContactForm isVisible={isVisible} />
        </div>
        
        {/* Footer */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/5d272b68-67d7-4aba-8697-2ad414a548c3.png" 
                alt="Girdhari Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-white/60">© 2024 Girdhari Singh GS - Crafting digital experiences with passion</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
