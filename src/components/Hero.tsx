
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Handshake } from "lucide-react";

export const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img src="/lovable-uploads/1db229cc-6d39-4507-82e8-0fdc808e3837.png" alt="The Spaak Conference" className="h-32 md:h-48 animate-fade-in" />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
          Reinventing
          <span className="block text-yellow-400 mt-2">Human Possibility</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          The Spaak Conference 2025 is where bold ideas meet radical execution. 
          Join a tribe of innovators, builders, and thinkers creating human-centered 
          solutions that shift culture and reshape the future.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-white hover:bg-yellow-400 text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl">
            <Calendar className="mr-2 h-5 w-5 text-black" />
            Register Now
            <ArrowRight className="ml-2 h-5 w-5 text-black" />
          </Button>
          
          <Button size="lg" className="bg-white hover:bg-yellow-400 text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl">
            <Users className="mr-2 h-5 w-5 text-black" />
            Become a Speaker
          </Button>
          
          <Button size="lg" className="bg-white hover:bg-yellow-400 text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl">
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
