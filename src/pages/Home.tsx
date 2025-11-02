import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Sparkles, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-drama-therapy.jpg";

const Home = () => {
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
              Drama Therapy, <span className="whitespace-nowrap">Dr. Iman Kheil</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Healing through creative expression and the transformative power of theater
            </p>
            <div className="flex justify-center animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
              <Button asChild variant="glass" size="lg" className="text-lg hover:scale-105 border-[3px] shadow-[0_0_20px_rgba(66,99,130,0.3)] hover:shadow-[0_0_30px_rgba(66,99,130,0.5)]">
                <Link to="/drama-therapy">
                  Learn More
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
              When Words Aren't Enough
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Drama therapy uses the healing power of creative expression to help you explore emotions, 
              build resilience, and discover new pathways to personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">Creative Expression</h3>
                <p className="text-muted-foreground">
                  Use theater techniques like role play, storytelling, and improvisation to explore your feelings safely.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">Emotional Healing</h3>
                <p className="text-muted-foreground">
                  Process experiences and emotions in ways that support genuine healing and personal transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">Personal Growth</h3>
                <p className="text-muted-foreground">
                  Strengthen self-awareness, deepen relationships, and build coping strategies for life's challenges.
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
              "If the possible is not working, then let's try the impossible."
            </blockquote>
            <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
              — Dr. Iman Kheil
            </p>
          </div>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-lora font-bold mb-4 text-primary">
              How Can I Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personalized therapy sessions tailored to your unique journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">Individual Sessions</h3>
                <p className="text-muted-foreground mb-4">
                  One-on-one sessions providing dedicated time to explore your personal journey through drama therapy.
                </p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link to="/services">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 animate-gentle-scale">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-lora font-semibold mb-3">Group Sessions</h3>
                <p className="text-muted-foreground mb-4">
                  Experience the power of shared healing and creative expression in a supportive group environment.
                </p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link to="/services">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              Take the first step towards healing and growth through creative expression.
            </p>
            <Button
              asChild
              variant="glass-white"
              size="lg"
              className="font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Link to="/contact">
                Schedule a Session <ArrowRight className="ml-2" size={22} />
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
