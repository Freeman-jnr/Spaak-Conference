
import { Brain, Building, Network, Smartphone, Target } from "lucide-react";

export const FocusAreas = () => {
  const focusAreas = [
    {
      icon: Brain,
      title: "AI & Work",
      description: "Building tech that augments, not replaces.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Building,
      title: "Rethinking Public Services",
      description: "Designing inclusive, efficient systems.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Network,
      title: "Decentralized Design",
      description: "Empowering community-led innovation.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Tech for Everyday Life",
      description: "Making technology more usable and humane.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Purpose & Positioning",
      description: "Discovering self, creating impact.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Spaak 2026 Focus Areas
          </h2>
          <p className="text-lg text-yellow-400 font-semibold">
            These are the sparks that power real-world impact. Choose your spark and join the movement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <area.icon className="h-16 w-16 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-300 leading-relaxed">{area.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
