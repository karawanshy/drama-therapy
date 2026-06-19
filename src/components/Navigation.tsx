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


/**
 * Navigation Component
 * Responsive navigation with mobile menu and language support
 */
const Navigation = () => {
  // Hooks
  const location = useLocation();
  const {
    language,
    setLanguage
  } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Translations
  const t = translations[language].nav;

  // Navigation Links Configuration
  const navLinks = [{
    name: t.home,
    path: "/"
  }, {
    name: t.about,
    path: "/about"
  }, {
    name: t.dramatherapy,
    path: "/drama-therapy"
  }, {
    name: t.services,
    path: "/services"
  }, {
    name: t.contact,
    path: "/contact"
  }];

  /**
   * Check if current route matches given path
   */
  const isActive = (path: string) => location.pathname === path;

  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-soft">
      <div className="container mx-auto px-4 bg-primary-foreground">
        <div className="flex items-center justify-between h-20 bg-primary-foreground">
          <Link to="/" className="flex items-center space-x-2 transition-smooth hover:opacity-80">
            <h1 className="text-xl md:text-2xl font-lora font-bold text-primary bg-primary-foreground">
              {language === 'en' ? 'Dr. Iman Kheil' : 'د. ايمان كحيل'}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${isActive(link.path) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}>
                {link.name}
              </Link>)}
            <div className="flex items-center gap-1 ms-2 ps-2 border-s border-border">
              <button onClick={() => setLanguage('en')} className={`text-sm px-3 py-2 rounded-lg transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'}`}>
                EN
              </button>
              <button onClick={() => setLanguage('ar')} className={`text-sm px-3 py-2 rounded-lg transition-colors ${language === 'ar' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'}`}>
                عربي
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${isActive(link.path) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}>
                  {link.name}
                </Link>)}
              <div className="flex gap-2 pt-2 border-t border-border">
                <button onClick={() => setLanguage('en')} className={`flex-1 text-sm px-3 py-2 rounded-lg transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'}`}>
                  English
                </button>
                <button onClick={() => setLanguage('ar')} className={`flex-1 text-sm px-3 py-2 rounded-lg transition-colors ${language === 'ar' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'}`}>
                  العربية
                </button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;