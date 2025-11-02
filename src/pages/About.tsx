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
                {language === 'en' ? (
                  <>
                    I am a drama therapist specializing in the use of expressive and creative arts to support emotional healing and personal growth. I hold a <strong>Ph.D. in Expressive Therapies</strong> from <strong>Lesley University</strong> in Cambridge, MA, a <strong>Master of Arts in Creative Arts Therapies</strong> with a concentration in <strong>Drama therapy</strong>, and a <strong>Bachelor of Arts in Psychology and Education</strong>.
                  </>
                ) : (
                  <>
                    أنا معالجة بالدراما متخصصة في استخدام الفنون التعبيرية والإبداعية لدعم الشفاء العاطفي والنمو الشخصي. أحمل <strong>دكتوراه في العلاج التعبيري</strong> من جامعة <strong>Lesley</strong> في كامبريدج، ماساتشوستس، ودرجة الماجستير في <strong>العلاج بالفنون الإبداعية</strong> بتخصص <strong>العلاج بالدراما</strong>، ودرجة البكالوريوس في <strong>علم النفس والتربية</strong>.
                  </>
                )}
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                {language === 'en' ? (
                  <>
                    Over the years, I have worked extensively with children, youth, and adults in both individual and group settings. I currently provide therapy sessions at a community center in <strong>Malden, MA</strong>. My previous clinical work includes serving as a therapist with <strong>Trauma and Family Integration (TFI)</strong> in <strong>Lowell, MA</strong>, where I provided therapy for young clients facing behavioral and mental health challenges.
                  </>
                ) : (
                  <>
                    على مدار السنوات، عملت بشكل موسّع مع الأطفال، والمراهقين، والبالغين في جلسات فردية وجماعية. أقدّم حالياً جلسات علاجية في مركز مجتمعي في <strong>مالدن، ماساتشوستس</strong>. أما خبرتي السابقة فتشمل عملي كمعالجة في <strong>مركز الدمج الأسري والصدمات (TFI)</strong> في <strong>لويل، ماساتشوستس</strong>، حيث قدمت علاجاً لعملاء شباب يواجهون تحديات سلوكية ونفسية.
                  </>
                )}
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                {language === 'en' ? (
                  <>
                    Prior to relocating to the United States, I organized and facilitated community-based therapy workshops, and conducted individual and group therapy sessions across <strong>Palestine</strong>. In <strong>2018</strong>, I also served as a Drama Therapy facilitator at the <strong>Creative Movement Therapy Association of India (CMTAI)</strong> conference.
                  </>
                ) : (
                  <>
                    وقبل انتقالي إلى الولايات المتحدة، نظّمت وسهّلت ورش علاج مجتمعية، وأدرت جلسات علاج فردية وجماعية في <strong>فلسطين</strong>. وفي عام <strong>2018</strong>، شاركت كميسّرة للعلاج بالدراما في مؤتمر <strong>جمعية العلاج بالحركة الإبداعية في الهند (CMTAI)</strong>.
                  </>
                )}
              </p>

              <div className="bg-secondary/30 p-8 rounded-lg my-8">
                <p className="text-xl font-lora italic text-primary text-center leading-relaxed">
                  {t.philosophy}
                </p>
              </div>

              <p className="text-foreground leading-relaxed">
                {language === 'en' ? (
                  <>
                    I am passionate about promoting resilience and well-being through creative expression and am deeply committed to empowering individuals to overcome barriers and thrive.
                  </>
                ) : (
                  <>
                    أنا شغوفة بتعزيز المرونة والرفاه النفسي من خلال التعبير الإبداعي، ومكرّسة لتمكين الأفراد من تجاوز العوائق وتحقيق الازدهار.
                  </>
                )}
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
