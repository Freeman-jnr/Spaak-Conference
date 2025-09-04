
import { Button } from "@/components/ui/button";
import { Building2, Radio, Laptop, Heart, ArrowRight } from "lucide-react";

export const Partnership = () => {
  const partnerCategories = [
    {
      icon: Building2,
      title: "Corporate",
      subtitle: "Banks, FMCGs, Telcos, Startups",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Radio,
      title: "Media",
      subtitle: "Creators, Videographers, PR Agencies",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Laptop,
      title: "Technology",
      subtitle: "Ticketing, SaaS, Developer Tools",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Individuals",
      subtitle: "Believers in better",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Partner With Us
          </h2>
          <p className="text-2xl text-gray-700 mb-6">
            Align your brand with purpose.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            The Spaak Conference is actively seeking partners who believe in the power of ideas and innovation. 
            Become part of a conference built on collaboration and execution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{category.subtitle}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-black hover:bg-gray-800 text-white font-bold px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://form.jotform.com/Spaak/partnership" target="_blank" rel="noopener noreferrer">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
