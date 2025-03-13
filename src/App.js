import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";

// Import pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PracticePage from "./pages/PracticePage";
import ContactPage from "./pages/ContactPage"
// import PracticeAreasPage from "./pages/PracticeAreasPage"
// import TestimonialsPage from "./pages/TestimonialsPage"
import FaqPage from "./pages/Faq"
// import BlogPage from "./pages/BlogPage"
// import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
// import TermsOfServicePage from "./pages/TermsOfServicePage"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/practice-areas" element={<PracticePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* 
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} /> */}
          </Routes>
        </main>
        <Footer />
        <ChatButton />
      </div>
    </Router>
  );
}

export default App;
