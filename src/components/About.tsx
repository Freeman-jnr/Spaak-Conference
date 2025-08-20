import { Lightbulb, Target, Globe, Zap } from "lucide-react";
export const About = () => {
  return <section className="bg-white py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            About The Conference
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The Spaak Conference is more than a gathering, it's a <strong>movement</strong> of 
            bold minds committed to redefining what's possible. We bring together impact owners, entrepreneurs, 
            industry leaders, and solution-builders from diverse fields.
          </p>
          <div className="bg-yellow-400 text-black p-6 rounded-2xl font-bold text-xl mb-12">
            Our Goal Is Simple: Empower People To Build Better Solutions For Humanity.
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With <strong>DecisionSpaak Technologies</strong> as the lead convener, 
              we are shaping a space that challenges outdated systems, redesigns 
              technology for human good, and sparks new ways of thinking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Starting from Nigeria and expanding globally, The Spaak Conference is on a 
              mission to ignite scalable impact through design, innovation, and purposeful dialogue.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
              <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900">Challenges Systems</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
              <Target className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900">Redesign Tech</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900">Sparks Innovation</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
              <Globe className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900">Global Impact</h3>
            </div>
          </div>
        </div>
      </div>
    </section>;
};