import { useEffect } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const Footer = () => {
  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'ar,es,fr,de,it,pt,ru,zh-CN,ja,ko,hi,fa,tr,pl,nl,sv',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-lora font-bold text-lg mb-2 text-primary">Dr. Iman Kheil</h3>
            <p className="text-sm text-muted-foreground">Drama Therapist, Ph.D.</p>
            <p className="text-sm text-muted-foreground">Expressive Arts Therapy</p>
            <p className="text-sm text-muted-foreground">Malden, MA</p>
          </div>
          <div>
            <h3 className="font-lora font-bold text-lg mb-2 text-primary">Contact</h3>
            <p className="text-sm text-muted-foreground">[Add number]</p>
            <p className="text-sm text-muted-foreground">[Email coming soon]</p>
          </div>
          <div>
            <h3 className="font-lora font-bold text-lg mb-2 text-primary flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Translate
            </h3>
            <div id="google_translate_element" className="mt-2"></div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dr. Iman Kheil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
