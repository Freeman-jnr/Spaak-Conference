
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FocusAreas } from "@/components/FocusAreas";
import { VideoTeaser } from "@/components/VideoTeaser";
import { Speakers } from "@/components/Speakers";
import { Partnership } from "@/components/Partnership";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <Navigation />
      <Hero />
      <About />
      <VideoTeaser />
      <FocusAreas />
      <Speakers />
      <Partnership />
      <Footer />
    </div>
  );
};

export default Index;
