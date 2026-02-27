import { Lightbulb, Target, Globe, Zap } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-28 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-4">
            About The Conference
          </p>
          <h2 className={`text-4xl md:text-6xl font-bold leading-tight mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
            A Movement of Bold Minds
          </h2>
          <p className={`text-xl leading-relaxed mb-10 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            The Spaak Conference is more than a gathering — it's a{" "}
            <strong className={isDark ? 'text-white' : 'text-black'}>movement</strong> committed to redefining what's
            possible. We bring together impact owners, entrepreneurs, industry leaders, and
            solution-builders from diverse fields.
          </p>
          <div className="bg-yellow-400 text-black px-8 py-6 rounded-2xl font-bold text-xl md:text-2xl leading-snug mb-6">
            Our Goal Is Simple: Empower People To Build Better Solutions For Humanity.
          </div>
          <p className={`font-semibold text-sm uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            📅 May 9, 2026 — Save the Date
          </p>
        </div>

        {/* Two-column body */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              With <strong>DecisionSpaak Group</strong> as the lead convener, we are shaping a
              space that challenges outdated systems, redesigns technology for human good, and
              sparks new ways of thinking.
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Starting from Nigeria and expanding globally, The Spaak Conference is on a mission
              to ignite scalable impact through design, innovation, and purposeful dialogue.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Lightbulb, label: "Challenges Systems" },
              { icon: Target,    label: "Redesigns Tech" },
              { icon: Zap,       label: "Sparks Innovation" },
              { icon: Globe,     label: "Global Impact" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className={`flex flex-col items-center text-center p-8 rounded-2xl transition-colors duration-300 ${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:bg-yellow-50'}`}
              >
                <Icon className="h-10 w-10 text-yellow-400 mb-4" />
                <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
