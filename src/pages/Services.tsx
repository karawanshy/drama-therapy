import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Users, CreditCard, DollarSign, ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-bg.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-lora font-bold mb-8 text-primary text-center animate-fade-in-up">
              Services
            </h1>

            <div className="mb-12 rounded-2xl overflow-hidden shadow-large animate-fade-in">
              <img 
                src={servicesImage} 
                alt="Drama Therapy Services" 
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-large hover:shadow-xl transition-smooth hover:-translate-y-1 animate-gentle-scale">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-lora">Individual Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    One-on-one drama therapy sessions tailored to your unique needs and goals. 
                    Experience personalized attention in a safe, confidential space where you can 
                    explore your emotions and work toward healing and personal growth.
                  </p>
                  <div className="bg-secondary/30 p-6 rounded-lg mb-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Session Duration</span>
                      <span className="font-semibold">60 minutes</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-muted-foreground">Rate</span>
                      <span className="text-3xl font-lora font-bold text-primary">$150</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Personalized therapeutic approach
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Safe and confidential environment
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Flexible scheduling options
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-large hover:shadow-xl transition-smooth hover:-translate-y-1 animate-gentle-scale [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-lora">Group Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Experience the transformative power of collective healing. Group drama therapy 
                    sessions offer a supportive community environment where participants can share 
                    experiences and grow together through creative expression.
                  </p>
                  <div className="bg-secondary/30 p-6 rounded-lg mb-6">
                    <p className="text-center text-muted-foreground mb-2">
                      Contact me for information about group therapy and group therapy rates.
                    </p>
                    <Button asChild className="w-full" variant="outline">
                      <Link to="/contact">
                        Inquire About Groups <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Supportive community environment
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Shared creative experiences
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Connection and collective growth
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-large animate-fade-in">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-3xl font-lora">Payment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 text-primary mr-2" />
                      Accepted Payment Methods
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Zelle
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Venmo
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Cash
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Check
                      </li>
                    </ul>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Insurance</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Please note that I do not accept insurance at this time. However, I can 
                      provide you with a receipt that you may be able to submit to your insurance 
                      company for potential reimbursement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center bg-gradient-hero text-primary-foreground p-12 rounded-2xl shadow-large">
              <h2 className="text-3xl font-lora font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Take the first step toward healing and personal growth. Contact me today 
                to schedule your session or learn more about my services.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg transition-smooth hover:scale-105">
                <Link to="/contact">
                  Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
