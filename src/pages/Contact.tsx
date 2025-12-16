import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from '@emailjs/browser';
import { Send } from "lucide-react";

// Components
import Navigation from "@/components/Navigation";

import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Hooks & Utils
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// Assets
import contactImage from "@/assets/contact-curtains.jpg";

// EmailJS Configuration
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "v9Hs_AczBe-9bn21G",
  SERVICE_ID: "service_drama_therapy",
  TEMPLATE_ID: "template_n7oi463",
  RECIPIENT_EMAIL: "aabb36877@gmail.com",
} as const;

// Form Validation Schema
const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  // Hooks
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Translations
  const t = translations[language].contact;

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init({
      publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
    });
  }, []);

  // Form setup with validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  /**
   * Handles form submission and sends email via EmailJS
   */
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
      };
      
      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );
      
      // Show success message
      toast({
        title: language === 'en' ? "Message sent!" : "تم إرسال الرسالة!",
        description: language === 'en' 
          ? "Thank you for reaching out. I'll get back to you soon." 
          : "شكراً لتواصلك. سأرد عليك قريباً.",
      });
      
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Show error message
      toast({
        title: language === 'en' ? "Error" : "خطأ",
        description: language === 'en' 
          ? "Failed to send message. Please try again." 
          : "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Full page background image */}
      <img 
        src={contactImage} 
        alt="" 
        loading="eager"
        fetchPriority="high"
        className="fixed inset-0 z-0 w-full h-full object-cover"
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/90 via-background/85 to-background/95" />
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Title Section */}
        <header className="min-h-[40vh] flex items-center justify-center pt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-lora font-bold mb-6 animate-fade-in-up text-primary">
                {t.title}
              </h1>
            </div>
          </div>
        </header>
        
        {/* Form Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-large animate-gentle-scale max-w-2xl mx-auto bg-card/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-lora">{t.sendMessage}</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.name}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.namePlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.email}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t.emailPlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.message}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t.messagePlaceholder}
                              className="min-h-[150px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full transition-smooth hover:scale-105" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t.sending : t.contactMe}
                      <Send className={`${language === 'ar' ? 'mr-2 scale-x-[-1]' : 'ml-2'} h-4 w-4`} />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
