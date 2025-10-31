import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import heroImage from "@/assets/about-therapy.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About Me"
        subtitle="Drama Therapist, Ph.D. in Expressive Therapies"
        imageSrc={heroImage}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none fade-in-up">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                I am a drama therapist specializing in the use of expressive and creative arts to support emotional healing and personal growth. I hold a Ph.D. in Expressive Therapies from Lesley University in Cambridge, MA, a Master of Arts in Creative Arts Therapies with a concentration in Drama therapy, and a Bachelor of Arts in Psychology and Education.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                Over the years, I have worked extensively with children, youth, and adults in both individual and group settings. I currently provide therapy sessions at a community center in Malden, MA. My previous clinical work includes serving as a therapist with Trauma and Family Integration (TFI) in Lowell, MA, where I provided therapy for young clients facing behavioral and mental health challenges.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                Prior to relocating to the United States, I organized and facilitated community-based therapy workshops, and conducted individual and group therapy sessions across Palestine. In 2018, I also served as a Drama Therapy facilitator at the Creative Movement Therapy Association of India (CMTAI) conference.
              </p>

              <div className="bg-accent/10 p-6 rounded-xl mt-8 border-l-4 border-accent">
                <p className="text-foreground leading-relaxed italic">
                  My therapeutic philosophy is grounded in the belief that the arts offer a profound and authentic way to reach the human heart, mind, and soul. I am passionate about promoting resilience and well-being through creative expression and am deeply committed to empowering individuals to overcome barriers and thrive.
                </p>
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
