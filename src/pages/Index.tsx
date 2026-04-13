import HeroSection from "@/components/HeroSection";
import UpdateSection from "@/components/UpdateSection";
import AboutSection from "@/components/AboutSection";
import HelpSection from "@/components/HelpSection";
import InfoSection from "@/components/InfoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12">
    <HeroSection />
    <UpdateSection />
    <AboutSection />
    <HelpSection />
    <InfoSection />
    <FooterSection />
  </div>
);

export default Index;
