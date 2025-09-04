import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Handshake } from "lucide-react";
export const Hero = () => {
  return <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img src="/lovable-uploads/28644522-a1ec-4262-9dc3-3e5078155c0e.png" alt="Reinventing Human Possibility" className="w-full h-screen object-cover object-center" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto text-center text-white flex flex-col items-center justify-center min-h-screen px-0">
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
          Reinventing
          <span className="block text-yellow-400 mt-2 drop-shadow-lg">Human Possibility</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          The Spaak Conference 2026 is where bold ideas meet radical execution. 
          Join a community of innovators, builders, and thinkers creating human-centered 
          solutions that shift culture and reshape the future.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-16 max-w-4xl mx-auto">
          <Button size="lg" className="bg-white hover:bg-yellow-400 text-black font-bold px-10 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex-1 sm:flex-none min-w-[200px]">
            <Calendar className="mr-2 h-5 w-5 text-black" />
            Register Now
            <ArrowRight className="ml-2 h-5 w-5 text-black" />
          </Button>
          
          <Button size="lg" className="bg-white hover:bg-yellow-400 text-black font-bold px-10 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex-1 sm:flex-none min-w-[200px]" asChild>
            <a href="https://form.jotform.com/252393161626558" target="_blank" rel="noopener noreferrer">
              <Users className="mr-2 h-5 w-5 text-black" />
              Become a Speaker
            </a>
          </Button>
          
          <Button size="lg" className="bg-white hover:bg-yellow-400 text-black font-bold px-10 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex-1 sm:flex-none min-w-[200px]" asChild>
            <a href="https://form.jotform.com/Spaak/partnership" target="_blank" rel="noopener noreferrer">
              <Handshake className="mr-2 h-5 w-5 text-black" />
              Partner With Us
            </a>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};