
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FocusAreas } from "@/components/FocusAreas";
import { Speakers } from "@/components/Speakers";
import { Partnership } from "@/components/Partnership";
import { OneShot } from "@/components/OneShot";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <FocusAreas />
      <Speakers />
      <Partnership />
      <OneShot />
      <Footer />
    </div>
  );
};

export default Index;
