
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/#skills", label: "SKILLS" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/#contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/${sectionId}`;
      return;
    }
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Check if we're on a page with colored background
  const isOnProjectsPage = location.pathname === "/projects" || location.pathname.startsWith("/projects/");

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled
        ? "bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg" 
        : isOnProjectsPage
        ? "bg-gradient-to-r from-purple-600/90 via-purple-700/90 to-blue-600/90 backdrop-blur-sm"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 overflow-hidden border border-gray-100">
                <img 
                  src="/lovable-uploads/5d272b68-67d7-4aba-8697-2ad414a548c3.png" 
                  alt="Girdhari Logo" 
                  className="w-6 h-6 object-contain filter-none"
                />
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href.startsWith("/#") ? (
                  <button
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={cn(
                      "text-sm font-medium tracking-wider transition-all duration-300 relative group",
                      isScrolled
                        ? "text-gray-700 hover:text-purple-600" 
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "text-sm font-medium tracking-wider transition-all duration-300 relative group",
                      isScrolled
                        ? "text-gray-700 hover:text-purple-600" 
                        : "text-white/90 hover:text-white",
                      location.pathname === item.href && (isScrolled ? "text-purple-600" : "text-white")
                    )}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-300",
              isScrolled
                ? "text-gray-700 hover:bg-gray-100" 
                : "text-white hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href.startsWith("/#") ? (
                    <button
                      onClick={() => scrollToSection(item.href.substring(1))}
                      className="block w-full text-left text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block text-lg font-medium transition-colors duration-300",
                        "text-gray-700 hover:text-purple-600",
                        location.pathname === item.href && "text-purple-600"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
