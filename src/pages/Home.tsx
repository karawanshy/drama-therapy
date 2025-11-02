import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Sparkles, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import heroImage from "@/assets/hero-drama-therapy.jpg";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-lora font-bold mb-6 animate-fade-in-up text-primary">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              {t.subtitle}
            </p>
            <div className="flex justify-center animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
              <Button asChild variant="glass" size="lg" className="text-lg hover:scale-105 border-[3px] shadow-[0_0_20px_rgba(66,99,130,0.3)] hover:shadow-[0_0_30px_rgba(66,99,130,0.5)]">
                <Link to="/drama-therapy">
                  {t.learnMore}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* When Words Aren't Enough Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-lora font-bold mb-6 text-primary">
              {t.whenWordsArentEnough}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t.whenWordsDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">{t.creativeExpression}</h3>
                <p className="text-muted-foreground">
                  {t.creativeExpressionDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">{t.emotionalHealing}</h3>
                <p className="text-muted-foreground">
                  {t.emotionalHealingDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">{t.personalGrowth}</h3>
                <p className="text-muted-foreground">
                  {t.personalGrowthDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-lora italic text-primary mb-3 animate-fade-in">
              {t.quote}
            </blockquote>
            <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
              {language === 'en' ? '— Dr. Iman Kheil' : '— د. ايمان كحيل'}
            </p>
          </div>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-lora font-bold mb-4 text-primary">
              {t.howCanIHelp}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.howCanIHelpDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale flex flex-col h-full">
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">{t.individualSessions}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {t.individualSessionsDesc}
                </p>
                <Button asChild variant="link" className={`p-0 h-auto mt-auto ${language === 'ar' ? 'self-end' : 'self-start'}`}>
                  <Link to="/services">
                    {t.viewDetails} <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale flex flex-col h-full">
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">{t.groupSessions}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {t.groupSessionsDesc}
                </p>
                <Button asChild variant="link" className={`p-0 h-auto mt-auto ${language === 'ar' ? 'self-end' : 'self-start'}`}>
                  <Link to="/services">
                    {t.viewDetails} <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white fade-in-up">
            <h2 className="text-4xl md:text-5xl font-lora font-bold mb-6">
              {t.readyToBegin}
            </h2>
            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              {t.readyToBeginDesc}
            </p>
            <Button
              asChild
              variant="glass-white"
              size="lg"
              className="font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Link to="/contact">
                {t.scheduleSession} <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} size={22} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
