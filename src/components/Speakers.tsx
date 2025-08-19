
import { Button } from "@/components/ui/button";
import { Mic, Star, ArrowRight } from "lucide-react";

export const Speakers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Speakers Spotlight
          </h2>
          <p className="text-2xl text-gray-700 mb-4">
            Visionaries Wanted. Disruptors Welcomed.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At The Spaak Conference, we don't just speak, we <strong>Spaak</strong>. 
            This isn't your typical tech event. Like TEDx, we bring together impact owners, 
            entrepreneurs, industry leaders, and solution-builders from diverse sectors including 
            solar energy, carpentry, business innovation, healthcare, education, and beyond. 
            Expect thought-provoking talks, controversial insights, and practical blueprints 
            from speakers who have built massive solutions and challenge the status quo across industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Placeholder Speaker Cards */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-yellow-50 transition-colors duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mic className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Speaker {index}</h3>
              <p className="text-gray-600 mb-4">Industry Innovator</p>
              <p className="text-sm text-gray-500">Coming Soon...</p>
            </div>
          ))}
        </div>
        
        {/* Young Spaakers Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-12 text-center text-black mb-12">
          <Star className="h-16 w-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Young Spaakers</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            We're spotlighting youth under 25 solving real-world problems. 
            Got a bold idea? Submit to be featured!
          </p>
          <Button 
            className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full"
          >
            Submit Your Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://www.jotform.com/build/252186860837568?iak=eb2825ca7cd85328fc58545c28256581-57e0eb46c6ad5ad0" target="_blank" rel="noopener noreferrer">
              <Mic className="mr-2 h-5 w-5" />
              Become a Speaker
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
