import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users } from "lucide-react";
import servicesImage from "@/assets/services-header.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader
        title="Services"
        subtitle="Professional drama therapy sessions tailored to your journey"
        imageSrc={servicesImage}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="shadow-medium hover:shadow-large transition-smooth flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-lora">Individual Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow flex flex-col">
                <p className="text-muted-foreground leading-relaxed h-[6rem] flex items-start">
                  All individual sessions are scheduled for 60 minutes, providing dedicated one-on-one time to explore your personal journey through drama therapy.
                </p>
                
                <div className="bg-secondary/30 p-6 rounded-lg h-[7.5rem] flex flex-col justify-center">
                  <div className="text-3xl font-lora font-bold text-primary mb-1">$150</div>
                  <div className="text-sm text-muted-foreground">for 60 minutes</div>
                </div>

                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start">
                    <span>Personalized therapeutic approach</span>
                  </li>
                  <li className="flex items-start">
                    <span>Safe and confidential environment</span>
                  </li>
                  <li className="flex items-start">
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-lora">Group Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow flex flex-col">
                <p className="text-muted-foreground leading-relaxed h-[6rem] flex items-start">
                  Experience the power of shared healing and creative expression in a supportive group environment.
                </p>
                
                <div className="bg-secondary/30 p-6 rounded-lg h-[7.5rem] flex flex-col justify-center">
                  <p className="text-muted-foreground">
                    <a href="/contact" className="text-primary hover:underline font-semibold">Contact me</a> for information about group therapy and group therapy rates.
                  </p>
                </div>

                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start">
                    <span>Supportive community environment</span>
                  </li>
                  <li className="flex items-start">
                    <span>Shared creative experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span>Connection and collective growth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
