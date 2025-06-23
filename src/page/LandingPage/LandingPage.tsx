import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustedBrands from "./components/TrustedBrands";
import FeaturesOverview from "./components/FeaturesOverview";
import IntegratedSolutions from "./components/IntegratedSolutions";
// import SuccessStories from "./components/SuccessStories";
import Footer from "./components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <HeroSection />
        <TrustedBrands />
        <FeaturesOverview />
        <IntegratedSolutions />
        {/* <SuccessStories /> */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
