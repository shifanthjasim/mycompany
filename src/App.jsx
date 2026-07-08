import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LegalPage from "./components/LegalPage";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "privacy") {
      return <LegalPage title="Privacy Policy" type="privacy" onNavigate={setPage} />;
    }

    if (page === "terms") {
      return <LegalPage title="Terms & Conditions" type="terms" onNavigate={setPage} />;
    }

    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Packages />
        <Contact />
        <Footer onNavigate={setPage} />
      </div>
    );
  };

  return renderPage();
}

export default App;