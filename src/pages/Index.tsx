
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProgressionSection from "@/components/ProgressionSection";
import FlexibilitySection from "@/components/FlexibilitySection";
import CommunityStats from "@/components/CommunityStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <ProgressionSection />
      <FlexibilitySection />
      <CommunityStats />
      <Footer />
    </div>
  );
};

export default Index;
