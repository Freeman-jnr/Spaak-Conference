
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Handshake } from "lucide-react";

export const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-to-br from-gray-600 via-gray-500 to-gray-600 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Logo in top-left corner */}
      <div className="absolute top-8 left-8 z-20">
        <img src="/lovable-uploads/e5cbdde7-56ba-4821-bc22-e52b6cf8a77b.png" alt="The Spaak Conference" className="h-20 md:h-24 filter brightness-110 contrast-125 animate-fade-in" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex items-center justify-center min-h-screen">
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
          Reinventing
          <span className="block text-yellow-400 mt-2">Human Possibility</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
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
            <a href="https://www.jotform.com/build/252186860837568?iak=eb2825ca7cd85328fc58545c28256581-57e0eb46c6ad5ad0" target="_blank" rel="noopener noreferrer">
              <Users className="mr-2 h-5 w-5 text-black" />
              Become a Speaker
            </a>
          </Button>
          
          <Button size="lg" className="bg-white hover:bg-yellow-400 text-black font-bold px-10 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex-1 sm:flex-none min-w-[200px]">
            <Handshake className="mr-2 h-5 w-5 text-black" />
            Partner With Us
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
