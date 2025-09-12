
interface ContactHeaderProps {
  isVisible: boolean;
}

const ContactHeader = ({ isVisible }: ContactHeaderProps) => {
  return (
    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <span className="text-white/90 text-sm font-medium">Get In Touch</span>
      </div>
      
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
        Let's Create
        <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Something Amazing
        </span>
      </h2>
    </div>
  );
};

export default ContactHeader;
