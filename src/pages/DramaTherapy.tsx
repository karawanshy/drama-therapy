import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Theater, Heart, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import conceptImage from "@/assets/drama-therapy-concept.jpg";

const DramaTherapy = () => {
  const { language } = useLanguage();
  const t = translations[language].dramatherapy;

  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader
        title={t.title}
        imageSrc={conceptImage}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-lora text-primary text-center italic leading-relaxed">
              {t.quote}
            </p>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                {t.intro1}
              </p>

              <p className="text-lg leading-relaxed">
                {t.intro2}
              </p>

              <p className="text-lg leading-relaxed">
                {t.intro3}
              </p>

              <p className="text-lg leading-relaxed">
                {t.intro4}
              </p>

              <p className="text-lg leading-relaxed">
                {t.intro5}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Theater className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-lora font-semibold mb-3">{t.creativeExpression}</h3>
                  <p className="text-muted-foreground">
                    {t.creativeExpressionDesc}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-lora font-semibold mb-3">{t.emotionalHealing}</h3>
                  <p className="text-muted-foreground">
                    {t.emotionalHealingDesc}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-lora font-semibold mb-3">{t.relationshipBuilding}</h3>
                  <p className="text-muted-foreground">
                    {t.relationshipBuildingDesc}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-lora font-semibold mb-3">{t.personalGrowth}</h3>
                  <p className="text-muted-foreground">
                    {t.personalGrowthDesc}
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

export default DramaTherapy;
