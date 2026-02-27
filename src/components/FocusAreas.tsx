import { Brain, Building, Network, Smartphone, Target } from "lucide-react";

export const FocusAreas = () => {
  const focusAreas = [
    {
      icon: Brain,
      title: "AI & Work",
      description: "Building tech that augments, not replaces.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Building,
      title: "Rethinking Public Services",
      description: "Designing inclusive, efficient systems.",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Network,
      title: "Decentralized Design",
      description: "Empowering community-led innovation.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Smartphone,
      title: "Tech for Everyday Life",
      description: "Making technology more usable and humane.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Purpose & Positioning",
      description: "Discovering self, creating impact.",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="py-28 bg-black text-white rounded-3xl mx-4 md:mx-8 my-4">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-4">
            May 9, 2026
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Focus Areas
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            These are the sparks that power real-world impact. Choose your spark and join the
            movement.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <area.icon className="h-12 w-12 text-yellow-400 mb-6" />
                <h3 className="text-xl font-bold mb-3 leading-snug">{area.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
