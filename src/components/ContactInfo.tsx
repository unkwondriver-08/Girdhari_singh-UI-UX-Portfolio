
import { Mail, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

interface ContactInfoProps {
  isVisible: boolean;
}

const ContactInfo = ({ isVisible }: ContactInfoProps) => {
  return (
    <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
      <div className="space-y-6">
        <p className="text-white/90 text-xl leading-relaxed">
          Ready to bring your ideas to life? Whether it's a new project, 
          collaboration opportunity, or just a friendly chat about design, 
          I'd love to hear from you.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Email</h4>
              <p className="text-white/80">girdharik66@gmail.com</p>
              <p className="text-white/60 text-sm">123id0900@nitrkl.ac.in</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Location</h4>
              <p className="text-white/80">Available for remote work</p>
              <p className="text-white/60 text-sm">Worldwide collaboration</p>
            </div>
          </div>
        </div>
        
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactInfo;
