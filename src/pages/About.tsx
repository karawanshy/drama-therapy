// Layout Components
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

// Context & Translations
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// Assets
import heroImage from "@/assets/hero-drama-therapy.jpg";
import therapistImage from "@/assets/about-therapist.jpg";

/**
 * About Page Component
 * Professional background, education, and experience
 */
const About = () => {
  // Hooks & Translations
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
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-lg max-w-none fade-in-up">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                <div className="flex-1">
                  <p className="text-foreground leading-relaxed mb-6">
                    {t.bio1}
                  </p>

                  <p className="text-foreground leading-relaxed mb-6">
                    {t.bio2}
                  </p>

                  <p className="text-foreground leading-relaxed">
                    {t.bio3}
                  </p>
                </div>
                <div className="md:w-auto shrink-0">
                  <img 
                    src={therapistImage} 
                    alt="Therapist at work" 
                    className="rounded-xl w-full md:w-80 object-cover"
                  />
                </div>
              </div>

              <div className="bg-secondary/30 p-8 rounded-lg my-8">
                <p className="text-xl font-lora italic text-primary text-center leading-relaxed">
                  {t.philosophy}
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div>
                  <p className="text-foreground leading-relaxed mb-6">
                    {t.bio4}
                  </p>
                  <div className="mb-6">
                    <h3 className="font-lora text-2xl font-semibold mb-3 text-primary">{t.education}</h3>
                    <p className="text-foreground leading-relaxed whitespace-pre-line">
                      {t.educationDesc}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-lora text-2xl font-semibold mb-3 text-primary">{t.experience}</h3>
                    <p className="text-foreground leading-relaxed whitespace-pre-line">
                      {t.experienceDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
