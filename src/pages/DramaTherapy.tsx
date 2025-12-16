// Icons
import { Theater, Heart, Users, Sparkles } from "lucide-react";

// UI Components
import { Card, CardContent } from "@/components/ui/card";

// Layout Components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Context & Translations
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// Assets
import conceptImage from "@/assets/drama-therapy-group.jpg";

/**
 * Drama Therapy Page Component
 * Explains drama therapy approach and benefits
 */
const DramaTherapy = () => {
  // Hooks & Translations
  const { language } = useLanguage();
  const t = translations[language].dramatherapy;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Custom Header with left-aligned title and lighter overlay */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <img 
          src={conceptImage} 
          alt="" 
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        
        <div className="container mx-auto px-4 z-10">
          <div className={`max-w-2xl ${language === 'ar' ? 'mr-0 ml-auto text-right' : 'ml-0 mr-auto text-left'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-lora font-bold mb-6 animate-fade-in-up text-primary">
              {t.title}
            </h1>
          </div>
        </div>
      </header>
      
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
                {language === 'en' ? (
                  <>
                    When words alone are not enough, creativity opens new pathways for processing feelings and experiences in ways that support healing and growth.
                  </>
                ) : (
                  <>
                    عندما لا تكفي الكلمات وحدها، يفتح الإبداع أبواباً جديدة لمعالجة المشاعر والتجارب بطرق تدعم الشفاء والنمو.
                  </>
                )}
              </p>

              <p className="text-lg leading-relaxed">
                {language === 'en' ? (
                  <>
                    Drama therapy is a creative form of psychotherapy that uses theater techniques—such as role play, storytelling, improvisation, movement, and performance—as therapeutic tools. It is an active, experiential process. Instead of only talking about experiences in a traditional therapy setting, clients can explore feelings, relationships, and challenges through dramatic expression.
                  </>
                ) : (
                  <>
                    العلاج بالدراما هو شكل إبداعي من العلاج النفسي يستخدم تقنيات المسرح — مثل لعب الأدوار، وسرد القصص، والارتجال، والحركة، والأداء — كأدوات علاجية. وهو عملية نشِطة وتجريبية، حيث لا يقتصر الأمر على الحديث عن التجارب كما في العلاج التقليدي، بل يتم استكشاف المشاعر والعلاقات والتحديات من خلال التعبير الدرامي.
                  </>
                )}
              </p>

              <p className="text-lg leading-relaxed">
                {t.intro3}
              </p>

              <p className="text-lg leading-relaxed">
                {t.intro4}
              </p>

              <p className="text-lg leading-relaxed">
                {language === 'en' ? (
                  <>
                    By entering a fictional world, individuals are able to view problems and conflicts from different perspectives, creating a unique mirror for self-exploration and reflection that can be both therapeutic and transformative.
                  </>
                ) : (
                  <>
                    ومن خلال الدخول في عالم تخيّلي، يمكنهم النظر إلى مشكلاتهم وصراعاتهم من زوايا جديدة، مما يخلق مرآة فريدة لاكتشاف الذات والتأمل، تكون علاجية وتحويلية في آنٍ واحد.
                  </>
                )}
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
