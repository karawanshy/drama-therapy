import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import heroImage from "@/assets/about-therapy-new.jpg";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader
        title={t.title}
        subtitle={t.subtitle}
        imageSrc={heroImage}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none fade-in-up">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                {t.bio1}
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                {t.bio2}
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                {t.bio3}
              </p>

              <div className="bg-secondary/30 p-8 rounded-lg my-8">
                <p className="text-xl font-lora italic text-primary text-center leading-relaxed">
                  {t.philosophy}
                </p>
              </div>

              <p className="text-foreground leading-relaxed">
                {t.bio4}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="shadow-medium">
              <CardContent className="p-6 text-center">
                <h3 className="font-lora text-xl font-semibold mb-2 text-primary">{t.education}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {t.educationDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-6 text-center">
                <h3 className="font-lora text-xl font-semibold mb-2 text-primary">{t.experience}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {t.experienceDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
