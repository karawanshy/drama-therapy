// React
import { createRoot } from "react-dom/client";

// React Router
import { BrowserRouter } from "react-router-dom";

// Context Providers
import { LanguageProvider } from "./contexts/LanguageContext";

// App & Styles
import App from "./App.tsx";
import "./index.css";

/**
 * Application Entry Point
 * Renders the root component with necessary providers
 */
createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>
);
