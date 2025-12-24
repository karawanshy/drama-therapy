// React
import { useState, useEffect } from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI Components
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layout Components
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import DramaTherapy from "./pages/DramaTherapy";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Utils
import { preloadAllImages } from "./utils/imagePreloader";

// Query Client Configuration
const queryClient = new QueryClient();

/**
 * Main App Component
 * Provides routing and global providers for the application
 */
const App = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    preloadAllImages().then(() => setImagesLoaded(true));
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast Notifications */}
      <Toaster />
      <Sonner />
      
      {/* Scroll to Top on Route Change */}
      <ScrollToTop />
      
      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/drama-therapy" element={<DramaTherapy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* 404 - Catch All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
