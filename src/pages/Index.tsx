
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CommunityStats from "@/components/CommunityStats";
import HowItWorks from "@/components/HowItWorks";
import ProgressionSection from "@/components/ProgressionSection";
import FlexibilitySection from "@/components/FlexibilitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CommunityStats />
      <HowItWorks />
      <ProgressionSection />
      <FlexibilitySection />
      <Footer />
    </div>
  );
};

export default Index;
