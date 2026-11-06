// Icons
import { Globe } from "lucide-react";

// Context
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// Language switcher options, labelled in their own language
const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'tr', label: 'Türkçe' },
] as const;

/**
 * Footer Component
 * Displays contact information and language switcher
 */
const Footer = () => {
  // Hooks
  const {
    language,
    setLanguage
  } = useLanguage();
  const t = translations[language].common;
  return <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-lora font-bold text-lg mb-2 text-primary">
              {t.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.role}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.degree}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.location}
            </p>
          </div>
          <div>
            <h3 className="font-lora font-bold text-lg mb-2 text-primary">
              {t.contact}
            </h3>
            <p className={`text-sm text-muted-foreground ${language === 'ar' ? 'text-right' : ''}`} dir="ltr">+1 617 545 5218</p>
            <p className="text-sm text-muted-foreground">Dr.imankheil@gmail.com</p>
          </div>
          <div>
            <h3 className="font-lora font-bold text-lg mb-2 text-primary flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {t.translate}
            </h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGE_OPTIONS.map(({ code, label }) => <button key={code} onClick={() => setLanguage(code)} className={`text-sm px-3 py-1 rounded transition-colors ${language === code ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:bg-card/80'}`}>
                  {label}
                </button>)}
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dr. Iman Kheil. {t.rights}
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;