import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Theater, Heart, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-drama-therapy.jpg";

const DramaTherapy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader
        title="What is Drama Therapy?"
        subtitle="Exploring healing through creative expression"
        imageSrc={heroImage}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-lora text-primary text-center italic leading-relaxed">
              "If the possible is not working, then let's try the impossible."
            </p>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                When words alone are not enough, creativity opens new pathways for processing 
                feelings and experiences in ways that support healing and growth.
              </p>

              <p className="text-lg leading-relaxed">
                Drama therapy is a creative form of psychotherapy that uses theater techniques—such 
                as role play, storytelling, improvisation, movement, and performance—as therapeutic 
                tools. It is an active, experiential process. Instead of only talking about experiences 
                in a traditional therapy setting, clients can explore feelings, relationships, and 
                challenges through dramatic expression.
              </p>

              <p className="text-lg leading-relaxed">
                The goal is not to create a polished performance, but rather to encourage self-expression, 
                healing, and personal growth. Drama therapy is not only for addressing psychological 
                challenges — it is also a powerful tool for personal development.
              </p>

              <div className="bg-secondary/30 p-8 rounded-lg my-8">
                <h3 className="text-2xl font-lora font-semibold mb-4 text-primary">
                  Benefits of Drama Therapy
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Deepen self-understanding and self-awareness
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Strengthen relationships and communication skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Build effective coping strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Explore emotions in a safe, supportive environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Gain new perspectives on personal challenges
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                Through role play, improvisation, and guided activities, clients can safely explore 
                emotions, build coping strategies, and strengthen their sense of self.
              </p>

              <p className="text-lg leading-relaxed">
                By entering a fictional world, individuals are able to view problems and conflicts from 
                different perspectives, creating a unique mirror for self-exploration and reflection that 
                can be both therapeutic and transformative.
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
                  <h3 className="text-xl font-lora font-semibold mb-3">Creative Expression</h3>
                  <p className="text-muted-foreground">
                    Use theater techniques like role play, storytelling, and improvisation 
                    to express feelings that words cannot capture.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-lora font-semibold mb-3">Emotional Healing</h3>
                  <p className="text-muted-foreground">
                    Process trauma, grief, and difficult emotions in a safe, 
                    supportive therapeutic environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-lora font-semibold mb-3">Relationship Building</h3>
                  <p className="text-muted-foreground">
                    Develop stronger communication skills and deepen connections 
                    with yourself and others.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-lora font-semibold mb-3">Personal Growth</h3>
                  <p className="text-muted-foreground">
                    Discover new perspectives, build resilience, and strengthen 
                    your sense of self and purpose.
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
