// React
import { useState } from "react";

// React Router
import { Link, useLocation } from "react-router-dom";

// Icons
import { Menu, X } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";

// Context & Translations
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// Utils
import { preloadRouteImages } from "@/utils/imagePreloader";

/**
 * Navigation Component
 * Responsive navigation with mobile menu and language support
 */
const Navigation = () => {
  // Hooks
  const location = useLocation();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  // Translations
  const t = translations[language].nav;

  // Navigation Links Configuration
  const navLinks = [
    { name: t.home, path: "/" },
    { name: t.about, path: "/about" },
    { name: t.dramatherapy, path: "/drama-therapy" },
    { name: t.services, path: "/services" },
    { name: t.contact, path: "/contact" },
  ];

  /**
   * Check if current route matches given path
   */
  const isActive = (path: string) => location.pathname === path;

  /**
   * Preload images when hovering over navigation links
   */
  const handleLinkHover = (path: string) => {
    preloadRouteImages(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 transition-smooth hover:opacity-80">
            <h1 className="text-xl md:text-2xl font-lora font-bold text-primary">
              {language === 'en' ? 'Dr. Iman Kheil' : 'د. ايمان كحيل'}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => handleLinkHover(link.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  onTouchStart={() => handleLinkHover(link.path)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
