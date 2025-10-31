import { Globe } from "lucide-react";

const Footer = () => {

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
            <p className="text-sm text-muted-foreground">Coming soon</p>
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
