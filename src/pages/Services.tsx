// Icons
import { User, Users } from "lucide-react";

// UI Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Layout Components
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

// Context & Translations
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// Assets
import servicesImage from "@/assets/drama-therapy-concept.jpg";

/**
 * Services Page Component
 * Displays individual and group therapy sessions with pricing
 */
const Services = () => {
  // Hooks & Translations
  const {
    language
  } = useLanguage();
  const t = translations[language].services;
  return <div className="min-h-screen">
      <Navigation />
      <PageHeader title={t.title} subtitle={t.subtitle} imageSrc={servicesImage} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="shadow-medium hover:shadow-large transition-smooth flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-lora">{t.individualSessions}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col flex-grow">
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {t.individualSessionsDesc}
                </p>
                
                <div className="bg-secondary/30 p-6 rounded-lg flex items-center justify-center h-28 mt-auto">
                  <div className="text-center">
                    <div className="text-lg font-lora font-bold text-primary mb-1">{t.price}</div>
                    <div className="text-sm text-muted-foreground">{t.priceDesc}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-lora">{t.groupSessions}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col flex-grow">
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {t.groupSessionsDesc}
                </p>
                
                <div className="bg-secondary/30 p-6 rounded-lg flex items-center justify-center h-28 mt-auto">
                  <p className="text-muted-foreground text-center">
                    <a href="/contact" className="text-primary hover:underline font-semibold">{t.contactMe}</a> {t.groupInfo}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-medium mt-8 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-lora">{t.paymentInfo}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.paymentDesc}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span dangerouslySetInnerHTML={{
                  __html: t.payment1.replace('Zelle', '<strong>Zelle</strong>').replace('Venmo', '<strong>Venmo</strong>')
                }} />
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span dangerouslySetInnerHTML={{
                  __html: t.payment2.replace('Cash', '<strong>Cash</strong>').replace('checks', '<strong>checks</strong>').replace('النقد', '<strong>النقد</strong>').replace('الشيكات', '<strong>الشيكات</strong>')
                }} />
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span dangerouslySetInnerHTML={{
                  __html: t.payment3.replace('not', '<strong>not</strong>').replace('لا', '<strong>لا</strong>')
                }} />
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>;
};
export default Services;