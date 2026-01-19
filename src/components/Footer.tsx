// Icons
import { Globe } from "lucide-react";

// Context
import { useLanguage } from "@/contexts/LanguageContext";

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
  return <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-lora font-bold text-lg mb-2 text-primary">
              {language === 'en' ? 'Dr. Iman Kheil' : 'د. ايمان كحيل'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Drama Therapist, Ph.D.' : 'معالجة بالدراما،'}
            </p>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Expressive Therapies' : 'في العلاج التعبيري'}
            </p>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Malden, MA' : 'مالدن، ماساتشوستس'}
            </p>
          </div>
          <div>
            <h3 className="font-lora font-bold text-lg mb-2 text-primary">
              {language === 'en' ? 'Contact' : 'التواصل'}
            </h3>
            <p className={`text-sm text-muted-foreground ${language === 'ar' ? 'text-right' : ''}`} dir="ltr">+1 617 545 5218</p>
            <p className="text-sm text-muted-foreground">Dr.imankheil@gmail.com</p>
          </div>
          <div>
            <h3 className="font-lora font-bold text-lg mb-2 text-primary flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'Translate' : 'ترجمة'}
            </h3>
            <div className="flex gap-2">
              <button onClick={() => setLanguage('en')} className={`text-sm px-3 py-1 rounded transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:bg-card/80'}`}>
                English
              </button>
              <button onClick={() => setLanguage('ar')} className={`text-sm px-3 py-1 rounded transition-colors ${language === 'ar' ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:bg-card/80'}`}>
                العربية
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dr. Iman Kheil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;