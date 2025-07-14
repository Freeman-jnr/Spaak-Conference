
import { Button } from "@/components/ui/button";
import { Rocket, Target, Users, Zap, ArrowRight } from "lucide-react";

export const OneShot = () => {
  const features = [
    {
      icon: Target,
      title: "People-first",
      description: "Solutions that prioritize human needs"
    },
    {
      icon: Zap,
      title: "Purpose-driven",
      description: "Ideas with meaningful impact"
    },
    {
      icon: Users,
      title: "Market-ready",
      description: "Viable products for real-world use"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-8">
            <Rocket className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            One Shot Innovation Program
          </h2>
          <p className="text-2xl text-yellow-400 font-bold mb-6">
            One Idea. One Shot. Real Impact.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            The One Shot Innovation Program by DecisionSpaak Technologies is launching 
            to nurture powerful ideas and transform them into world-changing solutions. 
            We equip innovators with mentorship, structure, and support to refine products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-gray-900 rounded-2xl hover:bg-gray-800 transition-colors duration-300"
            >
              <feature.icon className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Submit Your Idea
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
