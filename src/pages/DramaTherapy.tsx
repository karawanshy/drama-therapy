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
                {language === 'en' ? (
                  <>
                    When words alone are not enough, <strong>creativity</strong> opens new pathways for processing feelings and experiences in ways that support healing and growth.
                  </>
                ) : (
                  <>
                    عندما لا تكفي الكلمات وحدها، يفتح <strong>الإبداع</strong> أبواباً جديدة لمعالجة المشاعر والتجارب بطرق تدعم الشفاء والنمو.
                  </>
                )}
              </p>

              <p className="text-lg leading-relaxed">
                {language === 'en' ? (
                  <>
                    Drama therapy is a <strong>creative form of psychotherapy</strong> that uses theater techniques—such as <strong>role play, storytelling, improvisation, movement, and performance</strong>—as therapeutic tools. It is an <strong>active, experiential process</strong>. Instead of only talking about experiences in a traditional therapy setting, clients can explore feelings, relationships, and challenges through dramatic expression.
                  </>
                ) : (
                  <>
                    العلاج بالدراما هو <strong>شكل إبداعي من العلاج النفسي</strong> يستخدم تقنيات المسرح — مثل <strong>لعب الأدوار، وسرد القصص، والارتجال، والحركة، والأداء</strong> — كأدوات علاجية. وهو عملية <strong>نشِطة وتجريبية</strong>، حيث لا يقتصر الأمر على الحديث عن التجارب كما في العلاج التقليدي، بل يتم استكشاف المشاعر والعلاقات والتحديات من خلال التعبير الدرامي.
                  </>
                )}
              </p>

              <p className="text-lg leading-relaxed">
                {language === 'en' ? (
                  <>
                    The goal is not to create a polished performance, but rather to <strong>encourage self-expression, healing, and personal growth</strong>. Drama therapy is not only for addressing psychological challenges — it is also a powerful tool for personal development.
                  </>
                ) : (
                  <>
                    الهدف ليس إنتاج عرض متقن، بل <strong>تشجيع التعبير الذاتي، والشفاء، والنمو الشخصي</strong>. العلاج بالدراما لا يُستخدم فقط لعلاج الاضطرابات النفسية، بل هو أيضاً أداة قوية للتطوير الذاتي.
                  </>
                )}
              </p>

              <p className="text-lg leading-relaxed">
                {language === 'en' ? (
                  <>
                    Through <strong>role play, improvisation, and guided activities</strong>, clients can safely explore emotions, build coping strategies, and strengthen their sense of self.
                  </>
                ) : (
                  <>
                    من خلال <strong>لعب الأدوار والارتجال والأنشطة الموجهة</strong>، يمكن للعملاء استكشاف مشاعرهم بأمان، وبناء استراتيجيات للتأقلم، وتعزيز إحساسهم بالذات.
                  </>
                )}
              </p>

              <p className="text-lg leading-relaxed">
                {language === 'en' ? (
                  <>
                    By entering a fictional world, individuals are able to view problems and conflicts from <strong>different perspectives</strong>, creating a unique mirror for self-exploration and reflection that can be both therapeutic and transformative.
                  </>
                ) : (
                  <>
                    ومن خلال الدخول في عالم تخيّلي، يمكنهم النظر إلى مشكلاتهم وصراعاتهم من <strong>زوايا جديدة</strong>، مما يخلق مرآة فريدة لاكتشاف الذات والتأمل، تكون علاجية وتحويلية في آنٍ واحد.
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
