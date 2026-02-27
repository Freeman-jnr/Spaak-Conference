import { Button } from "@/components/ui/button";
import { Building2, Radio, Laptop, Heart, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const Partnership = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const partnerCategories = [
    {
      icon: Building2,
      title: "Corporate",
      subtitle: "Banks, FMCGs, Telcos, Startups",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Radio,
      title: "Media",
      subtitle: "Creators, Videographers, PR Agencies",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Laptop,
      title: "Technology",
      subtitle: "Ticketing, SaaS, Developer Tools",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Heart,
      title: "Individuals",
      subtitle: "Believers in better",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="partnership" className={`py-28 transition-colors duration-300 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-4">
            📅 May 9, 2026
          </p>
          <h2 className={`text-4xl md:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Partner With Us
          </h2>
          <p className={`text-2xl md:text-3xl font-semibold mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Align your brand with purpose.
          </p>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            The Spaak Conference is actively seeking partners who believe in the power of ideas
            and innovation. Become part of a conference built on collaboration and execution.
          </p>
        </div>

        {/* Partner category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-2xl p-10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${isDark ? 'bg-gray-900' : 'bg-white'}`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{category.title}</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{category.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className={`font-bold px-14 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 ${isDark ? 'bg-yellow-400 hover:bg-yellow-500 text-black' : 'bg-black hover:bg-gray-800 text-white'}`}
            asChild
          >
            <a
              href="https://form.jotform.com/decisionspaak/partnerwithus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
