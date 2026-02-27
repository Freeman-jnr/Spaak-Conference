import { Button } from "@/components/ui/button";
import { Mic, Star, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const Speakers = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-28 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-4">
            📅 May 9, 2026
          </p>
          <h2 className={`text-4xl md:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Speakers Spotlight
          </h2>
          <p className={`text-2xl md:text-3xl font-semibold mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            Visionaries Wanted. Disruptors Welcomed.
          </p>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            At The Spaak Conference, we don't just speak — we <strong>Spaak</strong>. We bring
            together impact owners, entrepreneurs, industry leaders, and solution-builders from
            diverse sectors. Expect thought-provoking talks, controversial insights, and practical
            blueprints from speakers who challenge the status quo.
          </p>
        </div>

        {/* Placeholder speaker cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`rounded-2xl p-10 text-center transition-colors duration-300 ${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:bg-yellow-50'}`}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mic className="h-10 w-10 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Speaker {index}</h3>
              <p className={`mb-3 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Industry Innovator</p>
              <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Coming Soon…</p>
            </div>
          ))}
        </div>

        {/* Become a Speaker CTA */}
        <div className="text-center mb-24">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="https://form.jotform.com/decisionspaak/speakersapplication"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mic className="mr-2 h-5 w-5" />
              Become a Speaker
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Young Spaakers */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl px-12 py-16 text-center text-black">
          <Star className="h-14 w-14 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold mb-5">Young Spaakers</h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            We're spotlighting youth under 25 solving real-world problems. Got a bold idea?
            Submit to be featured at the April 4, 2026 conference!
          </p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white font-bold px-10 py-4 rounded-full"
            asChild
          >
            <a
              href="https://form.jotform.com/decisionspaak/under25speakers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit Your Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
