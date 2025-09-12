
import { Linkedin, Instagram, Facebook } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/girdharisingh/", 
      label: "LinkedIn", 
      color: "hover:text-blue-600" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/giridharik/", 
      label: "Instagram", 
      color: "hover:text-pink-600" 
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/profile.php?id=100011116054173", 
      label: "Facebook", 
      color: "hover:text-blue-700" 
    },
    { 
      icon: () => (
        <div className="w-6 h-6 flex items-center justify-center">
          <span className="text-white font-bold text-sm">Be</span>
        </div>
      ), 
      href: "https://www.behance.net/girdharisingh89", 
      label: "Behance", 
      color: "hover:text-blue-500" 
    },
  ];

  return (
    <div className="pt-6">
      <h4 className="text-white font-semibold mb-4">Follow Me</h4>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 ${social.color} border border-white/20`}
              aria-label={social.label}
            >
              <Icon className="w-6 h-6 text-white" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
